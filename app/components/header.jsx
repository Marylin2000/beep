"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import logo from "@/app/assets/images/logo.png";
import Navbar from "./Navbar";
import SideBar from "./categories";

function Header() {
  const [toggleSideBar, setToggleSidebar] = useState(false);

  const SideNav = () => (
    <section className="sm:hidden">
      <HiMenuAlt3
        className="text-slate-100"
        onClick={() => {
          setToggleSidebar(true);
        }}
        size={20}
      />
      <div
        className={`h-screen w-[47%] bg-slate-100 rounded-l-md absolute top-0 left-0 translate-x-[-100%] ${
          toggleSideBar ? "transition ease-in-out duration-500 translate-x-0" : ""
        }`}
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
      <div className="flex gap-2 items-center">
        <Link href="/search">
          <FaSearch size={20} className="text-white cursor-pointer" />
        </Link>
      </div>
      <Link href="/cart" className="cursor-pointer text-slate-200">
        <FiShoppingCart size={25} />
      </Link>
    </div>
  );
}

export default Header;
