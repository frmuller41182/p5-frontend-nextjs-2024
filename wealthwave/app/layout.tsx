import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//We are going to add a Header and Footer in the Root Layout as it is shared accross all pages.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WealthWave",
  description:
    "A finance app to search stocks and trade them to add/remove them from your portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
