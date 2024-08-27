"use client"
import { createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Import Firebase auth and Firestore
import { doc, getDoc } from 'firebase/firestore';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const user = auth.currentUser;
      if (user) {
        console.log("Fetching cart for user:", user.uid);
        const userCartRef = doc(db, 'carts', user.uid);
        const docSnap = await getDoc(userCartRef);
        if (docSnap.exists()) {
          console.log("Cart data:", docSnap.data());
          setCart(docSnap.data().items || []);
        }
      }
    };
  
    fetchCart();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
