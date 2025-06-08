import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import { LanguageProvider } from "../lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grüne Umweltplakette | Umweltzonen-Badge für deutsche Städte",
  description: "Kaufen Sie die grüne Umweltplakette für Fahrzeuge in deutschen Umweltzonen. Offizielle Abwicklung, schneller Versand und professioneller Service.",
  keywords: "Umweltplakette, grüne Plakette, Umweltzone, Berlin, München, Stuttgart, Köln, deutsche Städte, Fahrzeugzulassung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen w-full">
            {children}
          </main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}