"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";

interface HeroProps {
  titleKey: string;
  subtitleKey: string;
  ctaTextKey?: string;
  ctaLink?: string;
  imageUrl?: string;
  secondaryCtaTextKey?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  titleKey,
  subtitleKey,
  ctaTextKey = "orderBadgeNow",
  ctaLink = "/bestellen",
  imageUrl = "/images/green-badge.jpg",
  secondaryCtaTextKey,
  secondaryCtaLink
}: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {t(titleKey)}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t(subtitleKey)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <Link href={ctaLink}>{t(ctaTextKey)}</Link>
            </Button>
            {secondaryCtaTextKey && secondaryCtaLink && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCtaLink}>{t(secondaryCtaTextKey)}</Link>
              </Button>
            )}
          </div>
        </div>

        <div className="relative h-64 md:h-80 lg:h-96 w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center rounded-lg">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
              <img 
                src="/images/umweltplakette.webp" 
                alt="Grüne Umweltplakette" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute top-24 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    </div>
  );
}