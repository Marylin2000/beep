import { db } from './firebase';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';

// Add User Data
export const addUserData = async (userId, userData) => {
  try {
    await setDoc(doc(db, 'users', userId), userData);
    console.log('User data added successfully');
  } catch (error) {
    console.error('Error adding user data:', error);
  }
};

// Add Cart Data
export const addCartItem = async (userId, cartItem) => {
  try {
    await addDoc(collection(db, 'users', userId, 'cart'), cartItem);
    console.log('Cart item added successfully');
  } catch (error) {
    console.error('Error adding cart item:', error);
  }
};
