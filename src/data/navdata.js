import { FaHome, FaCalendarAlt, FaUsers, FaEnvelope } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

export const Navdata = [
  {
    route: "home",
    name: "Home",
    icon: FaHome,
  },
  {
    route: "events",
    name: "Events",
    icon: FaCalendarAlt, // Represents club events & workshops
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
