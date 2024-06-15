"use client";
import React from "react";
import AllProducts from "../assets/products/all_products";
import Footer from "../components/Footer";
import SideBar from "../components/sidebar";

function MainPage() {
  return (
    <main className="w-[100vw] h-[100vh">
      <section className="hidden text-gray-400 text-xs sm:flex  justify-evenly overflow-x-scroll">
        <SideBar direction={""} column={"col"} gap={5}  />
      </section>
      <div className="font-poppins">
        <AllProducts />
      </div>
      <Footer />
    </main>
  );
}

export default MainPage;
