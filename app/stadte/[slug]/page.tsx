import { Metadata } from "next";
import { cities, getCityBySlug } from "../../../lib/city-data";
import { notFound } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { CalendarDays, Info, MapPin, Car, Star, ExternalLink, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

// Generate static params for all cities
export function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// Dynamic metadata based on the city
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  
  if (!city) {
    return {
      title: "Stadt nicht gefunden",
      description: "Die gesuchte Stadt mit Umweltzone wurde nicht gefunden.",
    };
  }
  
  return {
    title: `${city.name} Umweltzone | Grüne Umweltplakette bestellen`,
    description: city.subtitle || `Informationen zur Umweltzone in ${city.name}. Erfahren Sie alles über die Grüne Umweltplakette für ${city.name}, Grenzen der Umweltzone und wichtige Hinweise.`,
    keywords: `${city.name} Umweltzone, grüne Plakette ${city.name}, Umweltplakette ${city.name}, Fahrverbote ${city.name}, Sehenswürdigkeiten ${city.name}`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  
  if (!city) {
    notFound();
  }

  // Get other major cities for recommendations
  const otherCities = cities.filter(c => c.slug !== city.slug && 
    ['berlin', 'muenchen', 'koeln', 'stuttgart', 'hamburg', 'frankfurt', 'duesseldorf', 'dresden', 'leipzig', 'hannover'].includes(c.slug)
  ).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/stadte" className="text-green-100 hover:text-white transition-colors flex items-center gap-2">
                <span className="text-sm">← Zurück zur Übersicht</span>
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Umweltzone {city.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              {city.subtitle || `Kompletní informace o ekologické zóně v ${city.name} a jak získat zelenou ekologickou známku`}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-green-700 text-lg px-4 py-2 hover:bg-green-50">
                <CheckCircle className="h-5 w-5 mr-2" />
                Grüne Plakette erforderlich
              </Badge>
              <Badge variant="outline" className="border-white text-white text-lg px-4 py-2">
                <CalendarDays className="h-5 w-5 mr-2" />
                {city.implementationDate.split(',')[0]}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
                    <Info className="h-6 w-6" />
                    Überblick zur Umweltzone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">{city.fullDescription}</p>
                  
                  {city.importantNotes && (
                    <Alert className="border-orange-200 bg-orange-50">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <AlertTitle className="text-orange-800">Wichtiger Hinweis</AlertTitle>
                      <AlertDescription className="text-orange-700">{city.importantNotes}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Visitor Information */}
              {city.visitorInfo && (
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-blue-700">
                      <MapPin className="h-6 w-6" />
                      Wichtige Informationen für Besucher
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">{city.visitorInfo}</p>
                  </CardContent>
                </Card>
              )}

              {/* Tourist Attractions */}
              {city.attractions && city.attractions.length > 0 && (
                <Card className="border-purple-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-purple-700">
                      <Star className="h-6 w-6" />
                      Top Sehenswürdigkeiten in {city.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {city.attractions.map((attraction, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium text-purple-800">{attraction}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Rules and Regulations */}
              <Card className="border-red-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-red-700">
                    <AlertTriangle className="h-6 w-6" />
                    Vorschriften und Einschränkungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">{city.restrictions}</p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h4 className="font-bold text-red-800">Bußgeld bei Verstoß</h4>
                    </div>
                    <p className="text-red-700">
                      Das Befahren der Umweltzone ohne gültige grüne Plakette wird mit einem <strong>Bußgeld von 80 Euro</strong> geahndet.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Häufige Fragen zur Umweltzone {city.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Wo genau gilt die Umweltzone in {city.name}?</h3>
                    <p className="text-muted-foreground">
                      Die genauen Grenzen der Umweltzone sind durch entsprechende Verkehrsschilder gekennzeichnet. 
                      In der Regel sind die Hauptverkehrsadern und Umgehungsstraßen ausgenommen, um Transitverkehr zu ermöglichen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Gibt es Ausnahmen von der Plakettenpflicht?</h3>
                    <p className="text-muted-foreground">
                      Ja, bestimmte Fahrzeuge sind von der Plakettenpflicht ausgenommen, darunter Krankenwagen, Polizeifahrzeuge, 
                      Feuerwehrfahrzeuge und andere Einsatzfahrzeuge. Auch Oldtimer mit H-Kennzeichen sind unter bestimmten Bedingungen ausgenommen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Wie lange dauert die Bestellung einer Plakette?</h3>
                    <p className="text-muted-foreground">
                      Bei Online-Bestellung erhalten Sie Ihre grüne Umweltplakette innerhalb von 1-3 Werktagen per Post. 
                      Bei Bestellung vor 15 Uhr erfolgt der Versand noch am selben Tag.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Order CTA */}
              <Card className="border-green-300 bg-green-50 shadow-lg sticky top-4">
                <CardHeader>
                  <CardTitle className="text-green-800 text-center">
                    Grüne Umweltplakette bestellen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl">
                    4
                  </div>
                  <p className="text-green-700">
                    Bestellen Sie jetzt Ihre offizielle grüne Umweltplakette für {city.name} - schnell, einfach und zuverlässig!
                  </p>
                  <div className="space-y-2">
                    <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/bestellen">
                        <Car className="h-5 w-5 mr-2" />
                        Jetzt bestellen
                      </Link>
                    </Button>
                    <p className="text-sm text-green-600">✓ Versand in 1-3 Werktagen</p>
                    <p className="text-sm text-green-600">✓ 100% offiziell anerkannt</p>
                  </div>
                </CardContent>
              </Card>

              {/* Other Cities */}
              {otherCities.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Weitere deutsche Städte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {otherCities.map((otherCity) => (
                        <Link 
                          key={otherCity.slug} 
                          href={`/stadte/${otherCity.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors group"
                        >
                          <span className="font-medium">{otherCity.name}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                      <Link 
                        href="/stadte"
                        className="flex items-center justify-center p-3 rounded-lg border-2 border-dashed border-gray-300 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Alle Städte anzeigen
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}