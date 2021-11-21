import { IQuest } from "../../../components/quest";

export const DELIVER_PROVISION: IQuest = {
  id: "DELIVER_PROVISION",
  title: "Delivery provision to Phandalin",
  text: "Tasked initially by Gundren Rockseeker to deliver provisions from Neverwinter to Phandalin, you have successfully brought the wagon and its content to Elmar Barthen in Phandalin. Paid 60 GP total.",
  experience: 300,
  rewards: ["60gp"],
};

export const ESCORT_SILDAR: IQuest = {
  id: "ESCORT_SILDAR",
  title: "Escort Sildar to Phandalin",
  text: "After finding Sildar Hallwinter in the Cragmaw Hideout near the Triboar Trail, you were compensated 50 GP total for providing safe passage from the enemy to the relative safety of Phandalin.",
  experience: 50,
  rewards: ["50gp", "Friendly with Sildar"],
};

export const RETRIEVE_LOST_SUPPLIES: IQuest = {
  id: "RETRIEVE_LOST_SUPPLIES",
  title: "Retrieve lost supplies",
  text: "Convincing Linene that her supplies were indeed missing, you retrieved the loads of cargo that had been stolen by the Cragmaw, and were duly rewarded with a total of 50 GP as well as access to the backroom supplies of the Lionshield Coster in Phandalin.",
  experience: 50,
  rewards: ["65gp", "access to supplies"],
};

export const FIND_IARNO: IQuest = {
  id: "FIND_IARNO",
  title: "Find Iarno",
  text: "Sildar has tasked any willing persons to learn of the definitive whereabouts of his fellow Lord’s Alliance member. He has asked that those interested investigate the town of Phandalin and return anything of Iarno they can. Iarno is described as a short, dark-bearded human wizard in his 30s. He will reward 200 GP for this information and/or rescue.",
  experience: 0,
  rewards: ["200gp", "Honored with Sildar"],
};

export const STOP_REBRANDS: IQuest = {
  id: "STOP_REBRANDS",
  title: "Stop the Redbrands",
  text: "Many of those in the town of Phandalin wish a return to normalcy (and normal trade), but with the Redbrands holding the town in a stranglehold there is little hope. Several tradespeople urge the adventurers to put an end to the menace so that they can be properly rewarded.",
  experience: 0,
  rewards: ["tbd"],
};

export const RESCUE_GUNDREN: IQuest = {
  id: "RESCUE_GUNDREN",
  title: "Rescue Gundren",
  text: "Offering a hefty reward of 500 GP, Sildar asks for the aid of the adventurers to find and rescue Gundren from the Cragmaw. He knows only that he has been moved to a different location, along with his map leading to the Wave Echo Cave.",
  experience: 0,
  rewards: ["500gp", "Map leading to Wave Echo Cave"],
};

export const RESTORE_FORGE_OF_SPELLS: IQuest = {
  id: "RESTORE_FORGE_OF_SPELLS",
  title: "Restore the Forge of Spells",
  text: "Sildar and the Rockseekers’ ultimate goal is to restore the Forge of Spells within the Wave Echo Cave to craft fine magical goods for trade throughout the region, a potentially vast source of income to an otherwise struggling settlement.",
  experience: 0,
  rewards: ["tbd"],
};

export const FIND_REIDOTH: IQuest = {
  id: "FIND_REIDOTH",
  title: "Find Reidoth",
  text: "Qelline Alderleaf has offered what aid she can to the group, providing them with a potential guide found in the Northwest ruins of Thundertree. Reidoth, a druid who has lived in the area for many years, could possibly point the group in the direction of any location they may seek.",
  experience: 0,
  rewards: [],
};

export const ORCS_WYVERN_TOR: IQuest = {
  id: "ORCS_WYVERN_TOR",
  title: "Orcs near Wyvern Tor",
  text: "Townsmaster Harbin has provided a contract for 100 GP to any able persons who can put an end to the band of orcs near Wyvern Tor to the east of Phandalin.",
  experience: 0,
  rewards: ["100gp"],
};

export const LOCATE_HEIRLOOM: IQuest = {
  id: "LOCATE_HEIRLOOM",
  title: "Locate the Heriloom",
  text: "one of the captives under Tresendar Manor, informed the party of a valuable emerald necklace, an heirloom left behind by her family in the ruins of Thundertree. She told the group that it should have been hidden beneath a section of store shelves in an herb and alchemy shop located to the southeast part of the ruins.",
  experience: 0,
  rewards: ["tbd"],
};

export const AGATHA_LAIR: IQuest = {
  id: "AGATHA_LAIR",
  title: "Agatha's lair",
  text: "A powerful spirit has been messing with Garaele's abilities, from her research she thinks spirit of a witch from a grave in the woods.",
  experience: 0,
  rewards: ["Potions"],
};
