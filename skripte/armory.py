#!/usr/bin/env python3
"""Armory za naše likove: level, talenti, oprema i profesije u data/likovi.json.

Stanje: javni armoryji za WoW: Forever (aotc.gg/forever, armorywowforever.com) prije launcha
(4. 11. 2026.) još ne vraćaju likove. Skripta je zato napisana da bez podataka ne radi ništa:
ne mijenja datoteku i ne ruši workflow. Što treba namjestiti nakon launcha piše u skripte/README.md
i u TODO komentarima ispod.

Format data/likovi.json (web ga čita ako postoji, inače koristi data.js):
{
  "azurirano": "2026-11-05T10:00:00Z",
  "likovi": {
    "Arsen Deadic": {
      "level": 23, "specka": "Retribution", "talenti": [11, 5, 7],
      "oprema": [{"slot": "Head", "ime": "...", "kvaliteta": "rare", "ikona": "inv_helmet_36", "wowhead": 12640}],
      "profesije": [{"name": "Herbalism", "skill": 112}],
      "azurirano": "2026-11-05T10:00:00Z", "izvor": "https://..."
    }
  }
}
"""
import datetime
import json
import os
import re
import urllib.parse
import urllib.request

KORIJEN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KORIJEN, "data")
UA = "zabranjeno-pullanje-bot/1.0 (+https://github.com/denisdex/zabranjeno-pullanje)"

# TODO nakon launcha: provjeriti stvarne adrese profila lika i upisati ih ovdje.
# {regija}, {realm} i {ime} se popune iz data.js (polje "armory" i imena likova).
PREDLOSCI = [
    "https://www.aotc.gg/forever/character/{regija}/{realm}/{ime}",
    "https://armorywowforever.com/character/{regija}/{realm}/{ime}",
]
SLOTOVI = ["Head", "Neck", "Shoulder", "Back", "Chest", "Wrist", "Hands", "Waist", "Legs", "Feet",
           "Finger 1", "Finger 2", "Trinket 1", "Trinket 2", "Main Hand", "Off Hand", "Ranged"]


def postavke_iz_data_js():
    """Imena likova i armory postavke čitaju se iz data.js, da se ništa ne upisuje dvaput."""
    with open(os.path.join(KORIJEN, "data.js"), encoding="utf-8") as f:
        js = f.read()
    imena = re.findall(r'\blik:\s*"([^"]+)"', js)
    regija = re.search(r'armory:\s*\{[^}]*regija:\s*"([^"]*)"', js)
    realm = re.search(r'armory:\s*\{[^}]*realm:\s*"([^"]*)"', js)
    return imena, (regija.group(1) if regija else "eu"), (realm.group(1) if realm else "")


def dohvati(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "replace")


def parsiraj(stranica, ime):
    """Iz HTML-a profila izvuče podatke lika. Vraća None ako nije siguran da je to naš lik.

    TODO nakon launcha: kad stranice prorade, otvoriti profil jednog lika, pogledati
    gdje su level, talenti, oprema i profesije (često u <script id="__NEXT_DATA__"> ili JSON-LD)
    i ovdje dopisati točne putanje. Dok to nije napravljeno, funkcija ne vraća ništa.
    """
    m = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', stranica, re.S)
    if not m:
        return None
    try:
        podaci = json.loads(m.group(1))
    except ValueError:
        return None

    # Opća potraga: prvi objekt koji ima ime našeg lika i level 1–60.
    def trazi(o):
        if isinstance(o, dict):
            if str(o.get("name", "")).lower() == ime.lower() and isinstance(o.get("level"), int) and 1 <= o["level"] <= 60:
                return o
            for v in o.values():
                r = trazi(v)
                if r:
                    return r
        elif isinstance(o, list):
            for v in o:
                r = trazi(v)
                if r:
                    return r
        return None

    lik = trazi(podaci)
    if not lik:
        return None
    return {"level": lik["level"]}  # TODO: talenti, oprema, profesije


def dohvati_lika(ime, regija, realm):
    if not realm:
        return None
    for tpl in PREDLOSCI:
        url = tpl.format(regija=regija, realm=urllib.parse.quote(realm.lower()), ime=urllib.parse.quote(ime.lower()))
        try:
            rez = parsiraj(dohvati(url), ime)
        except Exception as e:
            print("  %s: %s nedostupno (%s)" % (ime, url, e))
            continue
        if rez:
            rez["izvor"] = url
            return rez
    return None


def main():
    imena, regija, realm = postavke_iz_data_js()
    if not realm:
        print("  realm još nije upisan u data.js (armory.realm), preskačem; vidi skripte/README.md")
        return False
    sada = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    put = os.path.join(DATA, "likovi.json")
    try:
        with open(put, encoding="utf-8") as f:
            doc = json.load(f)
    except Exception:
        doc = {"azurirano": None, "likovi": {}}
    promjena = False
    for ime in imena:
        rez = dohvati_lika(ime, regija, realm)
        if not rez:
            continue
        staro = {k: v for k, v in doc["likovi"].get(ime, {}).items() if k != "azurirano"}
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
