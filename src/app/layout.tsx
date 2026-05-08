import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JPPA Consultants LLP | Strategic Financial Leadership",
  description: "Empowering businesses through comprehensive financial and operational excellence. Your strategic virtual CFO and business consulting partner.",
  keywords: ["Virtual CFO", "Financial Consulting", "Business Strategy", "JPPA Consultants LLP", "Profitability Growth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
