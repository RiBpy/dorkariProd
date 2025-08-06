import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/helper/redux/StoreProvider";
import { AuthProvider } from "@/hooks/useAuth";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QCY - Premium Audio Products",
  description: "Discover QCY premium wireless earbuds and audio products",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <StoreProvider>
            {children}
            <Login />
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
