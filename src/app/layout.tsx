import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rasa Mihan challenge",
  description: "A test for Rasa mihan employment ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "pt-4"
          //attention:
          //remove cn and the style so you could
          //keep the font and ditch this disaster
        )}
      >
        {children}
      </body>
    </html>
  );
}
