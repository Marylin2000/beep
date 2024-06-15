"use client";
import React, { useState } from "react";
import { FaMicrophone, FaArrowLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";
function Search() {
  const [find, setFind] = useState("");
  const [search, setSearch] = useState(false);
  const router = useRouter()
  return (
    <main>

    <div className="flex items-center py-3 px-2  gap-5">
      <FaArrowLeft size={25} className="cursor-pointer" Onclick={()=>{
        router.back()
      }} />
      <input placeholder = "search products " className="outline-none" />
      </div>
      </main>
  )
}

export default Search;
