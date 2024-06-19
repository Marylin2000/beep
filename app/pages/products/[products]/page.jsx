// pages/products/[id].js
"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Main from "@/app/layouts/Main";
import { fetchProductById } from "@/app/utils/fetchById";
import Loader from "@/app/components/Loader";
import AddToCart from "@/app/components/addToCart";

function ProductView({params}) {
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(0);

  
  const id = params.products
  useEffect(() => {
    if (id) {
      fetchProductById(id)
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product data:", error));
    }
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  console.log(params);

  return (
    <Main>
      <main>
        <div className="container font-poppins lg:grid lg:grid-cols-2 sm:items-center h-screen">
          <section className="image flex-col px-5 py-4 flex justify-center ">
        
              <button onClick={() => router.back()}>
                <FaArrowLeft className="shadow-sm sm:hidden text-3xl rounded-sm bg-white text-slate-500 px-2 py-1" />
              </button>
            <Image
              src={product.thumbnail}
              height={250}
              width={250}
              alt="image"
            />
             <div className=" h-[8%] w-[50%] justify-between my-3 p-1 items-center flex">
            <div className="flex px-2 w-[20%] text-xs justify-between border-[1px] border-solid p-1  rounded-[4px] border-slate-400">
              <FaMinus
                onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
                className={`${amount === 0 ? "text-gray-500" : "gray-700"}`}
              />
              <p className="text-black">{amount}</p>
              <FaPlus onClick={() => setAmount((prev) => prev + 1)} />
            </div>
            <div className="flex w-[50%] justify-around items-center text-xs">
              <section className="Buy Now bg-green-500 text-semibold text-white px-2 py-1 rounded-md">
                <button>Buy Now</button>
              </section>
              <AddToCart product={product} />

            </div>
          </div>
          </section>
          <section className="Details bg-white px-3 pt-10 h-full rounded-t-3xl ">
            <div className="flex items-center justify-between px-5">
              <section>
                <h3 className="font-bold text-lg">{product.title}</h3>
                <div className="flex items-center">
                  <p className="font-semibold text-md text-red-500">
                    ${product.price}
                  </p>
                  <span className="[text-decoration:line-through;] m-1 text-xs text-gray-400 ">
                    {product.discountPercentage + "%"}
                  </span>
                </div>
              </section>
              <button className="favorite" onClick={() => wishlist.push(product)}>
                
              </button>
            </div>

            <section className="flex flex-wrap gap-3 justify-center mt-10">
              {product.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt="descriptive images"
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </section>

            <section className="description text-slate-500 my-6 p-4">
              <p>{product.description}</p>

            </section>
          </section>
         
        </div>
      </main>
    </Main>
  );
}

export default ProductView;
