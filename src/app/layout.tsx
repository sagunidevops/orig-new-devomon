import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { PerformanceMonitor } from "../components/PerformanceMonitor";

export const metadata: Metadata = {
  title: "Devomon - Epic Gaming Universe",
  description: "Enter the world of Devomon with Callisto and Voidborn games. Epic adventures await!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <PerformanceMonitor />
        <ScrollToTop />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
