"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
          <span className="font-bold text-lg">UmweltBadge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">{t("home")}</Link>
          <Link href="/stadte" className="text-foreground hover:text-primary transition-colors">{t("cities")}</Link>
          <Link href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
          <Link href="/kontakt" className="text-foreground hover:text-primary transition-colors">{t("contact")}</Link>
          <Button asChild>
            <Link href="/bestellen">{t("buyNow")}</Link>
          </Button>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border z-50 md:hidden">
            <nav className="container flex flex-col py-4 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">{t("home")}</Link>
              <Link href="/stadte" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">{t("cities")}</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">{t("contact")}</Link>
              <Button asChild>
                <Link href="/bestellen" onClick={() => setIsMenuOpen(false)}>{t("buyNow")}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}