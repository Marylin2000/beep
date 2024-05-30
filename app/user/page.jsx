"use client";
import React, { useState } from "react";
import BottomMain from "../layouts/BottomMain";
import logo from "@/app/assets/images/logo.png";
import Image from "next/image";
import UserProfile from "../pages/components/UserProfile";
import { FaChevronRight, FaShoppingBag, FaUser } from "react-icons/fa";
import Signup from "../pages/components/Signup";
import Login from "../pages/components/login";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

function User() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useRouter();
  return (
    <BottomMain>
      <div className="cursor-pointer absolute">
        <HiArrowLeft 
      className="shadow-lg  "
        onClick={() => navigate.back()}
      />
      </div>
    
      <div className="px-4 py-2 text-xs mb-24">
        <header className="flex justify-center h-[8vh] py-2 sticky top-0">
          <Image src={logo} alt="logo" className="w-[100px] " />
        </header>
        {/* User Properties */}
        <section className="mb-10 mt-2 flex items-center">
          <div className="h-32 w-32 text-7xl justify-center items-center flex text-gray-600 bg-slate-300 rounded-full">
            <FaUser />
          </div>
          <div className="flex flex-col justify-around h-10 ml-4">
            <button
              onClick={() => setLogin((prev) => !prev)}
              className="shadow-md px-2 text-xs py-1 mb-1   text-red-400 border-red-400 border-[1px] border-solid rounded-md"
            >
              Login
            </button>
            <button
              onClick={() => setSignup((prev) => !prev)}
              className="shadow-md px-2 text-xs py-1   text-red-400 border-red-400 border-[1px] border-solid rounded-md"
            >
              Sign up
            </button>
          </div>
        </section>

        <section>
          <div>
            <div className="flex justify-between  border-b-[1px] border-solid border-slate-400 p-3">
              <p>My Orders</p>
              <button className="flex text-gray-500 items-center">
                View All <FaChevronRight />{" "}
              </button>
            </div>
            <ul className="flex mt-6 justify-around h-24 border-b-[1px] border-solid border-slate-400 text-red-400 items-center">
              <li className="flex jus flex-col items-center cursor-pointer">
                {" "}
                <FaShoppingBag size={40} />
                <p className="mt-2 text-black"> Unpaid</p>
              </li>
              <li className="flex flex-col items-center cursor-pointer">
                {" "}
                <FaShoppingBag size={40} />
                <p className="mt-2 text-black">To be Delivered</p>
              </li>
              <li className="flex flex-col items-center cursor-pointer">
                {" "}
                <FaShoppingBag size={40} />
                <p className="mt-2 text-black">Delivered</p>
              </li>
              <li className="flex flex-col items-center cursor-pointer">
                {" "}
                <FaShoppingBag size={40} />
                <p className="mt-2 text-black">To be reviewed</p>
              </li>
            </ul>
          </div>
        </section>
        {signup ? <Signup setSignup={setSignup} /> : ""}
        {login ? <Login setLogin={setLogin} /> : ""}
      </div>
    </BottomMain>
  );
}

export default User;
