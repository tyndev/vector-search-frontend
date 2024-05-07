import { Inter as FontSans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils"
import type { Metadata } from "next";
import Header from "@/components/header"
import Footer from "@/components/footer"


const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Vector Search",
  description: "Vector Query Search Engine Project",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
