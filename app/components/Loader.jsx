import React from 'react'

function Loader() {
  return (
    <main className="w-full h-full flex items-center absolute justify-center">

                    <div className="h-24 w-24 animate-spin flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-400">
            <div className="  rounded-full items-center justify-center absolute w-20 h-20 bg-white"> </div>
        </div>
         <p className="absolute animate-bounce text-3xl">😍</p>
         


    </main>
  )
}

export default Loader
