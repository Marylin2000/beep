"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import Loader from "../../components/Loader";
import Main from "@/app/layouts/Main";
import { fetchProductsByCategory } from "@/app/utils/fetchProductsByCategory";

function Page() {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pathName = document.URL.split("/").pop();
    setCategory(pathName);

    const getProducts = async () => {
      setIsLoading(true);
      const products = await fetchProductsByCategory(pathName);
      setProducts(products);
      setIsLoading(false);
    };

    getProducts();
  }, [category]);

  return (
    <Main>
      <div className="flex flex-wrap shrink items-center">
        {products.map((product) => (
          <div key={product.thumbnail}>
            <ProductCard product={product} />
          </div>
        ))}

        <div>
          {isLoading && (
            <div>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </Main>
  );
}

export default Page;
