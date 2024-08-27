"use client";
import { useContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import CartContext from "../context/CartContext";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

const CartComponent = () => {
  const context = useContext(CartContext);
  const router = useRouter();


  const { cart, removeFromCart } = context;
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    const initialQuantities = cart.map(() => 1);
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cart
      .reduce((sum, item, index) => sum + item.price * quantities[index], 0)
      .toFixed(2);
  };

  const handleRowClick = (productId) => {
    router.push(`/pages/products/${productId}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-3 mt-8">
      <div className="w-full md:w-3/4 bg-slate-200 p-5 rounded-lg overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="mb-5"> Your cart is empty.</p>
            <Link href={"/"} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Quantity</th>
                  <th className="text-left p-2">Subtotal</th>
                  <th className="text-left p-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-gray-100 rounded-xl cursor-pointer"
                    onClick={() => handleRowClick(item.id)}
                  >
                    <td className="p-2 flex flex-col sm:flex-row items-center">
                      <Image
                        src={item.images[0]}
                        width={60}
                        height={60}
                        alt="cart image"
                        className="mb-2 sm:mb-0 sm:mr-4"
                      />
                      <span className="font-bold text-center sm:text-left">{item.title}</span>
                    </td>
                    <td className="p-2">${item.price.toFixed(2)}</td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <button
                          className="border p-1 rounded-l"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(index, Math.max(quantities[index] - 1, 1));
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantities[index]}
                          min={1}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(index, parseInt(e.target.value));
                          }}
                          className="w-12 border-t border-b text-center"
                        />
                        <button
                          className="border p-1 rounded-r"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(index, quantities[index] + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2">
                      ${calculateSubtotal(item.price, quantities[index])}
                    </td>
                    <td className="p-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(item.id);
                        }}>
                        <FaTrashAlt className="text-red-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    
      <div className="w-full md:w-1/4 sticky top-4">
        <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
        <div className="border-2 border-gray-200 p-4 rounded-md">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Subtotal:</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Shipping:</span>
            <span>Free shipping</span>
          </div>
          <button className="bg-black text-white w-full py-2 rounded mt-4 hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
