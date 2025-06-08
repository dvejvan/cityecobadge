"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../lib/LanguageContext";

interface CityCardProps {
  city: {
    name: string;
    slug: string;
    description: string;
  };
}

export default function CityCard({ city }: CityCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>{city.name}</CardTitle>
        <CardDescription>Umweltzone</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{city.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/stadte/${city.slug}`}>{t("learnMore")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}