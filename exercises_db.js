// exercises_db.js — Base d'exercices EduPrimaire CI
// Source : Cahiers d'activités CI, MEMP Bénin 2024 (Français 42 leçons, Maths SA1-SA7)
// Format : MCQ adaptatif 4 choix, difficulté b calibrée sur l'échelle Rasch
// Contexte culturel béninois : prénoms (Koffi, Fèmi, Toto, Aïssatou, Wabi...), fruits, marchés

const EXERCISES_DB = {
  version: "2.0",
  updated: "2026-06",
  source: "MEMP Bénin — Cahiers CI Français (2024) & Maths CI Édition 2021",

  // ──────────────────────────────────────────────────────────────────
  // SUJETS
  // ──────────────────────────────────────────────────────────────────
  subjects: [
    { id:"francais", label:"Français", icon:"📖", color:"#4ECDC4" },
    { id:"maths",    label:"Maths",    icon:"🔢", color:"#C77DFF" },
  ],

  // ──────────────────────────────────────────────────────────────────
  // PLAN DE LEÇONS (progression officielle MEMP Bénin)
  // ──────────────────────────────────────────────────────────────────
  lessons: [
    // FRANÇAIS — Séquence 1 : Voyelles et premières consonnes
    { id:"fr01", classe:"CI", sub:"francais", num:1,  title:"La lettre a",           icon:"🍍", topics:["lettre_a"],            unlock_theta:-3.0 },
    { id:"fr02", classe:"CI", sub:"francais", num:2,  title:"La lettre l",           icon:"🦁", topics:["lettre_l"],            unlock_theta:-2.8 },
    { id:"fr03", classe:"CI", sub:"francais", num:3,  title:"La lettre t",           icon:"✏️", topics:["lettre_t"],            unlock_theta:-2.6 },
    { id:"fr04", classe:"CI", sub:"francais", num:4,  title:"La lettre o",           icon:"🍩", topics:["lettre_o"],            unlock_theta:-2.4 },
    { id:"fr05", classe:"CI", sub:"francais", num:5,  title:"La lettre p",           icon:"🥥", topics:["lettre_p"],            unlock_theta:-2.2 },
    { id:"fr06", classe:"CI", sub:"francais", num:6,  title:"La lettre i",           icon:"🌿", topics:["lettre_i"],            unlock_theta:-2.0 },
    { id:"fr07", classe:"CI", sub:"francais", num:7,  title:"La lettre b",           icon:"🌳", topics:["lettre_b"],            unlock_theta:-1.9 },
    { id:"fr08", classe:"CI", sub:"francais", num:8,  title:"La lettre é",           icon:"📺", topics:["lettre_e_accent"],     unlock_theta:-1.8 },
    // FRANÇAIS — Séquence 2 : Nouvelles lettres + mots outils
    { id:"fr09", classe:"CI", sub:"francais", num:9,  title:"La lettre m",           icon:"🛵", topics:["lettre_m"],            unlock_theta:-1.7 },
    { id:"fr11", classe:"CI", sub:"francais", num:11, title:"La lettre e",           icon:"⚽", topics:["lettre_e"],            unlock_theta:-1.5 },
    { id:"fr12", classe:"CI", sub:"francais", num:12, title:"La lettre d",           icon:"⏰", topics:["lettre_d"],            unlock_theta:-1.4 },
    { id:"fr13", classe:"CI", sub:"francais", num:13, title:"Mots outils le/la/l'",  icon:"🔤", topics:["mots_outils_le_la"],   unlock_theta:-1.2 },
    { id:"fr14", classe:"CI", sub:"francais", num:14, title:"La lettre u",           icon:"🎮", topics:["lettre_u"],            unlock_theta:-1.1 },
    { id:"fr15", classe:"CI", sub:"francais", num:15, title:"La lettre n",           icon:"🍌", topics:["lettre_n"],            unlock_theta:-1.0 },
    { id:"fr16", classe:"CI", sub:"francais", num:16, title:"Mots outils un/une",    icon:"1️⃣", topics:["mots_outils_un_une"],  unlock_theta:-0.9 },
    { id:"fr17", classe:"CI", sub:"francais", num:17, title:"La lettre s",           icon:"🥗", topics:["lettre_s"],            unlock_theta:-0.8 },
    { id:"fr18", classe:"CI", sub:"francais", num:18, title:"La lettre f",           icon:"🌿", topics:["lettre_f"],            unlock_theta:-0.7 },
    { id:"fr19", classe:"CI", sub:"francais", num:19, title:"Le mot outil est",      icon:"📖", topics:["phrase_est"],          unlock_theta:-0.6 },
    { id:"fr20", classe:"CI", sub:"francais", num:20, title:"La lettre è",           icon:"👧", topics:["lettre_e_grave"],      unlock_theta:-0.5 },
    // FRANÇAIS — Séquence 3 : Lettres avancées + grammaire
    { id:"fr23", classe:"CP", sub:"francais", num:23, title:"La lettre c",           icon:"🥥", topics:["lettre_c"],            unlock_theta:-0.4 },
    { id:"fr28", classe:"CP", sub:"francais", num:28, title:"La lettre r",           icon:"📻", topics:["lettre_r"],            unlock_theta:-0.2 },
    { id:"fr29", classe:"CP", sub:"francais", num:29, title:"La lettre h",           icon:"🦉", topics:["lettre_h"],            unlock_theta: 0.0 },
    { id:"fr30", classe:"CP", sub:"francais", num:30, title:"Mots outils il/elle",   icon:"👫", topics:["mots_outils_il_elle"], unlock_theta: 0.0 },
    { id:"fr37", classe:"CP", sub:"francais", num:37, title:"Le mot outil et",       icon:"🔗", topics:["mot_outil_et"],        unlock_theta: 0.2 },
    // FRANÇAIS — Séquence 4 : Groupes de sons
    { id:"fr38", classe:"CP", sub:"francais", num:38, title:"Le son ou",             icon:"🐔", topics:["groupe_ou"],           unlock_theta: 0.2 },
    { id:"fr40", classe:"CP", sub:"francais", num:40, title:"Le son au",             icon:"🚗", topics:["groupe_au"],           unlock_theta: 0.5 },
    { id:"fr41", classe:"CP", sub:"francais", num:41, title:"Le son on",             icon:"🍈", topics:["groupe_on"],           unlock_theta: 0.6 },
    { id:"fr42", classe:"CP", sub:"francais", num:42, title:"Le son om",             icon:"🥦", topics:["groupe_om"],           unlock_theta: 0.7 },
    // MATHS — SA3 : Nombres 0-5 et premières additions
    { id:"ma01", classe:"CI", sub:"maths", num:1,  title:"Nombres 1 à 3",           icon:"1️⃣", topics:["nombres_1_3"],         unlock_theta:-3.0 },
    { id:"ma02", classe:"CI", sub:"maths", num:2,  title:"Nombres 0 à 5",           icon:"🖐️", topics:["nombres_0_5"],         unlock_theta:-2.5 },
    { id:"ma03", classe:"CI", sub:"maths", num:3,  title:"Additions jusqu'à 5",     icon:"➕", topics:["addition_0_5"],        unlock_theta:-2.2 },
    // MATHS — SA4 : Nombres 5-9 et additions plus grandes
    { id:"ma04", classe:"CI", sub:"maths", num:4,  title:"Nombres 5 à 7",           icon:"6️⃣", topics:["nombres_5_7"],         unlock_theta:-1.5 },
    { id:"ma05", classe:"CI", sub:"maths", num:5,  title:"Nombres 7 à 9",           icon:"9️⃣", topics:["nombres_7_9"],         unlock_theta:-1.2 },
    { id:"ma06", classe:"CI", sub:"maths", num:6,  title:"Additions jusqu'à 9",     icon:"🔢", topics:["addition_0_9"],        unlock_theta:-1.0 },
    // MATHS — SA5 : Le nombre 10
    { id:"ma07", classe:"CI", sub:"maths", num:7,  title:"Le nombre 10",            icon:"🔟", topics:["nombre_10"],           unlock_theta:-0.5 },
    { id:"ma08", classe:"CI", sub:"maths", num:8,  title:"Additions jusqu'à 10",    icon:"✋", topics:["addition_0_10"],       unlock_theta:-0.3 },
    // MATHS — SA6 : Nombres 10-20
    { id:"ma09", classe:"CP", sub:"maths", num:9,  title:"Nombres 10 à 15",         icon:"📏", topics:["nombres_10_15"],       unlock_theta: 0.0 },
    { id:"ma10", classe:"CP", sub:"maths", num:10, title:"Additions jusqu'à 15",    icon:"✍️", topics:["addition_0_15"],       unlock_theta: 0.3 },
    { id:"ma11", classe:"CP", sub:"maths", num:11, title:"Nombres 16 à 20",         icon:"2️⃣", topics:["nombres_16_20"],       unlock_theta: 0.7 },
    // MATHS — SA7 : Petits problèmes
    { id:"ma12", classe:"CP", sub:"maths", num:12, title:"Petits problèmes",        icon:"🧩", topics:["problemes"],           unlock_theta: 1.0 },
  ],

  // ──────────────────────────────────────────────────────────────────
  // EXERCICES — 120+ items calibrés sur le curriculum CI officiel
  // b = difficulté Rasch : -3 (très facile) → +2 (très difficile)
  // Calibration : θ initial d'un élève CI = -2.0
  // ──────────────────────────────────────────────────────────────────
  exercises: [

    // ══════════ FRANÇAIS — Leçon 1 : La lettre a ══════════
    { id:"fr_a_01", sub:"francais", lesson:"fr01", topic:"lettre_a", b:-2.5, visual:"🍍",
      question:"Quel son est la lettre A ?",
      audioQuestion:"Lequel de ces sons est la lettre A ? Touche la bonne réponse.",
      choices:["a","o","l","e"], choiceAudio:["a","o","l","e"], correct:0,
      expl:"A comme dans ANANAS !", audioExpl:"Bravo ! A est une voyelle, comme dans ananas." },

    { id:"fr_a_02", sub:"francais", lesson:"fr01", topic:"lettre_a", b:-2.3, visual:"🍌",
      question:"Lequel contient la lettre A ?",
      audioQuestion:"Dans lequel de ces mots entends-tu le son A ?",
      choices:["ananas","lolo","bol","épi"], choiceAudio:["ananas","lolo","bol","épi"], correct:0,
      expl:"ANANAS a trois A : a-na-nas !", audioExpl:"Parfait ! Ananas contient trois fois la lettre A." },

    // ══════════ FRANÇAIS — Leçon 2 : La lettre l ══════════
    { id:"fr_l_01", sub:"francais", lesson:"fr02", topic:"lettre_l", b:-2.4, visual:"🦁",
      question:"L + A = ?",
      audioQuestion:"La lettre L plus la lettre A, ça fait quelle syllabe ?",
      choices:["la","al","lo","li"], choiceAudio:["la","al","lo","li"], correct:0,
      expl:"L + A = 'la'. Consonne + Voyelle = Syllabe !", audioExpl:"Excellent ! L plus A font la syllabe LA." },

    { id:"fr_l_02", sub:"francais", lesson:"fr02", topic:"lettre_l", b:-2.2, visual:"👧",
      question:"la + la = ?",
      audioQuestion:"la plus la, ça donne quel mot ?",
      choices:["alla","lala","lola","allo"], choiceAudio:["alla","lala","lola","allo"], correct:1,
      expl:"la + la = LALA ! On colle les syllabes.", audioExpl:"Bravo ! La plus la font le mot lala." },

    { id:"fr_l_03", sub:"francais", lesson:"fr02", topic:"lettre_l", b:-2.0, visual:"👩",
      question:"Lequel contient deux L ?",
      audioQuestion:"Quel mot contient deux fois la lettre L ?",
      choices:["tata","Lola","mama","épi"], choiceAudio:["tata","Lola","mama","épi"], correct:1,
      expl:"LOLA a deux L : L-o-l-a !", audioExpl:"Bien ! Lola contient deux lettres L." },

    // ══════════ FRANÇAIS — Leçon 3 : La lettre t ══════════
    { id:"fr_t_01", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-2.0, visual:"🍅",
      question:"Entoure le son T",
      audioQuestion:"Lequel de ces sons est la lettre T ?",
      choices:["t","a","e","l"], choiceAudio:["t","a","e","l"], correct:0,
      expl:"T comme dans TATA !", audioExpl:"Bravo ! T comme dans tata." },

    { id:"fr_t_02", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-1.8, visual:"🥁",
      question:"T + A = ?",
      audioQuestion:"T plus A, ça fait quelle syllabe ?",
      choices:["ta","at","la","pa"], choiceAudio:["ta","at","la","pa"], correct:0,
      expl:"T + A = 'ta' ! Consonne puis voyelle.", audioExpl:"Excellent ! T et A font la syllabe ta." },

    { id:"fr_t_03", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-1.6, visual:"👨‍👦",
      question:"ta + la = ?",
      audioQuestion:"ta plus la, ça donne quel mot ?",
      choices:["lata","talo","tala","atla"], choiceAudio:["lata","talo","tala","atla"], correct:2,
      expl:"ta + la = TALA ! On colle les syllabes.", audioExpl:"Très bien ! ta plus la font le mot tala." },

    { id:"fr_t_04", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-1.5, visual:"✏️",
      question:"Lequel commence par T ?",
      audioQuestion:"Lequel de ces mots commence par T ?",
      choices:["lala","papa","tata","mama"], choiceAudio:["lala","papa","tata","mama"], correct:2,
      expl:"TATA commence par T !", audioExpl:"Bravo ! Tata commence par T : t-a-t-a." },

    // ══════════ FRANÇAIS — Leçon 4 : La lettre o ══════════
    { id:"fr_o_01", sub:"francais", lesson:"fr04", topic:"lettre_o", b:-2.0, visual:"🍩",
      question:"T + O = ?",
      audioQuestion:"T plus O, ça donne quelle syllabe ?",
      choices:["to","ot","lo","po"], choiceAudio:["to","ot","lo","po"], correct:0,
      expl:"T + O = 'to'. to+to = TOTO !", audioExpl:"Excellent ! T et O font la syllabe to." },

    { id:"fr_o_02", sub:"francais", lesson:"fr04", topic:"lettre_o", b:-1.8, visual:"🚗",
      question:"lo + to = ?",
      audioQuestion:"lo plus to, quel mot ?",
      choices:["tolo","loto","otto","tolo"], choiceAudio:["tolo","loto","otto","tolo"], correct:1,
      expl:"lo + to = LOTO ! Le jeu de loto.", audioExpl:"Bravo ! lo plus to font le mot loto." },

    // ══════════ FRANÇAIS — Leçon 5 : La lettre p ══════════
    { id:"fr_p_01", sub:"francais", lesson:"fr05", topic:"lettre_p", b:-1.8, visual:"🥥",
      question:"P + A = ?",
      audioQuestion:"P plus A, quelle syllabe ?",
      choices:["po","ap","pa","pi"], choiceAudio:["po","ap","pa","pi"], correct:2,
      expl:"P + A = 'pa'. pa+pa = PAPA !", audioExpl:"Bien ! P et A font pa." },

    { id:"fr_p_02", sub:"francais", lesson:"fr05", topic:"lettre_p", b:-1.6, visual:"🐓",
      question:"pa + pa = ?",
      audioQuestion:"pa plus pa, quel mot ?",
      choices:["popo","papa","polo","palo"], choiceAudio:["popo","papa","polo","palo"], correct:1,
      expl:"pa + pa = PAPA !", audioExpl:"Parfait ! pa plus pa font papa." },

    // ══════════ FRANÇAIS — Leçon 6 : La lettre i ══════════
    { id:"fr_i_01", sub:"francais", lesson:"fr06", topic:"lettre_i", b:-1.8, visual:"🌿",
      question:"P + I = ?",
      audioQuestion:"P plus I, quelle syllabe ?",
      choices:["pi","ip","pa","li"], choiceAudio:["pi","ip","pa","li"], correct:0,
      expl:"P + I = 'pi'. pi+po = PIPO !", audioExpl:"Bravo ! P et I font pi." },

    { id:"fr_i_02", sub:"francais", lesson:"fr06", topic:"lettre_i", b:-1.6, visual:"👧",
      question:"po + li = ?",
      audioQuestion:"po plus li, quel mot ? Un enfant bien élevé.",
      choices:["lipo","opli","poli","polo"], choiceAudio:["lipo","opli","poli","polo"], correct:2,
      expl:"po + li = POLI ! Quelqu'un de bien élevé.", audioExpl:"Excellent ! po plus li font le mot poli." },

    // ══════════ FRANÇAIS — Leçon 7 : La lettre b ══════════
    { id:"fr_b_01", sub:"francais", lesson:"fr07", topic:"lettre_b", b:-1.7, visual:"🌳",
      question:"B + A = ?",
      audioQuestion:"B plus A, quelle syllabe ?",
      choices:["ba","ab","bo","bi"], choiceAudio:["ba","ab","bo","bi"], correct:0,
      expl:"B + A = 'ba'. ba+la = BALA !", audioExpl:"Bien ! B et A font la syllabe ba." },

    { id:"fr_b_02", sub:"francais", lesson:"fr07", topic:"lettre_b", b:-1.5, visual:"🌳",
      question:"Lequel contient B ?",
      audioQuestion:"Dans lequel de ces mots entends-tu la lettre B ?",
      choices:["lolo","mama","baobab","tata"], choiceAudio:["lolo","mama","baobab","tata"], correct:2,
      expl:"BAOBAB — le grand arbre du Bénin a deux B !", audioExpl:"Parfait ! Baobab contient la lettre B. Le grand arbre du Bénin !" },

    // ══════════ FRANÇAIS — Leçon 8 : La lettre é ══════════
    { id:"fr_eac_01", sub:"francais", lesson:"fr08", topic:"lettre_e_accent", b:-1.6, visual:"📺",
      question:"té + lé = ?",
      audioQuestion:"té plus lé, quel appareil ?",
      choices:["télé","lété","lélé","téte"], choiceAudio:["télé","lété","lélé","téte"], correct:0,
      expl:"té + lé = TÉLÉ ! La télévision.", audioExpl:"Bravo ! té plus lé font le mot télé." },

    { id:"fr_eac_02", sub:"francais", lesson:"fr08", topic:"lettre_e_accent", b:-1.4, visual:"👶",
      question:"bé + bé = ?",
      audioQuestion:"bé plus bé, quel mot ?",
      choices:["bébo","lébé","bébé","obéb"], choiceAudio:["bébo","lébé","bébé","obéb"], correct:2,
      expl:"bé + bé = BÉBÉ ! Un tout petit enfant.", audioExpl:"Excellent ! bé plus bé font le mot bébé." },

    // ══════════ FRANÇAIS — Leçon 9 : La lettre m ══════════
    { id:"fr_m_01", sub:"francais", lesson:"fr09", topic:"lettre_m", b:-1.5, visual:"🛵",
      question:"mo + to = ?",
      audioQuestion:"mo plus to, quel véhicule ?",
      choices:["tomo","moto","toto","momo"], choiceAudio:["tomo","moto","toto","momo"], correct:1,
      expl:"mo + to = MOTO ! Le véhicule africain.", audioExpl:"Très bien ! mo plus to font le mot moto." },

    { id:"fr_m_02", sub:"francais", lesson:"fr09", topic:"lettre_m", b:-1.3, visual:"👵",
      question:"mé + mé = ?",
      audioQuestion:"mé plus mé, quel mot affectueux ?",
      choices:["éméme","méme","mémé","émèm"], choiceAudio:["éméme","méme","mémé","émèm"], correct:2,
      expl:"mé + mé = MÉMÉ ! La grand-mère.", audioExpl:"Bravo ! mé plus mé font le mot mémé." },

    // ══════════ FRANÇAIS — Leçon 11 : La lettre e ══════════
    { id:"fr_e_01", sub:"francais", lesson:"fr11", topic:"lettre_e", b:-1.3, visual:"⚽",
      question:"P + E = ?",
      audioQuestion:"P plus E, quelle syllabe ?",
      choices:["pe","ep","pa","pi"], choiceAudio:["pe","ep","pa","pi"], correct:0,
      expl:"P + E = 'pe'. pe+lé = PELÉ !", audioExpl:"Bien ! P et E font la syllabe pe, comme dans Pelé." },

    { id:"fr_e_02", sub:"francais", lesson:"fr11", topic:"lettre_e", b:-1.1, visual:"🔦",
      question:"pi + le = ?",
      audioQuestion:"pi plus le, quel mot ? Comme la pile électrique.",
      choices:["lipi","peli","pile","ipel"], choiceAudio:["lipi","peli","pile","ipel"], correct:2,
      expl:"pi + le = PILE ! La pile électrique.", audioExpl:"Parfait ! pi plus le font le mot pile." },

    // ══════════ FRANÇAIS — Leçon 12 : La lettre d ══════════
    { id:"fr_d_01", sub:"francais", lesson:"fr12", topic:"lettre_d", b:-1.2, visual:"⏰",
      question:"mi + di = ?",
      audioQuestion:"mi plus di, quel mot ? Le milieu du jour.",
      choices:["dimi","mido","midi","didi"], choiceAudio:["dimi","mido","midi","didi"], correct:2,
      expl:"mi + di = MIDI ! À midi, on mange.", audioExpl:"Excellent ! mi plus di font le mot midi." },

    { id:"fr_d_02", sub:"francais", lesson:"fr12", topic:"lettre_d", b:-1.0, visual:"🃏",
      question:"Lequel commence par D ?",
      audioQuestion:"Lequel de ces mots commence par D ?",
      choices:["bébé","dé","tata","lolo"], choiceAudio:["bébé","dé","tata","lolo"], correct:1,
      expl:"DÉ commence par D. Le dé à jouer.", audioExpl:"Bravo ! Dé commence par D." },

    // ══════════ FRANÇAIS — Leçon 13 : Mots outils le/la/l' ══════════
    { id:"fr_art_01", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-1.0, visual:"🥭",
      question:"___ ananas",
      audioQuestion:"Le, la ou l'apostrophe ? Quel mot met-on devant ananas ?",
      choices:["le","la","l'","un"], choiceAudio:["le","la","l apostrophe","un"], correct:2,
      expl:"L' devant une voyelle. L'ANANAS !", audioExpl:"Parfait ! L'ananas car ananas commence par A, une voyelle." },

    { id:"fr_art_02", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-0.8, visual:"🍌",
      question:"___ banane",
      audioQuestion:"La banane ou le banane ?",
      choices:["le","la","l'","les"], choiceAudio:["le","la","l apostrophe","les"], correct:1,
      expl:"LA banane — féminin.", audioExpl:"Bravo ! La banane. Banane est un mot féminin." },

    { id:"fr_art_03", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-0.6, visual:"🛵",
      question:"___ moto",
      audioQuestion:"Le moto ou la moto ?",
      choices:["le","la","l'","les"], choiceAudio:["le","la","l apostrophe","les"], correct:0,
      expl:"LE moto — masculin au Bénin.", audioExpl:"Excellent ! Le moto. Moto est masculin." },

    { id:"fr_art_04", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-0.4, visual:"🌿",
      question:"___ épi",
      audioQuestion:"Le épi ou l'épi ?",
      choices:["le","la","l'","un"], choiceAudio:["le","la","l apostrophe","un"], correct:2,
      expl:"L'ÉPI — épi commence par une voyelle.", audioExpl:"Parfait ! L'épi. Épi commence par E, une voyelle, donc l'." },

    // ══════════ FRANÇAIS — Leçon 14 : La lettre u ══════════
    { id:"fr_u_01", sub:"francais", lesson:"fr14", topic:"lettre_u", b:-1.0, visual:"🎮",
      question:"lu + do = ?",
      audioQuestion:"lu plus do, quel jeu ?",
      choices:["dolu","ludo","dulo","dluo"], choiceAudio:["dolu","ludo","dulo","dluo"], correct:1,
      expl:"lu + do = LUDO ! Le jeu de ludo.", audioExpl:"Bravo ! lu plus do font le mot ludo." },

    // ══════════ FRANÇAIS — Leçon 15 : La lettre n ══════════
    { id:"fr_n_01", sub:"francais", lesson:"fr15", topic:"lettre_n", b:-1.3, visual:"🍌",
      question:"ba + na + ne = ?",
      audioQuestion:"ba plus na plus ne, quel fruit ?",
      choices:["banana","banane","banale","babane"], choiceAudio:["banana","banane","banale","babane"], correct:1,
      expl:"ba+na+ne = BANANE ! 3 syllabes.", audioExpl:"Excellent ! ba plus na plus ne font banane." },

    { id:"fr_n_02", sub:"francais", lesson:"fr15", topic:"lettre_n", b:-1.1, visual:"🌙",
      question:"lu + ne = ?",
      audioQuestion:"lu plus ne, quel astre du soir ?",
      choices:["lune","nelu","unel","luna"], choiceAudio:["lune","nelu","unel","luna"], correct:0,
      expl:"lu + ne = LUNE ! La lune du soir.", audioExpl:"Bien ! lu plus ne font le mot lune." },

    // ══════════ FRANÇAIS — Leçon 16 : Mots outils un/une ══════════
    { id:"fr_un_01", sub:"francais", lesson:"fr16", topic:"mots_outils_un_une", b:-0.8, visual:"🫙",
      question:"___ bol",
      audioQuestion:"Un bol ou une bol ?",
      choices:["un","une","le","la"], choiceAudio:["un","une","le","la"], correct:0,
      expl:"UN bol — masculin.", audioExpl:"Bravo ! Un bol. Bol est masculin." },

    { id:"fr_un_02", sub:"francais", lesson:"fr16", topic:"mots_outils_un_une", b:-0.6, visual:"🍌",
      question:"___ banane",
      audioQuestion:"Un banane ou une banane ?",
      choices:["un","une","le","la"], choiceAudio:["un","une","le","la"], correct:1,
      expl:"UNE banane — féminin.", audioExpl:"Parfait ! Une banane. Banane est féminin." },

    { id:"fr_un_03", sub:"francais", lesson:"fr16", topic:"mots_outils_un_une", b:-0.4, visual:"🚰",
      question:"___ pipe (tuyau)",
      audioQuestion:"Un pipe ou une pipe ?",
      choices:["un","une","le","la"], choiceAudio:["un","une","le","la"], correct:1,
      expl:"UNE pipe — féminin.", audioExpl:"Bien ! Une pipe. Pipe est féminin." },

    // ══════════ FRANÇAIS — Leçon 17 : La lettre s ══════════
    { id:"fr_s_01", sub:"francais", lesson:"fr17", topic:"lettre_s", b:-1.0, visual:"🥗",
      question:"sa + la + de = ?",
      audioQuestion:"sa plus la plus de, quel légume frais ?",
      choices:["lasade","salad","salade","salado"], choiceAudio:["lasade","salad","salade","salado"], correct:2,
      expl:"sa+la+de = SALADE ! Fèmi lave la salade.", audioExpl:"Excellent ! sa plus la plus de font le mot salade." },

    { id:"fr_s_02", sub:"francais", lesson:"fr17", topic:"lettre_s", b:-0.8, visual:"📅",
      question:"sa + me + di = ?",
      audioQuestion:"sa plus me plus di, quel jour de la semaine ?",
      choices:["dimanche","samedi","mercredi","lundi"], choiceAudio:["dimanche","samedi","mercredi","lundi"], correct:1,
      expl:"sa+me+di = SAMEDI ! Le jour du marché.", audioExpl:"Parfait ! Samedi, c'est le grand marché !" },

    // ══════════ FRANÇAIS — Leçon 18 : La lettre f ══════════
    { id:"fr_f_01", sub:"francais", lesson:"fr18", topic:"lettre_f", b:-1.0, visual:"🌿",
      question:"fi + la + o = ?",
      audioQuestion:"fi plus la plus o, quel arbre côtier du Bénin ?",
      choices:["baobab","filao","kapok","mango"], choiceAudio:["baobab","filao","kapok","mango"], correct:1,
      expl:"fi+la+o = FILAO ! L'arbre de la côte béninoise.", audioExpl:"Excellent ! fi plus la plus o font le mot filao." },

    { id:"fr_f_02", sub:"francais", lesson:"fr18", topic:"lettre_f", b:-0.8, visual:"👨",
      question:"Lequel contient F ?",
      audioQuestion:"Lequel de ces prénoms contient la lettre F ?",
      choices:["Toto","Lili","Fofana","Koffi"], choiceAudio:["Toto","Lili","Fofana","Koffi"], correct:2,
      expl:"FOFANA a deux F ! Un prénom du Bénin.", audioExpl:"Bravo ! Fofana contient deux fois la lettre F." },

    // ══════════ FRANÇAIS — Leçon 19 : Le mot outil EST ══════════
    { id:"fr_est_01", sub:"francais", lesson:"fr19", topic:"phrase_est", b:-0.5, visual:"👧",
      question:"Fèmi ___ petite.",
      audioQuestion:"Fèmi... petite. Est ou et ?",
      choices:["et","est","es","ai"], choiceAudio:["et","est","es","ai"], correct:1,
      expl:"Fèmi EST petite. EST = verbe être.", audioExpl:"Très bien ! Fèmi est petite. On utilise est, le verbe être." },

    { id:"fr_est_02", sub:"francais", lesson:"fr19", topic:"phrase_est", b:-0.3, visual:"🤒",
      question:"Toto ___ malade.",
      audioQuestion:"Toto... malade. Quel mot manque ?",
      choices:["et","ou","est","es"], choiceAudio:["et","ou","est","es"], correct:2,
      expl:"Toto EST malade. EST = il est, verbe être.", audioExpl:"Parfait ! Toto est malade. Est, c'est le verbe être." },

    { id:"fr_est_03", sub:"francais", lesson:"fr19", topic:"phrase_est", b:-0.1, visual:"😊",
      question:"Momo ___ poli.",
      audioQuestion:"Momo... poli. Est ou et ?",
      choices:["et","est","es","ai"], choiceAudio:["et","est","es","ai"], correct:1,
      expl:"Momo EST poli. EST = verbe être.", audioExpl:"Bravo ! Momo est poli. On dit est pour il/elle." },

    // ══════════ FRANÇAIS — Leçon 20 : La lettre è ══════════
    { id:"fr_eg_01", sub:"francais", lesson:"fr20", topic:"lettre_e_grave", b:-0.8, visual:"👧",
      question:"Fè + mi = ?",
      audioQuestion:"Fè plus mi, quel prénom béninois ?",
      choices:["Mifè","Fèmi","Fémi","Méfi"], choiceAudio:["Mifè","Fèmi","Fémi","Méfi"], correct:1,
      expl:"Fè + mi = FÈMI ! Un prénom béninois.", audioExpl:"Bravo ! Fè plus mi font le prénom Fèmi." },

    { id:"fr_eg_02", sub:"francais", lesson:"fr20", topic:"lettre_e_grave", b:-0.5, visual:"🧹",
      question:"Lequel contient è ?",
      audioQuestion:"Lequel de ces mots a le son è ?",
      choices:["tata","mène","lolo","mama"], choiceAudio:["tata","mène","lolo","mama"], correct:1,
      expl:"MÈNE contient è : m-è-n-e.", audioExpl:"Parfait ! Mène contient la lettre è." },

    // ══════════ FRANÇAIS — Leçon 23 : La lettre c ══════════
    { id:"fr_c_01", sub:"francais", lesson:"fr23", topic:"lettre_c", b:-0.5, visual:"🥥",
      question:"co + co = ?",
      audioQuestion:"co plus co, quelle noix tropicale ?",
      choices:["poco","cocoa","coco","koko"], choiceAudio:["poco","cocoa","coco","koko"], correct:2,
      expl:"co + co = COCO ! La noix de coco du Bénin.", audioExpl:"Excellent ! co plus co font coco." },

    { id:"fr_c_02", sub:"francais", lesson:"fr23", topic:"lettre_c", b:-0.3, visual:"🎲",
      question:"Fèmi a un petit ___.",
      audioQuestion:"Fèmi a un petit... coco ou midi ?",
      choices:["ludo","midi","coco","moto"], choiceAudio:["ludo","midi","coco","moto"], correct:2,
      expl:"Fèmi a un petit COCO !", audioExpl:"Bravo ! Fèmi a un petit coco." },

    // ══════════ FRANÇAIS — Leçon 28 : La lettre r ══════════
    { id:"fr_r_01", sub:"francais", lesson:"fr28", topic:"lettre_r", b:-0.4, visual:"📻",
      question:"ra + di + o = ?",
      audioQuestion:"ra plus di plus o, quel appareil ?",
      choices:["télé","radio","vidéo","dario"], choiceAudio:["télé","radio","vidéo","dario"], correct:1,
      expl:"ra+di+o = RADIO ! Papa a ramené une radio.", audioExpl:"Parfait ! ra plus di plus o font le mot radio." },

    { id:"fr_r_02", sub:"francais", lesson:"fr28", topic:"lettre_r", b:-0.2, visual:"👨",
      question:"ma + ri = ?",
      audioQuestion:"ma plus ri, quel mot ? L'époux de maman.",
      choices:["rima","mari","mira","armi"], choiceAudio:["rima","mari","mira","armi"], correct:1,
      expl:"ma + ri = MARI !", audioExpl:"Bravo ! ma plus ri font le mot mari." },

    // ══════════ FRANÇAIS — Leçon 29 : La lettre h ══════════
    { id:"fr_h_01", sub:"francais", lesson:"fr29", topic:"lettre_h", b:-0.2, visual:"🦉",
      question:"hi + bou = ?",
      audioQuestion:"hi plus bou, quel oiseau nocturne ?",
      choices:["boubi","hibou","buhi","hobou"], choiceAudio:["boubi","hibou","buhi","hobou"], correct:1,
      expl:"hi + bou = HIBOU ! L'oiseau sage de la nuit.", audioExpl:"Excellent ! hi plus bou font le mot hibou — comme moi !" },

    { id:"fr_h_02", sub:"francais", lesson:"fr29", topic:"lettre_h", b:0.0, visual:"👕",
      question:"ha + bit = ?",
      audioQuestion:"ha plus bit, quel vêtement ?",
      choices:["bitah","bitha","habit","habitu"], choiceAudio:["bitah","bitha","habit","habitu"], correct:2,
      expl:"ha + bit = HABIT ! Un vêtement.", audioExpl:"Parfait ! ha plus bit font le mot habit." },

    // ══════════ FRANÇAIS — Leçon 30 : Mots outils il/elle ══════════
    { id:"fr_il_01", sub:"francais", lesson:"fr30", topic:"mots_outils_il_elle", b:0.0, visual:"👧",
      question:"La petite Fèmi va à l'école. ___ va à l'école.",
      audioQuestion:"On remplace Fèmi par... il ou elle ?",
      choices:["il","elle","on","tu"], choiceAudio:["il","elle","on","tu"], correct:1,
      expl:"Fèmi est une fille → ELLE va à l'école.", audioExpl:"Bravo ! Fèmi est une fille, donc elle va à l'école." },

    { id:"fr_il_02", sub:"francais", lesson:"fr30", topic:"mots_outils_il_elle", b:0.2, visual:"👦",
      question:"Toto se lève. ___ se lève.",
      audioQuestion:"On remplace Toto par... il ou elle ?",
      choices:["elle","il","on","je"], choiceAudio:["elle","il","on","je"], correct:1,
      expl:"Toto est un garçon → IL se lève.", audioExpl:"Parfait ! Toto est un garçon, donc il se lève." },

    // ══════════ FRANÇAIS — Leçon 37 : Le mot outil ET ══════════
    { id:"fr_et_01", sub:"francais", lesson:"fr37", topic:"mot_outil_et", b:0.3, visual:"🍌",
      question:"Fèmi a une banane ___ un coco.",
      audioQuestion:"Fèmi a une banane... un coco. Et ou est ?",
      choices:["et","est","ou","ni"], choiceAudio:["et","est","ou","ni"], correct:0,
      expl:"ET relie deux choses. Une banane ET un coco.", audioExpl:"Bravo ! Et relie deux choses." },

    { id:"fr_et_02", sub:"francais", lesson:"fr37", topic:"mot_outil_et", b:0.5, visual:"🐓",
      question:"La poule ___ le coq de Toto.",
      audioQuestion:"La poule... le coq. Et ou est ?",
      choices:["est","et","ou","mais"], choiceAudio:["est","et","ou","mais"], correct:1,
      expl:"ET relie la poule et le coq.", audioExpl:"Excellent ! La poule et le coq. Et relie deux êtres." },

    // ══════════ FRANÇAIS — Leçon 38 : Son OU ══════════
    { id:"fr_ou_01", sub:"francais", lesson:"fr38", topic:"groupe_ou", b:0.4, visual:"🐓",
      question:"Dans 'boubou', quel son répété ?",
      audioQuestion:"Écoute : boubou. Quel son entends-tu deux fois ?",
      choices:["au","ou","eu","on"], choiceAudio:["au","ou","eu","on"], correct:1,
      expl:"BOU-BOU : on entend 'ou' deux fois !", audioExpl:"Parfait ! Bou-bou. On entend le son ou deux fois dans boubou." },

    { id:"fr_ou_02", sub:"francais", lesson:"fr38", topic:"groupe_ou", b:0.6, visual:"🐔",
      question:"pou + le = ?",
      audioQuestion:"pou plus le, quel animal de la cour ?",
      choices:["poule","loupe","poulé","opule"], choiceAudio:["poule","loupe","poulé","opule"], correct:0,
      expl:"pou + le = POULE ! L'animal de la cour.", audioExpl:"Excellent ! pou plus le font le mot poule." },

    // ══════════ FRANÇAIS — Leçon 40 : Son AU ══════════
    { id:"fr_au_01", sub:"francais", lesson:"fr40", topic:"groupe_au", b:0.6, visual:"🚗",
      question:"au + to = ?",
      audioQuestion:"au plus to, quel véhicule ?",
      choices:["auto","tauo","aouto","tauot"], choiceAudio:["auto","tauo","aouto","tauot"], correct:0,
      expl:"au + to = AUTO ! La voiture.", audioExpl:"Bravo ! au plus to font le mot auto." },

    { id:"fr_au_02", sub:"francais", lesson:"fr40", topic:"groupe_au", b:0.8, visual:"🌕",
      question:"L'auto de Lili est ___.",
      audioQuestion:"L'auto de Lili est... jaune ou rouge ?",
      choices:["rouge","jaune","bleu","verte"], choiceAudio:["rouge","jaune","bleu","verte"], correct:1,
      expl:"Lili a une auto neuve. Elle est JAUNE !", audioExpl:"Parfait ! L'auto neuve de Lili est jaune." },

    // ══════════ FRANÇAIS — Leçon 41 : Son ON ══════════
    { id:"fr_on_01", sub:"francais", lesson:"fr41", topic:"groupe_on", b:0.7, visual:"🍈",
      question:"me + lon = ?",
      audioQuestion:"me plus lon, quel fruit béninois ?",
      choices:["lonme","melon","nomle","lemon"], choiceAudio:["lonme","melon","nomle","lemon"], correct:1,
      expl:"me + lon = MELON ! Un fruit délicieux.", audioExpl:"Excellent ! me plus lon font le mot melon." },

    { id:"fr_on_02", sub:"francais", lesson:"fr41", topic:"groupe_on", b:0.9, visual:"🐑",
      question:"mou + ton = ?",
      audioQuestion:"mou plus ton, quel animal ?",
      choices:["tonmou","mouton","montou","tomou"], choiceAudio:["tonmou","mouton","montou","tomou"], correct:1,
      expl:"mou + ton = MOUTON ! L'animal à laine.", audioExpl:"Bien ! mou plus ton font le mot mouton." },

    // ══════════ FRANÇAIS — Leçon 42 : Son OM ══════════
    { id:"fr_om_01", sub:"francais", lesson:"fr42", topic:"groupe_om", b:0.8, visual:"🥦",
      question:"gom + bo = ?",
      audioQuestion:"gom plus bo, quel légume béninois ?",
      choices:["bogom","gombo","borgom","gobmo"], choiceAudio:["bogom","gombo","borgom","gobmo"], correct:1,
      expl:"gom + bo = GOMBO ! La sauce gombo, délicieuse !", audioExpl:"Parfait ! gom plus bo font le mot gombo. La sauce gombo est délicieuse au Bénin !" },

    { id:"fr_om_02", sub:"francais", lesson:"fr42", topic:"groupe_om", b:1.0, visual:"⛽",
      question:"Fèmi lave le gombo à la ___.",
      audioQuestion:"Fèmi lave le gombo à la... pompe ou fontaine ?",
      choices:["fontaine","robinet","pompe","rivière"], choiceAudio:["fontaine","robinet","pompe","rivière"], correct:2,
      expl:"Fèmi lave le gombo à la POMPE !", audioExpl:"Bravo ! Fèmi lave le gombo à la pompe." },

    // ══════════════════════════════════════════════════════════
    // MATHS — SA3 : Nombres 1 à 3
    // ══════════════════════════════════════════════════════════
    { id:"ma_n3_01", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.5, visual:"⭐",
      question:"Combien d'étoiles ? ⭐",
      audioQuestion:"Combien y a-t-il d'étoiles ? Touche la bonne réponse.",
      choices:["1","2","3","0"], choiceAudio:["un","deux","trois","zéro"], correct:0,
      expl:"⭐ = 1 étoile.", audioExpl:"Bravo ! Il y a une étoile." },

    { id:"ma_n3_02", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.3, visual:"🌟",
      question:"Combien d'étoiles ? ⭐⭐",
      audioQuestion:"Combien d'étoiles vois-tu ?",
      choices:["1","2","3","4"], choiceAudio:["un","deux","trois","quatre"], correct:1,
      expl:"⭐⭐ = 2 étoiles.", audioExpl:"Excellent ! Il y a deux étoiles." },

    { id:"ma_n3_03", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.1, visual:"🌟",
      question:"Combien d'étoiles ? ⭐⭐⭐",
      audioQuestion:"Compte les étoiles. Combien y en a-t-il ?",
      choices:["2","3","4","1"], choiceAudio:["deux","trois","quatre","un"], correct:1,
      expl:"⭐⭐⭐ = 3 étoiles.", audioExpl:"Parfait ! Il y a trois étoiles." },

    { id:"ma_n3_04", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.0, visual:"🔢",
      question:"Quel nombre vient après 2 ?",
      audioQuestion:"Un, deux... quel nombre vient après deux ?",
      choices:["1","4","3","2"], choiceAudio:["un","quatre","trois","deux"], correct:2,
      expl:"1-2-3. Après 2 vient 3 !", audioExpl:"Bravo ! Après deux vient trois." },

    // ══════════ MATHS — SA3 : Nombres 0 à 5 ══════════
    { id:"ma_n5_01", sub:"maths", lesson:"ma02", topic:"nombres_0_5", b:-2.0, visual:"🖐️",
      question:"Quel nombre vient après 4 ?",
      audioQuestion:"Un, deux, trois, quatre... et après ?",
      choices:["3","6","5","4"], choiceAudio:["trois","six","cinq","quatre"], correct:2,
      expl:"1-2-3-4-5 ! Après 4 vient 5.", audioExpl:"Parfait ! Après quatre vient cinq." },

    { id:"ma_n5_02", sub:"maths", lesson:"ma02", topic:"nombres_0_5", b:-1.8, visual:"🔵",
      question:"Lequel est le plus grand : 3 ou 5 ?",
      audioQuestion:"Lequel est le plus grand : 3 ou 5 ?",
      choices:["3","5","ils sont pareils","2"], choiceAudio:["trois","cinq","pareil","deux"], correct:1,
      expl:"5 > 3. Plus le nombre est grand, plus la quantité est grande.", audioExpl:"Excellent ! Cinq est plus grand que trois." },

    { id:"ma_n5_03", sub:"maths", lesson:"ma02", topic:"nombres_0_5", b:-1.5, visual:"🔢",
      question:"Range du plus petit : 4, 1, 3, 2",
      audioQuestion:"Range ces nombres du plus petit au plus grand : 4, 1, 3, 2.",
      choices:["1,2,3,4","4,3,2,1","2,1,3,4","1,3,2,4"],
      choiceAudio:["un deux trois quatre","quatre trois deux un","deux un trois quatre","un trois deux quatre"],
      correct:0,
      expl:"1 < 2 < 3 < 4 — ordre croissant.", audioExpl:"Bravo ! Un, deux, trois, quatre — c'est l'ordre croissant." },

    { id:"ma_n5_04", sub:"maths", lesson:"ma02", topic:"nombres_0_5", b:-1.3, visual:"🥚",
      question:"0 veut dire quoi ?",
      audioQuestion:"Le chiffre zéro, ça veut dire quoi ?",
      choices:["un objet","beaucoup","aucun objet","dix"], choiceAudio:["un objet","beaucoup","aucun objet","dix"], correct:2,
      expl:"0 = aucun objet. La case vide contient zéro !", audioExpl:"Parfait ! Zéro veut dire aucun objet." },

    // ══════════ MATHS — SA3 : Additions 0 à 5 ══════════
    { id:"ma_a5_01", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-2.0, visual:"🥭",
      question:"Maman donne 2 mangues à Kayodé et 1 à Ali. Total ?",
      audioQuestion:"Maman donne deux mangues à Kayodé et une à Ali. Combien en tout ?",
      choices:["2","3","4","1"], choiceAudio:["deux","trois","quatre","un"], correct:1,
      expl:"2 + 1 = 3 mangues.", audioExpl:"Bravo ! Deux plus un égale trois mangues." },

    { id:"ma_a5_02", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-1.8, visual:"🔵",
      question:"Aline a 3 billes. Jean lui donne 2 billes. Total ?",
      audioQuestion:"Aline a trois billes. Jean lui donne deux. Combien en tout ?",
      choices:["4","5","6","3"], choiceAudio:["quatre","cinq","six","trois"], correct:1,
      expl:"3 + 2 = 5 billes. Compte : 3, 4, 5.", audioExpl:"Excellent ! Trois plus deux égale cinq billes." },

    { id:"ma_a5_03", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-1.5, visual:"🍊",
      question:"Moussa a 3 oranges. Maître lui en donne. Il a 5. Combien a donné le maître ?",
      audioQuestion:"Moussa a 3 oranges. Son maître lui en donne encore. Il a 5 en tout. Combien lui a-t-on donné ?",
      choices:["1","2","3","4"], choiceAudio:["un","deux","trois","quatre"], correct:1,
      expl:"3 + ? = 5. Donc ? = 2.", audioExpl:"Bravo ! Trois plus deux égale cinq. Le maître lui a donné deux oranges." },

    { id:"ma_a5_04", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-1.3, visual:"🔢",
      question:"2 + 2 = ?",
      audioQuestion:"Deux plus deux, ça fait combien ?",
      choices:["3","4","5","6"], choiceAudio:["trois","quatre","cinq","six"], correct:1,
      expl:"2 + 2 = 4. On double !", audioExpl:"Parfait ! Deux plus deux égale quatre." },

    { id:"ma_a5_05", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-1.1, visual:"🔢",
      question:"1 + ___ = 4",
      audioQuestion:"Un plus quelque chose égale quatre. Quel est ce nombre ?",
      choices:["2","3","4","5"], choiceAudio:["deux","trois","quatre","cinq"], correct:1,
      expl:"1 + 3 = 4. Le terme manquant est 3.", audioExpl:"Excellent ! Un plus trois égale quatre." },

    // ══════════ MATHS — SA4 : Nombres 5 à 7 ══════════
    { id:"ma_n7_01", sub:"maths", lesson:"ma04", topic:"nombres_5_7", b:-1.2, visual:"🔢",
      question:"Quel nombre vient après 5 ?",
      audioQuestion:"Cinq... et après ? Quel nombre vient juste après cinq ?",
      choices:["4","7","6","8"], choiceAudio:["quatre","sept","six","huit"], correct:2,
      expl:"5, 6, 7 — après 5 vient 6 !", audioExpl:"Bravo ! Après cinq vient six." },

    { id:"ma_n7_02", sub:"maths", lesson:"ma04", topic:"nombres_5_7", b:-1.0, visual:"📚",
      question:"Range du plus petit : 7, 5, 6",
      audioQuestion:"Range ces trois nombres du plus petit au plus grand : 7, 5, 6.",
      choices:["5,6,7","7,6,5","6,5,7","5,7,6"], choiceAudio:["cinq six sept","sept six cinq","six cinq sept","cinq sept six"], correct:0,
      expl:"5 < 6 < 7 — ordre croissant !", audioExpl:"Excellent ! Cinq, six, sept — c'est l'ordre croissant." },

    // ══════════ MATHS — SA4 : Nombres 7 à 9 ══════════
    { id:"ma_n9_01", sub:"maths", lesson:"ma05", topic:"nombres_7_9", b:-0.8, visual:"🔢",
      question:"Quel nombre vient après 7 ?",
      audioQuestion:"Sept, puis ? Quel nombre vient juste après sept ?",
      choices:["6","9","8","10"], choiceAudio:["six","neuf","huit","dix"], correct:2,
      expl:"7, 8, 9 — après 7 vient 8 !", audioExpl:"Parfait ! Après sept vient huit." },

    { id:"ma_n9_02", sub:"maths", lesson:"ma05", topic:"nombres_7_9", b:-0.5, visual:"🏅",
      question:"Toto : 5 billes. Fati : 7. Lili : 3. Qui en a le plus ?",
      audioQuestion:"Toto a cinq billes, Fati a sept, Lili a trois. Qui en a le plus ?",
      choices:["Toto","Fati","Lili","Ils ont pareil"], choiceAudio:["Toto","Fati","Lili","pareil"], correct:1,
      expl:"7 > 5 > 3. Fati a le plus de billes !", audioExpl:"Bravo ! Sept est le plus grand : Fati a le plus de billes." },

    // ══════════ MATHS — SA4 : Additions 0 à 9 ══════════
    { id:"ma_a9_01", sub:"maths", lesson:"ma06", topic:"addition_0_9", b:-1.0, visual:"🥭",
      question:"Wabi a 4 mangues le matin et 5 le soir. Total ?",
      audioQuestion:"Wabi a ramassé quatre mangues le matin et cinq le soir. Combien en tout ?",
      choices:["8","9","10","7"], choiceAudio:["huit","neuf","dix","sept"], correct:1,
      expl:"4 + 5 = 9 mangues !", audioExpl:"Excellent ! Quatre plus cinq égale neuf mangues." },

    { id:"ma_a9_02", sub:"maths", lesson:"ma06", topic:"addition_0_9", b:-0.8, visual:"🔢",
      question:"6 + 3 = ?",
      audioQuestion:"Six plus trois, ça fait combien ?",
      choices:["7","8","9","10"], choiceAudio:["sept","huit","neuf","dix"], correct:2,
      expl:"6 + 3 = 9.", audioExpl:"Parfait ! Six plus trois égale neuf." },

    { id:"ma_a9_03", sub:"maths", lesson:"ma06", topic:"addition_0_9", b:-0.5, visual:"🎯",
      question:"4 + ___ = 7",
      audioQuestion:"Quatre plus quelque chose égale sept. Quel est ce nombre ?",
      choices:["2","3","4","5"], choiceAudio:["deux","trois","quatre","cinq"], correct:1,
      expl:"4 + 3 = 7. Le terme manquant est 3 !", audioExpl:"Bravo ! Quatre plus trois égale sept." },

    { id:"ma_a9_04", sub:"maths", lesson:"ma06", topic:"addition_0_9", b:-0.3, visual:"🔢",
      question:"5 + 3 = ?",
      audioQuestion:"Cinq plus trois, ça fait combien ?",
      choices:["7","8","9","6"], choiceAudio:["sept","huit","neuf","six"], correct:1,
      expl:"5 + 3 = 8.", audioExpl:"Excellent ! Cinq plus trois égale huit." },

    { id:"ma_a9_05", sub:"maths", lesson:"ma06", topic:"addition_0_9", b:-0.1, visual:"📊",
      question:"Relie : 6 + 1 = ?",
      audioQuestion:"Six plus un, ça fait combien ?",
      choices:["6","7","8","9"], choiceAudio:["six","sept","huit","neuf"], correct:1,
      expl:"6 + 1 = 7. On ajoute juste 1.", audioExpl:"Bien ! Six plus un égale sept." },

    // ══════════ MATHS — SA5 : Le nombre 10 ══════════
    { id:"ma_n10_01", sub:"maths", lesson:"ma07", topic:"nombre_10", b:-0.5, visual:"🖐️",
      question:"Combien de doigts sur les deux mains ?",
      audioQuestion:"Tu as deux mains. Combien de doigts en tout ?",
      choices:["8","9","10","11"], choiceAudio:["huit","neuf","dix","onze"], correct:2,
      expl:"5 + 5 = 10 doigts, les deux mains !", audioExpl:"Bravo ! Cinq plus cinq égale dix doigts !" },

    { id:"ma_n10_02", sub:"maths", lesson:"ma07", topic:"nombre_10", b:-0.3, visual:"🔟",
      question:"1 dizaine = ?",
      audioQuestion:"Une dizaine, c'est combien d'objets ?",
      choices:["5","8","10","12"], choiceAudio:["cinq","huit","dix","douze"], correct:2,
      expl:"1 DIZAINE = 10 objets.", audioExpl:"Parfait ! Une dizaine, c'est dix objets groupés." },

    // ══════════ MATHS — SA5 : Additions 0 à 10 ══════════
    { id:"ma_a10_01", sub:"maths", lesson:"ma08", topic:"addition_0_10", b:-0.8, visual:"🌊",
      question:"7 + 3 = ?",
      audioQuestion:"Sept plus trois, ça fait combien ?",
      choices:["9","10","11","8"], choiceAudio:["neuf","dix","onze","huit"], correct:1,
      expl:"7 + 3 = 10 ! Une dizaine complète.", audioExpl:"Excellent ! Sept plus trois égale dix." },

    { id:"ma_a10_02", sub:"maths", lesson:"ma08", topic:"addition_0_10", b:-0.5, visual:"🔢",
      question:"5 + 5 = ?",
      audioQuestion:"Cinq plus cinq, ça fait combien ?",
      choices:["9","10","11","8"], choiceAudio:["neuf","dix","onze","huit"], correct:1,
      expl:"5 + 5 = 10. Les deux mains !", audioExpl:"Parfait ! Cinq plus cinq égale dix, comme les deux mains." },

    { id:"ma_a10_03", sub:"maths", lesson:"ma08", topic:"addition_0_10", b:-0.2, visual:"🎲",
      question:"3 + ___ = 7",
      audioQuestion:"Trois plus quelque chose égale sept. Quel est ce nombre ?",
      choices:["3","4","5","6"], choiceAudio:["trois","quatre","cinq","six"], correct:1,
      expl:"3 + 4 = 7. Le terme manquant est 4.", audioExpl:"Bravo ! Trois plus quatre égale sept." },

    { id:"ma_a10_04", sub:"maths", lesson:"ma08", topic:"addition_0_10", b:0.2, visual:"📿",
      question:"Un collier a 9 perles. 3 blanches et ___ noires.",
      audioQuestion:"Un collier a neuf perles. Trois sont blanches. Combien sont noires ?",
      choices:["5","6","7","8"], choiceAudio:["cinq","six","sept","huit"], correct:1,
      expl:"3 + ? = 9. Donc ? = 6 perles noires.", audioExpl:"Excellent ! Trois blanches plus six noires font neuf perles." },

    // ══════════ MATHS — SA6 : Nombres 10 à 15 ══════════
    { id:"ma_n15_01", sub:"maths", lesson:"ma09", topic:"nombres_10_15", b:0.2, visual:"🔢",
      question:"Quel nombre vient après 10 ?",
      audioQuestion:"Dix, puis ? Quel nombre vient après dix ?",
      choices:["9","12","11","10"], choiceAudio:["neuf","douze","onze","dix"], correct:2,
      expl:"10, 11, 12... Après 10 vient 11 !", audioExpl:"Bravo ! Après dix vient onze." },

    { id:"ma_n15_02", sub:"maths", lesson:"ma09", topic:"nombres_10_15", b:0.5, visual:"📚",
      question:"Range du plus petit : 15, 12, 10, 13",
      audioQuestion:"Range ces nombres du plus petit au plus grand : 15, 12, 10, 13.",
      choices:["10,12,13,15","15,13,12,10","12,10,13,15","13,10,15,12"],
      choiceAudio:["dix douze treize quinze","quinze treize douze dix","douze dix treize quinze","treize dix quinze douze"],
      correct:0,
      expl:"10 < 12 < 13 < 15 — ordre croissant !", audioExpl:"Excellent ! Dix, douze, treize, quinze — c'est l'ordre croissant." },

    // ══════════ MATHS — SA6 : Additions 0 à 15 ══════════
    { id:"ma_a15_01", sub:"maths", lesson:"ma10", topic:"addition_0_15", b:0.3, visual:"✏️",
      question:"Le maître a 7 craies blanches + 6 de couleur. Total ?",
      audioQuestion:"Le maître a sept craies blanches et six de couleur. Combien au total ?",
      choices:["11","12","13","14"], choiceAudio:["onze","douze","treize","quatorze"], correct:2,
      expl:"7 + 6 = 13 craies. Astuce : 7+3=10, puis 10+3=13.", audioExpl:"Bravo ! Sept plus six égale treize craies." },

    { id:"ma_a15_02", sub:"maths", lesson:"ma10", topic:"addition_0_15", b:0.6, visual:"📿",
      question:"10 + 1 = ?",
      audioQuestion:"Dix plus un, ça fait combien ?",
      choices:["10","11","12","13"], choiceAudio:["dix","onze","douze","treize"], correct:1,
      expl:"10 + 1 = 11. Une dizaine et une unité.", audioExpl:"Parfait ! Dix plus un égale onze." },

    { id:"ma_a15_03", sub:"maths", lesson:"ma10", topic:"addition_0_15", b:0.9, visual:"🔢",
      question:"13 + 2 = ?",
      audioQuestion:"Treize plus deux, ça fait combien ?",
      choices:["14","15","16","12"], choiceAudio:["quatorze","quinze","seize","douze"], correct:1,
      expl:"13 + 2 = 15. Treize, quatorze, quinze.", audioExpl:"Excellent ! Treize plus deux égale quinze." },

    // ══════════ MATHS — SA7 : Nombres 16 à 20 ══════════
    { id:"ma_n20_01", sub:"maths", lesson:"ma11", topic:"nombres_16_20", b:0.8, visual:"🔢",
      question:"Quel nombre vient après 18 ?",
      audioQuestion:"Seize, dix-sept, dix-huit... quel nombre vient après dix-huit ?",
      choices:["17","20","19","21"], choiceAudio:["dix-sept","vingt","dix-neuf","vingt et un"], correct:2,
      expl:"18, 19, 20 — après 18 vient 19 !", audioExpl:"Bravo ! Après dix-huit vient dix-neuf." },

    { id:"ma_n20_02", sub:"maths", lesson:"ma11", topic:"nombres_16_20", b:1.0, visual:"🔟",
      question:"20 = ___ dizaines",
      audioQuestion:"Vingt, c'est combien de dizaines ?",
      choices:["1","2","3","4"], choiceAudio:["une","deux","trois","quatre"], correct:1,
      expl:"20 = 2 dizaines. 10 + 10 = 20.", audioExpl:"Parfait ! Vingt, c'est deux dizaines : dix plus dix." },

    // ══════════ MATHS — SA7 : Petits problèmes ══════════
    { id:"ma_pb_01", sub:"maths", lesson:"ma12", topic:"problemes", b:0.8, visual:"🍊",
      question:"Maman : panier 1 = 7 oranges, panier 2 = 10 oranges. Total ?",
      audioQuestion:"Maman a deux paniers. Le premier a sept oranges, le second dix. Combien en tout ?",
      choices:["15","16","17","18"], choiceAudio:["quinze","seize","dix-sept","dix-huit"], correct:2,
      expl:"7 + 10 = 17 oranges.", audioExpl:"Excellent ! Sept plus dix égale dix-sept oranges." },

    { id:"ma_pb_02", sub:"maths", lesson:"ma12", topic:"problemes", b:1.0, visual:"🎂",
      question:"Papa donne 12 biscuits à Mano et 6 à Ola. Total ?",
      audioQuestion:"Papa donne douze biscuits à Mano et six à Ola. Combien en tout ?",
      choices:["16","17","18","19"], choiceAudio:["seize","dix-sept","dix-huit","dix-neuf"], correct:2,
      expl:"12 + 6 = 18 biscuits.", audioExpl:"Bravo ! Douze plus six égale dix-huit biscuits." },

    { id:"ma_pb_03", sub:"maths", lesson:"ma12", topic:"problemes", b:1.2, visual:"🎈",
      question:"Paul invite 13 amis. Sa sœur invite 6 amis. Total ?",
      audioQuestion:"Paul a invité treize amis pour son anniversaire. Sa sœur a invité six amis. Combien en tout ?",
      choices:["17","18","19","20"], choiceAudio:["dix-sept","dix-huit","dix-neuf","vingt"], correct:2,
      expl:"13 + 6 = 19 amis. Quelle grande fête !", audioExpl:"Parfait ! Treize plus six égale dix-neuf amis. Quelle belle fête !" },

    { id:"ma_pb_04", sub:"maths", lesson:"ma12", topic:"problemes", b:1.4, visual:"🥭",
      question:"Maman a besoin de 20 oranges. Elle en a 14. Combien lui manque-t-il ?",
      audioQuestion:"Maman a besoin de vingt oranges. Elle en a déjà quatorze. Combien lui manque-t-il ?",
      choices:["4","5","6","7"], choiceAudio:["quatre","cinq","six","sept"], correct:2,
      expl:"14 + ? = 20. Donc ? = 6 oranges manquent.", audioExpl:"Excellent ! Quatorze plus six égale vingt. Il lui manque six oranges." },

    { id:"ma_pb_05", sub:"maths", lesson:"ma12", topic:"problemes", b:1.6, visual:"🌾",
      question:"Bio ramasse 14 mangues et 19 oranges. Total ?",
      audioQuestion:"Bio ramasse quatorze mangues et dix-neuf oranges. Combien de fruits en tout ?",
      choices:["31","32","33","34"], choiceAudio:["trente et un","trente deux","trente trois","trente quatre"], correct:2,
      expl:"14 + 19 = 33 fruits. 10+10=20, 4+9=13, 20+13=33.", audioExpl:"Bravo ! Quatorze plus dix-neuf égale trente-trois fruits." },

    // ══════════════════════════════════════════════════
    // TYPE : RELIER — Relier lettres / syllabes / nombres à leurs images
    // b légèrement plus bas que MCQ équivalent (reconnaissance visuelle)
    // ══════════════════════════════════════════════════

    { id:"rel_fr01", type:"relier", sub:"francais", lesson:"fr01", topic:"lettre_a", b:-2.2,
      question:"Relie chaque lettre à son image",
      audioQuestion:"Touche une lettre à gauche, puis l'image qui lui correspond à droite.",
      pairs:[
        {left:"A",  right:"🍍", rightWord:"ananas"},
        {left:"L",  right:"🦁", rightWord:"lion"},
        {left:"O",  right:"🍊", rightWord:"orange"},
      ],
      expl:"A→ananas  L→lion  O→orange",
      audioExpl:"Bravo ! A comme ananas, L comme lion, O comme orange." },

    { id:"rel_fr03", type:"relier", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-1.9,
      question:"Relie la syllabe au mot complet",
      audioQuestion:"Touche une syllabe à gauche, puis le mot auquel elle appartient à droite.",
      pairs:[
        {left:"ta",  right:"🍅", rightWord:"ta-ta"},
        {left:"to",  right:"🐢", rightWord:"tor-tue"},
        {left:"ti",  right:"🎺", rightWord:"ti-ba"},
      ],
      expl:"ta→tata  to→tortue  ti→tiba",
      audioExpl:"Parfait ! Tu reconnais bien les syllabes." },

    { id:"rel_fr13", type:"relier", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-1.0,
      question:"Relie l'article au bon mot",
      audioQuestion:"Touche le bon article à gauche, puis le nom qui lui va à droite.",
      pairs:[
        {left:"le",  right:"🥭", rightWord:"mango"},
        {left:"la",  right:"🍌", rightWord:"banane"},
        {left:"l'",  right:"🍍", rightWord:"ananas"},
      ],
      expl:"LE mango  LA banane  L'ananas",
      audioExpl:"Excellent ! Le pour masculin, la pour féminin, l' devant une voyelle." },

    { id:"rel_fr38", type:"relier", sub:"francais", lesson:"fr38", topic:"groupe_ou", b:0.3,
      question:"Relie chaque mot à son image",
      audioQuestion:"Touche le mot à gauche, puis l'image qui lui correspond à droite.",
      pairs:[
        {left:"boubou", right:"👘", rightWord:"boubou"},
        {left:"coucou", right:"🐦", rightWord:"coucou"},
        {left:"hibou",  right:"🦉", rightWord:"hibou"},
      ],
      expl:"boubou=vêtement, coucou=oiseau, hibou=oiseau nocturne",
      audioExpl:"Bravo ! Ces trois mots contiennent le son OU." },

    { id:"rel_ma01", type:"relier", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.5,
      question:"Relie le nombre à la bonne quantité",
      audioQuestion:"Touche un nombre à gauche, puis le groupe qui a autant d'objets à droite.",
      pairs:[
        {left:"1", right:"🥭",       rightWord:"un"},
        {left:"2", right:"🥭🥭",     rightWord:"deux"},
        {left:"3", right:"🥭🥭🥭",   rightWord:"trois"},
      ],
      expl:"1 mangue, 2 mangues, 3 mangues",
      audioExpl:"Parfait ! Tu sais compter de un à trois." },

    { id:"rel_ma03", type:"relier", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-2.0,
      question:"Relie l'addition à son résultat",
      audioQuestion:"Touche une addition à gauche, puis son résultat à droite.",
      pairs:[
        {left:"1+1", right:"2", rightWord:"deux"},
        {left:"2+1", right:"3", rightWord:"trois"},
        {left:"3+2", right:"5", rightWord:"cinq"},
      ],
      expl:"1+1=2  2+1=3  3+2=5",
      audioExpl:"Bravo ! Tu maîtrises les petites additions." },

    // ══════════════════════════════════════════════════
    // TYPE : ENTOURER — Entourer les bonnes lettres / images
    // ══════════════════════════════════════════════════

    { id:"ent_fr01", type:"entourer", sub:"francais", lesson:"fr01", topic:"lettre_a", b:-2.1,
      question:"Entoure toutes les lettres A",
      audioQuestion:"Touche toutes les lettres A que tu vois. Il peut y en avoir plusieurs !",
      items:[
        {label:"A", correct:true},  {label:"L", correct:false},
        {label:"a", correct:true},  {label:"T", correct:false},
        {label:"O", correct:false}, {label:"A", correct:true},
        {label:"l", correct:false}, {label:"a", correct:true},
      ],
      expl:"Les lettres A (grand et petit) sont : A, a, A, a",
      audioExpl:"Bravo ! A majuscule et a minuscule sont la même lettre." },

    { id:"ent_fr02", type:"entourer", sub:"francais", lesson:"fr02", topic:"lettre_l", b:-2.0,
      question:"Entoure les images qui commencent par L",
      audioQuestion:"Entoure toutes les images dont le nom commence par le son L.",
      items:[
        {label:"🦁", sublabel:"lion",    correct:true},
        {label:"🍅", sublabel:"tomate",  correct:false},
        {label:"🌙", sublabel:"lune",    correct:true},
        {label:"🍍", sublabel:"ananas",  correct:false},
        {label:"🦎", sublabel:"lézard",  correct:true},
        {label:"🥭", sublabel:"mango",   correct:false},
      ],
      expl:"Lion, lune, lézard commencent tous par L !",
      audioExpl:"Parfait ! Lion, lune et lézard. Le son L au début !" },

    { id:"ent_fr03", type:"entourer", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-1.8,
      question:"Entoure les images qui commencent par T",
      audioQuestion:"Entoure toutes les images dont le nom commence par le son T.",
      items:[
        {label:"🍅", sublabel:"tomate",  correct:true},
        {label:"🦁", sublabel:"lion",    correct:false},
        {label:"🐢", sublabel:"tortue",  correct:true},
        {label:"🍌", sublabel:"banane",  correct:false},
        {label:"🥁", sublabel:"tam-tam", correct:true},
        {label:"🍊", sublabel:"orange",  correct:false},
      ],
      expl:"Tomate, tortue, tam-tam — tous commencent par T !",
      audioExpl:"Excellent ! Tomate, tortue et tam-tam commencent par T." },

    { id:"ent_fr04", type:"entourer", sub:"francais", lesson:"fr04", topic:"lettre_o", b:-1.7,
      question:"Entoure les syllabes avec O",
      audioQuestion:"Entoure toutes les syllabes qui contiennent la lettre O.",
      items:[
        {label:"lo", correct:true},  {label:"ta", correct:false},
        {label:"to", correct:true},  {label:"li", correct:false},
        {label:"po", correct:true},  {label:"pa", correct:false},
        {label:"la", correct:false}, {label:"bo", correct:true},
      ],
      expl:"lo, to, po, bo contiennent tous la voyelle O",
      audioExpl:"Bien joué ! Lo, to, po, bo — le son O est bien là." },

    { id:"ent_fr13", type:"entourer", sub:"francais", lesson:"fr13", topic:"mots_outils_le_la", b:-0.9,
      question:'Entoure les mots féminins (qui prennent "la")',
      audioQuestion:"Entoure les mots qui sont féminins, ceux qu'on dit avec LA.",
      items:[
        {label:"🍌", sublabel:"banane",  correct:true},
        {label:"🥭", sublabel:"mango",   correct:false},
        {label:"🌙", sublabel:"lune",    correct:true},
        {label:"🦁", sublabel:"lion",    correct:false},
        {label:"🏡", sublabel:"maison",  correct:true},
        {label:"🌴", sublabel:"arbre",   correct:false},
      ],
      expl:"La banane, la lune, la maison — féminins !",
      audioExpl:"Parfait ! La banane, la lune, la maison. Ce sont des mots féminins." },

    { id:"ent_ma01", type:"entourer", sub:"maths", lesson:"ma01", topic:"nombres_1_3", b:-2.6,
      question:"Entoure les groupes de 2",
      audioQuestion:"Entoure tous les groupes qui ont exactement deux objets.",
      items:[
        {label:"🥭",       sublabel:"1",  correct:false},
        {label:"🥭🥭",     sublabel:"2",  correct:true},
        {label:"🥭🥭🥭",   sublabel:"3",  correct:false},
        {label:"🌴🌴",     sublabel:"2",  correct:true},
        {label:"🌴",       sublabel:"1",  correct:false},
        {label:"🌴🌴🌴",   sublabel:"3",  correct:false},
      ],
      expl:"Deux objets : 🥭🥭 et 🌴🌴",
      audioExpl:"Bravo ! Un groupe de deux, c'est exactement deux objets." },

    { id:"ent_ma03", type:"entourer", sub:"maths", lesson:"ma03", topic:"addition_0_5", b:-1.8,
      question:"Entoure les additions qui font 4",
      audioQuestion:"Entoure toutes les additions dont le résultat est quatre.",
      items:[
        {label:"1+3", correct:true},  {label:"2+2", correct:true},
        {label:"1+2", correct:false}, {label:"3+2", correct:false},
        {label:"2+2", correct:true},  {label:"1+1", correct:false},
      ],
      expl:"1+3=4 et 2+2=4 font tous les deux 4 !",
      audioExpl:"Parfait ! Un plus trois et deux plus deux font tous les deux quatre." },

    // ── Exercices de tracé (un par leçon de lettre) ──
    { id:"trc_fr01", type:"trace", sub:"francais", lesson:"fr01", topic:"lettre_a", b:-2.3,
      letter:"a", question:"Trace la lettre A", audioQuestion:"Prends ton doigt et trace la lettre A.", visual:"A",
      expl:"Belle lettre A !", audioExpl:"Bravo ! Tu as bien tracé la lettre A !" },
    { id:"trc_fr02", type:"trace", sub:"francais", lesson:"fr02", topic:"lettre_l", b:-2.3,
      letter:"l", question:"Trace la lettre L", audioQuestion:"Trace la lettre L avec ton doigt.", visual:"L",
      expl:"Belle lettre L !", audioExpl:"Bravo ! Tu as bien tracé la lettre L !" },
    { id:"trc_fr03", type:"trace", sub:"francais", lesson:"fr03", topic:"lettre_t", b:-2.1,
      letter:"t", question:"Trace la lettre T", audioQuestion:"Trace la lettre T avec ton doigt.", visual:"T",
      expl:"Belle lettre T !", audioExpl:"Bravo ! Tu as bien tracé la lettre T !" },
    { id:"trc_fr04", type:"trace", sub:"francais", lesson:"fr04", topic:"lettre_o", b:-2.1,
      letter:"o", question:"Trace la lettre O", audioQuestion:"Trace la lettre O avec ton doigt.", visual:"O",
      expl:"Belle lettre O !", audioExpl:"Bravo ! Tu as bien tracé la lettre O !" },
    { id:"trc_fr05", type:"trace", sub:"francais", lesson:"fr05", topic:"lettre_p", b:-2.0,
      letter:"p", question:"Trace la lettre P", audioQuestion:"Trace la lettre P avec ton doigt.", visual:"P",
      expl:"Belle lettre P !", audioExpl:"Bravo ! Tu as bien tracé la lettre P !" },
    { id:"trc_fr06", type:"trace", sub:"francais", lesson:"fr06", topic:"lettre_i", b:-2.0,
      letter:"i", question:"Trace la lettre I", audioQuestion:"Trace la lettre I avec ton doigt.", visual:"I",
      expl:"Belle lettre I !", audioExpl:"Bravo ! Tu as bien tracé la lettre I !" },
    { id:"trc_fr07", type:"trace", sub:"francais", lesson:"fr07", topic:"lettre_b", b:-1.9,
      letter:"b", question:"Trace la lettre B", audioQuestion:"Trace la lettre B avec ton doigt.", visual:"B",
      expl:"Belle lettre B !", audioExpl:"Bravo ! Tu as bien tracé la lettre B !" },
    { id:"trc_fr09", type:"trace", sub:"francais", lesson:"fr09", topic:"lettre_m", b:-1.8,
      letter:"m", question:"Trace la lettre M", audioQuestion:"Trace la lettre M avec ton doigt.", visual:"M",
      expl:"Belle lettre M !", audioExpl:"Bravo ! Tu as bien tracé la lettre M !" },
    { id:"trc_fr11", type:"trace", sub:"francais", lesson:"fr11", topic:"lettre_e", b:-1.6,
      letter:"e", question:"Trace la lettre E", audioQuestion:"Trace la lettre E avec ton doigt.", visual:"E",
      expl:"Belle lettre E !", audioExpl:"Bravo ! Tu as bien tracé la lettre E !" },
    { id:"trc_fr12", type:"trace", sub:"francais", lesson:"fr12", topic:"lettre_d", b:-1.5,
      letter:"d", question:"Trace la lettre D", audioQuestion:"Trace la lettre D avec ton doigt.", visual:"D",
      expl:"Belle lettre D !", audioExpl:"Bravo ! Tu as bien tracé la lettre D !" },
    { id:"trc_fr15", type:"trace", sub:"francais", lesson:"fr15", topic:"lettre_n", b:-1.4,
      letter:"n", question:"Trace la lettre N", audioQuestion:"Trace la lettre N avec ton doigt.", visual:"N",
      expl:"Belle lettre N !", audioExpl:"Bravo ! Tu as bien tracé la lettre N !" },
    { id:"trc_fr17", type:"trace", sub:"francais", lesson:"fr17", topic:"lettre_s", b:-1.2,
      letter:"s", question:"Trace la lettre S", audioQuestion:"Trace la lettre S avec ton doigt.", visual:"S",
      expl:"Belle lettre S !", audioExpl:"Bravo ! Tu as bien tracé la lettre S !" },
  ]
};

// Helpers exposés globalement
EXERCISES_DB.getByLesson = (lessonId) =>
  EXERCISES_DB.exercises.filter(e => e.lesson === lessonId);

EXERCISES_DB.getBySubject = (sub) =>
  EXERCISES_DB.exercises.filter(e => e.sub === sub);

EXERCISES_DB.getLessonsBySubject = (sub) =>
  EXERCISES_DB.lessons.filter(l => l.sub === sub);

EXERCISES_DB.getLessonById = (id) =>
  EXERCISES_DB.lessons.find(l => l.id === id);
