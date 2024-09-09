import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../utils/fetchCategories';
import { MdCategory } from 'react-icons/md';

function Category() { // Rename function to start with uppercase
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    getCategories();
  }, []);

  return (
    <main className="h-full px-2">
      <div className="overflow-y-scroll flex  flex-col h-full pl-2">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="text-slate-500 bg-slate-200 rounded-md py-3 my-1 w-[90%] flex gap-3 items-center px-2 hover:bg-orange-300"
            href={`/pages/${category}`}
          >
            <MdCategory size={20} className='text-red-400' />
            <p className="text-xs w-fit px-2 py-1 text-black ">{category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Category;
