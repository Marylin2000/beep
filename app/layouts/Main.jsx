import React from 'react'
import Header from '../pages/components/header'
import Link from 'next/link'
import { routerTrigger } from '../routes/Routes'


function Main({children}) {
  return (
    <div>
         <div className="bg-orange-300 z-20 sticky top-0 w-full">
            <Header />
          </div>
          {children}

          <section className="fixed sm:hidden flex items-center w-[100vw] justify-evenly px-1 h-[9vh] text-3xl bottom-0 left-0 right-0 bg-slate-100 rounded-t-lg text-white">
            {routerTrigger.map((triger) => (
              <Link
                className="cursor-pointer"
                key={triger.Destination}
                href={triger.Destination}
              >
                {triger.icon}
              </Link>
            ))}
          </section>
    </div>
  )
}

export default Main