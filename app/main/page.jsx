"use client";
import React from "react";
import { categories, data } from "../pages/components/datas";
import AllProducts from "../assets/products/all_products";
import Footer from "../pages/components/Footer";

function MainPage() {
  return (
    <main className="w-[100vw] h-[100vh">
      <section className="hidden text-gray-400 text-xs sm:flex  justify-evenly overflow-x-scroll">
        {categories.map((item) => (
          <div
            key={Math.random()}
            className=" hover:bg-orange-400 flex text-center transition-all ease-in-out duration-1000 my-1  flex-col justify-center items-center p-2 rounded-md hover:text-white"
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="text-xs">{item.name}</p>
          </div>
        ))}
      </section>
      <div className="font-poppins">
        <AllProducts />
      </div>
      <Footer />
    </main>
  );
}

export default MainPage;
