# Automatski podaci

Web se sam puni iz `data/*.json`. Puni ih GitHub Actions u repou `denisdex/zabranjeno-pullanje`,
bez ikakvih API ključeva i tajni.

> Stanje 2026-10-29: workflow datoteka je spremna lokalno, ali GitHub ju odbija dok `gh` prijava nema dozvolu
> `workflow`. Jednom pokreni `gh auth refresh -h github.com -s workflow`, potvrdi u pregledniku, pa push.

## Kako radi

- `.github/workflows/podaci.yml` se pokreće svaka 3 sata (i ručno: Actions → Podaci → Run workflow, ili `gh workflow run podaci.yml`).
- Pokreće `skripte/osvjezi.py`:
  - **vijesti** → `data/vijesti.json`: službeni Blizzardovi postovi (Blue Tracker RSS na forumu) i Wowhead vijesti (Classic RSS), samo ono što spominje Forever ili Classic+. Za svaku vijest: naslov, datum, link, izvor, kratki sažetak iz feeda i oznake izvedene iz naslova. Polje `vrsta` (`patch` ili `vijest`) dijeli sekciju News & Updates: patch notes, hotfixevi, balans i bug fixevi idu u desni stupac, sve ostalo lijevo.
  - **armory** → `data/likovi.json` (`skripte/armory.py`): level, talenti, oprema i profesije za likove iz `data.js`.
- Datoteka se zapiše samo kad se sadržaj promijeni, pa workflow commita (`auto: podaci …`) samo kad ima novosti.
- Ako izvor ne radi, datoteka ostaje ista, a workflow ne pada.

Web čita `data/vijesti.json` i `data/likovi.json`. Kad ih nema ili su prazni, koristi `data.js`
(ručni podaci: ekipa, plan profesija, zadaci, prevedeni patch notes).

## Gdje se vidi

- **GitHub Pages** (https://denisdex.github.io/zabranjeno-pullanje/) se osvježi sam nakon svakog auto-commita.
- **Netlify** (https://zabranjeno-pullanje.netlify.app) je od 2026-11-07 vezan na GitHub (`main`, bez build naredbe,
  publish iz korijena): svaki push i auto-commit deploya sam. Ručni `netlify deploy` više ne treba.

## Armory (Blizzard API, od 2026-11-06)

`skripte/armory.py` vuče likove iz službenog Blizzard API-ja (namespace `profile-forever-eu`, lik po slugu
`ime-prezime`): level, guild, ilvl, statovi, oprema s ikonama, talenti, profesije, reputacije i render lika.
Ključevi se čitaju iz okoline (`BLIZZARD_CLIENT_ID`, `BLIZZARD_CLIENT_SECRET`); na GitHubu su u
Settings → Secrets and variables → Actions. Bez njih skripta preskoči armory i ništa ne mijenja.
Klijent je napravljen na develop.battle.net (Dexov račun). Ključevi nikad ne idu u repo.

## Lokalno

```bash
BLIZZARD_CLIENT_ID=... BLIZZARD_CLIENT_SECRET=... python3 skripte/osvjezi.py
```

Prije svog pusha napravi `git pull --rebase`, jer bot svaka 3 sata može dodati svoj commit.
