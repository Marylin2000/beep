import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FaHeart, FaTag } from "react-icons/fa";
import CartContext from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Added ${product.title} to cart`, {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <main className="overflow-hidden w-[40vw] flex flex-wrap cursor-pointer object-contain items-center justify-center sm:w-[20vw] bg-slate-100 gap-3 h-[fit-content] mx-2 my-1 px-3 rounded-lg py-3">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.thumbnail}
          width={150}
          height={100}
          alt="product image"
          className="w-full"
        />
      </Link>

      <div className="flex justify-between items-center w-full">
        <section>
          <p className="w-full text-xs">{product.title}</p>
          <span className="text-green-600 flex items-center">
            <FaTag className="mx-1 text-slate-700" />
            <p className="text-sm">${product.price}</p>
          </span>
        </section>
      </div>
      
      <section className="w-[100%] flex justify-between">
        <button
          onClick={handleAddToCart}
          className="text-xs bg-green-400 flex items-center px-2 py-1 rounded-full text-white"
        >
          Add to Cart
        </button>
        <Link
          className="text-xs bg-red-400 flex items-center px-2 py-1 rounded-full text-white"
          href={`/order/${product.id}`}
        >
          Order
        </Link>
      </section>
      <ToastContainer />
    </main>
  );
}

export default ProductCard;
