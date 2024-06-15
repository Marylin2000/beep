import React from 'react'
import Header from '../components/header'
import Link from 'next/link'
import { routerTrigger } from '../routes/Routes'


function Main({children}) {
  return (
    <main className="h-[100vh] w-[100vw] relative overflow-y-scroll " >
         <div className="bg-white sticky  top-0 w-full">
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
    </main>
  )
}

export default Main