import { FaHome, FaCalendarAlt, FaUsers, FaEnvelope } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";

export const Navdata = [
  {
    route: "home",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "leaderboard",
    name: "Leaderboard",
    icon: MdLeaderboard, // Represents club events & workshops
  },
  {
    route: "members",
    name: "Members",
    icon: FaUsers, // Represents the club community
  },
  {
    route: "/ai-workshop/join",
    name: "Join Now",
    icon: IoMdPersonAdd, // For reaching out to the club
  },
];
