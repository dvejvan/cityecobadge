"use client";

import { cities } from "../../lib/city-data";
import CityCard from "../../components/CityCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { AlertCircle, Info } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function CitiesPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("citiesPageTitle")}</h1>
        <p className="text-lg text-muted-foreground">
          {t("citiesPageSubtitle")}
        </p>
      </div>

      <Card className="mb-12">
        <CardHeader className="flex flex-row items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <CardTitle>{t("importantInfo")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {t("citiesPageInfo")}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {cities.map((city) => (
          <CityCard key={city.slug} city={city} />
        ))}
      </div>

      <Card className="bg-muted/50 border-primary/20">
        <CardHeader className="flex flex-row items-center gap-2">
          <AlertCircle className="h-5 w-5 text-primary" />
          <CardTitle>{t("foreignTravelWarning")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {t("foreignTravelInfo")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Frankreich:</strong> {t("franceInfo")}
            </li>
            <li>
              <strong>Österreich:</strong> {t("austriaInfo")}
            </li>
            <li>
              <strong>Belgien:</strong> {t("belgiumInfo")}
            </li>
            <li>
              <strong>Dänemark:</strong> {t("denmarkInfo")}
            </li>
          </ul>
          <p className="mt-4">
            {t("foreignTravelFooter")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}