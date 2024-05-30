"use client";
import React, { useState } from "react";
import { FaSearch, FaMicrophone} from "react-icons/fa";
import ProductCard from "../pages/components/productCard";
import Main from "../layouts/Main";
function Search() {
  const [find, setFind] = useState("");
  const [search, setSearch] = useState(false);
  return (
    <Main>
      <div className="font-poppins text-xs">
        {/* {SEARCHING METHODS} */}
        <header className=" flex flex-col px-2 bg-white items-center mx-3 py-2 sticky top-16 z-20">
          <section className=" flex items-center justify-around mx-3 py-2 sticky top-10 z-20">
            <div className=" bg-gray-200 flex  items-center p-2 rounded-lg">
              <button onClick={() => setSearch(true)}>
                <FaSearch className=" text-gray-600 ml-4" />
              </button>
              {/* INPUT */}
              <input
                onChange={(e) => setFind(e.target.value)}
                placeholder="  search product"
                className=" outline-none px-2 bg-[inherit] active:outline-none placeholder:text-slate-500 relative "
              />
              {/* VOICE */}
              <FaMicrophone className="" />
            </div>
            {/* IMAGE */}
           
          </section>
          {/* {CARTEGORIES} */}
          <section>
            <div className=" sticky top-20 z-20 flex mb-1  w-screen overflow-x-scroll scroll-m-0">
              {categories.map((option) => (
                <button
                  key={option.name}
                  className=" h-[4em] flex transition-all ease-in-out duration-700 hover:text-white hover:bg-orange-400 w-[20%] mx-1 flex-col items-center bg-slate-200 py-1 justify-center px-1 rounded-lg cursor shrink-0"
                >
                  <span className="text-gray-400 text-2xl hover:text-white ">{option.icon}</span>{" "}
                  <p className="text-xs">{option.name}</p>
                </button>
              ))}
            </div>
          </section>
        </header>
        {/* SEARCH RESULTS */}
        <div>
          {search ? (
            <div>
              {find === "" ? (
                ""
              ) : (
                <p>
                  {" "}
                  Search results for <span>{find}</span>{" "}
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        {/* {PRODUCT OFFERS} */}
        <div>
          <section>
            <p className="text-lg text-red-400 font-semibold l-2">
              Special offers for you
            </p>
           
          </section>
          <section>
            <p className="text-lg text-red-400 font-semibold ml-2">
              New Products
            </p>
            <div className="font-poppins justify-center p-0 flex flex-wrap">
              {data.map((product) => (
                <div key={Math.random()}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
}

export default Search;
