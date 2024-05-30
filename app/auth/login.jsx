"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import image from "@/app/assets/images/logo.png";
import { HiX } from "react-icons/hi";
function Login({ setLogin }) {
  return (
    <div className={`absolute  z-40 top-0 bg-white w-[90%] flex flex-col h-[90%]`}>
      <div className="bg-white">
        <section className="flex flex-col items-center mb-10 p-3">
          <Image src={image} alt="logo" className="w-24 mb-3" />
          <p className="text-xl text-center">
            WELCOME <br />
            back
          </p>
        </section>
        <div>
          <HiX
            size={20}
            className="fixed top-5 right-6 "
            onClick={() => setLogin(false)}
          />
        </div>
        <form className=" flex flex-col justify-center items-center mb-10">
          <input placeholder="Email" />

          <input placeholder="Password" />

          <button
            type="submit"
            className="border-red-400 border-solid border-[1px] text-red-400 px-3 py-1 rounded-md mt-1 hover:text-white hover:bg-red-400 transition ease-in-out duration-700  "
          >
            Sign up
          </button>
        </form>
        <div>
          <section className="flex items-center justify-center text-gray-700">
            <div className="w-[30%] mr-1 h-[2px] bg-slate-500"></div>
            <p>Continue with</p>
            <div className="w-[30%] h-[2px] ml-1 bg-slate-500"></div>
          </section>
          <div className="w-full flex justify-around text-3xl mt-5">
            <button className="hover:text-red-500 transition-all ease-in-out duration-700">
              <FaGoogle />
            </button>
            <button className="hover:text-blue-500 transition-all ease-in-out duration-700">
              <FaFacebook />
            </button>
            <button className="hover:text-slate-500 transition-all ease-in-out duration-700">
              <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
