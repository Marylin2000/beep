"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/productCard";
import { fetchProducts } from "@/app/utils/fetchProducts";
import Loader from "./components/Loader";
import Banner from "./components/banner";
import Main from "./layouts/Main";

function MainPage() {
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

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const Products = ({ products }) => (
    <div className="flex flex-wrap sm:grid sm:grid-cols-4 sm:gap-5 justify-center">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );

  return (
    <Main>
      <main className="w-[100vw] h-[100vh]">
        <Banner />
        <div className="font-poppins">
          {isLoading ? (
            <Loader />
          )
           : (
            <Products products={allProducts} />
          )}
        </div>
      </main>
    </Main>
  );
}

export default MainPage;
