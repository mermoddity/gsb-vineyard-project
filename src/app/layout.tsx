import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GSB Vineyard Project",
  description: "A Next.js application for GSB Vineyard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
