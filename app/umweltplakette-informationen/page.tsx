"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Badge } from "../../components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Car, 
  MapPin, 
  Euro, 
  CheckCircle, 
  XCircle, 
  Info,
  Calculator,
  Clock,
  Building
} from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useLanguage } from "../../lib/LanguageContext";

export default function UmweltplaketteInformationenPage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("umweltplakettePageTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("umweltplakettePageSubtitle")}
          </p>
          <div className="mt-6">
            <Badge className="bg-green-600 text-white text-lg px-4 py-2">
              {t("onlyGreenValid")}
            </Badge>
          </div>
        </div>

        {/* Was ist eine Umweltplakette */}
        <section className="mb-12">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
                {t("whatIsGreenBadge")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                {t("greenBadgeDefinition")}
              </p>
              <p>
                {t("greenBadgeHistory")}
              </p>
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle>{t("onlyGreenValidAlertTitle")}</AlertTitle>
                <AlertDescription>
                  {t("onlyGreenValidAlertDesc")}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Nur grüne Plakette */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  {t("onlyGreenCounts")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-green-600 mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl">
                    4
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-green-700">{t("pollutantGroup4")}</h3>
                  <Badge className="bg-green-600 text-white">{t("onlyValidBadge")}</Badge>
                </div>
                <p className="text-center">
                  {t("greenBadgeApproval")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Info className="h-6 w-6 text-muted-foreground" />
                  {t("otherBadgesNotValid")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {t("otherBadgesExplanation")}
                </p>
                <div className="flex justify-center gap-4 opacity-50">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 mx-auto mb-2 flex items-center justify-center text-white font-bold">2</div>
                    <p className="text-xs">{t("red")}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 mx-auto mb-2 flex items-center justify-center text-white font-bold">3</div>
                    <p className="text-xs">{t("yellow")}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  ❌ {t("noLongerApproved")}
                </p>
              </CardContent>
            </Card>
          </div>

          <Alert className="mt-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle>{t("whyOnlyGreenTitle")}</AlertTitle>
            <AlertDescription>
              {t("whyOnlyGreenExplanation")}
            </AlertDescription>
          </Alert>
        </section>

        {/* Wo wird sie benötigt */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-primary" />
                {t("whereNeeded")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                {t("whereNeededExplanation")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">{t("majorCitiesWithZones")}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Berlin
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      München
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Hamburg
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Köln
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Stuttgart
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Frankfurt am Main
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">{t("otherCities")}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Düsseldorf
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Hannover
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Leipzig
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Dresden
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Nürnberg
                    </li>
                    <li className="text-muted-foreground">
                      {t("andManyMore")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/stadte">{t("showAllCitiesZones")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Voraussetzungen */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                {t("requirementsGreenBadge")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-4 text-green-600">{t("petrolVehicles")}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("euro1WithCatalyst")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("euro2AndHigher")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("allHybridElectric")}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4 text-green-600">{t("dieselVehicles")}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("euro4AndHigher")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("euro3WithFilter")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t("newerVehicles2006")}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sanktionen */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                {t("sanctionsFines")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 border-destructive bg-destructive/5">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>{t("importantNotice")}</AlertTitle>
                <AlertDescription>
                  {t("violationStrictlyControlled")}
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-destructive/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Euro className="h-5 w-5 text-destructive" />
                      {t("fine")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-destructive mb-2">80 €</div>
                      <p className="text-muted-foreground">
                        {t("drivingWithoutValidBadge")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Building className="h-5 w-5 text-primary" />
                      {t("additionalConsequences")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        {t("warningFee")}
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        {t("possibleVehicleStop")}
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        {t("towingCosts")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wie erhalten */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calculator className="h-6 w-6 text-primary" />
                {t("howToGetBadge")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle>{t("weOfferOnlyGreen")}</AlertTitle>
                <AlertDescription>
                  {t("weOfferOnlyGreenExplanation")}
                </AlertDescription>
              </Alert>
              <p>
                {t("howToGetBadgeExplanation")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("orderOnlineMethod")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        {t("fastAndEasy")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {t("available24_7")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {t("homeDelivery")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("tuvDekra")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {t("personalConsultation")}
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        {t("observeOpeningHours")}
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        {t("pickUpOnSite")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t("registrationOffice")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        {t("officialOffice")}
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        {t("longWaitingTimes")}
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        {t("appointmentRequired")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>{t("requiredDocuments")}</AlertTitle>
                <AlertDescription>
                  {t("requiredDocumentsExplanation")}
                </AlertDescription>
              </Alert>

              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <Link href="/bestellen">{t("orderNowGreenBadge")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kosten */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Euro className="h-6 w-6 text-primary" />
                {t("costsGreenBadge")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle>{t("bestChoiceOnlineOrder")}</AlertTitle>
                <AlertDescription>
                  {t("bestChoiceOnlineOrderExplanation")}
                </AlertDescription>
              </Alert>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-green-200 bg-green-50 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">{t("recommended")}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">{t("onlineWithUs")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">15,99 €</div>
                    <p className="text-sm text-muted-foreground">{t("inclShippingService")}</p>
                    <p className="text-xs text-green-600 mt-2">✓ {t("comfortableFromHome")}</p>
                  </CardContent>
                </Card>

                <Card className="text-center opacity-75">
                  <CardHeader>
                    <CardTitle className="text-lg">{t("tuvDekra")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">5-10 €</div>
                    <p className="text-sm text-muted-foreground">{t("plusTravelTime")}</p>
                    <p className="text-xs text-red-600 mt-2">⚠️ {t("observeOpeningHours")}</p>
                  </CardContent>
                </Card>

                <Card className="text-center opacity-75">
                  <CardHeader>
                    <CardTitle className="text-lg">{t("registrationOffice")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">5-6 €</div>
                    <p className="text-sm text-muted-foreground">{t("plusTimeTravel")}</p>
                    <p className="text-xs text-red-600 mt-2">⚠️ {t("longWaitingTimes")}</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("frequentlyAskedQuestions")}</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("howLongValidBadge")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {t("howLongValidBadgeAnswer")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("canTransferBadge")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {t("canTransferBadgeAnswer")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("whatIfDamagedBadge")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {t("whatIfDamagedBadgeAnswer")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("foreignVehiclesNeedBadge")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {t("foreignVehiclesNeedBadgeAnswer")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">{t("readyForGreenBadge")}</h2>
              <p className="text-muted-foreground mb-6">
                {t("readyForGreenBadgeExplanation")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/bestellen">{t("orderNow")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/kontakt">{t("questionsContact")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}