import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../utils/fetchCategories";
import bannerImage from "@/app/assets/images/baner1.gif";
import { FiPhoneCall, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

function Banner() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {}
    }

    getCategories();
  }, []);

  return (
    <main className=" flex items-center justify-center  p-8 gap-5  w-full mb-5  bg-slate-200">
      <div className="lg:grid grid-cols-12 hidden gap-5  w-full h-[80vh] bg-slate-200 ">

      <section className="col-span-2 overflow-y-scroll h-[80%] px-2 rounded-2xl bg-white">
        {categories.map((category, index) => (
          <div className="my-4 px-3 border-b-2 border-black rounded-md py-3 hover:bg-slate-100 " key={index}>
            <Link href={`/pages/${category}`} className="text-xs">
              {category}
            </Link>
          </div>
        ))}
      </section>
      <section className="col-span-8">
        <Image alt="banner_Image" className="w-[100%] h-[80%] rounded-2xl border-slate-400 border-[2px] " src={bannerImage} />
      </section>
      <section className="col-span-2 flex flex-col gap-4 ">
        <div className="bg-slate-100 h-[30%] rounded-md w-full">
          <section className="flex gap-4 p-3 items-center">
            <FiPhoneCall size={25} />
            <div>
              <p>Call to order</p>
              <p className="text-xs">09015648441</p>
            </div>
          </section>
          <section className="flex gap-4 p-3 items-center">
            <FiPhoneCall size={25} />
            <div>
              <p>Location </p>
              <p className="text-xs">Jos plateau state, Nigeria</p>
            </div>
          </section>{" "}
          <Link href={"/"} className="flex gap-4 p-3 items-center">
            <FiShoppingBag size={25} />
            <div>
              <p>WhatsApp </p>
              <p className="text-xs">070445337663</p>
            </div>
          </Link>
        </div>
        <div className="bg-slate-100 rounded-md  h-[30%]"></div>
      </section>
        </div>
    </main>
  );
}

export default Banner;
