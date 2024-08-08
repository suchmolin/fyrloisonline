import { Inter } from "next/font/google";
import "./globals.css";
import MenuHeader from "@/components/MenuHeader/page";
import Footer from "@/components/Footer/page";
import { OpenModalProvider } from "@/context/openModal";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fyr Lois Usa - Aprende inglés",
  description: "Fyr Lois Usa - Aprende inglés",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1HMKB3W4LK"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1HMKB3W4LK');
          
          `}
        </Script>
      </head>
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
