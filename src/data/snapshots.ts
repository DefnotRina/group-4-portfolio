import tp1 from "@/assets/tp docu/20260513_095256.jpg";
import tp2 from "@/assets/tp docu/680119325_1239715434625332_1284386870804773523_n.jpg";
import tp3 from "@/assets/tp docu/681135824_861792276513096_4616772176042570530_n.jpg";
import tp4 from "@/assets/tp docu/683372461_1651016499272424_1660383442522206424_n.jpg";
import tp5 from "@/assets/tp docu/683838809_1488639812751170_3521712538566129623_n.jpg";
import tp6 from "@/assets/tp docu/683868851_1391602713017699_6534141066096228484_n.jpg";
import tp7 from "@/assets/tp docu/685469297_1333958135306271_7058831131904777979_n.jpg";
import tp8 from "@/assets/tp docu/686184131_939433025465648_807230035867184500_n.jpg";
import tp9 from "@/assets/tp docu/IMG_20260503_103011.jpg";
import tpGroup from "@/assets/tp docu/group-photo copy.jpg";

export type Snapshot = { src: string; caption: string };

export const snapshots: Snapshot[] = [
  { src: tpGroup, caption: "Our group at the mangrove rehabilitation site." },
  { src: tp1, caption: "Documenting the coastal environment." },
  { src: tp2, caption: "Preparing the seedlings for planting." },
  { src: tp3, caption: "Understanding the importance of mangrove ecosystems." },
  { src: tp4, caption: "Working together in the mud." },
  { src: tp5, caption: "Placing a new life into the shore." },
  { src: tp6, caption: "Ensuring each sapling is securely planted." },
  { src: tp7, caption: "The vast area chosen for rehabilitation." },
  { src: tp8, caption: "Every hand makes a difference." },
  { src: tp9, caption: "Reflecting on the work done." },
];
