// components/AllProducts.js

import React, { useEffect, useState } from "react";
import Loader from "@/app/components/Loader";
import ProductCard from "@/app/components/productCard";
import { fetchProducts } from "@/app/utils/fetchProducts";

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
    <main>
      {isLoading ? <Loader /> : <Products />}
    </main>
  );
}

export default AllProducts;
