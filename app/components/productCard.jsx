import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import AddToCart from "./addToCart";

function ProductCard({ product }) {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(`/pages/products/${product.id}`);
  };

  return (
    <main className="overflow-hidden hover:shadow-xl hover:scale-105  hover:shadow-blue-200  w-[40vw] flex flex-wrap cursor-pointer object-contain items-center justify-center sm:w-[20vw] bg-slate-100 gap-3 h-[fit-content] mx-2 my-1 px-3 rounded-lg py-3">
      <div onClick={handleImageClick}>
        <Image
          src={product.thumbnail}
          width={150}
          height={100}
          alt="product image"
          className="w-full"
        />
      </div>

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
        <Link
          className="text-xs bg-red-400 flex items-center px-2 py-1 rounded-full text-white"
          href={`/order/${product.id}`}
        >
          Order
        </Link>
        <AddToCart product={product} />
      </section>
    </main>
  );
}

export default ProductCard;
