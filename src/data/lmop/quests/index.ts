import { IQuest } from "../../../components/quest";

export const DELIVER_PROVISION: IQuest = {
  id: "DELIVER_PROVISION",
  title: "Delivery provision to Phandalin",
  text: "Tasked initially by Gundren Rockseeker to deliver provisions from Neverwinter to Phandalin, you have successfully brought the wagon and its content to Elmar Barthen in Phandalin. Paid 60 GP total.",
  objectives: ["Apporter les provisions à Barthen"],
  experience: 300,
  rewards: ["60gp"],
};

export const ESCORT_SILDAR: IQuest = {
  id: "ESCORT_SILDAR",
  title: "Escort Sildar to Phandalin",
  text: "After finding Sildar Hallwinter in the Cragmaw Hideout near the Triboar Trail, you were compensated 50 GP total for providing safe passage from the enemy to the relative safety of Phandalin.",
  objectives: ["Raccompagner Sildar en vie jusqu'a Phandalin"],
  experience: 100,
  rewards: ["100gp", "Friendly with Sildar"],
};

export const RETRIEVE_LOST_SUPPLIES: IQuest = {
  id: "RETRIEVE_LOST_SUPPLIES",
  title: "Retrieve lost supplies",
  text: "Convincing Linene that her supplies were indeed missing, you retrieved the loads of cargo that had been stolen by the Cragmaw, and were duly rewarded with a total of 50 GP as well as access to the backroom supplies of the Lionshield Coster in Phandalin.",
  objectives: ["Rapporter les provisions au Lionshield Coster"],
  experience: 50,
  rewards: ["65gp", "access to supplies"],
};

export const FIND_IARNO: IQuest = {
  id: "FIND_IARNO",
  title: "Find Iarno",
  text: "Sildar has tasked any willing persons to learn of the definitive whereabouts of his fellow Lord’s Alliance member. He has asked that those interested investigate the town of Phandalin and return anything of Iarno they can. Iarno is described as a short, dark-bearded human wizard in his 30s. He will reward 200 GP for this information and/or rescue.",
  objectives: ["Trouver ce qui est arrivé à Iarno"],
  experience: 100,
  rewards: ["200gp", "Honored with Sildar"],
};

export const STOP_REBRANDS: IQuest = {
  id: "STOP_REBRANDS",
  title: "Stop the Redbrands",
  text: "Many of those in the town of Phandalin wish a return to normalcy (and normal trade), but with the Redbrands holding the town in a stranglehold there is little hope. Several tradespeople urge the adventurers to put an end to the menace so that they can be properly rewarded.",
  objectives: ["Éliminer les Redbrands et GlassStaff"],
  experience: 0,
  rewards: ["100 gp"],
};

export const RESCUE_GUNDREN: IQuest = {
  id: "RESCUE_GUNDREN",
  title: "Rescue Gundren",
  text: "Offering a hefty reward of 500 GP, Sildar asks for the aid of the adventurers to find and rescue Gundren from the Cragmaw. He knows only that he has been moved to a different location, along with his map leading to the Wave Echo Cave.",
  objectives: ["Retrouver Gundren en vie"],
  experience: 0,
  rewards: ["500gp", "Map leading to Wave Echo Cave"],
};

export const RESTORE_FORGE_OF_SPELLS: IQuest = {
  id: "RESTORE_FORGE_OF_SPELLS",
  title: "Restore the Forge of Spells",
  text: "Sildar and the Rockseekers’ ultimate goal is to restore the Forge of Spells within the Wave Echo Cave to craft fine magical goods for trade throughout the region, a potentially vast source of income to an otherwise struggling settlement.",
  objectives: ["Débarasser la Wave Echo Cave de tous les enemies"],
  experience: 0,
  rewards: ["tbd"],
};

export const FIND_REIDOTH: IQuest = {
  id: "FIND_REIDOTH",
  title: "Find Reidoth",
  text: "Qelline Alderleaf has offered what aid she can to the group, providing them with a potential guide found in the Northwest ruins of Thundertree. Reidoth, a druid who has lived in the area for many years, could possibly point the group in the direction of any location they may seek.",
  objectives: ["Trouver Reidoth"],
  experience: 0,
  rewards: ["information"],
};

export const ORCS_WYVERN_TOR: IQuest = {
  id: "ORCS_WYVERN_TOR",
  title: "Orcs near Wyvern Tor",
  text: "Townsmaster Harbin has provided a contract for 100 GP to any able persons who can put an end to the band of orcs near Wyvern Tor to the east of Phandalin.",
  objectives: ["Tuer les orcs et l'ogre"],
  experience: 1250,
  rewards: ["100gp"],
};

export const MIRNAS_HEIRLOOM: IQuest = {
  id: "MIRNAS_HEIRLOOM",
  title: "Mirna's heirloom",
  text: "Grace infini à vous, sauveurs de Phandalin.  Nous ne possédons rien de valeur à vous offrir pour vous remercier.  Par contre, si vous vous rendez aux ruines de Thundertree, vous trouverez dans ce qui reste du commerce d'herboristerie de mes parents, un petit coffre contenant un collier précieux",
  objectives: ["Si le collier est rapporter à Mirna: 200xp"],
  experience: 200,
  rewards: ["collier (200gp) ou 200 xp"],
};

export const AGATHA_LAIR: IQuest = {
  id: "AGATHA_LAIR",
  title: "Agatha's lair",
  text: "Aventuriers, avant  que vous ne quittiez.. Puis-je demander une faveur de votre part, l'ordre auquel j'appartien désire en savoir plus sur un livre de sort qui à appartenu au mage Bowgentle.  J'ai essayé de consulter avec la banshee qui habite au dernier endroit où les rumeurs nous envoie, mais elle ne s'est pas présenté à moi.",
  objectives: [
    "Convaincre Agatha de répondre à une question",
    "Échanger la broche en argent contre une question | flaté l'égo d'Agatha",
  ],
  experience: 200,
  rewards: [
    "2 x Potion of healing si ils retournent donner l'information à Garaelle",
  ],
};

export const OLD_OWL_TROUBLE: IQuest = {
  id: "OLD_OWL_TROUBLE",
  title: "Old owl trouble",
  text: "Aventuriers, je vous prie d'investiguer les ruines de la tour d'Old owl.  On racontre y avoir vu une créature étrange qui dépouille cimetières et crypte.  Et encore plus inquiétant.. des voyageurs ayant voulu s'y rendre raconte avoir été chassé par des morts vivants.",
  objectives: [
    "Investiguer les ruines d'Old Owl Well",
    "Découvrir l'existance d'Hamun Kost",
    "Tué Hamun Kost et ses zombies: 800xp",
  ],
  experience: 200,
  rewards: ["200xp pour la découverte", "800 pour le tué"],
};

export const DEFEAT_THE_REDBRAND_THUGS: IQuest = {
  id: "DEFEAT_THE_REDBRAND_THUGS",
  title: "DEFEAT_THE_REDBRAND_THUGS",
  text: "Battre les quatres redbrands (5 si Nezzar en tue un)",
  experience: 400,
  objectives: ["Tuer les redbrands"],
  rewards: ["xp", "information"],
};
