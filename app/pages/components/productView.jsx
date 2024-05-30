import Image from "next/image";
import React from "react";
import { useState, useContext } from "react";
import { FaArrowLeft, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Topmain from "@/app/layouts/Topmain";
import { useRouter } from "next/navigation";
import { ProductContextValue, cartProducts, wishlist } from "./datas";

function ProductView() {
  const [amount, setAmount] = useState(0);
  const navigate = useRouter();

  console.log(ProductContextValue);
  return (
    <Topmain>
      <main>
        {ProductContextValue.map((product,index) => {
          return (
            <div
              key={index}
              className="container font-poppins bg-gray-200 h-screen"
            >
              <section className="image flex-col px-5 py-4 flex justify-center ">
                <header className="flex justify-between px-3">
                  <button onClick={() => navigate.back()}>
                    <FaArrowLeft className="shadow-sm text-3xl rounded-sm bg-white text-slate-500 px-2 py-1" />
                  </button>
                  {/* <FaCartPlus className="shadow-sm text-5xl rounded-sm bg-white text-slate-500 p-2" /> */}
                </header>
                {/* PRODUCT IMAGE */}
                <Image
                  src={product.thumbnail}
                  height={50}
                  width={50}
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
                  <button className="favorite" onClick={() => wishlist.push()}>
                    <FaHeart
                      size={40}
                      className="rounded-lg bg-red-100 text-gray-400 p-2"
                    />
                  </button>
                </div>

                <section className="flex flex-wrap gap-3 justify-center mt-10">
                  {product.images.map((image,index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={image}
                          alt="descriptive images"
                          width={150}
                          height={150}
                        />
                      </div>
                    );
                  })}
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
              {/* BOTTOM */}
              <div className=" fixed h-[8%] bg-gray-200 w-full justify-between bottom-0 p-1 items-center flex">
                <div className="flex px-2 w-[20%] text-xs justify-between border-[1px] border-solid p-1  rounded-[4px] border-slate-400">
                  <FaMinus
                    onClick={(e) => {
                      setAmount((prev) => prev - 1);
                      amount === 0 ? e.preventDefault() : "";
                    }}
                    className={`${amount === 0 ? "text-gray-500" : "gray-700"}`}
                  />{" "}
                  <p className="text-black">{amount}</p>
                  <FaPlus onClick={() => setAmount((prev) => prev + 1)} />
                </div>
                <div className="flex w-[50%] justify-around items-center text-xs">
                  <section className="Buy Now bg-green-500 text-semibold text-white px-2 py-1  rounded-md">
                    <button>Buy Now</button>
                  </section>
                  <section className="addToCart font-semibold text-white bg-red-500 px-2 py-1 rounded-md ">
                    <button
                      onClick={() => {
                        cartProducts.push(product);
                      }}
                    >
                      Add to cart{" "}
                    </button>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </Topmain>
  );
}

export default ProductView;
