import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import toast from 'react-hot-toast';
import { FiShoppingCart } from 'react-icons/fi';

function AddToCart({ product }) {
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const productExists = cart.some(item => item.id === product.id);

    if (productExists) {
      toast.error(`"${product.title}" is already in the cart`, {
        style: {
          background: '#ffa505',
          color: 'black',
        },
      });
    } else {
      addToCart(product);
      toast.success(`Added "${product.title}" to cart`, {
        style: {
          background: 'green',
          color: '#fff',
        },
      });
    }
  };

  return (
    <button onClick={handleAddToCart} className="text-xs  rounded-full text-white">
      <FiShoppingCart size={25} className="text-slate-500" />
    </button>
  );
}

export default AddToCart;
