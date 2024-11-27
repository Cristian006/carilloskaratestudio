import localFont from "next/font/local";
import { M_PLUS_1p } from 'next/font/google'
import { Inter } from 'next/font/google'
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const mplus = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-mplus',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400'],  // Light weights to complement calligraphy
});

export const metadata = {
  title: "Carrillo's Karate Do Studio",
  description: "Discipline, Respect, Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mplus.variable} ${inter.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
