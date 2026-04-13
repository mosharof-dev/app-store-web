import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HERO.IO",
  description: "HERO.IO is a platform that allows users to create and share their own apps. With HERO.IO, you can easily build and deploy your apps without any coding knowledge. Whether you want to create a simple app for personal use or a complex app for your business, HERO.IO has got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col">
       <header>
        <NavBar/>
       </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>

      </body>
    </html>
  );
}
