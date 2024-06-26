import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steady SASS",
  description: "Generated by you!",
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

// eslint-disable-next-line import/no-default-export
export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
