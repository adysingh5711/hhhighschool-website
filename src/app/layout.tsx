import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionConfigProvider } from "@/components/layout/motion-config-provider";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "H. H. High School, Brambe",
    template: "%s | H. H. High School",
  },
  description:
    "Hamid Hassan High School (H. H. High School), Brambe, Jharkhand — outperforming ourselves, each day. A rural school built on child-centered, values-based, affordable education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <MotionConfigProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfigProvider>
      </body>
    </html>
  );
}
