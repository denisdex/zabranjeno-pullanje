# Automatski podaci

Web se sam puni iz `data/*.json`. Puni ih GitHub Actions u repou `denisdex/zabranjeno-pullanje`,
bez ikakvih API ključeva i tajni.

> Stanje 2026-10-29: workflow datoteka je spremna lokalno, ali GitHub ju odbija dok `gh` prijava nema dozvolu
> `workflow`. Jednom pokreni `gh auth refresh -h github.com -s workflow`, potvrdi u pregledniku, pa push.

## Kako radi

- `.github/workflows/podaci.yml` se pokreće svaki sat (i ručno: Actions → Podaci → Run workflow, ili `gh workflow run podaci.yml`).
- Pokreće `skripte/osvjezi.py`:
  - **vijesti** → `data/vijesti.json`: službeni Blizzardovi postovi (Blue Tracker RSS na forumu) i Wowhead vijesti (Classic RSS), samo ono što spominje Forever ili Classic+. Za svaku vijest: naslov, datum, link, izvor, kratki sažetak iz feeda i oznake izvedene iz naslova.
  - **armory** → `data/likovi.json` (`skripte/armory.py`): level, talenti, oprema i profesije za likove iz `data.js`.
- Datoteka se zapiše samo kad se sadržaj promijeni, pa workflow commita (`auto: podaci …`) samo kad ima novosti.
- Ako izvor ne radi, datoteka ostaje ista, a workflow ne pada.

Web čita `data/vijesti.json` i `data/likovi.json`. Kad ih nema ili su prazni, koristi `data.js`
(ručni podaci: ekipa, plan profesija, zadaci, prevedeni patch notes).

## Gdje se vidi

- **GitHub Pages** (https://denisdex.github.io/zabranjeno-pullanje/) se osvježi sam nakon svakog auto-commita.
- **Netlify** (https://zabranjeno-pullanje.netlify.app) zasad nije vezan na GitHub: novi podaci se tamo vide tek
  nakon ručnog deploya (`netlify deploy --prod --dir .` u ovom folderu).
  Jedini ručni korak da i Netlify ide sam: u Chromeu otvoriti Netlify → projekt zabranjeno-pullanje →
  Project configuration → Build & deploy → Link repository → GitHub → `denisdex/zabranjeno-pullanje`,
  grana `main`, build naredba prazna, publish directory `.` (korijen). Od tada svaki push i auto-commit deploya sam.

## Armory nakon launcha (4. 11. 2026.)

Javni armoryji za Forever prije launcha još ne vraćaju likove, pa `armory.py` zasad ne radi ništa. Kad prorade:

1. U `data.js` upiši `armory: { regija: "eu", realm: "<ime realma>" }` (realm na kojem igramo).
2. Otvori profil jednog našeg lika na aotc.gg/forever ili armorywowforever.com i provjeri adresu.
   Ako je drugačija, popravi popis `PREDLOSCI` u `skripte/armory.py`.
3. U funkciji `parsiraj()` (označeno s TODO) dopiši gdje stranica drži talente, opremu i profesije.
   Dok to nije dopisano, skripta upisuje samo level.
4. Pokreni lokalno `python3 skripte/osvjezi.py` i pogledaj `data/likovi.json`, pa push.

## Lokalno

```bash
python3 skripte/osvjezi.py
```

Prije svog pusha napravi `git pull --rebase`, jer bot svaki sat može dodati svoj commit.
