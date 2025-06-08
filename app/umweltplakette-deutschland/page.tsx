import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, CheckCircle, MapPin, AlertTriangle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Umweltplakette Deutschland | Alle Umweltzonen im Überblick",
  description: "Alles über Umweltplaketten in Deutschland. Umweltzonen, Vorschriften und wie Sie Ihre grüne Plakette erhalten. Kompakter Überblick für alle deutschen Städte.",
  keywords: "Umweltplakette Deutschland, deutsche Umweltzonen, grüne Plakette Deutschland, Umweltzone Vorschriften",
};

export default function UmweltplaketteDeutschlandPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Umweltplakette Deutschland
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Ihr kompletter Überblick über Umweltplaketten und Umweltzonen in Deutschland. 
          Über 70 Städte haben bereits Umweltzonen eingeführt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/bestellen">Plakette bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/stadte">Alle Städte ansehen</Link>
          </Button>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">70+</div>
          <div className="text-muted-foreground">Städte mit Umweltzonen</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">2008</div>
          <div className="text-muted-foreground">Erste Umweltzone in Berlin</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">80€</div>
          <div className="text-muted-foreground">Bußgeld ohne Plakette</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">Grün</div>
          <div className="text-muted-foreground">Einzige gültige Farbe</div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-secondary rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Umweltzonen in Deutschland</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wichtigste Städte mit Umweltzonen:</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Berlin", "München", "Stuttgart", "Köln", 
                "Düsseldorf", "Frankfurt", "Hamburg", "Leipzig",
                "Dresden", "Hannover", "Bremen", "Dortmund"
              ].map((city) => (
                <div key={city} className="flex items-center gap-2 p-2 bg-background rounded">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bundesländer mit Umweltzonen:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nordrhein-Westfalen (23 Städte)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Baden-Württemberg (12 Städte)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bayern (9 Städte)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Niedersachsen (6 Städte)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hessen (4 Städte)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Info className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Was ist eine Umweltplakette?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Die Umweltplakette ist ein farbiger Aufkleber, der die Schadstoffklasse 
              Ihres Fahrzeugs anzeigt. Nur Fahrzeuge mit grüner Plakette dürfen 
              in deutsche Umweltzonen einfahren.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Runde Aufkleber für die Windschutzscheibe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Enthält Kennzeichen und Schadstoffgruppe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Unbegrenzt gültig
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
            <CardTitle>Wichtige Vorschriften</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Das Befahren einer Umweltzone ohne gültige Plakette ist ein Verstoß 
              gegen die Straßenverkehrsordnung und wird mit Bußgeld bestraft.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                80€ Bußgeld ohne Plakette
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                Gilt auch für ausländische Fahrzeuge
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                Kontrollen durch Polizei und Ordnungsamt
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="bg-card border rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Geschichte der Umweltzonen</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
            <div>
              <div className="font-bold">2008</div>
              <div className="text-muted-foreground">Erste Umweltzone in Berlin, Köln und Hannover</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
            <div>
              <div className="font-bold">2012</div>
              <div className="text-muted-foreground">Nur noch grüne Plaketten in allen Umweltzonen erlaubt</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
            <div>
              <div className="font-bold">2025</div>
              <div className="text-muted-foreground">Über 70 Städte mit Umweltzonen in ganz Deutschland</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Brauchen Sie eine grüne Umweltplakette?</h2>
        <p className="text-muted-foreground mb-6">
          Bestellen Sie Ihre offizielle grüne Umweltplakette jetzt online und 
          fahren Sie legal in alle deutschen Umweltzonen.
        </p>
        <Button size="lg" asChild>
          <Link href="/bestellen">Jetzt bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
}