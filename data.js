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
  // vjestine: skill profesije 0–300 (Apprentice do 75, Journeyman 150, Expert 225, Artisan 300); gold: koliko lik ima (cijeli goldi)
  // zadaci: { naziv, od, do (level raspon), gotovo }; na profilu se prikazuju oni za trenutni level lika
  // profil: build, oprema i ciljevi za stranicu lika (#lik/ime-lika); plan: true = još nije stvaran build iz igre
  //   talenti: bodovi u tri stabla redom kako ih igra slaže
  //   oprema i ciljevi: { slot, ime, kvaliteta: poor|common|uncommon|rare|epic|legendary, ikona (Wowhead ikona, npr. "inv_axe_09"), wowhead (ID itema), izvor }
  // oci: položaji očiju na fotki u postocima [[x, y], [x, y]] za sjaj (samo Undead), inače izostavi
  // profesije: plan "do 40" i "nakon 40"; null = po želji; { ime, plan: true } = još nije dogovoreno do kraja
  igraci: [
    { igrac: "Pero",    lik: "Melee Kitic",      klasa: "Warrior", rasa: "Orc",    uloga: "Melee DPS",  level: 0, foto: null,
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Engineering"] },
      vjestine: { "Mining": 0, "Skinning": 0, "Engineering": 0 },
      gold: 0,
      zadaci: [
        { naziv: "Mining i Skinning naučiti čim izađeš iz Valley of Trials", od: 1, do: 10, gotovo: false },
        { naziv: "Defensive Stance quest na 10 kod Warrior trenera", od: 10, do: 12, gotovo: false },
        { naziv: "Kožu šalji Niksi za Leatherworking", od: 10, do: 40, gotovo: false },
        { naziv: "Copper i Tin barove čuvaj za Engineering, višak na AH", od: 20, do: 40, gotovo: false },
        { naziv: "Berserker Stance quest na 30", od: 30, do: 32, gotovo: false },
        { naziv: "Mount (120 g) i Engineering umjesto Skinninga", od: 40, do: 42, gotovo: false },
        { naziv: "Hand of Justice i Savage Gladiator Chain iz BRD-a", od: 50, do: 60, gotovo: false },
        { naziv: "Arcanite Reaper: Thorium Dexu za transmute", od: 58, do: 60, gotovo: false }
      ],
      profil: {
        specka: "Arms 2H", talenti: [31, 20, 0], plan: true,
        opisBuilda: "Arms do Mortal Strikea, ostatak u Fury za crit i Rage. Dvoručno oružje, najlakši leveling za Warriora.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper", slot: "Main Hand", kvaliteta: "rare", ikona: "inv_axe_09", wowhead: 12784, izvor: "Blacksmithing", gotovo: false },
          { ime: "Lionheart Helm", slot: "Head", kvaliteta: "epic", ikona: "inv_helmet_36", wowhead: 12640, izvor: "Blacksmithing", gotovo: false },
          { ime: "Savage Gladiator Chain", slot: "Chest", kvaliteta: "epic", ikona: "inv_chest_chain_15", wowhead: 11726, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Devilsaur Gauntlets", slot: "Hands", kvaliteta: "rare", ikona: "inv_gauntlets_26", wowhead: 15063, izvor: "Leatherworking", gotovo: false },
          { ime: "Devilsaur Leggings", slot: "Legs", kvaliteta: "rare", ikona: "inv_pants_wolf", wowhead: 15062, izvor: "Leatherworking", gotovo: false },
          { ime: "Cape of the Black Baron", slot: "Back", kvaliteta: "rare", ikona: "inv_misc_cape_20", wowhead: 13340, izvor: "Stratholme", gotovo: false },
          { ime: "Hand of Justice", slot: "Trinket", kvaliteta: "rare", ikona: "inv_jewelry_talisman_01", wowhead: 11815, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Blackhand's Breadth", slot: "Trinket", kvaliteta: "rare", ikona: "inv_misc_armorkit_09", wowhead: 13965, izvor: "Upper Blackrock Spire", gotovo: false }
        ],
        biljeske: "Kao DPS ne pulla. Kad Dex nije tu, Warrior je rezervni tank."
      } },
    { igrac: "Niksa",   lik: "Shaman Saulic",    klasa: "Shaman",  rasa: "Orc",    uloga: "Healer",     level: 0, foto: "assets/likovi/shaman-saulic.jpg",
      profesije: { do40: ["Herbalism", "Skinning"], nakon40: ["Skinning", "Leatherworking"] },
      vjestine: { "Herbalism": 0, "Skinning": 0, "Leatherworking": 0 },
      gold: 0,
      zadaci: [
        { naziv: "Herbalism i Skinning; Earth totem quest na 4", od: 1, do: 10, gotovo: false },
        { naziv: "Fire totem quest na 10", od: 10, do: 12, gotovo: false },
        { naziv: "Bilje šalji Dexu za Alchemy", od: 10, do: 40, gotovo: false },
        { naziv: "Water totem quest (Call of Water) na 20", od: 20, do: 22, gotovo: false },
        { naziv: "Air totem quest (Call of Air) na 30", od: 30, do: 32, gotovo: false },
        { naziv: "Dual spec: Resto za grupu; Herbalism mijenjaš za Leatherworking", od: 40, do: 42, gotovo: false },
        { naziv: "Armor kitovi za Pera i Žugu, mail za sebe", od: 40, do: 60, gotovo: false },
        { naziv: "Devilsaur Leather iz Un'Gora: Gauntlets i Leggings za Pera i Žugu", od: 50, do: 60, gotovo: false }
      ],
      profil: {
        specka: "Enhancement", talenti: [0, 31, 20], plan: true,
        opisBuilda: "Enhancement do Stormstrikea za leveling, Restoration za jače healove u dungeonima. Na 40 dual spec: čisti Resto za grupu.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper", slot: "Main Hand", kvaliteta: "rare", ikona: "inv_axe_09", wowhead: 12784, izvor: "Blacksmithing", gotovo: false },
          { ime: "Savage Gladiator Chain", slot: "Chest", kvaliteta: "epic", ikona: "inv_chest_chain_15", wowhead: 11726, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Devilsaur Gauntlets", slot: "Hands", kvaliteta: "rare", ikona: "inv_gauntlets_26", wowhead: 15063, izvor: "Leatherworking", gotovo: false },
          { ime: "Cape of the Black Baron", slot: "Back", kvaliteta: "rare", ikona: "inv_misc_cape_20", wowhead: 13340, izvor: "Stratholme", gotovo: false },
          { ime: "Hand of Justice", slot: "Trinket", kvaliteta: "rare", ikona: "inv_jewelry_talisman_01", wowhead: 11815, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Blackhand's Breadth", slot: "Trinket", kvaliteta: "rare", ikona: "inv_misc_armorkit_09", wowhead: 13965, izvor: "Upper Blackrock Spire", gotovo: false }
        ],
        biljeske: "Healer grupe. Kad kaže mana, svi stanu."
      } },
    { igrac: "Karkens", lik: "Janica Frostelic", klasa: "Mage",    rasa: "Troll",  uloga: "Ranged DPS", level: 0, foto: null,
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", null] },
      vjestine: { "Herbalism": 0 },
      gold: 0,
      zadaci: [
        { naziv: "Herbalism; za drugu profesiju prijedlog je Tailoring (torbe za ekipu)", od: 1, do: 10, gotovo: false },
        { naziv: "Polymorph u svakom pullu s humanoidima, vježba u Ragefireu", od: 10, do: 20, gotovo: false },
        { naziv: "Bilje šalji Dexu", od: 10, do: 40, gotovo: false },
        { naziv: "Teleport: Orgrimmar na 20", od: 20, do: 22, gotovo: false },
        { naziv: "Conjure Water i hrana za ekipu prije svakog dungeona", od: 20, do: 60, gotovo: false },
        { naziv: "Portali na 40: Orgrimmar i Undercity za ekipu", od: 40, do: 42, gotovo: false },
        { naziv: "Robe of the Archmage (Tailoring) i Magister's set (Dungeon Set 1)", od: 50, do: 60, gotovo: false }
      ],
      profil: {
        specka: "Frost", talenti: [17, 0, 34], plan: true,
        opisBuilda: "Frost za sigurno levelanje: usporava, Frost Nova i Blizzard za AoE grind. Arcane za manu i manje resista.",
        oprema: [],
        ciljevi: [
          { ime: "Robe of the Archmage", slot: "Chest", kvaliteta: "epic", ikona: "inv_chest_cloth_38", wowhead: 14152, izvor: "Tailoring", gotovo: false },
          { ime: "Magister's Crown", slot: "Head", kvaliteta: "rare", ikona: "inv_crown_02", wowhead: 16686, izvor: "Dungeon Set 1", gotovo: false },
          { ime: "Briarwood Reed", slot: "Trinket", kvaliteta: "rare", ikona: "inv_misc_root_02", wowhead: 12930, gotovo: false },
          { ime: "Bonecreeper Stylus", slot: "Ranged", kvaliteta: "rare", ikona: "inv_misc_bone_taurenskull_01", wowhead: 13938, gotovo: false },
          { ime: "Eye of the Beast", slot: "Trinket", kvaliteta: "rare", ikona: "inv_jewelry_talisman_08", wowhead: 13968, izvor: "Lower Blackrock Spire", gotovo: false }
        ],
        biljeske: "Voda i hrana za ekipu, Polymorph na drugi target."
      } },
    { igrac: "Žuga",    lik: "Nikola Roguevic",  klasa: "Rogue",   rasa: "Undead", uloga: "Melee DPS",  level: 0, foto: "assets/likovi/nikola-roguevic.jpg", oci: [[45.0, 17.3], [50.6, 17.3]],
      profesije: { do40: ["Mining", "Skinning"], nakon40: ["Mining", "Skinning"] },
      vjestine: { "Mining": 0, "Skinning": 0 },
      gold: 0,
      zadaci: [
        { naziv: "Mining i Skinning", od: 1, do: 10, gotovo: false },
        { naziv: "Sap na humanoide prije svakog pulla, kad Dex kaže", od: 10, do: 20, gotovo: false },
        { naziv: "Kožu šalji Niksi, rudu Peru", od: 10, do: 40, gotovo: false },
        { naziv: "Poisons quest na 20", od: 20, do: 22, gotovo: false },
        { naziv: "Lockpicking za škrinje u dungeonima", od: 30, do: 40, gotovo: false },
        { naziv: "Mount (120 g)", od: 40, do: 42, gotovo: false },
        { naziv: "Mask of the Unforgiven, Cadaverous Armor i Devilsaur set", od: 50, do: 60, gotovo: false }
      ],
      profil: {
        specka: "Combat Swords", talenti: [15, 31, 5], plan: true,
        opisBuilda: "Combat s mačevima do Adrenaline Rusha, Assassination za crit i Ruthlessness. Stabilan DPS bez puno skrivanja.",
        oprema: [],
        ciljevi: [
          { ime: "Mask of the Unforgiven", slot: "Head", kvaliteta: "rare", ikona: "inv_misc_bandana_01", wowhead: 13404, izvor: "Stratholme", gotovo: false },
          { ime: "Cadaverous Armor", slot: "Chest", kvaliteta: "rare", ikona: "inv_chest_leather_03", wowhead: 14637, izvor: "Scholomance", gotovo: false },
          { ime: "Devilsaur Gauntlets", slot: "Hands", kvaliteta: "rare", ikona: "inv_gauntlets_26", wowhead: 15063, izvor: "Leatherworking", gotovo: false },
          { ime: "Devilsaur Leggings", slot: "Legs", kvaliteta: "rare", ikona: "inv_pants_wolf", wowhead: 15062, izvor: "Leatherworking", gotovo: false },
          { ime: "Cape of the Black Baron", slot: "Back", kvaliteta: "rare", ikona: "inv_misc_cape_20", wowhead: 13340, izvor: "Stratholme", gotovo: false },
          { ime: "Hand of Justice", slot: "Trinket", kvaliteta: "rare", ikona: "inv_jewelry_talisman_01", wowhead: 11815, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Blackhand's Breadth", slot: "Trinket", kvaliteta: "rare", ikona: "inv_misc_armorkit_09", wowhead: 13965, izvor: "Upper Blackrock Spire", gotovo: false }
        ],
        biljeske: "Sap na drugi target prije pulla, kad Dex kaže."
      } },
    { igrac: "Dex",     lik: "Arsen Deadic",     klasa: "Paladin", rasa: "Undead", uloga: "Tank",       level: 0, foto: "assets/likovi/arsen-deadic.jpg", oci: [[59.2, 18.1], [63.3, 18.5]],
      profesije: { do40: ["Herbalism", null], nakon40: ["Herbalism", { ime: "Alchemy", plan: true }] },
      vjestine: { "Herbalism": 0, "Alchemy": 0 },
      gold: 0,
      zadaci: [
        { naziv: "Herbalism; Righteous Fury čim ga naučiš, u svakom dungeonu", od: 1, do: 10, gotovo: false },
        { naziv: "Jedini pullaš: nauči put kroz Ragefire i Wailing Caverns", od: 10, do: 20, gotovo: false },
        { naziv: "Bilje skupljaj i čuvaj za Alchemy od 40", od: 10, do: 40, gotovo: false },
        { naziv: "Skupljaj tank opremu (štit, Stamina) za drugi spec", od: 30, do: 40, gotovo: false },
        { naziv: "Dual spec: Protection tank i Retribution; Alchemy kao druga profesija", od: 40, do: 42, gotovo: false },
        { naziv: "Healing i Mana potioni za ekipu", od: 40, do: 60, gotovo: false },
        { naziv: "Arcanite transmute svaki dan, Flasks za raid", od: 58, do: 60, gotovo: false }
      ],
      profil: {
        specka: "Retribution (leveling)", talenti: [11, 5, 35], plan: true,
        opisBuilda: "Ret za brzo levelanje solo i u grupi. Za tankanje dungeona kasnije Protection/Holy hibrid; na 40 dual spec, jedan spec za tank.",
        oprema: [],
        ciljevi: [
          { ime: "Arcanite Reaper", slot: "Main Hand", kvaliteta: "rare", ikona: "inv_axe_09", wowhead: 12784, izvor: "Blacksmithing", gotovo: false },
          { ime: "Lionheart Helm", slot: "Head", kvaliteta: "epic", ikona: "inv_helmet_36", wowhead: 12640, izvor: "Blacksmithing", gotovo: false },
          { ime: "Savage Gladiator Chain", slot: "Chest", kvaliteta: "epic", ikona: "inv_chest_chain_15", wowhead: 11726, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Cape of the Black Baron", slot: "Back", kvaliteta: "rare", ikona: "inv_misc_cape_20", wowhead: 13340, izvor: "Stratholme", gotovo: false },
          { ime: "Hand of Justice", slot: "Trinket", kvaliteta: "rare", ikona: "inv_jewelry_talisman_01", wowhead: 11815, izvor: "Blackrock Depths", gotovo: false },
          { ime: "Blackhand's Breadth", slot: "Trinket", kvaliteta: "rare", ikona: "inv_misc_armorkit_09", wowhead: 13965, izvor: "Upper Blackrock Spire", gotovo: false }
        ],
        biljeske: "Tank grupe: jedini smije pullati. Righteous Fury uključen u dungeonu."
      } }
  ],

  // Rasponi iz Forevera (warcraft.wiki.gg, 29. 10. 2026.), samo ono što je Hordi blizu.
  // novo: dungeon koji je Forever dodao; odradeno: true kad ga ekipa prvi put očisti skupa
  // vodic: kratki vodič za našu grupu (Vanilla 1.12 znanje; Forever je mogao mijenjati), otvara se na #dungeon/ime
  dungeoni: [
    { ime: "Ragefire Chasm",            gdje: "Orgrimmar",          od: 13, do: 19, odradeno: false,
      vodic: {
        ulaz: "Orgrimmar, Cleft of Shadow: spusti se u Cleft i prati tunel do lave. Najbliže moguće, Undead dolaze zeppelinom.",
        questovi: ["Searching for the Lost Satchel (Orgrimmar)", "Testing an Enemy's Strength (Orgrimmar)", "Slaying the Beast (Taragaman)", "Hidden Enemies (Thrallov lanac, nastavlja se ovdje)"],
        bossovi: [
          { ime: "Oggleflint", tekst: "Trogg vođa na početku, lagan. Dex pulla, ostali tek kad gleda u njega." },
          { ime: "Taragaman the Hungerer", tekst: "Fire Nova i Uppercut. Dex ga okrene od grupe, Niksa drži heal, melee iza leđa." },
          { ime: "Jergosh the Invoker", tekst: "Curse of Weakness i Immolate. Janica skida curse (Remove Lesser Curse), Pero i Žuga ga prekidaju." },
          { ime: "Bazzalan", tekst: "Poison i Sinister Strike. Niksa skida poison (Cure Poison)." }
        ],
        uloge: "Janica sheepa kultiste, Žuga sapa humanoide prije pulla. Troggovi dolaze u gomilama: Dex skuplja, ostali čekaju dva-tri udarca.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne trčati naprijed u lavu: troggovi se lančano pullaju.", "Zabranjeno pullanje vrijedi od prvog koraka."]
      } },
    { ime: "Ruins of Lordaeron",        gdje: "Undercity",          od: 15, do: 22, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Ispod Undercityja (Tirisfal Glades). Dobar prvi dungeon za Undead stranu ekipe.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Wailing Caverns",           gdje: "Barrens",            od: 19, do: 25, odradeno: false,
      vodic: {
        ulaz: "The Barrens, jugozapadno od Crossroadsa: špilja u brdu u obliku lica kod Lushwater Oasis. Ulaz u dungeon je duboko u špilji, iza raptora i druida.",
        questovi: ["Leaders of the Fang (Crossroads): odlične nagrade", "Serpentbloom (Apothecary, Crossroads)", "Trouble at the Docks", "Deviate Hides i Deviate Eradication (oaza ispred špilje)"],
        bossovi: [
          { ime: "Lady Anacondra", tekst: "Druid of the Fang: Sleep i Healing Touch. Pero i Žuga je prekidaju (Pummel, Kick), Niksa Earth Shockom." },
          { ime: "Lord Cobrahn", tekst: "Pretvara se u zmiju i baca poison. Niksa skida poison." },
          { ime: "Kresh", tekst: "Kornjača u vodi, lagana." },
          { ime: "Lord Pythas", tekst: "Healing Touch i Thunderclap. Prekidati heal." },
          { ime: "Skum", tekst: "Riba u vodi, Chained Bolt. Lagan." },
          { ime: "Lord Serpentis", tekst: "Zadnji Fang lord, Lightning Bolt i heal. Prekidati." },
          { ime: "Verdan the Everliving", tekst: "Velik, Grasping Vines udara cijelu grupu. Niksa healom prati." },
          { ime: "Mutanus the Devourer", tekst: "Nakon escorta Disciple of Naralex. Naralexov Terrify i Sleep: Dex drži aggro, ne razbježati se." }
        ],
        uloge: "Druidi Fanga lijeće i spavaju grupu: na svakom pullu tko god ima interrupt čeka njihov heal. Janica sheepa jednog druida.",
        loot: ["Mage: Crescent Staff (quest Leaders of the Fang)", "Rogue: Wingblade (quest Leaders of the Fang)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne preskakati escort Naralexa, inače nema Mutanusa.", "Ne ići bez puta: špilja se lako izgubi, prati Dexa."]
      } },
    { ime: "Shadowfang Keep",           gdje: "Silverpine Forest",  od: 23, do: 29, odradeno: false,
      vodic: {
        ulaz: "Silverpine Forest, dvorac na brdu iznad Pyrewood Villagea, južno od Sepulchera.",
        questovi: ["Deathstalkers in Shadowfang (Sepulcher)", "The Book of Ur (Undercity)", "Arugal Must Die (Sepulcher)"],
        bossovi: [
          { ime: "Rethilgore", tekst: "Lagan. Nakon njega oslobodite Deathstalkere u ćelijama." },
          { ime: "Razorclaw the Butcher", tekst: "Fizički jak, Dex ga drži leđima od grupe." },
          { ime: "Baron Silverlaine", tekst: "Veil of Shadow smanjuje healanje. Brzo ga srušiti." },
          { ime: "Commander Springvale", tekst: "Paladin, lijeći se i štiti: Žuga i Pero prekidaju Holy Light." },
          { ime: "Odo the Blindwatcher", tekst: "Raste kad mu ljudi oko njega umiru: prvo ubijati wolfove, pa njega." },
          { ime: "Fenrus the Devourer", tekst: "Velik vuk, Toxic Saliva. Niksa skida poison." },
          { ime: "Wolf Master Nandos", tekst: "Doziva vukove. AoE od Janice dok Dex drži vukove." },
          { ime: "Archmage Arugal", tekst: "Teleportira se po sobi, Shadow Bolt i Arugal's Curse (lik postane worgen). Svi skupa, nitko ne bježi." }
        ],
        uloge: "Worgeni u gomilama: Janica Frost Nova pa Blizzard, Dex Consecration. Sapati se mogu samo humanoidi.",
        loot: ["Rogue i Warrior: Shadowfang (rijedak drop s trasha)", "Mage: Robes of Arugal", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne pullati dva worgen paka odjednom.", "Ne otvarati vrata Fenrusove sobe prije nego je grupa puna mane."]
      } },
    { ime: "Blackfathom Deeps",         gdje: "Ashenvale",          od: 25, do: 31, odradeno: false,
      vodic: {
        ulaz: "Ashenvale, Zoram Strand na obali. Ulaz je u ruševini, dio puta pod vodom: Undead dišu pod vodom bez problema.",
        questovi: ["Allegiance to the Old Gods (Shrine of Aku'mai, Ashenvale)", "Baron Aquanis (Strange Water Globe s trasha)", "Amongst the Ruins (Zoram'gar)"],
        bossovi: [
          { ime: "Ghamoo-ra", tekst: "Kornjača, lagana." },
          { ime: "Lady Sarevess", tekst: "Naga s vojnicima: Janica sheepa jednog, Dex drži nju." },
          { ime: "Gelihast", tekst: "Murloci, Net. Lagan." },
          { ime: "Lorgus Jett", tekst: "Shaman s totemima: prvo totemi, pa on." },
          { ime: "Baron Aquanis", tekst: "Horde-only, pozvati ga kuglom s trasha. Frost Nova i Frostbolt." },
          { ime: "Twilight Lord Kelris", tekst: "Sleep i Mind Blast. Prekidati." },
          { ime: "Old Serra'kis", tekst: "U vodi. Ne odlaziti daleko od grupe." },
          { ime: "Aku'mai", tekst: "Frenzy i Poison Cloud: Dex ga drži na mjestu, ostali bježe iz oblaka, Niksa skida poison." }
        ],
        uloge: "Pred Aku'maijem upaliti četiri plamena pa dolaze valovi: Dex pokupi, Janica i Niksa AoE, svi skupa.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne plivati sam po jezeru, sve je puno moba.", "Plameni na kraju pale valove: tek kad je grupa spremna."]
      } },
    { ime: "City of Dalaran",           gdje: "Alterac Mountains",  od: 28, do: 33, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Alterac Mountains. Pazi: Horde je u gradu Dalaranu napadnuta na prvi pogled, ali dungeonu se može prići.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Razorfen Kraul",            gdje: "Barrens",            od: 30, do: 36, odradeno: false,
      vodic: {
        ulaz: "Južni Barrens, na granici s Thousand Needles: velika trnovita gomila zapadno od ceste.",
        questovi: ["Willix the Importer (escort na ulazu)", "Going, Going, Guano! (Crossroads)", "A Vengeful Fate (Thunder Bluff)", "Mortality Wanes"],
        bossovi: [
          { ime: "Roogug", tekst: "Geomancer, totemi i Lightning. Prvo totemi." },
          { ime: "Aggem Thorncurse", tekst: "Doziva Boarove, lijeći. Prekidati heal." },
          { ime: "Death Speaker Jargba", tekst: "Mind Control na jednog iz grupe: Janica sheepa kontroliranog ako treba." },
          { ime: "Overlord Ramtusk", tekst: "Fizički jak, Dex ga drži." },
          { ime: "Agathelos the Raging", tekst: "Bijesni vepar, Rampage. Kad podivlja, Niksa jače heala." },
          { ime: "Charlga Razorflank", tekst: "Purity, heal i Chain Bolt. Prvo adds, pa ona; prekidati heal." }
        ],
        uloge: "Quilboarovi su humanoidi: Žuga sapa, Janica sheepa, pullamo po jednu grupu. Vepar je ono što se ovdje NE pulla bez Dexa.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Vepar, pa još jedan vepar: tu je ime guilda nastalo.", "Patrolirajući quilboarovi se lančaju, čekati da prođu."]
      } },
    { ime: "Scarlet Monastery",         gdje: "Tirisfal, 4 krila",  od: 31, do: 45, odradeno: false,
      vodic: {
        ulaz: "Tirisfal Glades, sjeveroistočno, samostan iza Brilla. Četiri krila s odvojenim ulazima: Graveyard, Library, Armory, Cathedral.",
        questovi: ["In the Name of the Light (Undercity): Mograine, Whitemane, Doan, Herod", "Into the Scarlet Monastery (Undercity)", "Compendium of the Fallen (Library)", "Test of Lore"],
        bossovi: [
          { ime: "Graveyard: Interrogator Vishas i Bloodmage Thalnos", tekst: "Lagani, dobro za zagrijavanje." },
          { ime: "Library: Houndmaster Loksey", tekst: "Psi u čoporu, Dex skupi sve." },
          { ime: "Library: Arcanist Doan", tekst: "Na 50% Arcane Bubble pa Detonation: svi bježe od njega dok traje." },
          { ime: "Armory: Herod", tekst: "Whirlwind: kad viče, melee i Janica bježe, Dex ga drži; poslije njega val trainera kroz vrata." },
          { ime: "Cathedral: High Inquisitor Fairbanks", tekst: "Skriven iza vrata, opcionalan." },
          { ime: "Cathedral: Scarlet Commander Mograine", tekst: "Kad padne, Whitemane ga oživi: svi na Whitemane, Žuga kick, Pero Pummel." }
        ],
        uloge: "Puno humanoida: sap i sheep na svakom pullu. Scarlet monasi lijeće, ubijati ih prve.",
        loot: ["Warrior, Paladin, Shaman: Ravager (Herod)", "Warrior, Paladin: Mograine's Might", "Mage: Illusionary Rod (Doan)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["U Cathedralu ne pullati cijelu dvoranu: monasi trče po pomoć.", "Herodov val nakon smrti: stati u hodnik prije nego se otvori."]
      } },
    { ime: "The Drowned City",          gdje: "Stranglethorn Vale", od: 35, do: 40, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Stranglethorn Vale.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Razorfen Downs",            gdje: "Barrens",            od: 38, do: 44, odradeno: false,
      vodic: {
        ulaz: "Barrens, na samoj granici s Thousand Needles, istočno od Razorfen Kraula.",
        questovi: ["Bring the End (Thunder Bluff)", "Extinguishing the Idol (Belnistrasz u dungeonu)", "An Unholy Alliance"],
        bossovi: [
          { ime: "Tuten'kash", tekst: "Pojavi se na gong, pauci prvo. Poison: Niksa ga skida." },
          { ime: "Mordresh Fire Eye", tekst: "Fireball i Fire Nova. Prekidati." },
          { ime: "Glutton", tekst: "Velik, Disease Cloud. Niksa skida bolesti (Cure Disease)." },
          { ime: "Amnennar the Coldbringer", tekst: "Frost Nova i Frostbolt, doziva Frost Spectre. Adds na Janicu i Pera, Dex drži njega." }
        ],
        uloge: "Escort Belnistrasza: brani ga od valova, Dex na ulazu u krug, svi AoE. Puno undead moba: Paladin ovdje briljira.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Belnistrasz mora preživjeti escort, inače nema questa.", "Ne udarati gong prije nego su svi na manu."]
      } },
    { ime: "Krol'dok Stronghold",       gdje: "Riverglades",        od: 40, do: 45, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Riverglades (nova Forever zona, brod iz Powderfuse Porta).", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Uldaman",                   gdje: "Badlands",           od: 44, do: 50, odradeno: false,
      vodic: {
        ulaz: "Badlands, sjeverozapad. Horde obično ulazi stražnjim ulazom kroz Hall of the Keepers.",
        questovi: ["Power Stones", "Agmond's Fate", "The Platinum Discs (Disc of Norgannon)", "Uldaman Reagent Run"],
        bossovi: [
          { ime: "Revelosh", tekst: "Lagan, Chain Lightning." },
          { ime: "Ironaya", tekst: "Knockback i Arcing Smash: grupa iza leđa." },
          { ime: "Obsidian Sentinel", tekst: "Doziva manje sentinele, ubijati ih odmah." },
          { ime: "Ancient Stone Keeper", tekst: "Sand Storms po sobi, izbjegavati." },
          { ime: "Galgann Firehammer", tekst: "Fire Nova i Amplify Flames. Prekidati." },
          { ime: "Grimlok", tekst: "Troggovi; Lightning Bolt i Shrink." },
          { ime: "Archaedas", tekst: "Budi Earthen Guardiane i Wardene: Dex ih skuplja, Janica i Pero AoE, Niksa heala. Archaedas je spor, prvo adds." }
        ],
        uloge: "Dugačak dungeon: dogovoriti se idemo li cijeli ili samo do Archaedasa.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne dirati kipove u Archaedasovoj sobi prije nego je grupa spremna.", "Dwarfovi i troggovi u istom hodniku se lančaju."]
      } },
    { ime: "Zul'Farrak",                gdje: "Tanaris",            od: 45, do: 51, odradeno: false,
      vodic: {
        ulaz: "Tanaris, sjeverozapadno od Gadgetzana, veliki trolski grad u pustinji.",
        questovi: ["Divino-matic Rod", "Troll Temper", "Gahz'rilla (Mallet of Zul'Farrak, posebni quest)", "Tiara of the Deep", "Scarab Shells"],
        bossovi: [
          { ime: "Antu'sul", tekst: "Basilisci i healing ward, ubijati ward." },
          { ime: "Theka the Martyr", tekst: "Postaje imun na fizičku štetu: tad Janica i Niksa." },
          { ime: "Witch Doctor Zum'rah", tekst: "Zombiji iz grobova, Shadow Bolt. Prekidati, prvo zombiji." },
          { ime: "Nekrum i Shadowpriest Sezz'ziz", tekst: "Kraj piramide: Sezz'ziz lijeći, prekidati." },
          { ime: "Event na piramidi (Sergeant Bly)", tekst: "Valovi trolova na stepenicama: svi na vrhu, Dex Consecration, Janica Blizzard, Niksa heala. Nikome ne trčati dolje." },
          { ime: "Hydromancer Velratha", tekst: "Lagan." },
          { ime: "Gahz'rilla", tekst: "Na gong s Mallet of Zul'Farrak. Freeze Solid i Gahz'rilla Slam." },
          { ime: "Chief Ukorz Sandscalp i Ruuzlu", tekst: "Dva bossa zajedno: Ruuzlu prvo ili ga Dex drži odvojeno." }
        ],
        uloge: "Na piramidi je najviše posla za cijelu grupu: dogovor prije nego Bly otvori vrata.",
        loot: ["Warrior, Paladin: Sul'thraze the Lasher (Jang'thraze + Sang'thraze)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne ići niz stepenice na piramidi.", "Gong samo s Malletom, inače nema Gahz'rille."]
      } },
    { ime: "Alcaz Prison",              gdje: "Dustwallow Marsh",   od: 48, do: 53, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Dustwallow Marsh, otok Alcaz.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Maraudon",                  gdje: "Desolace",           od: 48, do: 54, odradeno: false,
      vodic: {
        ulaz: "Desolace, jugozapad: veliki kanjon, ulaz kroz Purple (Vyletongue) ili Orange (Noxxion) krilo.",
        questovi: ["Legends of Maraudon (Scepter of Celebras)", "Corruption of Earth and Seed", "Shadowshard Fragments", "Vyletongue Corruption"],
        bossovi: [
          { ime: "Noxxion", tekst: "Poison i spliti se na male: Dex skupi, AoE." },
          { ime: "Razorlash", tekst: "Lagan." },
          { ime: "Lord Vyletongue", tekst: "Blink i Smoke Bomb, satiri. Prekidati." },
          { ime: "Celebras the Cursed", tekst: "Za Scepter quest." },
          { ime: "Landslide", tekst: "Knockback i doziva elementale." },
          { ime: "Tinkerer Gizlock", tekst: "Bombe, raspršiti se malo." },
          { ime: "Rotgrip", tekst: "Velik krokodil, lagan." },
          { ime: "Princess Theradras", tekst: "Knockback, Dust Field: svi blizu nje, Dex okrenut." }
        ],
        uloge: "Dugačak dungeon: tri krila. Scepter of Celebras otvara prečac za sljedeći put.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne pullati elementale u velikim dvoranama bez dogovora.", "Satiri u Purple krilu stealthaju, Dex ide prvi."]
      } },
    { ime: "Sunken Temple",             gdje: "Swamp of Sorrows",   od: 52, do: 58, odradeno: false,
      vodic: {
        ulaz: "Swamp of Sorrows, potopljeni hram u jezeru; plivati do ulaza.",
        questovi: ["Class quest za 50+ (svaka klasa ima svoj)", "Into the Temple of Atal'Hakkar", "The God Hakkar (Avatar event)", "Jammal'an the Prophet"],
        bossovi: [
          { ime: "Atal'alarion", tekst: "Zagonetka s kipovima redom, pa boss. Udara jako, Dex drži." },
          { ime: "Dreamscythe i Weaver", tekst: "Zmajevi, Acid Breath: okrenuti od grupe." },
          { ime: "Jammal'an the Prophet", tekst: "Hex of Jammal'an pretvara člana u neprijatelja: ne ubijati svojega." },
          { ime: "Ogom the Wretched", tekst: "Uz Jammal'ana." },
          { ime: "Morphaz i Hazzas", tekst: "Zmajevi, isto kao gore." },
          { ime: "Avatar of Hakkar", tekst: "Event s Eggom; Cause Insanity. Niksa purga, Dex drži." },
          { ime: "Shade of Eranikus", tekst: "Sleep i Acid Breath: Dex okrenut, Niksa budi." }
        ],
        uloge: "Svaki od nas ima class quest ovdje: dogovoriti ih unaprijed.",
        loot: ["Svi: nagrade class questova", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Ne ubijati prijatelja pod Hexom.", "Zagonetka s kipovima mora biti točnim redom."]
      } },
    { ime: "Blackrock Depths",          gdje: "Blackrock Mountain", od: 52, do: 60, odradeno: false,
      vodic: {
        ulaz: "Blackrock Mountain (između Searing Gorgea i Burning Steppesa). Ulaz dolje u planini, preko lanaca.",
        questovi: ["Attunement to the Core (ako Molten Core dođe)", "The Rise of the Machines", "Dark Iron Legacy", "Kharan's Tale / The Princess's Surprise", "Ring of Law quest"],
        bossovi: [
          { ime: "High Interrogator Gerstahn", tekst: "Shadow Word: Pain i Psychic Scream: Niksa Tremor Totem." },
          { ime: "Ring of Law", tekst: "Arena s nasumičnim bossom: svi skupa, Dex prvi." },
          { ime: "Lord Roccor i Bael'Gar", tekst: "Vatreni: Fire resist pomaže." },
          { ime: "General Angerforge", tekst: "Na 30% doziva vojsku: tad brzo dolje s njim." },
          { ime: "Golem Lord Argelmach", tekst: "Golemi okolo, prvo njih." },
          { ime: "Grim Guzzler (Hurley, Plugger)", tekst: "Krčma: ne razbijati bačve ako nećete tučnjavu." },
          { ime: "Ambassador Flamelash", tekst: "Gonzo vatre iz rune: ubijati elementale." },
          { ime: "Emperor Dagran Thaurissan", tekst: "Zadnji boss. Princeza Moira ga lijeći: interrupt na nju ili je Janica sheepa." }
        ],
        uloge: "Velik dungeon, dijeli se na više večeri. Hand of Justice i dosta pre-raid BiS-a pada ovdje.",
        loot: ["Svi melee: Hand of Justice", "Warrior, Paladin, Shaman: Savage Gladiator Chain (Ring of Law)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["U Grim Guzzleru ne napadati barmena: cijela krčma napada.", "Ne skakati s lanaca na ulazu."]
      } },
    { ime: "Lower Blackrock Spire",     gdje: "Blackrock Mountain", od: 55, do: 60, odradeno: false,
      vodic: {
        ulaz: "Blackrock Mountain, gornji dio: ulaz u Spire iznad BRD-a.",
        questovi: ["Seal of Ascension (ključ za UBRS)", "Bijou's Belongings", "Warlord's Command", "The Matron Protectorate"],
        bossovi: [
          { ime: "Highlord Omokk", tekst: "Ogar, knockback. Ostali ogri prvo." },
          { ime: "Shadow Hunter Vosh'gajin", tekst: "Hex i curse: Janica skida curse." },
          { ime: "War Master Voone", tekst: "Baca sjekire, raspršeno." },
          { ime: "Mother Smolderweb", tekst: "Pauci, poison: Niksa." },
          { ime: "Urok Doomhowl", tekst: "Event sa zastavom, valovi ogra." },
          { ime: "Quartermaster Zigris", tekst: "Lagan." },
          { ime: "Halycon i Gizrul", tekst: "Vukovi, jak udarac." },
          { ime: "Overlord Wyrmthalak", tekst: "Na 50% doziva dva dodatna: Dex hvata, AoE." }
        ],
        uloge: "Ključ za UBRS se radi ovdje (Seal of Ascension). UBRS je raid za 10, zasad ne.",
        loot: ["Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Orci u hodnicima se lančaju preko mostova.", "Ne aktivirati Urokov event bez pune mane."]
      } },
    { ime: "Blackmaw Hold",             gdje: "Azshara",            od: 55, do: 60, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Azshara.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } },
    { ime: "Dire Maul",                 gdje: "Feralas, 3 krila",   od: 55, do: 60, odradeno: false,
      vodic: {
        ulaz: "Feralas, veliki grad u ruševinama. Tri krila: East (Warpwood Quarter), West (Capital Gardens), North (Gordok Commons).",
        questovi: ["Pusillin and the Elder Azj'Tordin (East)", "The Madness Within (West)", "Libram questovi", "Tribute run (North)"],
        bossovi: [
          { ime: "East: Lethtendris i Zevrim Thornhoof", tekst: "Lethtendris pojačava magijom, prekidati." },
          { ime: "East: Alzzin the Wildshaper", tekst: "Mijenja oblik, adds." },
          { ime: "West: Immol'thar", tekst: "Ubiti pet pylona pa Immol'thar: Dex ga drži, enrage na vrijeme." },
          { ime: "West: Prince Tortheldrin", tekst: "Whirlwind i Counterspell." },
          { ime: "North: King Gordok", tekst: "Tribute run: ne ubijati guardove da bi kralj ostavio škrinju." }
        ],
        uloge: "Tribute run (North) daje najviše lootova ako ostavimo stražare žive.",
        loot: ["Svi: Tribute škrinja (North)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["U Northu ne ubijati Gordok stražare ako radimo tribute.", "Pyloni u Westu: svi skupa, ne raspršiti se."]
      } },
    { ime: "Scholomance",               gdje: "Western Plaguelands", od: 58, do: 60, odradeno: false,
      vodic: {
        ulaz: "Western Plaguelands, Caer Darrow (otok usred jezera). Treba Skeleton Key (quest).",
        questovi: ["Skeleton Key (The Key to Scholomance)", "Kirtonos the Herald", "Doctor Theolen Krastinov, the Butcher", "Barov Family Fortune"],
        bossovi: [
          { ime: "Kirtonos the Herald", tekst: "Na balkon s Blood of Innocents. Disarm i Swoop." },
          { ime: "Jandice Barov", tekst: "Pravi se kopijama, nađi pravu." },
          { ime: "Rattlegore", tekst: "Fizički jak, Dex drži." },
          { ime: "Ras Frostwhisper", tekst: "Frost Armor, Fear: Niksa Tremor Totem." },
          { ime: "Darkmaster Gandling", tekst: "Teleportira po jednog u sobe: tko ode, preživi sam do kraja." }
        ],
        uloge: "Puno undeada i casterera: Dex Consecration, Niksa Disease Cleansing Totem.",
        loot: ["Mage: Magister's dijelovi (Dungeon Set 1)", "Rogue: Cadaverous Armor", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["U Viewing Roomu ne pullati cijelu sobu.", "Gandlingov teleport: ne paničariti, sobu očistiti sam."]
      } },
    { ime: "Stratholme",                gdje: "Eastern Plaguelands", od: 58, do: 60, odradeno: false,
      vodic: {
        ulaz: "Eastern Plaguelands, sjeverozapad. Dva ulaza: Live (Scarlet strana, glavna vrata) i Undead (Service Entrance, Baron Rivendare).",
        questovi: ["The Archivist", "Houses of the Holy", "Dead Man's Plea (Baron run)", "Ramstein Run"],
        bossovi: [
          { ime: "Live: The Unforgiven", tekst: "Duhovi okolo, Frost Nova." },
          { ime: "Live: Timmy the Cruel", tekst: "Pojavi se kad se očisti trg." },
          { ime: "Live: Cannon Master Willey", tekst: "Puške, raspršeno." },
          { ime: "Live: Archivist Galford i Balnazzar", tekst: "Balnazzar mind control: Janica sheep kontroliranog." },
          { ime: "Undead: Baroness Anastari, Nerub'enkan, Maleki, Ramstein", tekst: "Ziguratovi pa Ramstein: veliki odvratnik, Dex drži." },
          { ime: "Undead: Baron Rivendare", tekst: "Death Pact i Raise Dead: ubijati skelete, Niksa heala. Baron run ima 45-minutni timer." }
        ],
        uloge: "Najjači pre-raid BiS dungeon za melee (Cape of the Black Baron, Mask of the Unforgiven).",
        loot: ["Rogue: Mask of the Unforgiven", "Svi melee: Cape of the Black Baron (Baron Rivendare)", "Točan loot po bossu: Wowhead vodič ispod."],
        greske: ["Baron run: ne pullati sporedne sobe, timer teče.", "Ne trčati kroz Live stranu s pola hp-a, sve se lanča."]
      } },
    { ime: "Shaper's Terrace",          gdje: "Un'Goro Crater",     od: 58, do: 60, novo: true, odradeno: false,
      vodic: { nepoznato: true, ulaz: "Un'Goro Crater.", napomena: "Forever je ovaj dungeon tek dodao. Bossovi, taktike i loot još nisu javno poznati; vodič dopunjavamo kad se zna." } }
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

  // Upute: opća pravila guilda
  upute: [
    { naslov: "Tko pulla", tekst: "Pulla samo Dex. Kad Dexa nema, pulla Pero. Svi ostali čekaju da mob gleda u tanka." },
    { naslov: "Loot", tekst: "Need samo za svoju klasu i glavni spec, za ostalo greed. Quest itemi svima, BoE epici: roll svi. Spor rješava /roll." },
    { naslov: "Mana je zakon", tekst: "Kad Niksa kaže mana, svi stanu i piju. Bez heala nema pulla." },
    { naslov: "Logiranje", tekst: "Javi kad ulaziš i izlaziš. Usred dungeona se ne odlazi bez najave; logout u gradu ili s vrećom za rested XP." },
    { naslov: "AH disciplina", tekst: "Sirovine prvo ekipi po tablici ispod, višak na AH. Nikad ispod cijene kod vendora; koristi Auctionator." },
    { naslov: "Banka guilda", tekst: "Jedan bank alt drži zajedničke materijale i gold za recepte. Za mountove štedi svatko sam, ne troši na sitnice." }
  ],

  // Ekonomija: tko skuplja, tko izrađuje, kome ide; Vanilla 1.12 prijedlog
  ekonomija: {
    prijedlog: "Karkensu je druga profesija slobodna: prijedlog je Tailoring, jer cloth pada svima, torbe trebaju svima, a Robe of the Archmage je njegov pre-raid BiS.",
    lanci: [
      { sirovina: "Koža", profesija: "Skinning", skupljaju: ["Pero", "Žuga", "Niksa"], izraduje: "Niksa", zanat: "Leatherworking", od: 40,
        proizvodi: ["Armor kitovi za sve", "Leather za Žugu, mail za Niksu", "Devilsaur Gauntlets i Leggings (BiS za Pera i Žugu)"] },
      { sirovina: "Ruda", profesija: "Mining", skupljaju: ["Pero", "Žuga"], izraduje: "Pero", zanat: "Engineering", od: 40,
        proizvodi: ["Bombe i dinamit za dungeone", "Goggles i Target Dummy", "Thorium za Arcanite na 60"] },
      { sirovina: "Bilje", profesija: "Herbalism", skupljaju: ["Karkens", "Dex", "Niksa"], izraduje: "Dex", zanat: "Alchemy", od: 40,
        proizvodi: ["Healing i Mana potioni", "Elixiri za dungeone", "Flasks i Arcanite transmute na 60"] },
      { sirovina: "Cloth", profesija: "drop sa svih moba", skupljaju: ["Svi"], izraduje: "Karkens", zanat: "Tailoring", od: 5, prijedlog: true,
        proizvodi: ["Torbe za cijelu ekipu", "Robe of the Archmage", "Runecloth višak na AH"] }
    ],
    duguje: [
      { tko: "Pero, Žuga", kome: "Niksa", sto: "Sva koža", kad: "do 60" },
      { tko: "Žuga", kome: "Pero", sto: "Ruda koju Pero treba za Engineering", kad: "od 40" },
      { tko: "Karkens, Niksa", kome: "Dex", sto: "Bilje", kad: "Niksa do 40, Karkens stalno" },
      { tko: "Svi", kome: "Karkens", sto: "Cloth", kad: "ako uzme Tailoring" },
      { tko: "Pero, Žuga", kome: "Dex", sto: "Thorium za Arcanite", kad: "na 60" },
      { tko: "Niksa", kome: "Pero, Žuga", sto: "Armor kitovi, Devilsaur set", kad: "od 40" },
      { tko: "Dex", kome: "Svi", sto: "Potioni i flaskovi", kad: "od 40" },
      { tko: "Pero", kome: "Svi", sto: "Bombe za teške pullove", kad: "od 40" }
    ],
    ciljevi: [
      { naziv: "Prvi mount", level: 40, gold: 120, napomena: "100 g trening + 20 g mount, 60% brže. Honored s Hordom: 10% manje." },
      { naziv: "Brzi mount", level: 60, gold: 1200, napomena: "1000 g trening + 200 g mount, 100% brže." }
    ],
    // procjena zarade po igraču dnevno uz 2–3 h igre (min, max u goldu)
    dnevno: [
      { od: 1, do: 20, min: 1, max: 3 },
      { od: 20, do: 40, min: 5, max: 15 },
      { od: 40, do: 60, min: 20, max: 40 },
      { od: 60, do: 60, min: 50, max: 100 }
    ],
    prodaja: [
      { faza: "do 20", tekst: "Linen Cloth, Light Leather, Copper Bar, Peacebloom i Silverleaf. Sitniš, ali to je prvi gold za trenera." },
      { faza: "20–40", tekst: "Medium i Heavy Leather, Iron Ore, Silk i Mageweave, Kingsblood i Briarthorn. Iron i Mageweave se dobro prodaju." },
      { faza: "40–60", tekst: "Thick i Rugged Leather, Mithril i Thorium, Runecloth, Sungrass i Dreamfoil. Devilsaur Leather je najskuplja koža." },
      { faza: "60", tekst: "Arcane Crystal, Arcanite (Dexov dnevni transmute), flaskovi i Black Lotus ako ga netko nađe." }
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
