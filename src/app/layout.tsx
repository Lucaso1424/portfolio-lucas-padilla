import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "LPADILLA Project",
  description: "Generated with NEXT.Js, THREE.js and React",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
