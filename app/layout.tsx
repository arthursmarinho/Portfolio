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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
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
