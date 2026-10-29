// Podaci ekipe Zaprešić Horde. Ovo je jedino mjesto koje se mijenja kod ažuriranja:
// promijeni vrijednost, pa ponovno objavi stranicu (link ostaje isti).
window.HORDE = {
  ekipa: "Zaprešić Horde",
  azurirano: "2026-10-29",

  // Vremena u UTC. Studeni je CET (UTC+1).
  // Rezervacija imena: do 3. 11. 2026. u 23:59 po Zagrebu.
  // Launch: Blizzard najavio 4. 11. u 15:00 PST, što je ponoć 4./5. 11. po Zagrebu.
  datumi: {
    rezervacijaOd: "2026-10-27T00:00:00+01:00",
    rezervacijaDo: "2026-11-03T23:59:00+01:00",
    launch: "2026-11-05T00:00:00+01:00"
  },

  discord: "https://discord.gg/jMuagAt9h",
  serverZona: "Europe/Paris",

  // level: 0 do 60
  // foto: portret iz assets/likovi/ ili null (tada stoji zamjenski grb klase dok netko ne pošalje screenshot)
  // profesije: plan "do 40" i "nakon 40"; null = po želji; { ime, plan: true } = još nije dogovoreno do kraja
  igraci: [
    { igrac: "Pero",    lik: "Melee Kitic",      klasa: "Warrior", rasa: "Orc",    uloga: "Melee DPS",  level: 0, foto: null,
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Engineering"] } },
    { igrac: "Niksa",   lik: "Shaman Saulic",    klasa: "Shaman",  rasa: "Orc",    uloga: "Healer",     level: 0, foto: "assets/likovi/shaman-saulic.jpg",
      profesije: { do40: ["Herbalism", "Skinning"], nakon40: ["Skinning", "Leatherworking"] } },
    { igrac: "Karkens", lik: "Janica Frostelic", klasa: "Mage",    rasa: "Troll",  uloga: "Ranged DPS", level: 0, foto: null,
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", null] } },
    { igrac: "Žuga",    lik: "Nikola Roguevic",  klasa: "Rogue",   rasa: "Undead", uloga: "Melee DPS",  level: 0, foto: "assets/likovi/nikola-roguevic.jpg",
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Skinning"] } },
    { igrac: "Dex",     lik: "Arsen Deadic",     klasa: "Paladin", rasa: "Undead", uloga: "Tank",       level: 0, foto: "assets/likovi/arsen-deadic.jpg",
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", { ime: "Alchemy", plan: true }] } }
  ],

  // odradeno: true kad ga ekipa prvi put očisti skupa
  dungeoni: [
    { ime: "Ragefire Chasm",     od: 13, do: 18, odradeno: false },
    { ime: "Wailing Caverns",    od: 17, do: 24, odradeno: false },
    { ime: "Shadowfang Keep",    od: 22, do: 30, odradeno: false },
    { ime: "Blackfathom Deeps",  od: 24, do: 32, odradeno: false },
    { ime: "Razorfen Kraul",     od: 29, do: 38, odradeno: false },
    { ime: "Scarlet Monastery",  od: 34, do: 45, odradeno: false },
    { ime: "Uldaman",            od: 41, do: 51, odradeno: false },
    { ime: "Zul'Farrak",         od: 44, do: 54, odradeno: false },
    { ime: "Maraudon",           od: 46, do: 55, odradeno: false },
    { ime: "Sunken Temple",      od: 50, do: 60, odradeno: false },
    { ime: "Blackrock Depths",   od: 52, do: 60, odradeno: false },
    { ime: "Lower / Upper Blackrock Spire", od: 55, do: 60, odradeno: false },
    { ime: "Scholomance",        od: 58, do: 60, odradeno: false },
    { ime: "Stratholme",         od: 58, do: 60, odradeno: false }
  ],

  // gotovo: true kad ekipa prođe taj korak (ručno, ne po datumu)
  timeline: [
    { kad: "27. 10. – 3. 11.", od: "2026-10-27T00:00:00+01:00", naslov: "Rezervacija imena", opis: "Svatko zauzme ime svog lika. Poslije 3. 11. u 23:59 ide tko prvi, njegov.", gotovo: false },
    { kad: "4. 11. u ponoć", od: "2026-11-05T00:00:00+01:00", naslov: "Launch", opis: "Serveri se otvaraju u 15:00 PST, kod nas ponoć. Svi u Durotar, okupljanje u Razor Hillu.", gotovo: false },
    { kad: "lvl 13 – 24", od: null, naslov: "Prvi dungeoni", opis: "Ragefire Chasm ispod Orgrimmara (13–18), pa Wailing Caverns u Barrensu (17–24). Prvi put svih pet skupa.", gotovo: false },
    { kad: "lvl 60", od: null, naslov: "Level 60", opis: "Cap je trajno 60. Odatle kreću pravi dungeoni i raid.", gotovo: false }
  ],

  checklist: [
    { id: "ime",     naslov: "Rezerviraj ime lika",  opis: "Rok je 3. 11. u 23:59. Ime iz rostera, točno tako napisano." },
    { id: "igra",    naslov: "Instaliraj igru",      opis: "Battle.net, World of Warcraft: Forever. Skini na vrijeme, ne na dan launcha." },
    { id: "addoni",  naslov: "Složi addone",         opis: "Popis dogovaramo na Discordu, svi isti da se lakše pomažemo." },
    { id: "discord", naslov: "Uđi na Discord",       opis: "Voice za dungeone, kanal za dogovor tko je kad online." }
  ]
};
