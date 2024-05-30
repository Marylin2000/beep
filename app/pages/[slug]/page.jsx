"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import Topmain from "@/app/layouts/Topmain";
import BottomMain from "@/app/layouts/BottomMain";
import Loader from "../components/Loader";
import Main from "@/app/layouts/Main";

function Page() {
  const [category, setCategoty] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = `https://dummyjson.com/products/category/${category}`;
  // You can include headers, request method, and other options as needed
  const requestOptions = {
    method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const pathName = document.URL.split("/").pop();
    setCategoty(pathName);
    fetch(apiUrl, requestOptions)
      .then((response) => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response JSON
        return response.json();
        setIsLoading(true);
      })
      .then((data) => {
        // Do something with the data received from the API
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
      });
  }),
    [];

  return (
    <Main>
          <div className="flex flex-wrap shrink">
            {products.map((product) => {
              return (
                <div key={product.thumbnail}>
                  <ProductCard product={product} />
                </div>
              );
            })}791

          <div >
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
