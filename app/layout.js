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
          <UserProvider>{children}</UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}
