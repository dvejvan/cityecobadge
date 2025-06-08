"use client";

import Hero from "../components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, Check, MapPin, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import ShippingTimer from "../components/ShippingTimer";
import { useLanguage } from "../lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col">
      <Hero 
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        secondaryCtaTextKey="learnMore"
        secondaryCtaLink="/umweltplakette-informationen"
      />
      
      {/* Shipping notice */}
      <div className="container mx-auto px-4 py-6">
        <ShippingTimer />
      </div>

      {/* Key benefits */}
      <section id="vorteile" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("benefitsTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("benefitsSubtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("officiallyRecognized")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("officiallyRecognizedDesc")}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("fastShipping")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("fastShippingDesc")}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t("allZones")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("allZonesDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("howItWorksTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("howItWorksSubtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{t("step1Title")}</h3>
              <p className="text-muted-foreground">{t("step1Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{t("step2Title")}</h3>
              <p className="text-muted-foreground">{t("step2Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{t("step3Title")}</h3>
              <p className="text-muted-foreground">{t("step3Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{t("step4Title")}</h3>
              <p className="text-muted-foreground">{t("step4Desc")}</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/bestellen">{t("orderBadgeNow")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cities overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("citiesWithZonesTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("citiesWithZonesSubtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample cities list */}
            {[
              "Berlin", "München", "Köln", "Stuttgart", "Düsseldorf", "Frankfurt"
            ].map((city) => (
              <div key={city} className="flex items-center space-x-2 p-4 bg-background rounded-lg shadow-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>{city}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/stadte">{t("showAllCities")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("faqTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("faqSubtitle")}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-border">
            <div className="py-5">
              <h3 className="font-medium text-lg">{t("faqQuestion1")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("faqAnswer1")}
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="font-medium text-lg">{t("faqQuestion2")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("faqAnswer2")}
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="font-medium text-lg">{t("faqQuestion3")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("faqAnswer3")}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">{t("moreQuestionsAnswers")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}