// pages/products/[id].js
"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaHeart, FaMinus,FaShoppingCart,FaUser, FaPlus } from "react-icons/fa";
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

  const handleAddToCart = () => {
    console.log(`Added ${product.title} to cart with quantity ${amount}`);
  };

  console.log(params);

  return (
    <Main>
      <div className="bg-gray-100 min-h-screen p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button onClick={() => router.back()} className="text-gray-600 mr-4">
              <FaArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Logo</h1>
          </div>
          <div className="flex space-x-4">
            <FaHeart className="text-gray-600 cursor-pointer" size={20} />
            <FaShoppingCart className="text-gray-600 cursor-pointer" size={20} />
            <FaUser className="text-gray-600 cursor-pointer" size={20} />
          </div>
        </header>

        <div className="flex">
          {/* Side Filters */}
          <aside className="hidden md:block w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Pick Color</h3>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Brand</h3>
              <ul>
                <li>Reymond</li>
                <li>Blue World</li>
                <li>Vanhuessen</li>
                <li>Bimboos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Price</h3>
              <ul>
                <li>50 - 100</li>
                <li>100 - 150</li>
                <li>150 - 200</li>
                <li>200 - 250</li>
                <li>250 - 300</li>
              </ul>
            </div>
          </aside>

          {/* Product Details */}
          <div className="flex-1 ml-0 md:ml-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <Image
                    src={product.thumbnail}
                    height={300}
                    width={300}
                    alt={product.title}
                    className="object-contain"
                  />
                  <div className="flex justify-center mt-4">
                    {product.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="Product image"
                        width={50}
                        height={50}
                        className="object-cover mx-1 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 ml-0 md:ml-10 mt-8 md:mt-0">
                  <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <p className="text-xl text-red-500 font-semibold">
                      ${product.price}
                    </p>
                    <p className="text-gray-500 line-through">${product.oldPrice}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="mr-2">Size:</span>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded mr-2">X5</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">L</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">XL</button>
                  </div>
                  <div className="flex items-center mb-6">
                    <span className="mr-2">In stock (15 units)</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => setAmount(Math.max(1, amount - 1))}
                        className="p-2"
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="text"
                        value={amount}
                        readOnly
                        className="w-10 text-center border-0"
                      />
                      <button
                        onClick={() => setAmount(amount + 1)}
                        className="p-2"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="bg-blue-400 p-2 w-fit flex gap-3">

                  <AddToCart product={product} />
                  
                    </div>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">All Reviews (120)</h2>
                <div className="mb-4">
                  <p className="font-semibold">Yeasin Arafat</p>
                  <p className="text-gray-600">I finally got my dream T-shirt</p>
                  <p className="text-yellow-500">5 / 5</p>
                  <p className="text-gray-500 text-sm">Jun 5, 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="hidden md:block w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Product List (56)</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Image
                  src={product.thumbnail}
                  width={60}
                  height={60}
                  alt="Product Thumbnail"
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <p className="font-semibold">Gold Standard Whey Protein</p>
                  <p className="text-red-500">$2,365</p>
                </div>
              </div>
              {/* Repeat similar blocks for other products */}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default ProductView;



// import Image from "next/image";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Main from "../layouts/Main";

// function ProductView({ product }) {
//   const [amount, setAmount] = useState(1);
//   const router = useRouter();

//   const handleAddToCart = () => {
//     console.log(`Added ${product.title} to cart with quantity ${amount}`);
//   };

  
// }

// export default ProductView;

