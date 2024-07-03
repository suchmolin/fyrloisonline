import { Inter } from "next/font/google";
import "./globals.css";
import MenuHeader from "@/components/MenuHeader/page";
import Footer from "@/components/Footer/page";
import { OpenModalProvider } from "@/context/openModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fyr Lois Usa - Aprende inglés",
  description: "Fyr Lois Usa - Aprende inglés",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <OpenModalProvider>
          <MenuHeader />
          {children}
          <Footer />
        </OpenModalProvider>
      </body>
    </html>
  );
}
