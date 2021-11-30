import { IDndLocation } from "../../../components/location";
import {
  TOBLEN,
  BARTHEN,
  BLACK_SPIDER,
  ELSA,
  HARBIN,
  SISTER_GARAELE,
  SILDAR,
  KLARG,
  HALIA,
  QUELINE,
  DARAN,
  REDBRAND_THUGS,
  MIRNA,
  GLASSSTAFF,
  NOTHIC,
} from "../NPCs/index";
import { ESCORT_SILDAR } from "../quests";

export const STONEHILL_INN: IDndLocation = {
  id: "STONEHILL_INN",
  name: "Auberge Stonehill",
  description:
    "Newly built in the 15th century DR, the inn was a large, two-story building was made of unrefined rocks and crudely cut wood. The villagers of Phandalin, from miners to farmers, enjoyed relaxing in the common room, which became a good place to hear local gossip and stories. The inn was kept neat and clean, and was a generally pleasant place to visit.",
  geography: "Two stories building, rest available",
  people: [TOBLEN, ELSA],
  exteriorImageUrl:
    "https://db4sgowjqfwig.cloudfront.net/campaigns/245719/assets/1081260/Stonehill_Inn_cropped.jpg",
  interiorImageUrl:
    "https://www.worldanvil.com/media/cache/cover/uploads/images/ba842da43159e72e15ffa10d19e1735c.jpg",
  interiorMapUrl: "https://i.redd.it/1a9hgfp6etr61.jpg",
};

export const TOWNMASTER_HALL: IDndLocation = {
  id: "TOWNMASTER_HALL",
  name: "Hotel de ville de Phandalin",
  description:
    "The hall was a single story building made of good quality stone and was well built. The roof was made of wood with a bell tower rising from the back. A noticeboard near the front door displayed bulletins and information for residents and newcomers to town, some offering rewards for certain tasks.",
  people: [HARBIN, SILDAR],
  geography: "Single story building, no rest",
  exteriorImageUrl:
    "https://s3.amazonaws.com/files.d20.io/images/24202080/iAy8mf99BP6Nqwe8K9FTPA/original.jpg",
  interiorMapUrl:
    "https://www.scabard.com/user/Tizzygill/image/townmasters-hall-v3.png",
};

export const CRAGMAW_HIDEOUT: IDndLocation = {
  id: "CRAGMAW_HIDEOUT",
  name: "Cragmaw Hideout",
  description:
    "The entrance to the cave complex was under a large hill, and had a shallow stream flowing out of it. It had four main rooms and several smaller trails linking them. There was also two large pools of water, which could be released to cause a flood. A crudely made bridge linked the room at the end of the river to the second-in-command's room, where prisoners were also kept.",
  geography: `Cave to the north (east) of Phandalin, north of the Triboar Trail.  Entrance is narrow with running water`,
  people: [KLARG, SILDAR],
  loot: [
    "Matériel portant l'image du Lionshield Coster, requiert un charieau pour transporter",
    "Treasure chest: 600cp, 110sp, deux potions de santé, une statuette de jade d'une grenouille avec trois orbes en or (40gp)",
  ],
};

export const ALDERLEAF_FARM: IDndLocation = {
  id: "ALDERLEAF_FARM",
  name: "Alderleaf Farm",
  description: "Petite ferme de patate et mouton",
  geography: "",
  people: [QUELINE],
};

export const SHRINE_OF_LUCK: IDndLocation = {
  id: "SHRINE_OF_LUCK",
  name: "Shrine of Luck",
  description:
    "Petit temple construit à partir des roches prisent dans les ruines de l'ancien Phandalin.  Dédié à Tymora, déesse de la chance",
  geography: "",
  people: [SISTER_GARAELE],
};

export const MINER_EXCHANGE: IDndLocation = {
  id: "MINER_EXCHANGE",
  name: "Miner's exchange",
  description: "Trading post pour les mineurs, peser, evaluation, etc.",
  geography: "",
  people: [HALIA],
};

export const EDERMATH_ORCHARD: IDndLocation = {
  id: "EDERMATH_ORCHARD",
  name: "Edermath Orchard",
  description: "Petit verger avec une petite maison",
  geography: "",
  people: [DARAN],
};

export const SLEEPING_GIANT: IDndLocation = {
  id: "SLEEPING_GIANT",
  name: "Sleeping Giant",
  description: "Taverne dangereuse",
  geography: "",
  people: [REDBRAND_THUGS],
};

export const TRESENDAR_MANOR: IDndLocation = {
  id: "TRESENDAR_MANOR",
  name: "Manoir de Tresendar",
  description:
    "Plus chateau que maison, ce trouve à l'est de la ville.  L'ancien manoir est depuis longtemps abandonner",
  geography: "",
  people: [GLASSSTAFF, NOTHIC, MIRNA],
};

export const PHANDALIN: IDndLocation = {
  id: "PHANDALIN",
  name: "Phandalin",
  description:
    "À la fin du 15ème siècle, Phandalin était un modeste et architecturalement peu intéressantvillage d'agriculteurs, de bûcherons, de trappeurs et de mineurs construit au sommet des ruines de l'ancien Phandalin.  La ville s'est rapidement retrouvé avec une cinquantaine de structures bien entretenues construites en rondins et en dalles avec trois puits profonds fournissant de l'eau. La ville était dominée par un verger de pommiers à l'ouest et un manoir en ruine au sommet d'une colline à l'est. Les habitants se rassemblaient dans un petit carré au centre de la ville.",
  geography: `Phandalin was located in the northern foothills of the Sword Mountains south of Neverwinter Wood. It was northeast of Leilon where the road that ran from the High Road to Triboar faded into a trail. This was a region rich with both natural resources and adventuring opportunities. The climate was temperate with an average yearly rainfall of 18 inches (46 centimeters).`,
  people: [
    TOBLEN,
    BARTHEN,
    BLACK_SPIDER,
    ELSA,
    HARBIN,
    SISTER_GARAELE,
    SILDAR,
    HALIA,
  ],
  locations: [
    STONEHILL_INN,
    TOWNMASTER_HALL,
    ALDERLEAF_FARM,
    MINER_EXCHANGE,
    SHRINE_OF_LUCK,
    EDERMATH_ORCHARD,
    SLEEPING_GIANT,
    TRESENDAR_MANOR,
  ],
  exteriorImageUrl:
    "https://www.worldanvil.com/media/cache/cover/uploads/images/b2db99d7d353b54caf360ca2d4cd8dff.jpg",
  exteriorMapUrl:
    "https://cdnb.artstation.com/p/assets/images/images/039/602/327/large/maps-on-fire-phandalin-gm-map.jpg",
};
