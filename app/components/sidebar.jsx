import Link from 'next/link';
import React from 'react'



function SideBar({categories}) {
    return <div className="overflow-y-scroll h-full pl-2">
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            className="text-slate-500 px-2 py-1 my-3 w-[90%] "
            href={`/pages/${category}`}
          >
            <p className="text-xs hover:bg-green-400 px-2 py-1">
              {category}
            </p>
          </Link>
        );
      })}
    </div>;
  }

  export default SideBar;