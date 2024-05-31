import React from 'react'
import { navebar } from '@/app/utils/constants'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="sm:flex hidden">
      {
        navebar.map((item, index) => {
          return (
            <div className="navbar" key={index}>
              <Link href={item.path} className=" font-bold font-poppins text-white rounded-md px-4 py-2 text-sm  hover:bg-black/10">
                {item.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Navbar
