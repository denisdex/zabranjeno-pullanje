#!/usr/bin/env python3
"""Osvježava data/*.json za web Zabranjeno pullanje.

Pokreće ga GitHub Actions svaki sat (.github/workflows/podaci.yml), a može se pokrenuti i lokalno:
    python3 skripte/osvjezi.py

Piše datoteku samo kad se sadržaj stvarno promijeni, pa workflow commita samo kad ima novosti.
Ako izvor ne radi, postojeća datoteka ostaje kakva jest i skripta završava bez greške.
Koristi samo standardnu Python biblioteku.
"""
import datetime
import email.utils
import html
import json
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import armory  # noqa: E402

KORIJEN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KORIJEN, "data")
UA = "zabranjeno-pullanje-bot/1.0 (+https://github.com/denisdex/zabranjeno-pullanje)"

# Službeni Blizzardovi postovi (Blue Tracker na forumu) i Wowhead vijesti za Classic/Forever
IZVORI = [
    {"ime": "Blizzard", "url": "https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.rss"},
    {"ime": "Wowhead", "url": "https://www.wowhead.com/news/rss/classic"},
]
# Vijest ulazi samo ako se odnosi na Forever (hotfixevi za Midnight i TBC ostaju vani)
FOREVER = re.compile(r"\bforever\b|classic\s*\+", re.I)
OZNAKE = [
    (r"hotfix", "Hotfix"),
    (r"development notes|dev notes|patch notes", "Patch notes"),
    (r"\bbeta\b", "Beta"),
    (r"launch|release date|starts", "Launch"),
    (r"podcast", "Podcast"),
    (r"interview|q&a|liveblog", "Intervju"),
    (r"guide", "Vodič"),
    (r"\bname", "Imena"),
    (r"\braid", "Raid"),
    (r"dungeon", "Dungeon"),
    (r"class|tuning", "Klase"),
    (r"profession", "Profesije"),
    (r"sweepstakes|giveaway|event", "Event"),
]
NAJVISE = 40


def dohvati(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml, application/xml, text/xml, */*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def cisti_tekst(s, duljina=240):
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = re.sub(r"\s+", " ", html.unescape(s)).strip()
    if len(s) <= duljina:
        return s
    rez = s[:duljina].rsplit(" ", 1)[0]
    return rez.rstrip(",.;:–-") + "…"


def oznake(naslov):
    return [ime for uzorak, ime in OZNAKE if re.search(uzorak, naslov, re.I)][:3]


def vijesti():
    stavke = []
    for izvor in IZVORI:
        try:
            korijen = ET.fromstring(dohvati(izvor["url"]))
        except Exception as e:  # izvor ne radi: preskoči, ne ruši workflow
            print("  %s: nedostupno (%s)" % (izvor["ime"], e))
            continue
        n = 0
        for it in korijen.findall("./channel/item"):
            naslov = (it.findtext("title") or "").strip()
            kategorije = " ".join(c.text or "" for c in it.findall("category"))
            if not FOREVER.search(naslov + " " + kategorije):
                continue
            try:
                datum = email.utils.parsedate_to_datetime(it.findtext("pubDate")).astimezone(datetime.timezone.utc)
            except Exception:
                continue
            stavke.append({
                "datum": datum.strftime("%Y-%m-%dT%H:%M:%SZ"),
                "naslov": html.unescape(naslov),
                "link": (it.findtext("link") or "").strip(),
                "izvor": izvor["ime"],
                "sazetak": cisti_tekst(it.findtext("description")),
                "oznake": oznake(naslov),
            })
            n += 1
        print("  %s: %d vijesti za Forever" % (izvor["ime"], n))
    # isti naslov zna doći više puta (npr. ažurirane development notes): ostaje najnoviji
    po_naslovu = {}
    for s in sorted(stavke, key=lambda x: x["datum"], reverse=True):
        k = re.sub(r"\W+", " ", s["naslov"].lower()).strip()
        po_naslovu.setdefault(k, s)
    return sorted(po_naslovu.values(), key=lambda x: x["datum"], reverse=True)[:NAJVISE]


def ucitaj(ime):
    try:
        with open(os.path.join(DATA, ime), encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def spremi_ako_promjena(ime, kljuc, novo, ostalo=None):
    """Zapiše data/<ime> samo kad se sadržaj pod 'kljuc' promijenio; vraća True ako je zapisano."""
    staro = ucitaj(ime) or {}
    if staro.get(kljuc) == novo:
        return False
    doc = dict(ostalo or {})
    doc["azurirano"] = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    doc[kljuc] = novo
    os.makedirs(DATA, exist_ok=True)
    with open(os.path.join(DATA, ime), "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
        f.write("\n")
    return True


def main():
    print("Vijesti:")
    v = vijesti()
    if v:
        izvori = [{"ime": i["ime"], "url": i["url"]} for i in IZVORI]
        print("  zapisano" if spremi_ako_promjena("vijesti.json", "stavke", v, {"izvori": izvori}) else "  bez promjena")
    else:
        print("  nijedan izvor nije vratio vijesti, datoteka ostaje ista")
    print("Armory:")
    try:
        armory.main()
    except Exception as e:  # armory nikad ne smije srušiti osvježavanje vijesti
        print("  greška, preskačem: %s" % e)


if __name__ == "__main__":
    main()
