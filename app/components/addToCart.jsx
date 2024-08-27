import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import toast from 'react-hot-toast';
import { FiShoppingCart } from 'react-icons/fi';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth } from '../../firebase'; // Import Firebase auth
import { db } from '../../firebase'; // Import your Firebase setup (db is Firestore instance)

function AddToCart({ product }) {
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    const user = auth.currentUser; // Get the current user
    if (!user) {
      toast.error("Please log in to add items to your cart.", {
        style: {
          background: '#ffa505',
          color: 'black',
        },
      });
      return;
    }

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

      // Push cart data to Firebase
      try {
        const userCartRef = doc(db, 'carts', user.uid);
        await setDoc(userCartRef, {
          items: [...cart, product],
          userId: user.uid,
          email: user.email,
        });
        toast.success(`Added "${product.title}" to cart`, {
          style: {
            background: 'green',
            color: '#fff',
          },
        });
      } catch (error) {
        console.error("Error adding document: ", error);
        toast.error("Failed to update cart in Firebase", {
          style: {
            background: 'red',
            color: '#fff',
          },
        });
      }
    }
  };

  return (
    <button onClick={handleAddToCart} className="text-xs rounded-md lg:bg-blue-400 p-2 w-fit text-white flex gap-3 items-center justify-center">
      <FiShoppingCart size={25} className="text-slate-500" />
      <p className='hidden lg:block'>
        Add to cart
      </p>
    </button>
  );
}

export default AddToCart;
