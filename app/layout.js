import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import "./globals.css";
export const metadata = {
  title: "beeb",
  description: "Created by Barry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <UserProvider>
          <Toaster position="top-right" />
          <div>{children}</div>
          </UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}
