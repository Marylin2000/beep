import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FaHeart, FaTag } from "react-icons/fa";
import CartContext from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true)
    toast(`Added ${product.title} to cart`);
  };

  return (
    <main className="overflow-hidden w-[40vw] flex flex-wrap cursor-pointer object-contain items-center justify-center sm:w-[20vw] bg-slate-100 gap-3 h-[fit-content] mx-2 my-1 px-3 rounded-lg py-3">
      <Link href={"/productview"}>
        <Image
          src={product.thumbnail}
          width={150}
          height={100}
          alt="product image"
          className="W-full"
        />
      </Link>

      <div className="flex justify-between items-center w-full">
        <section>
          <span className="text-green-600 flex items-center">
            <FaTag className="mx-1 text-slate-700" />
            <p className="text-sm">${product.price}</p>
          </span>
          <p className="w-full text-xs">{product.title}</p>
        </section>
        <button>
          <FaHeart
            className={`text-gray-400 text-xl ${
              addedToCart ? "text-red-600" : ""
            }`}
            onClick={() => {
              setAddedToCart((prev) => !prev);
            }}
          />
        </button>
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
          href=""
        >
          Order
        </Link>
      </section>
      <ToastContainer />
    </main>
  );
}

export default ProductCard;
