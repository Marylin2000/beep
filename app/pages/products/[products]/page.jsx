// pages/products/[id].js
"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Main from "@/app/layouts/Main";
import { fetchProductById } from "@/app/utils/fetchById";
import Loader from "@/app/components/Loader";

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
        <div className="container font-poppins bg-gray-200 h-screen">
          <section className="image flex-col px-5 py-4 flex justify-center ">
            <header className="flex justify-between px-3">
              <button onClick={() => router.back()}>
                <FaArrowLeft className="shadow-sm text-3xl rounded-sm bg-white text-slate-500 px-2 py-1" />
              </button>
            </header>
            <Image
              src={product.thumbnail}
              height={200}
              width={200}
              alt="image"
              className="w-[80%]"
            />
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
                <FaHeart
                  size={40}
                  className="rounded-lg bg-red-100 text-gray-400 p-2"
                />
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

              <div className="colors flex w-[35%] justify-around">
                <div className="h-7 w-7 rounded-full bg-gray-400 border-[2px] border-gray-200"></div>
                <div className="h-7 w-7 rounded-full bg-red-400 border-[3px] border-solid border-red-500 "></div>
                <div className="h-7 w-7 rounded-full bg-blue-400 border-[4px]"></div>
              </div>
            </section>
          </section>
          <div className="fixed h-[8%] bg-gray-200 w-full justify-between bottom-0 p-1 items-center flex">
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
              <section className="addToCart font-semibold text-white bg-red-500 px-2 py-1 rounded-md ">
                <button onClick={() => cartProducts.push(product)}>
                  Add to cart
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Main>
  );
}

export default ProductView;
