import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import * as TiIcons from "react-icons/ti";

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
    icon: <TiIcons.TiTicket />,
    cName: "nav-text",
  },
  {
    title: "Stanford Bridge",
    path: "/bridge",
    icon: <TbIcons.TbBuildingStadium />,
    cName: "nav-text",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
