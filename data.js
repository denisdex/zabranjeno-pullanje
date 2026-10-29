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
  // oci: položaji očiju na fotki u postocima [[x, y], [x, y]] za sjaj (samo Undead), inače izostavi
  // profesije: plan "do 40" i "nakon 40"; null = po želji; { ime, plan: true } = još nije dogovoreno do kraja
  igraci: [
    { igrac: "Pero",    lik: "Melee Kitic",      klasa: "Warrior", rasa: "Orc",    uloga: "Melee DPS",  level: 0, foto: null,
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Engineering"] } },
    { igrac: "Niksa",   lik: "Shaman Saulic",    klasa: "Shaman",  rasa: "Orc",    uloga: "Healer",     level: 0, foto: "assets/likovi/shaman-saulic.jpg",
      profesije: { do40: ["Herbalism", "Skinning"], nakon40: ["Skinning", "Leatherworking"] } },
    { igrac: "Karkens", lik: "Janica Frostelic", klasa: "Mage",    rasa: "Troll",  uloga: "Ranged DPS", level: 0, foto: null,
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", null] } },
    { igrac: "Žuga",    lik: "Nikola Roguevic",  klasa: "Rogue",   rasa: "Undead", uloga: "Melee DPS",  level: 0, foto: "assets/likovi/nikola-roguevic.jpg", oci: [[43.6, 13.9], [48.2, 13.6]],
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Skinning"] } },
    { igrac: "Dex",     lik: "Arsen Deadic",     klasa: "Paladin", rasa: "Undead", uloga: "Tank",       level: 0, foto: "assets/likovi/arsen-deadic.jpg", oci: [[59.9, 21.5], [65.1, 21.7]],
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", { ime: "Alchemy", plan: true }] } }
  ],

  // Rasponi iz Forevera (warcraft.wiki.gg, 29. 10. 2026.), samo ono što je Hordi blizu.
  // novo: dungeon koji je Forever dodao; odradeno: true kad ga ekipa prvi put očisti skupa
  dungeoni: [
    { ime: "Ragefire Chasm",            gdje: "Orgrimmar",          od: 13, do: 19, odradeno: false },
    { ime: "Ruins of Lordaeron",        gdje: "Undercity",          od: 15, do: 22, novo: true, odradeno: false },
    { ime: "Wailing Caverns",           gdje: "Barrens",            od: 19, do: 25, odradeno: false },
    { ime: "Shadowfang Keep",           gdje: "Silverpine Forest",  od: 23, do: 29, odradeno: false },
    { ime: "Blackfathom Deeps",         gdje: "Ashenvale",          od: 25, do: 31, odradeno: false },
    { ime: "City of Dalaran",           gdje: "Alterac Mountains",  od: 28, do: 33, novo: true, odradeno: false },
    { ime: "Razorfen Kraul",            gdje: "Barrens",            od: 30, do: 36, odradeno: false },
    { ime: "Scarlet Monastery",         gdje: "Tirisfal, 4 krila",  od: 31, do: 45, odradeno: false },
    { ime: "The Drowned City",          gdje: "Stranglethorn Vale", od: 35, do: 40, novo: true, odradeno: false },
    { ime: "Razorfen Downs",            gdje: "Barrens",            od: 38, do: 44, odradeno: false },
    { ime: "Krol'dok Stronghold",       gdje: "Riverglades",        od: 40, do: 45, novo: true, odradeno: false },
    { ime: "Uldaman",                   gdje: "Badlands",           od: 44, do: 50, odradeno: false },
    { ime: "Zul'Farrak",                gdje: "Tanaris",            od: 45, do: 51, odradeno: false },
    { ime: "Alcaz Prison",              gdje: "Dustwallow Marsh",   od: 48, do: 53, novo: true, odradeno: false },
    { ime: "Maraudon",                  gdje: "Desolace",           od: 48, do: 54, odradeno: false },
    { ime: "Sunken Temple",             gdje: "Swamp of Sorrows",   od: 52, do: 58, odradeno: false },
    { ime: "Blackrock Depths",          gdje: "Blackrock Mountain", od: 52, do: 60, odradeno: false },
    { ime: "Lower Blackrock Spire",     gdje: "Blackrock Mountain", od: 55, do: 60, odradeno: false },
    { ime: "Blackmaw Hold",             gdje: "Azshara",            od: 55, do: 60, novo: true, odradeno: false },
    { ime: "Dire Maul",                 gdje: "Feralas, 3 krila",   od: 55, do: 60, odradeno: false },
    { ime: "Scholomance",               gdje: "Western Plaguelands", od: 58, do: 60, odradeno: false },
    { ime: "Stratholme",                gdje: "Eastern Plaguelands", od: 58, do: 60, odradeno: false },
    { ime: "Shaper's Terrace",          gdje: "Un'Goro Crater",     od: 58, do: 60, novo: true, odradeno: false }
  ],

  // "Znaj prije 60": činjenice iz Forevera koje štede zlato i vrijeme
  savjeti: [
    { broj: "40", jedinica: "lvl", naslov: "Prvi mount", tekst: "Apprentice Riding 100g + mount 20g, 60% brže. Na Honored s Hordom 10% jeftinije. Orc: Orgrimmar, Troll: Sen'jin Village, Undead: Brill. Paladin mount dobiva kroz class quest." },
    { broj: "60", jedinica: "lvl", naslov: "Brzi mount", tekst: "Journeyman Riding 1000g + mount 200g, 100% brže. Leteći mountovi ne postoje i neće ih biti." },
    { broj: "10", jedinica: "g",   naslov: "Dual spec", tekst: "Od levela 40 kod class trainera. Spec mijenjaš kad hoćeš izvan borbe, respec s vremenom pada na 1g. Dex i Niksa mogu imati i DPS spec." },
    { broj: "5",  jedinica: "lvl", naslov: "Camping", tekst: "Quest chain \"The Great Outdoors\" otključava kamp. Kamp daje buffove; profesijski kampovi od skilla 20." },
    { broj: "14", jedinica: "lvl", naslov: "Cozy Sleeping Bag", tekst: "Scavenger hunt u Barrensu (ili Westfallu) daje vreću za spavanje: rested XP i kad si offline u divljini." },
    { broj: "9.12.", jedinica: "",  naslov: "Prvi raidovi", tekst: "Barrow Deeps (10), Hyjal Summit (20) i Onyxia (40) otvaraju se 9. 12. 2026. Za Barrow Deeps trebamo još petoricu." },
    { broj: "1.60", jedinica: "",  naslov: "Addoni", tekst: "Classic addoni ne rade. Uzmi verzije s oznakom Forever/1.60.1: Questie, Leatrix Plus, Bagnon, Auctionator, TomTom. WeakAuras zasad nema." },
    { broj: "42,34", jedinica: "", naslov: "Loot crates", tekst: "Durotar Supply and Logistics, zapadno od Crossroadsa u Barrensu: sanduke iz profesija mijenjaš za rep i Merchant's Favor." }
  ],

  // gotovo: true kad ekipa prođe taj korak (ručno, ne po datumu)
  timeline: [
    { kad: "27. 10. – 3. 11.", od: "2026-10-27T00:00:00+01:00", naslov: "Rezervacija imena", opis: "Svatko zauzme ime svog lika. Poslije 3. 11. u 23:59 ide tko prvi, njegov.", gotovo: false },
    { kad: "4. 11. u ponoć", od: "2026-11-05T00:00:00+01:00", naslov: "Launch", opis: "Serveri se otvaraju u 15:00 PST, kod nas ponoć. Svi u Durotar, okupljanje u Razor Hillu.", gotovo: false },
    { kad: "lvl 13 – 25", od: null, naslov: "Prvi dungeoni", opis: "Ragefire Chasm ispod Orgrimmara (13–19), pa Wailing Caverns u Barrensu (19–25). Prvi put svih pet skupa.", gotovo: false },
    { kad: "lvl 60", od: null, naslov: "Level 60", opis: "Cap je trajno 60. Odatle kreću pravi dungeoni i raid.", gotovo: false }
  ],

  checklist: [
    { id: "ime",      naslov: "Rezerviraj ime lika",   opis: "Rok 3. 11. u 23:59, najviše tri lika po računu. Ime točno kao u rosteru." },
    { id: "ruleset",  naslov: "Svi na istom rulesetu", opis: "Normal, PvP, RP ili RP-PvP: svaki ima jedan mega-realm. Ako netko promaši, ne vidimo se u igri." },
    { id: "igra",     naslov: "Skini Forever klijent", opis: "Battle.net, World of Warcraft: Forever. Skini dan ranije, ne u ponoć kad svi krenu." },
    { id: "addoni",   naslov: "Addoni za 1.60.1",      opis: "Questie, Leatrix Plus, Bagnon, Auctionator. Classic verzije ne rade, traži oznaku Forever." },
    { id: "discord",  naslov: "Discord voice",         opis: "Mikrofon proradi prije launcha, ne usred prvog pulla u Ragefireu." }
  ]
};
