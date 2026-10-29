// Podaci ekipe Zaprešić Horde. Ovo je jedino mjesto koje se mijenja kod ažuriranja:
// promijeni vrijednost, pa ponovno objavi stranicu (link ostaje isti).
window.HORDE = {
  ekipa: "Zaprešić Horde",
  guild: "Zabranjeno pullanje",
  azurirano: "2026-10-29",

  // Vremena u UTC. Studeni je CET (UTC+1).
  // Rezervacija imena: do 3. 11. 2026. u 23:59 po Zagrebu.
  // Launch: Blizzard najavio 4. 11. u 15:00 PST, što je ponoć 4./5. 11. po Zagrebu.
  datumi: {
    rezervacijaOd: "2026-10-27T00:00:00+01:00",
    rezervacijaDo: "2026-11-03T23:59:00+01:00",
    launch: "2026-11-05T00:00:00+01:00",
    prviRaid: "2026-12-09T00:00:00+01:00"
  },

  discord: "https://discord.gg/jMuagAt9h",
  serverZona: "Europe/Paris",

  // level: 0 do 60
  // foto: portret iz assets/likovi/ ili null (tada stoji zamjenski grb klase dok netko ne pošalje screenshot)
  // profil: build, oprema i ciljevi za stranicu lika (#lik/ime-lika); plan: true = još nije stvaran build iz igre
  //   talenti: bodovi u tri stabla redom kako ih igra slaže; oprema: { slot, ime, kvaliteta: poor|common|uncommon|rare|epic|legendary }
  // oci: položaji očiju na fotki u postocima [[x, y], [x, y]] za sjaj (samo Undead), inače izostavi
  // profesije: plan "do 40" i "nakon 40"; null = po želji; { ime, plan: true } = još nije dogovoreno do kraja
  igraci: [
    { igrac: "Pero",    lik: "Melee Kitic",      klasa: "Warrior", rasa: "Orc",    uloga: "Melee DPS",  level: 0, foto: null,
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Engineering"] },
      profil: {
        specka: "Arms 2H", talenti: [31, 20, 0], plan: true,
        opisBuilda: "Arms do Mortal Strikea, ostatak u Fury za crit i Rage. Dvoručno oružje, najlakši leveling za Warriora.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper (Blacksmithing)", gotovo: false },
          { ime: "Lionheart Helm (Blacksmithing)", gotovo: false },
          { ime: "Savage Gladiator Chain (BRD)", gotovo: false },
          { ime: "Devilsaur Gauntlets i Leggings (Leatherworking)", gotovo: false },
          { ime: "Cape of the Black Baron (Stratholme)", gotovo: false },
          { ime: "Hand of Justice (BRD)", gotovo: false },
          { ime: "Blackhand's Breadth (UBRS)", gotovo: false }
        ],
        biljeske: "Kao DPS ne pulla. Kad Dex nije tu, Warrior je rezervni tank."
      } },
    { igrac: "Niksa",   lik: "Shaman Saulic",    klasa: "Shaman",  rasa: "Orc",    uloga: "Healer",     level: 0, foto: "assets/likovi/shaman-saulic.jpg",
      profesije: { do40: ["Herbalism", "Skinning"], nakon40: ["Skinning", "Leatherworking"] },
      profil: {
        specka: "Enhancement", talenti: [0, 31, 20], plan: true,
        opisBuilda: "Enhancement do Stormstrikea za leveling, Restoration za jače healove u dungeonima. Na 40 dual spec: čisti Resto za grupu.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper (Blacksmithing)", gotovo: false },
          { ime: "Savage Gladiator Chain (BRD)", gotovo: false },
          { ime: "Devilsaur Gauntlets (Leatherworking)", gotovo: false },
          { ime: "Cape of the Black Baron (Stratholme)", gotovo: false },
          { ime: "Hand of Justice (BRD)", gotovo: false },
          { ime: "Blackhand's Breadth (UBRS)", gotovo: false }
        ],
        biljeske: "Healer grupe. Kad kaže mana, svi stanu."
      } },
    { igrac: "Karkens", lik: "Janica Frostelic", klasa: "Mage",    rasa: "Troll",  uloga: "Ranged DPS", level: 0, foto: null,
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", null] },
      profil: {
        specka: "Frost", talenti: [17, 0, 34], plan: true,
        opisBuilda: "Frost za sigurno levelanje: usporava, Frost Nova i Blizzard za AoE grind. Arcane za manu i manje resista.",
        oprema: [],
        ciljevi: [
          { ime: "Robe of the Archmage (Tailoring)", gotovo: false },
          { ime: "Mish'undare, Circlet of the Mind Flayer (Scholomance)", gotovo: false },
          { ime: "Briarwood Reed", gotovo: false },
          { ime: "Bonecreeper Stylus (Scholomance)", gotovo: false },
          { ime: "Eye of the Beast (LBRS)", gotovo: false },
          { ime: "Magister's set (Dungeon Set 1)", gotovo: false }
        ],
        biljeske: "Voda i hrana za ekipu, Polymorph na drugi target."
      } },
    { igrac: "Žuga",    lik: "Nikola Roguevic",  klasa: "Rogue",   rasa: "Undead", uloga: "Melee DPS",  level: 0, foto: "assets/likovi/nikola-roguevic.jpg", oci: [[43.6, 13.9], [48.2, 13.6]],
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Skinning"] },
      profil: {
        specka: "Combat Swords", talenti: [15, 31, 5], plan: true,
        opisBuilda: "Combat s mačevima do Adrenaline Rusha, Assassination za crit i Ruthlessness. Stabilan DPS bez puno skrivanja.",
        oprema: [],
        ciljevi: [
          { ime: "Mask of the Unforgiven (Stratholme)", gotovo: false },
          { ime: "Cadaverous Armor (Scholomance)", gotovo: false },
          { ime: "Devilsaur Gauntlets i Leggings (Leatherworking)", gotovo: false },
          { ime: "Cape of the Black Baron (Stratholme)", gotovo: false },
          { ime: "Hand of Justice (BRD)", gotovo: false },
          { ime: "Blackhand's Breadth (UBRS)", gotovo: false }
        ],
        biljeske: "Sap na drugi target prije pulla, kad Dex kaže."
      } },
    { igrac: "Dex",     lik: "Arsen Deadic",     klasa: "Paladin", rasa: "Undead", uloga: "Tank",       level: 0, foto: "assets/likovi/arsen-deadic.jpg", oci: [[59.9, 21.5], [65.1, 21.7]],
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", { ime: "Alchemy", plan: true }] },
      profil: {
        specka: "Retribution (leveling)", talenti: [11, 5, 35], plan: true,
        opisBuilda: "Ret za brzo levelanje solo i u grupi. Za tankanje dungeona kasnije Protection/Holy hibrid; na 40 dual spec, jedan spec za tank.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper (Blacksmithing)", gotovo: false },
          { ime: "Lionheart Helm (Blacksmithing)", gotovo: false },
          { ime: "Savage Gladiator Chain (BRD)", gotovo: false },
          { ime: "Cape of the Black Baron (Stratholme)", gotovo: false },
          { ime: "Hand of Justice (BRD)", gotovo: false },
          { ime: "Blackhand's Breadth (UBRS)", gotovo: false }
        ],
        biljeske: "Tank grupe: jedini smije pullati. Righteous Fury uključen u dungeonu."
      } }
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

  // Patch notes: prijevod Blizzardovih development notes, najnovije gore.
  // Stavka: { tekst, za: [klase/rase ili "Svi"], tema: kratka oznaka što se mijenja (Racial, Spell, Rage, XP, Dungeoni, Loot, Zona...) }
  izvorNovosti: "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696",
  novosti: [
    { datum: "2026-10-27", naslov: "Racijali, završna runda", stavke: [
      { tekst: "Blood Fury vraćen na 2 min cooldowna (bilo 3 min).", za: ["Orc"], tema: "Racial" },
      { tekst: "Berserking traje 15 s (bilo 10 s).", za: ["Troll"], tema: "Racial" },
      { tekst: "Touch of the Grave ima interni cooldown 15 s (bilo 25 s).", za: ["Undead"], tema: "Racial" }
    ] },
    { datum: "2026-10-26", naslov: "Classic loot je natrag", stavke: [
      { tekst: "Mob koji nije ništa dropao opet se može kliknuti, kao u Classicu.", za: ["Svi"], tema: "Loot" },
      { tekst: "Savage maknut, vraćen Command (+5% štete Hunter i Warlock petova).", za: ["Orc"], tema: "Racial" }
    ] },
    { datum: "2026-10-16", naslov: "Velika runda za klase", stavke: [
      { tekst: "Battle Shout je sad raid-wide, a Slam više ne prekida pushback.", za: ["Warrior"], tema: "Spell" },
      { tekst: "Chain Lightning troši oko 35% manje mane na sva četiri ranka.", za: ["Shaman"], tema: "Spell" },
      { tekst: "Novi spell Frost Blast, uči se na levelu 24.", za: ["Mage"], tema: "Novi spell" },
      { tekst: "Blessing of Salvation zamijenjen spellom Salvation.", za: ["Paladin"], tema: "Spell" },
      { tekst: "Regeneration daje 20% više zdravlja (bilo 10%).", za: ["Troll"], tema: "Racial" },
      { tekst: "Horde je u Dalaranu napadnuta na prvi pogled; dungeonu City of Dalaran se i dalje može prići.", za: ["Horde"], tema: "Zona" }
    ] },
    { datum: "2026-10-08", naslov: "Više XP-a iz dungeona", stavke: [
      { tekst: "XP od mobova u dungeonima oko 20% veći.", za: ["Svi"], tema: "Dungeoni" },
      { tekst: "Popravljen bug: niži level u grupi više ne gubi XP zbog višeg, svatko dobiva po svom levelu.", za: ["Svi"], tema: "XP" },
      { tekst: "Rage od primljene štete ispravljen, oko 20–40% štete vraća se kao Rage.", za: ["Warrior"], tema: "Rage" },
      { tekst: "Retribution Aura srezana oko 33%, natrag na Vanilla vrijednosti.", za: ["Paladin"], tema: "Nerf" }
    ] },
    { datum: "2026-10-01", naslov: "Rage i dungeon questovi", stavke: [
      { tekst: "Kritični udarci daju 75% više Ragea; Berserker Rage se uči na 30 (bilo 32).", za: ["Warrior"], tema: "Rage" },
      { tekst: "Dungeon questovi daju 50% manje dodatnog XP-a.", za: ["Svi"], tema: "XP" }
    ] }
  ],


  // Roadmap do 60: tempo ekipe; ciljani datumi faza računaju se iz ovoga (udio = dio ukupnog vremena do kraja faze)
  roadmap: {
    satiDnevno: 3,
    planiraniTjedni: 7,
    faze: [
      { od: 1,  do: 10, udio: .04, zone: "Durotar, Tirisfal Glades", dungeoni: [] },
      { od: 10, do: 20, udio: .13, zone: "The Barrens, Silverpine Forest", dungeoni: ["Ragefire Chasm 13–19", "Ruins of Lordaeron 15–22", "Wailing Caverns 19–25"] },
      { od: 20, do: 30, udio: .28, zone: "Ashenvale, Stonetalon Mountains, Hillsbrad Foothills", dungeoni: ["Shadowfang Keep 23–29", "Blackfathom Deeps 25–31"] },
      { od: 30, do: 40, udio: .46, zone: "Thousand Needles, Desolace, Arathi Highlands, Stranglethorn Vale", dungeoni: ["Razorfen Kraul 30–36", "Gnomeregan 31–37", "Scarlet Monastery 31–45"], kraj: "Na 40: mount i dual spec" },
      { od: 40, do: 50, udio: .69, zone: "Tanaris, Feralas, The Hinterlands", dungeoni: ["Uldaman 44–50", "Zul'Farrak 45–51", "Maraudon 48–54"] },
      { od: 50, do: 60, udio: 1,   zone: "Searing Gorge, Felwood, Un'Goro Crater, Western i Eastern Plaguelands, Winterspring", dungeoni: ["Sunken Temple 52–58", "Blackrock Depths 52–60", "Lower Blackrock Spire 55–60", "Scholomance i Stratholme 58–60"] },
      { od: 60, do: 60, udio: null, zone: "Pre-raid BiS i raidovi", dungeoni: ["Onyxia attunement", "Barrow Deeps i Hyjal Summit od 9. 12."], tekst: "Skupljanje pre-raid BiS-a iz dungeona i craftanja. Molten Core u Foreveru zasad nije najavljen." }
    ]
  },

  // Prva noć: plan po fazama i pravila guilda
  prvaNoc: {
    cilj: "Svi level 10 i na istom mjestu",
    koraci: [
      { kad: "23:30", naslov: "Voice i login", tekst: "Svi na Discordu, klijent upaljen i ulogiran do odabira lika. U ponoć računaj na red čekanja; tko uđe prvi, ne čeka ostale." },
      { kad: "00:00", naslov: "Start zone", tekst: "Svatko kreće iz svoje zone. U istoj zoni odmah u grupu: kill questovi se dijele, a u gužvi prve noći grupa lakše dođe do mobova.", startovi: true },
      { kad: "lvl 5–6", naslov: "Profesije i hearthstone", tekst: "Gathering profesije uzmi čim izađeš iz start zone; treneri su u Razor Hillu i Orgrimmaru, odnosno u Brillu i Undercityju. Hearthstone veži u Razor Hill ili Brill." },
      { kad: "lvl 6–10", naslov: "Očisti zonu", tekst: "Durotar i Tirisfal do kraja. Na svaki parni level svratite treneru. Sive stvari prodaj, novac ide na spellove." },
      { kad: "lvl 10", naslov: "Zeppelin i okupljanje", tekst: "Undead strana zeppelinom s tornja kod Undercityja do Orgrimmara. Ekipa se nađe u Orgrimmaru, svatko pogleda class quest kod trenera." },
      { kad: "lvl 10–13", naslov: "Barrens i prvi pull", tekst: "Svi skupa u Barrens, hearthstone na Crossroads. Kad su svi 13+, Ragefire Chasm ispod Orgrimmara, Dex tanka." }
    ],
    pravila: [
      { naslov: "Zabranjeno pullanje", tekst: "Pulla samo tank. Ostali čekaju da mob gleda u Dexa, tek onda udaraju." },
      { naslov: "Mana je zakon", tekst: "Kad Niksa kaže mana, svi stanu i piju. Bez heala nema pulla." },
      { naslov: "Need za svoju klasu", tekst: "Need samo ako je stvar za tvoju klasu, za ostalo greed. Spor se rješava s /roll." },
      { naslov: "Javi se prije AFK-a", tekst: "Tko mora ići, kaže na voiceu prije nego se odlogira usred grupe." }
    ]
  },

  // Tips & tricks: poredano po levelu, to je ujedno put do 60
  savjeti: [
    { broj: "1.60", jedinica: "", naslov: "Addoni prije starta", tekst: "Classic addoni ne rade. Uzmi verzije s oznakom Forever/1.60.1: Questie, Leatrix Plus, Bagnon, Auctionator, TomTom. WeakAuras zasad nema." },
    { broj: "2", jedinica: "lvl", naslov: "Trener na parnim levelima", tekst: "Novi spellovi dolaze svaki parni level. Novac čuvaj za trenera, gear iz vendora ne kupuj." },
    { broj: "5", jedinica: "lvl", naslov: "Camping", tekst: "Quest chain \"The Great Outdoors\" otključava kamp. Kamp daje buffove; profesijski kampovi od skilla 20." },
    { broj: "14", jedinica: "lvl", naslov: "Cozy Sleeping Bag", tekst: "Scavenger hunt u Barrensu (ili Westfallu) daje vreću za spavanje: rested XP i kad si offline u divljini." },
    { broj: "40", jedinica: "lvl", naslov: "Prvi mount", tekst: "Apprentice Riding 100g + mount 20g, 60% brže. Na Honored s Hordom 10% jeftinije. Orc: Orgrimmar, Troll: Sen'jin Village, Undead: Brill. Paladin mount dobiva kroz class quest." },
    { broj: "40", jedinica: "lvl", naslov: "Dual spec", tekst: "10g kod class trenera. Spec mijenjaš kad hoćeš izvan borbe, respec s vremenom pada na 1g. Dex i Niksa mogu imati i DPS spec." },
    { broj: "60", jedinica: "lvl", naslov: "Cap i brzi mount", tekst: "Cap je trajno 60. Journeyman Riding 1000g + mount 200g, 100% brže. Letećih mountova nema i neće ih biti." },
    { broj: "9.12.", jedinica: "", naslov: "Prvi raidovi", tekst: "Barrow Deeps (10), Hyjal Summit (20) i Onyxia (40). Za Barrow Deeps trebamo još petoricu." }
  ]
};
