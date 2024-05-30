"use client";
import React, { useState } from "react";
import { FaSearch, FaMicrophone} from "react-icons/fa";
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
            
          </section>
        </div>
      </div>
    </Main>
  );
}

export default Search;
