import { HiOutlineHeart, HiOutlineHome, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
//routers export


export const routerTrigger = [
  {
    icon: <HiOutlineHome   className="text-orange-500"/>,
    Destination: "/",
  },
  {
    icon: <HiOutlineSearch  className="text-orange-500" />,
    Destination: "/search",
  },

  {
    icon: <HiOutlineHeart  className="text-orange-500" />,
    Destination: "/favourite",
  },
  {
    icon: <HiOutlineUser   className="text-orange-500"/>,
    Destination: "/user",
  },
];
