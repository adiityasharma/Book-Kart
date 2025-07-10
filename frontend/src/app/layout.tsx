import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import Footer from '../app/components/Footer';


const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Book Kart",
  description: "This is E-commerce plateform where you can buy or sell your used books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto_mono.className}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
