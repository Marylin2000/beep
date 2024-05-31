import Loader from "@/app/components/Loader";
import ProductCard from "@/app/components/productCard";
import React from "react";
import { useEffect, useState } from "react";




function AllProducts() {
  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products";
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
          setIsLoading(false)
          throw new Error(`HTTP error! Status: ${response.status}`);
          
        }
        // Parse the response JSON
        return response.json();
      })
      .then((data) => {
        // Do something with the data received from the API
        setAllproducts(data.products);
        setIsLoading();
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
      });
  }, []);

  const [allProducts, setAllproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(allProducts);


  const Products = ()=>(
      <div className="flex flex-wrap sm:grid sm:grid-cols-4 sm:gap-5 justify-center">
            {allProducts.map((product, index) => (

                <div key={index}>
                  <ProductCard product={product} />
                </div>))
}</div>)

  


  return (
    <main>
      {
        isLoading?<Loader />:<Products />
      }

    </main>
  );
}

export default AllProducts;
