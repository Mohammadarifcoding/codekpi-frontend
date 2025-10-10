import { FaHome, FaCalendarAlt, FaUsers, FaEnvelope } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLeaderboard } from "react-icons/md";

export const Navdata = [
  {
    route: "/",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "leaderboard",
    name: "Leaderboard",
    icon: MdLeaderboard, // Represents club events & workshops
  },
  {
    route: "events",
    name: "Events",
    icon: FaCalendar, // Represents the club community
  },
  {
    route: "/join-now",
    name: "Join Now",
    icon: IoMdPersonAdd, // For reaching out to the club
  },
];
