import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, CheckCircle, Shield, Truck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Grüne Umweltplakette kaufen | Schnell & Einfach Online",
  description: "Kaufen Sie Ihre grüne Umweltplakette schnell und sicher online. Für alle deutschen Umweltzonen gültig. Schneller Versand und offizielle Anerkennung garantiert.",
  keywords: "grüne Umweltplakette kaufen, Umweltplakette bestellen, grüne Plakette online, Umweltzone Deutschland",
};

export default function BuyGreenBadgePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Grüne Umweltplakette kaufen
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Bestellen Sie Ihre offizielle grüne Umweltplakette bequem online. 
          Schnelle Bearbeitung, sicherer Versand und 100% Geld-zurück-Garantie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/bestellen">Jetzt kaufen <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/stadte">Umweltzonen anzeigen</Link>
          </Button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardHeader>
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>100% Offiziell</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Unsere grüne Umweltplakette entspricht allen offiziellen Vorgaben und 
              wird in allen deutschen Umweltzonen anerkannt.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Schneller Versand</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bestellung vor 15 Uhr = Versand am selben Tag. 
              Lieferung innerhalb Deutschlands in nur 1-3 Werktagen.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Alle Umweltzonen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Gültig in über 70 deutschen Städten mit Umweltzonen, 
              von Berlin bis München.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Process Steps */}
      <div className="bg-secondary rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">So kaufen Sie Ihre grüne Umweltplakette</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Fahrzeugdaten eingeben",
              description: "Geben Sie Ihre Fahrzeugdaten und Adresse in unser sicheres Bestellformular ein."
            },
            {
              step: "2", 
              title: "Zahlung abschließen",
              description: "Bezahlen Sie sicher per Kreditkarte, PayPal oder Überweisung."
            },
            {
              step: "3",
              title: "Bearbeitung",
              description: "Wir prüfen Ihre Daten und erstellen Ihre offizielle grüne Umweltplakette."
            },
            {
              step: "4",
              title: "Lieferung",
              description: "Sie erhalten Ihre Plakette per Post mit Tracking-Informationen."
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen zum Kauf</h2>
        <div className="space-y-6">
          {[
            {
              question: "Wie viel kostet eine grüne Umweltplakette?",
              answer: "Der Preis für eine grüne Umweltplakette beträgt 12,90€ inklusive Versand innerhalb Deutschlands."
            },
            {
              question: "Ist mein Fahrzeug für eine grüne Plakette qualifiziert?",
              answer: "Die meisten Benziner ab Euro 1 und Diesel ab Euro 4 erhalten eine grüne Plakette. Wir prüfen Ihre Fahrzeugdaten automatisch."
            },
            {
              question: "Wie lange ist die Umweltplakette gültig?",
              answer: "Die grüne Umweltplakette ist unbegrenzt gültig, solange sie an der Windschutzscheibe gut lesbar ist."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-card border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Bereit für Ihre grüne Umweltplakette?</h2>
        <p className="text-muted-foreground mb-6">
          Bestellen Sie jetzt und fahren Sie schon bald legal in alle deutschen Umweltzonen.
        </p>
        <Button size="lg" asChild>
          <Link href="/bestellen">Grüne Umweltplakette kaufen <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
}