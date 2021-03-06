import { INpc } from "../../../components/npc";
import {
  AGATHA_LAIR,
  DEFEAT_THE_REDBRAND_THUGS,
  DELIVER_PROVISION,
  ESCORT_SILDAR,
  FIND_IARNO,
  MIRNAS_HEIRLOOM,
  OLD_OWL_TROUBLE,
  ORCS_WYVERN_TOR,
  RESTORE_FORGE_OF_SPELLS,
  STOP_REBRANDS,
} from "../quests";

export const GUNDREN: INpc = {
  id: "GUNDREN",
  name: "Gundren Rockseeker",
  description: "Dwarf, Rockseeker brother",
  quests: [DELIVER_PROVISION, RESTORE_FORGE_OF_SPELLS],
  imageUrl:
    "https://static.wikia.nocookie.net/sword-coast-adventurers/images/b/b9/Gundren_Rockseeker.png/revision/latest/scale-to-width-down/200",
  informations: ["Location of Echo Wave Cave", "Existence of Black Spider"],
};

export const BARTHEN: INpc = {
  id: "BARTHEN",
  name: "Elmar Barthen",
  description:
    "He was a lean and balding human male shopkeeper of fifty years with a kindly manner. He considered Gundren Rockseeker a friend and was excited by talk of discovering the lost mine of the Phandelver's Pact in the nearby hills.",
  quests: [DELIVER_PROVISION],
  imageUrl:
    "https://static.wikia.nocookie.net/sword-coast-adventurers/images/f/ff/Elmar_Barthen.jpg/revision/latest/scale-to-width-down/220",
  informations: [
    "Rockseeker brothers are treasure hunters",
    "Nundro and Tharden were camped outside of town, expected them to come for supplies yesterday",
  ],
};

export const TOBLEN: INpc = {
  id: "TOBLEN",
  name: "Toblen Stonehill",
  description:
    "Middle aged human, charming, kind, generous.  Innkeeper at Auberge Stonehill.  Oftens get in scuffles defending his honor with the towns toughest.",
  quests: [STOP_REBRANDS],
  imageUrl:
    "https://www.worldanvil.com/uploads/images/e0339ed07d1bc647e870ba22c7790c8b.jpg",
  informations: [
    "Rockseeker brothers are treasure hunters",
    "Nundro and Tharden have not been to Phandalin in a fornite",
    "Gundren was to be of passage with Sildar but they've not come",
    "Thinks Harbin is a coward, refuses to do anything about Redbrands",
    "Could find award for players if they chase Redbrands",
    "Old townmaster challenged Redbrands, daugther and wife moved out, never seen him or them again",
  ],
};

export const ELSA: INpc = {
  id: "ELSA",
  name: "Elsa",
  description:
    "Big breasted young woman, knows of rumors and affairs from occupation as the barkeeper at the Stonehill Inn.  Wife of Tolbien",
  quests: [],
  imageUrl:
    "https://i.pinimg.com/originals/c7/ab/68/c7ab6871d5307b62ff5648bf733d2164.png",
  informations: [
    "Lady Garaele is upset, her special power is not working",
    "Saw someone scary in the graveyard, he ran away with bones",
    "Saw a woman dressed all in black on the rooftops",
    "The townmaster daugther went away with mother before he disapeared",
  ],
};

export const SISTER_GARAELE: INpc = {
  id: "SISTER_GARAELE",
  name: "Sister Garaele",
  description:
    "Jeune elfe zel?? qui d??sespoir de voir Phandalin sans les Redbrands",
  quests: [AGATHA_LAIR],
  imageUrl:
    "https://db4sgowjqfwig.cloudfront.net/images/3759648/tumblr_mq8rnoGZa71rfyiu4o1_500.jpg",
  informations: [
    "Membre des Harpers, soci??t?? disperse d'aventuriers et d'espion qui d??fende les l'??quitt?? et qui s'oppose aux abus de pouvoirs",
    "",
  ],
  possessions: ["5 healing potion"],
};

