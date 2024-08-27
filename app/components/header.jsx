"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineUser, HiOutlineXCircle } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import logo from "@/app/assets/images/logo.png";
import SideBar from "./categories";
import CartContext from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

function Header() {
  const context = useContext(CartContext);
  const { cart } = context;
  const { user } = useAuth(); // Use the useAuth 
  console.log(user)

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const SideNav = () => (
    <section className="sm:hidden">
      <HiMenuAlt3
        className="text-slate-100"
        onClick={() => setToggleSidebar(true)}
        size={20}
      />
      <div
        className={`h-screen w-[47%] bg-slate-100 rounded-l-md absolute top-0 left-0 transition-transform ${toggleSidebar ? 'translate-x-0' : 'translate-x-[-100%]'} ease-in-out duration-300`}
      >
        <div className="flex space-around items-center">
          <HiOutlineXCircle
            className="m-3"
            onClick={() => setToggleSidebar(false)}
            size={30}
          />
          <p className="text-slate-600">Categories</p>
        </div>
        <SideBar direction={"col"} column={""} gap={""} />
      </div>
    </section>
  );

  return (
    <div className="pl-3 bg-black pr-10 flex items-center justify-between sticky top-0">
      <header className="py-1 flex h-20 z-10 items-center">
        <SideNav />
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="w-24 font-lg lg:w-48" />
        </Link>
      </header>

      <Link href="/search" className="flex gap-4 bg-slate-200 rounded-full w-[50vh] px-3 py-1 items-center">
        <FaSearch size={20} className="text-slate-600 cursor-pointer" />
        <p className="text-slate-400">search</p>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-slate-200">
        <Link href="/cart" className="cursor-pointer relative text-slate-200">
          <p className={`text-xs top-[-2px] ${cart.length === 0 ? "bg-red-400" : "bg-green-300"} text-black p-[7px] flex items-center justify-center rounded-full w-3 h-3 right-0 absolute`}>
            {cart.length}
          </p>
          <FiShoppingCart size={25} />
        </Link>

        {user ? (
          <div className="flex items-center">
            <Image
              src={user.photoURL} // Default image if profile URL is not available
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-slate-200 ml-2">{user.displayName || "User"}</span>
          </div>
        ) : (
          <Link className="cursor-pointer" href="/login">
            <HiOutlineUser size={25} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
