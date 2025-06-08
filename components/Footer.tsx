"use client";

import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full bg-muted py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">UmweltBadge</h3>
          <p className="text-muted-foreground">
            {t("footerDescription")}
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">{t("importantLinks")}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/stadte" className="text-muted-foreground hover:text-primary transition-colors">
                {t("cities")}
              </Link>
            </li>
            <li>
              <Link href="/bestellen" className="text-muted-foreground hover:text-primary transition-colors">
                {t("order")}
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">{t("information")}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/gruene-umweltplakette-kaufen" className="text-muted-foreground hover:text-primary transition-colors">
                {t("buyGreenBadge")}
              </Link>
            </li>
            <li>
              <Link href="/umweltplakette-deutschland" className="text-muted-foreground hover:text-primary transition-colors">
                {t("environmentalBadgeGermany")}
              </Link>
            </li>
            <li>
              <Link href="/umweltplakette-online-bestellen" className="text-muted-foreground hover:text-primary transition-colors">
                {t("orderOnline")}
              </Link>
            </li>
            <li>
              <Link href="/wo-bekomme-ich-eine-umweltplakette" className="text-muted-foreground hover:text-primary transition-colors">
                {t("whereToGetBadge")}
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">{t("contact")}</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>UmweltBadge GmbH</li>
            <li>Umweltstraße 123</li>
            <li>10115 Berlin, Deutschland</li>
            <li>Email: info@umweltbadge.de</li>
            <li>Tel: +49 30 123456789</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} UmweltBadge GmbH. {t("allRightsReserved")}
          </p>
          <div className="flex space-x-4">
            <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
              {t("imprint")}
            </Link>
            <Link href="/agb" className="text-muted-foreground hover:text-primary transition-colors">
              {t("termsAndConditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}