export const SILDAR: INpc = {
  id: "SILDAR",
  name: "Sildar Hallwinter",
  description: "accent francais, noble, 50 ans, ",
  quests: [FIND_IARNO, ESCORT_SILDAR],
  imageUrl:
    "https://static.wikia.nocookie.net/sword-coast-adventurers/images/6/63/Sildar.jpg/revision/latest/top-crop/width/360/height/450",
  informations: [
    "History of Phandalin, deux premier paragraphe de Background",
    "Les fr??res rock seeker on d??couvert l'entr??e de la Wave Echo Cave, l'emplacement des mines perdus de Phandelver's",
    "Gundren avait une carte montrant l'emplacement de la cave, les goblins l'ont prise",
    "Il pense que Gundren et la carte furent envoy??s au Cragmaw Castle par Klarg, le chef de cette caverne",
    "Ne connait pas l'emplacement du castle mais peut-??tre que quelqu'un ?? Phandalin saurait",
    "Anything required to move the campaign forward",
    "Agent de l'alliance du seigneur (un groupe alli?? qui se pr??ocuppe avec la s??curit?? et prosp??rit?? mutuelle",
    "??limine les dangers pour les villes/villages par quelconque moyen, tout en rapportant l'honneur et la gloire ?? leur leader et homeland",
    "Met with Gundren in Neverwinter and agreed to go to Phandalin with him",
    "Wants to investigate disparition of Iarno Albrek, un confr??re de l'alliance du seigneur qui a disparu ?? son arriv?? ?? Phandalin il y ?? 2 mois",
  ],
  possessions: ["Map to Cragmaw Castle**", "Healing potion", "Drift cloak"],
  quotes: [
    "Merci ?? vous, aventuriers, sans vous je serais assur??ment dans le ventre de ces gobelins.",
    "Il nous faut trouver Gundren!",
    "Trouvons Klarg, il doit connaitre les r??ponses ?? nos questions",
  ],
};

export const HARBIN: INpc = {
  id: "HARBIN",
  name: "Harbin Wester",
  description:
    "Harbin was pompous and pretentious.[1][4] He generally presented himself as polite[5] and friendly, but this was just for politics. In fact, he was a greedy, calculating, and two-faced businessman at heart, unafraid to push the boundaries of decency or legality to get what he wanted.[3][2] That said, he was also genuinely a fretful[5] and hapless coward when faced with dangers beyond his control.",
  quests: [STOP_REBRANDS, ORCS_WYVERN_TOR],
  imageUrl:
    "https://static.wikia.nocookie.net/sword-coast-adventurers/images/5/50/Harbin_Wester.jpg/revision/latest",
  informations: [
    "Downplays the threath of the Redbrands, say they've been proteting from Goblins",
    "Does not seem to know where old Townmaster went",
  ],
};

export const BLACK_SPIDER: INpc = {
  id: "BLACK_SPIDER",
  name: "Nezzar",
  description:
    "Very inteliggent drow, beautiful but seemingly deadly.  French woman, ruthless and polite",
  quests: [],
  imageUrl:
    "https://cdn.shopify.com/s/files/1/1066/8352/articles/Drow_5e_Dungeons_and_Dragons.jpg",
  informations: [
    "Anything to gain trust of the party, she knows most/anything about the campaign",
    "D??sire aider les aventuriers dans Phandalin pour obtenir de l'information",
    "N'apparait qu'une fois pour porter main forte au aventurier durant le premier combat contre les Redbrands",
  ],
  possessions: [
    "Spider Staff: quarterstaff of poison",
    "Healing potion",
    "key to cell",
    "9 x gemstones",
    "slab of electrum",
  ],
};

export const KLARG: INpc = {
  id: "KLARG",
  name: "Klarg the Bugbear",
  description:
    "Grand et fort bugbear avec d??lusion de grandeur.  Pense qu'il est un seigneur qui ne fait que d??butter sa conqu??te.  Parle de lui m??me ?? la troisi??me personne",
  quests: [],
  quotes: [
    "QUI OSE D??RANGER KLARG",
    "VOS CORPS SERVIRONT ?? CONSTRUIRE MON TRONE",
  ],
  imageUrl:
    "https://static.wikia.nocookie.net/plan-b/images/3/3c/Bugbear.jpg/revision/latest/top-crop/width/500/height/750",
  informations: [
    "Location of Cragmaw Castle",
    "Il ?? recu ordre de King Grol pour la capture de Gundren",
    "Gundren fut envoy?? au Cragmaw Castle",
    "Alliance between King Grol and the black spider",
  ],
};

