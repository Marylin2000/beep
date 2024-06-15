"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineXCircle } from "react-icons/hi";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import SideBar from "./sidebar";
import { FaSearch } from "react-icons/fa";
function Header() {
  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products/category-list";
    // You can include headers, request method, and other options as needed
    const requestOptions = {
      method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Making the fetch request
    fetch(apiUrl, requestOptions)
      .then((response) => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response JSON
        return response.json();
      })
      .then((data) => {
        // Do something with the data received from the API
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
      });
  }, []);

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
          className={`h-screen w-[45%] bg-slate-200 absolute top-0 left-0 translate-x-[-100%]${
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
          <SideBar categories={categories} />
        </div>
      </section>
    );
  };
  const [toggleSideBar, setToggleSidebar] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  return (
    <div className="pl-3  pr-10 flex items-center w-full  sticky top-0" >
      <header className="py-1 flex w-full h-20 z-10  items-center">
        <SideNav />

        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="w-24 font-lg" />
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
