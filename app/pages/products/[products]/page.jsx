"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaHeart, FaMinus, FaShoppingCart, FaUser, FaPlus } from "react-icons/fa";
import Main from "@/app/layouts/Main";
import { fetchProductById } from "@/app/utils/fetchById";
import Loader from "@/app/components/Loader";
import AddToCart from "@/app/components/addToCart";
import { useRouter } from "next/navigation";

function ProductView({ params }) {
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(0);
  const [mainImage, setMainImage] = useState(""); // State for main image
  const navigation = useRouter()
  const id = params.products;
  useEffect(() => {
    if (id) {
      fetchProductById(id)
        .then((data) => {
          setProduct(data);
          setMainImage(data.thumbnail); // Set initial main image
        })
        .catch((error) => console.error("Error fetching product data:", error));
    }
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  const handleImageClick = (image) => {
    setMainImage(image); // Update main image when an extra image is clicked
  };

  const handleAddToCart = () => {
    console.log(`Added ${product.title} to cart with quantity ${amount}`);
  };

  return (
    <Main>
      <div className="bg-gray-100 min-h-screen p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button onClick={() => navigation.back()} className="text-gray-600 mr-4">
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
            {/* Filter content here */}
          </aside>

          {/* Product Details */}
          <div className="flex-1 ml-0 md:ml-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  {/* Main Image */}
                  <Image
                    src={mainImage}
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
                        onClick={() => handleImageClick(image)} // Change main image on click
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
                
                      <AddToCart product={product} />
              
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">All Reviews (120)</h2>
                {/* Review content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default ProductView;
