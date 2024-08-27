import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
  return (
    <main className="w-[100vw] h-[100vh] flex items-center absolute justify-center">
      <div>

                <ScaleLoader color="#36d7b7" size={50} />
         <p className="absolute animate-bounce text-white text-xl">please wait</p>
      </div>
         


    </main>
  )
}

export default Loader
