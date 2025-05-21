import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import NavBar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur WebDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} animated-dotted-background`}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
