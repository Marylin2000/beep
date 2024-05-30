"use client";
import React from "react";
import Main from "./layouts/Main";
import MainPage from "./main/page";
export const ProductsContext = React.createContext()
export default function Page() {

  return (

    <Main>
        <MainPage />
    </Main>
  );
}
