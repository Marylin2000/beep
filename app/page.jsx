"use client";
import React from "react";
import Main from "./layouts/Main";
import MainPage from "./main/page";
import { useContext } from 'react';
import CartContext from './context/CartContext';
import Cart from "./cart/page";

export default function Page() {

    const { addToCart } = useContext(CartContext);
  
    console.log('HomePage context:', useContext(CartContext));
  return (



    <Main>
        <MainPage />
 
    </Main>

  );
}
