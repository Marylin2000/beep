"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
import Navbar from "./Navbar";
import SideBar from "./sidebar";
import { FaSearch } from "react-icons/fa";
function Header() {
 

  const SideNav = () => {
    return (
      <section className="sm:hidden">
        <HiMenuAlt3
          className="sm:hidden"
          onClick={() => {
            setToggleSidebar(true);
          }}
          size={20}
        />
        <div
          className={`h-screen w-[47%] bg-slate-100 rounded-l-md absolute top-0 left-0 translate-x-[-100%]${
            toggleSideBar
              ? "transition ease-in-out duration-500 translate-x-0"
              : ""
          }`}
        >
          <HiOutlineXCircle
            className="m-3"
            onClick={() => setToggleSidebar(false)}
            size={30}
          />
          <SideBar direction={"col"} column={""} gap={""}/>
        </div>
      </section>
    );
  };
  const [toggleSideBar, setToggleSidebar] = useState(false);

  return (
    <div className="pl-3  pr-10 flex items-center  sticky top-0" >
      <header className="py-1 flex  h-20 z-10  items-center">
        <SideNav />

        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="w-24 font-lg lg:w-80" />
        </Link>
        <Navbar />
      </header>
      <Link href="/search" className="flex cursor-pointer gap-4 w-[70%] h-7 items-center bg-slate-100 px-2 py-1 rounded-full">
        <FaSearch />

        <p className="text-xs text-slate-700">search products</p>
      </Link>
    </div>
  );
}

export default Header;
