import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/players",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Fixtures",
    path: "/fixtures",
    icon: <TbIcons.TbBuildingStadium />,
    cName: "nav-text",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
