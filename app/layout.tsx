import type { Metadata } from "next";
import { Assistant, Inter } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bateli's workshop",
  description: ״סדנת ׳לאהוב אותך׳״,
  authors: {
    name: "Etan Heyman",
    url: "https://www.linkedin.com/in/etanheyman/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
