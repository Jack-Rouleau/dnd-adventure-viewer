import { INpc } from "../../../components/npc";
import {
  AGATHA_LAIR,
  DELIVER_PROVISION,
  ESCORT_SILDAR,
  FIND_IARNO,
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
    "Garaele was a worshiper of Tymora, and spent much time caring for the Shrine of Luck. However, she had a strong desire to travel and do good for the people of Phandalin, and was known to leave town on adventures. She was also an agent for the Harpers for many years",
  quests: [AGATHA_LAIR],
  imageUrl:
    "https://db4sgowjqfwig.cloudfront.net/images/3759648/tumblr_mq8rnoGZa71rfyiu4o1_500.jpg",
  informations: [
    "Presence of a powerful dark spirit in the woods, probably remnant of an old witch",
    "Life has been harder in the village since the Redbrands",
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
    "Les frères rock seeker on découvert l'entrée de la Wave Echo Cave, l'emplacement des mines perdus de Phandelver's",
    "Gundren avait une carte montrant l'emplacement de la cave, les goblins l'ont prise",
    "Il pense que Gundren et la carte furent envoyés au Cragmaw Castle par Klarg, le chef de cette caverne",
    "Ne connait pas l'emplacement du castle mais peut-être que quelqu'un à Phandalin saurait",
    "Anything required to move the campaign forward",
    "Agent de l'alliance du seigneur (un groupe allié qui se préocuppe avec la sécurité et prospérité mutuelle",
    "Élimine les dangers pour les villes/villages par quelconque moyen, tout en rapportant l'honneur et la gloire à leur leader et homeland",
    "Met with Gundren in Neverwinter and agreed to go to Phandalin with him",
    "Wants to investigate disparition of Iarno Albrek, un confrère de l'alliance du seigneur qui a disparu à son arrivé à Phandalin il y à 2 mois",
  ],
  possessions: ["Map to Cragmaw Castle", "Healing potion", "Drift cloak"],
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
    "Harbin was pompous and pretentious.[1][4] He generally presented himself as polite[5] and friendly, but this was just for politics. In fact, he was a greedy, calculating, and two-faced businessman at heart, unafraid to push the boundaries of decency or legality to get what he wanted.[3][2] That said, he was also genuinely a fretful[5] and hapless coward when faced with dangers beyond his control.",
  quests: [],
  imageUrl:
    "https://static.wikia.nocookie.net/plan-b/images/3/3c/Bugbear.jpg/revision/latest/top-crop/width/500/height/750",
  informations: [
    "Location of Cragmaw Castle",
    "King Grol",
    "Gundren was sent to Cragmaw Castle",
    "Alliance between King Grol and the black spider",
  ],
};

export const HALIA: INpc = {
  id: "Halia_Thornton",
  name: "Halia Thornton",
  description:
    "Young ambitious woman, agente des Zhentarim une organisation puissante qui essaie de prendre contrôle du nord par sa richesse et l'influence.  Elle veut prendre le contrôle de Phandalin",
  quests: [STOP_REBRANDS],
  imageUrl:
    "https://www.worldanvil.com/media/cache/cover/uploads/images/3496b7c5577f397f1599c8d611797965.jpg",
  informations: [
    "DC 15 perception pour comprendre que Halia à des motifs ultérieurs pour éliminer les Redbrands",
    "Halia approche les joueurs qui pourrait être intéressé à joindre les Zhentarim (greedy) ",
  ],
};

export const QUELINE: INpc = {
  id: "QUELINE",
  name: "Queline Alderleaf",
  description: "Femme hobbit sage de 45 ans, généreuse et accueillante",
  quests: [],
  imageUrl:
    "https://www.scabard.com/user/Tizzygill/image/Qelline-Alderleaf.jpg",
  informations: [
    "Mon fils, Carp, un jeune hobbit fougueux et plus vieux que son age si je dois vous l'avouer.  Le pauvre est enchanté à l'idée d'être un aventurier.  Il y a pas que 2 jours il jouait prêt des ruines du manoir Tresendar, dans les bois.  Depuis il ranconte qu'il à trouvé un tunnel secret, depuis lequel il aurait vu sortir de gros monsieur méchant tout en rouge.",
  ],
};
