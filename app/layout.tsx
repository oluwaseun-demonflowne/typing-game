import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Toast } from "react-hot-toast";
import { SocketProvider } from "./Socket-Provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typing Game",
  description: "Typing game built with React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast />
        <SocketProvider>
        {children}
        </SocketProvider>
        <Toaster />
      </body>
    </html>
  );
}
