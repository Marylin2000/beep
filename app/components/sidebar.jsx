import Link from 'next/link';
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import {} from 'react-icons/io'


function SideBar({categories}) {
    return <div className="overflow-y-scroll h-full pl-2">
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            className="text-slate- flex items-center px-2 gap-2 py-1 my-3 w-[100%] "
            href={`/pages/${category}`}

          >
            <FaShoppingBag className="text-gray-500" />
            <p className="text-xs w-fit rounded-md hover:text-white hover:bg-green-400">
              {category}
            </p>
          </Link>
        );
      })}
    </div>;
  }

  export default SideBar;