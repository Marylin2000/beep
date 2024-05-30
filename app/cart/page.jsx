"use client"
import Image from "next/image";
import React from "react";
import image from "@/app/assets/images/Daco_4884463.png";
import { BsTrash } from "react-icons/bs";
import Main from "../layouts/Main";
import { cartProducts } from "../pages/components/datas";
function page() {
  return (
    <Main>
      <div className="">
        {cartProducts.map((cart) => {
          return (
            <div key={Math.random()}>
              <section className="ml-2 mt-2">
                <input type="checkbox" />
              </section>
              <div className="flex justify-between px-4 py-2 items-center">
                <div className="w-24 h-24 flex">
                  <Image src={cart.image} alt="ProductImage" />
                  <div>
                    <p>{cart.name}</p>
                    <p>{cart.price}</p>
                  </div>
                </div>
                <div className="flex w-[30%] justify-around">
                  <button className="bg-green-400 text-white p-2 rounded-md">
                    Order
                  </button>
                  <button
                    className="text-red-500 text-lg"
                    onClick={() => {
                      cartProducts.includes(cart) ? cartProducts.pop(cart) : "";
                      console.log(cart)
                    }}
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
}

export default page;
