import  {CartProvider}  from './context/CartContext'
import './globals.css'
export const metadata = {
  title: "beeb",
  description: 'Created by Barry',
}

export default function RootLayout({ children, }) {
  return (
 


    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
       

  )
}

