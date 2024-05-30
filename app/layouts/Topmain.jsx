import React from 'react'
import Header from '../pages/components/header'
function Topmain({children}) {
  return (
    <div>
    <div className="bg-orange-300 z-20 sticky top-0 w-full">
            <Header />
          </div>
        {children}
    </div>
  )
}

export default Topmain