export const HALIA: INpc = {
  id: "Halia_Thornton",
  name: "Halia Thornton",
  description:
    "Young ambitious woman, agente des Zhentarim une organisation puissante qui essaie de prendre contr??le du nord par sa richesse et l'influence.  Elle veut prendre le contr??le de Phandalin",
  quests: [STOP_REBRANDS],
  imageUrl:
    "https://www.worldanvil.com/media/cache/cover/uploads/images/3496b7c5577f397f1599c8d611797965.jpg",
  informations: [
    "DC 15 perception pour comprendre que Halia ?? des motifs ult??rieurs pour ??liminer les Redbrands",
    "Halia approche les joueurs qui pourrait ??tre int??ress?? ?? joindre les Zhentarim (greedy) ",
  ],
};

export const QUELINE: INpc = {
  id: "QUELINE",
  name: "Queline Alderleaf",
  description: "Femme hobbit sage de 45 ans, g??n??reuse et accueillante",
  quests: [],
  imageUrl:
    "https://www.scabard.com/user/Tizzygill/image/Qelline-Alderleaf.jpg",
  informations: [
    "Mon fils, Carp, un jeune hobbit fougueux et plus vieux que son age si je dois vous l'avouer.  Le pauvre est enchant?? ?? l'id??e d'??tre un aventurier.  Il y a pas que 2 jours il jouait pr??t des ruines du manoir Tresendar, dans les bois.  Depuis il ranconte qu'il ?? trouv?? un tunnel secret, depuis lequel il aurait vu sortir de gros monsieur m??chant tout en rouge.",
  ],
};

export const DARAN: INpc = {
  id: "DARAN",
  name: "Daran Edermath",
  description:
    "Un demi elf d'une 100 ann??es, ancien aventurier (fighter) qui ??tait marshall dans les terres de Dragon Coast loin au sud est",
  informations: [
    "Quelqu'un doit s'occupper des Redbrands et GlassStaff",
    "Ils sont souvent au Sleeping Giant",
    "Ils sont au manoir**",
  ],
  quests: [OLD_OWL_TROUBLE],
};

export const REDBRAND_THUGS: INpc = {
  id: "REDBRAND_THUGS",
  name: "REDBRAND_THUGS",
  description: "4 x Rebrand Ruffian",
  informations: [
    "Leader est GlassStaff, un humain sorcier avec un baton en verre",
    "Un individu connu comme le Black spider ?? engager les Redbrands pour effrayer aventuriers, voyageurs et les habitants de Phandalin",
    "Des bugbears renforcent les rangs des Redbrands",
    "Ils ont des prisonniers",
    "Un monstre ?? un oeil garde la portion inf??rieure de leurs base d'op??ration",
  ],
  quests: [DEFEAT_THE_REDBRAND_THUGS],
};

export const MIRNA: INpc = {
  id: "MIRNA",
  name: "Mirna Dendrar",
  description:
    "Une humaine accompagner de ses deux enfants, captifs des Redbrands",
  informations: [],
  quests: [MIRNAS_HEIRLOOM],
};

export const GLASSSTAFF: INpc = {
  id: "GLASSSTAFF",
  name: "GlassStaff OU Iarno Albrek",
  description:
    "Humain sorcier, ancien membre de l'alliance du Seigneur.  Semble gentil et curtuous: 'Mes ch??res monsieur'",
  informations: [
    "Black spider is a drow*",
    "Black spider ?? envoyer 3 bugbears pour aider les Redbrands, ceux-ci semble connaitre la location de la cave",
    "Black spider cherche ?? retrouver la forge of Spells dans la cave",
  ],
  quests: [],
};

export const NOTHIC: INpc = {
  id: "NOTHIC",
  name: "Bismuth",
  description: "Monstre ?? un oeil un peu fou, t??l??pathie, pacte avec Iarno",
  informations: [
    "Leader est GlassStaff, un humain sorcier avec un baton en verre",
    "Un individu connu comme le Black spider ?? engager les Redbrands pour effrayer aventuriers, voyageurs et les habitants de Phandalin",
    "Des bugbears renforcent les rangs des Redbrands",
    "Ils ont des prisonniers",
    "Un monstre ?? un oeil garde la portion inf??rieure de leurs base d'op??ration",
  ],
  quests: [],
};
