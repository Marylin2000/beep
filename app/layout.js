import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
export const metadata = {
  title: "beeb",
  description: "Created by Barry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <UserProvider>
              <Toaster position="top-right" />
              <div>{children}</div>
            </UserProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
