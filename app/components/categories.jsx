import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { fetchCategories } from '../utils/fetchCategories';

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
      <div className="overflow-y-scroll flex flex-col h-full pl-2">
        {categories.map((category, index) => (
          <Link
            key={index}
            className="text-slate-500 py-1 my-3 w-fit flex gap-3 items-center px-2 hover:bg-green-400"
            href={`/pages/${category}`}
          >
            <FaShoppingBag size={20} />
            <p className="text-xs w-fit px-2 py-1">{category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Category;
