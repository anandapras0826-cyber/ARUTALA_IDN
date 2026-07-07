import type { Metadata } from "next";
import { Montserrat, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arutala Desain",
  description: "Gak Pakai Ribet, Beres Diantar Sampai Depan Pintu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", "scroll-smooth", montserrat.variable, poppins.variable, "font-sans", inter.variable)}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
