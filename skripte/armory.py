#!/usr/bin/env python3
"""Armory za naše likove iz službenog Blizzard API-ja (WoW: Forever) u data/likovi.json.

Ključevi dolaze iz okoline: BLIZZARD_CLIENT_ID i BLIZZARD_CLIENT_SECRET (na GitHubu su u
Settings → Secrets → Actions). Bez njih skripta ne radi ništa: ne mijenja datoteku i ne ruši workflow.

Namespace `profile-forever-eu` nije službeno dokumentiran (radi od 5. 11. 2026.). Lik se traži po
slugu ime-prezime, bez realma, npr. /profile/wow/character/arsen-deadic.

Format data/likovi.json (web ga čita ako postoji, inače koristi data.js):
{
  "azurirano": "2026-11-06T10:00:00Z",
  "likovi": {
    "Arsen Deadic": {
      "level": 16, "xp": 640, "guild": "Kafana na Balkanu", "ilvl": 7, "zadnjiLogin": "2026-11-05T21:15:08Z",
      "specka": "Holy", "talenti": [5, 0, 2],
      "talentiPopis": [{"ime": "Divine Strength", "rang": 5, "stablo": "Holy", "opis": "..."}],
      "oprema": [{"slot": "Chest", "ime": "...", "kvaliteta": "uncommon", "ikona": "https://render.worldofwarcraft.com/forever-eu/icons/56/132719.jpg", "wowhead": 3283, "ilvl": 18, "enchant": "..."}],
      "profesije": [{"name": "Mining", "skill": 14, "max": 75, "vrsta": "primarna"}],
      "statovi": {"hp": 421, "resurs": 440, "resursIme": "Mana", "str": 52, ...},
      "reputacije": [{"ime": "Orgrimmar", "status": "Friendly", "vrijednost": 1200, "max": 6000}],
      "slika": "https://render.worldofwarcraft.com/forever-eu/character/...-main-raw.png",
      "azurirano": "2026-11-06T10:00:00Z", "izvor": "Blizzard API"
    }
  }
}
"""
import base64
import datetime
import json
import os
import re
import urllib.parse
import urllib.request

KORIJEN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KORIJEN, "data")
UA = "zabranjeno-pullanje-bot/2.0 (+https://github.com/denisdex/zabranjeno-pullanje)"
API = "https://{regija}.api.blizzard.com"
NS = "profile-forever-{regija}"

# Blizzardov slot → naziv slota na webu (paper doll u index.html); košulja i tabard se ne prikazuju
SLOTOVI = {
    "HEAD": "Head", "NECK": "Neck", "SHOULDER": "Shoulder", "BACK": "Back", "CHEST": "Chest", "WRIST": "Wrist",
    "HANDS": "Hands", "WAIST": "Waist", "LEGS": "Legs", "FEET": "Feet", "FINGER_1": "Finger 1", "FINGER_2": "Finger 2",
    "TRINKET_1": "Trinket 1", "TRINKET_2": "Trinket 2", "MAIN_HAND": "Main Hand", "OFF_HAND": "Off Hand", "RANGED": "Ranged",
}
# redoslijed stabala mora biti isti kao STABLA u index.html
STABLA = {
    "Warrior": ["Arms", "Fury", "Protection"], "Shaman": ["Elemental", "Enhancement", "Restoration"],
    "Mage": ["Arcane", "Fire", "Frost"], "Rogue": ["Assassination", "Combat", "Subtlety"],
    "Paladin": ["Holy", "Protection", "Retribution"], "Druid": ["Balance", "Feral Combat", "Restoration"],
    "Priest": ["Discipline", "Holy", "Shadow"], "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
    "Warlock": ["Affliction", "Demonology", "Destruction"],
}


def postavke_iz_data_js():
    """Imena likova i regija čitaju se iz data.js, da se ništa ne upisuje dvaput."""
    with open(os.path.join(KORIJEN, "data.js"), encoding="utf-8") as f:
        js = f.read()
    imena = re.findall(r'\blik:\s*"([^"]+)"', js)
    regija = re.search(r'armory:\s*\{[^}]*regija:\s*"([^"]*)"', js)
    return imena, (regija.group(1) if regija and regija.group(1) else "eu")


