"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/productCard";
import { fetchProducts } from "@/app/utils/fetchProducts";
import SideBar from "../components/sidebar";
import Loader from "../components/Loader";

function MainPage() {



// components/AllProducts.js


function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  const Products = () => (
    <div className="flex flex-wrap sm:grid sm:grid-cols-4 sm:gap-5 justify-center">
      {allProducts.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );

  return (
    <main className="relative">
      {isLoading ? <Loader /> : <Products />}
    </main>
  );
}







  return (
    <main className="w-[100vw] h-[100vh">
      <section className="hidden text-gray-400 text-xs sm:flex  justify-evenly overflow-x-scroll">
        <SideBar direction={""} column={"col"} gap={5}  />
      </section>
      <div className="font-poppins">
        <AllProducts />
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default MainPage;
