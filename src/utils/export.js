import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    id: 1,
    images: prop1,
    address: "6Downtown, Las Vegas",
    name: "Villa with Amazing View",
    price: "$ 213.23",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "250 sq ft",
    owner: "Alice adams",
  },
  {
    id: 2,
    images: prop2,
    address: "Meadows Village, Las Vegas",
    name: "Townhouse for Sale",
    price: "$ 345.18",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Drew Alice",
  },
  {
    id: 3,
    images: prop3,
    address: "49 DC townhall alex",
    name: "Duplex sea facing for rent",
    price: "$ 652.18",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "129 sq ft",
    owner: "Fursi Bam",
  },
  {
    id: 4,
    images: prop4,
    address: "Underground street 20 texax",
    name: "Villa with Side View",
    price: "$ 876.13",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "453 sq ft",
    owner: "Neon Alice",
  },
  {
    id: 5,
    images: prop5,
    address: "Rubari London Hills",
    name: "Awesome villa for rent",
    price: "$ 341.83",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Firari Alice",
  },
  {
    id: 6,
    images: prop6,
    address: "Northean fersh alice",
    name: "Street Farm for sale",
    price: "$ 675.23",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "340 sq ft",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    id: 1,
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    id: 2,
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    id: 3,
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
    id: 4,
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    id: 5,
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    id: 6,
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const client = [
  {
    id: 1,
    image: client1,
    name: "Dana Gilmore",
    text: "Excellent team!",
    rating: 5,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    id: 2,
    image: client2,
    name: "Ana Anderson",
    text: "Very good work",
    rating: 4,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    id: 3,
    image: client3,
    name: "Albert adame",
    text: "Very well",
    rating: 3,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    id: 4,
    image: client4,
    name: "Dana Gilmore",
    text: "Excellent team!",
    rating: 5,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    id: 5,
    image: client5,
    name: "Alex gilmore",
    text: "Excellent team!",
    rating: 4,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    id: 6,
    image: client6,
    name: "Sivay Ashbi",
    text: "Excellent team!",
    rating: 5,
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
];