def token(cid, tajna):
    auth = base64.b64encode(("%s:%s" % (cid, tajna)).encode()).decode()
    req = urllib.request.Request("https://oauth.battle.net/token", data=b"grant_type=client_credentials",
                                 headers={"Authorization": "Basic " + auth, "User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)["access_token"]


class Klijent:
    def __init__(self, tok, regija):
        self.tok, self.regija = tok, regija
        self.ikone = {}

    def get(self, put, ns=None):
        url = API.format(regija=self.regija) + put
        url += ("&" if "?" in url else "?") + urllib.parse.urlencode({"namespace": ns or NS.format(regija=self.regija), "locale": "en_GB"})
        req = urllib.request.Request(url, headers={"Authorization": "Bearer " + self.tok, "User-Agent": UA})
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.load(r)

    def ikona(self, media_href):
        """Puna adresa ikone predmeta s Blizzardova rendera (Forever ikone imaju brojčana imena, pa zamimg ne pomaže)."""
        if not media_href or media_href in self.ikone:
            return self.ikone.get(media_href)
        ime = None
        try:
            put = urllib.parse.urlparse(media_href)
            ns = urllib.parse.parse_qs(put.query).get("namespace", [None])[0]
            m = self.get(put.path, ns)
            for a in m.get("assets", []):
                if a.get("key") == "icon":
                    ime = a["value"]
        except Exception:
            pass
        self.ikone[media_href] = ime
        return ime


def sigurno(fn):
    try:
        return fn()
    except Exception:
        return None


def iso(ms):
    if not ms:
        return None
    return datetime.datetime.fromtimestamp(ms / 1000, datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def dohvati_lika(k, ime):
    slug = re.sub(r"[^a-z0-9]+", "-", ime.lower()).strip("-")
    baza = "/profile/wow/character/" + urllib.parse.quote(slug)
    try:
        pr = k.get(baza)
    except Exception as e:
        print("  %s: profil nedostupan (%s)" % (ime, e))
        return None
    klasa = (pr.get("character_class") or {}).get("name", "")
    rez = {
        "level": pr.get("level"), "xp": pr.get("experience"),
        "guild": (pr.get("guild") or {}).get("name"),
        "ilvl": pr.get("equipped_item_level"),
        "zadnjiLogin": iso(pr.get("last_login_timestamp")),
        "izvor": "Blizzard API",
    }

    sp = sigurno(lambda: k.get(baza + "/specializations"))
    if sp:
        grupa = next((g for g in sp.get("specialization_groups", []) if g.get("is_active")), None) or (sp.get("specialization_groups") or [None])[0]
        stabla = STABLA.get(klasa, [])
        bodovi, popis = [0] * max(3, len(stabla)), []
        for s in (grupa or {}).get("specializations", []):
            n = s.get("specialization_name") or (s.get("specialization") or {}).get("name", "")
            if n in stabla:
                bodovi[stabla.index(n)] = s.get("spent_points", 0)
            for t in s.get("talents", []):
                popis.append({"ime": (t.get("talent") or {}).get("name") or ((t.get("spell_tooltip") or {}).get("spell") or {}).get("name"),
                              "rang": t.get("talent_rank"), "stablo": n,
                              "opis": (t.get("spell_tooltip") or {}).get("description", "")})
        rez["talenti"] = bodovi[:3]
        if any(bodovi):
            rez["specka"] = stabla[bodovi.index(max(bodovi))] if stabla else None
        rez["talentiPopis"] = popis

    eq = sigurno(lambda: k.get(baza + "/equipment"))
    if eq:
        oprema = []
        for it in eq.get("equipped_items", []):
            slot = SLOTOVI.get((it.get("slot") or {}).get("type"))
            if not slot:
                continue
            o = {"slot": slot, "ime": it.get("name"), "kvaliteta": (it.get("quality") or {}).get("type", "COMMON").lower(),
                 "wowhead": (it.get("item") or {}).get("id")}
            ik = k.ikona(((it.get("media") or {}).get("key") or {}).get("href"))
            if ik:
                o["ikona"] = ik
            lv = (it.get("level") or {}).get("value")
            if lv:
                o["ilvl"] = lv
            ench = [e.get("display_string") for e in it.get("enchantments", []) if e.get("display_string")]
            if ench:
                o["enchant"] = "; ".join(ench)
            oprema.append(o)
        rez["oprema"] = oprema

    pf = sigurno(lambda: k.get(baza + "/professions"))
    if pf:
        prof = []
        for vrsta, kljuc in (("primarna", "primaries"), ("sekundarna", "secondaries")):
            for p in pf.get(kljuc, []):
                tier = (p.get("tiers") or [{}])[0]
                prof.append({"name": (p.get("profession") or {}).get("name"), "skill": tier.get("skill_points", 0),
                             "max": tier.get("max_skill_points"), "vrsta": vrsta})
        rez["profesije"] = prof

    st = sigurno(lambda: k.get(baza + "/statistics"))
    if st:
        ef = lambda x: (st.get(x) or {}).get("effective")
        pc = lambda x: round((st.get(x) or {}).get("value", 0), 2)
        rez["statovi"] = {
            "hp": st.get("health"), "resurs": st.get("power"), "resursIme": (st.get("power_type") or {}).get("name"),
            "str": ef("strength"), "agi": ef("agility"), "sta": ef("stamina"), "int": ef("intellect"), "spi": ef("spirit"),
            "armor": ef("armor"), "ap": st.get("attack_power"), "spellPower": st.get("spell_power"),
            "crit": pc("melee_crit"), "spellCrit": pc("spell_crit"), "rangedCrit": pc("ranged_crit"),
            "dodge": pc("dodge"), "parry": pc("parry"), "block": pc("block"),
            "dps": round(st.get("main_hand_dps") or 0, 1),
        }

    rp = sigurno(lambda: k.get(baza + "/reputations"))
    if rp:
        reps = [{"ime": (r.get("faction") or {}).get("name"), "status": (r.get("standing") or {}).get("name"),
                 "vrijednost": (r.get("standing") or {}).get("value"), "max": (r.get("standing") or {}).get("max"),
                 "tier": (r.get("standing") or {}).get("tier", 0)} for r in rp.get("reputations", [])]
        reps.sort(key=lambda r: (-(r["tier"] or 0), -(r["vrijednost"] or 0)))
        rez["reputacije"] = [{k2: v for k2, v in r.items() if k2 != "tier"} for r in reps[:8]]

    md = sigurno(lambda: k.get(baza + "/character-media"))
    if md:
        a = {x.get("key"): x.get("value") for x in md.get("assets", [])}
        if a.get("main-raw"):
            rez["slika"] = a["main-raw"]
        if a.get("avatar"):
            rez["avatar"] = a["avatar"]
    return {x: v for x, v in rez.items() if v is not None}


def main():
    cid, tajna = os.environ.get("BLIZZARD_CLIENT_ID"), os.environ.get("BLIZZARD_CLIENT_SECRET")
    if not cid or not tajna:
        print("  nema BLIZZARD_CLIENT_ID/BLIZZARD_CLIENT_SECRET, armory preskačem")
        return False
    imena, regija = postavke_iz_data_js()
    k = Klijent(token(cid, tajna), regija)
    sada = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    put = os.path.join(DATA, "likovi.json")
    try:
        with open(put, encoding="utf-8") as f:
            doc = json.load(f)
    except Exception:
        doc = {"azurirano": None, "likovi": {}}
    promjena = False
    for ime in imena:
        rez = dohvati_lika(k, ime)
        if not rez:
            continue
        staro = {x: v for x, v in doc["likovi"].get(ime, {}).items() if x != "azurirano"}
        if staro != rez:
            rez["azurirano"] = sada
            doc["likovi"][ime] = rez
            promjena = True
            print("  %s: novo (level %s)" % (ime, rez.get("level")))
    if not promjena:
        print("  bez novih podataka, data/likovi.json ostaje isti")
        return False
    doc["azurirano"] = sada
    with open(put, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
        f.write("\n")
    return True


if __name__ == "__main__":
    main()
