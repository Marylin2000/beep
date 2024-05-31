// app/components/Cart.js
"use client"
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { icons } from 'react-icons';
import Image from 'next/image';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';

const CartComponent = () => {
  const context = useContext(CartContext);
  console.log('Cart context:', context);

  if (!context) {
    return <div>Error: CartContext is not provided</div>;
  }

  const { cart, removeFromCart } = context;
  console.log(cart)

  return (
    <div>
      <div className = " flex items-center">

      <h2 className = "font-bold flex">Cart</h2> <span className="text-xs mx-1"> ({cart.length})</span>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item,index) => (
          <div key={index} className="my-5 px-4 py-2 border-b-2 border-solid">
            <h3>{item.title}</h3>
            <section className="flex items-center">

            <Image src={item.images[0]} width={150} height={150} alt="cart image"/>
            <div className="flex items-center gap-10">
              <div>

              <p className="text-xs mb-4">
                {
                  item.description
                }
              </p>
              <p className="text-green-400" >
                ${item.price}
              </p>
                </div>
            <button onClick={() => removeFromCart(item.id)}><FaTrashAlt className="text-red-400" /></button>
            </div>
     
            </section>
          </div>
        ))
      )}
    </div>
  );
};

export default CartComponent;
