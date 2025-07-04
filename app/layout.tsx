import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Arthur WebDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} animated-dotted-background`}>
        <Provider>
          <NavBar />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
