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
} from "../NPCs/index";

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

export const PHANDALIN: IDndLocation = {
  id: "PHANDALIN",
  name: "Phandalin",
  description:
    "In the late 15th century DR, Phandalin was a modest and architecturally boring town of farmers, woodcutters, trappers, and miners built atop the ruins of the old Phandalin. The town quickly grew to about fifty well-maintained structures built of logs and flagstones with three deep wells providing water. The town was dominated by an apple orchard on the west side and a ruined manor atop a hill to the east. The townsfolk would congregate in a small town square and an adjacent town green.",
  geography: `Phandalin was located in the northern foothills of the Sword Mountains south of Neverwinter Wood. It was northeast of Leilon where the road that ran from the High Road to Triboar faded into a trail. This was a region rich with both natural resources and adventuring opportunities. The climate was temperate with an average yearly rainfall of 18 inches (46 centimeters).`,
  people: [TOBLEN, BARTHEN, BLACK_SPIDER, ELSA, HARBIN, SISTER_GARAELE, SILDAR],
  locations: [STONEHILL_INN, TOWNMASTER_HALL],
  exteriorImageUrl:
    "https://www.worldanvil.com/media/cache/cover/uploads/images/b2db99d7d353b54caf360ca2d4cd8dff.jpg",
  exteriorMapUrl:
    "https://cdnb.artstation.com/p/assets/images/images/039/602/327/large/maps-on-fire-phandalin-gm-map.jpg",
};

export const CRAGMAW_HIDEOUT: IDndLocation = {
  id: "CRAGMAW_HIDEOUT",
  name: "Cragmaw Hideout",
  description:
    "The entrance to the cave complex was under a large hill, and had a shallow stream flowing out of it. It had four main rooms and several smaller trails linking them. There was also two large pools of water, which could be released to cause a flood. A crudely made bridge linked the room at the end of the river to the second-in-command's room, where prisoners were also kept.",
  geography: `Cave to the north (east) of Phandalin, north of the Triboar Trail.  Entrance is narrow with running water`,
  people: [KLARG, SILDAR],
};
