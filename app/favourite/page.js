"use client";
import React, { useEffect, useState } from "react";
import { wishlist } from "../pages/components/datas";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import Main from "../layouts/Main";
import { HiOutlineXCircle } from "react-icons/hi";

function Favourite() {
  const [display,setDisplay]=useState(true)
  useEffect(()=>{
    if (wishlist.length >0){
      setDisplay(false)
    }
  },[])

  return (
    <Main>
      <div>
        {wishlist.map((product) => {
          return (
            <div
              key={Math.random()}
              className={`flex items-center justify-between px-4 py-2 border-y-[1px]`}
            >
              <section className="flex justify-around items-center">
                <Image src={product.image} alt="hi" className="h-20 w-20" />

                <div>
                  <p>{product.name} </p>
                  <p>{product.price}</p>
                </div>
              </section>
              <button
                onClick={() => {
                  alert("Do you want to remove this product?")
                  console.log(wishlist);
                  console.log(product)}

                }
                className="text-lg text-red-600"
              >
                <BsTrash />
              </button>
            </div>
          );
        })}
        <div className={`flex ${display?"visible":"hidden"}  justify-center items-center mt-16 text-slate-500 flex-col`}>
          <HiOutlineXCircle className={`text-[200px] animate-pulse` }/>
          <p>You do not have items on your wish list</p>
        </div>
      </div>
    </Main>
  );
}

export default Favourite;
