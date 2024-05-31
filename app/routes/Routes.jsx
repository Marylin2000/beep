import { HiOutlineHeart, HiOutlineHome, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
//routers export


export const routerTrigger = [
  {
    icon: <HiOutlineHome   className="text-orange-500"/>,
    Destination: "/",
  },


  {
    icon: <HiOutlineHeart  className="text-orange-500" />,
    Destination: "/cart",
  },
  {
    icon: <HiOutlineUser   className="text-orange-500"/>,
    Destination: "/profile",
  },
];
