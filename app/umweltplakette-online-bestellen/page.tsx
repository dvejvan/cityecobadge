import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, Clock, Shield, CreditCard, Truck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Umweltplakette Online Bestellen | Schnell & Sicher",
  description: "Bestellen Sie Ihre Umweltplakette einfach online. Schnelle Bearbeitung, sichere Zahlung und deutschlandweiter Versand. Jetzt in 5 Minuten bestellen!",
  keywords: "Umweltplakette online bestellen, grüne Plakette bestellen, Umweltplakette kaufen online, schnelle Bestellung",
};

export default function OnlineBestellenPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Umweltplakette Online Bestellen
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Bestellen Sie Ihre grüne Umweltplakette in nur 5 Minuten online. 
          Einfach, schnell und sicher - ohne Behördengang oder Wartezeiten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/bestellen">Jetzt online bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#vorteile">Vorteile ansehen</Link>
          </Button>
        </div>
      </div>

      {/* Online Ordering Benefits */}
      <section id="vorteile" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Warum online bestellen?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>24/7 verfügbar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bestellen Sie jederzeit, auch außerhalb der Geschäftszeiten. 
                Keine Wartezeiten bei Behörden oder TÜV-Stellen.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Sichere Zahlung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bezahlen Sie sicher per Kreditkarte, PayPal, Sofortüberweisung 
                oder klassischer Banküberweisung.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Schnelle Lieferung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bestellung vor 15 Uhr = Versand am gleichen Tag. 
                Deutschlandweite Lieferung in 1-3 Werktagen.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Step by Step Process */}
      <div className="bg-secondary rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">So bestellen Sie online</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Fahrzeugdaten eingeben",
              description: "Kennzeichen, Marke, Modell und Baujahr in unser sicheres Formular eingeben.",
              time: "2 Min"
            },
            {
              step: "2", 
              title: "Fahrzeugschein hochladen",
              description: "Foto oder Scan des Fahrzeugscheins zur Verifizierung hochladen.",
              time: "1 Min"
            },
            {
              step: "3",
              title: "Adresse & Zahlung",
              description: "Lieferadresse angeben und bevorzugte Zahlungsmethode wählen.",
              time: "2 Min"
            },
            {
              step: "4",
              title: "Bestellung abschließen",
              description: "Bestellung bestätigen und Bestätigungs-E-Mail erhalten.",
              time: "Sofort"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-2">{item.description}</p>
              <div className="text-sm font-medium text-primary">{item.time}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <div className="text-2xl font-bold text-primary">Gesamtdauer: Nur 5 Minuten!</div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-card border rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Sichere Zahlungsmethoden</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-background rounded-lg">
            <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="font-medium">Kreditkarte</div>
            <div className="text-xs text-muted-foreground">Visa, Mastercard</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">PP</div>
            <div className="font-medium">PayPal</div>
            <div className="text-xs text-muted-foreground">Sofortige Zahlung</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">SÜ</div>
            <div className="font-medium">Sofortüberweisung</div>
            <div className="text-xs text-muted-foreground">Direkt vom Konto</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg">
            <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center text-white text-xs font-bold">Ü</div>
            <div className="font-medium">Überweisung</div>
            <div className="text-xs text-muted-foreground">Klassische Zahlung</div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Was unsere Kunden sagen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Thomas M.",
              rating: 5,
              text: "Super einfach online bestellt. Plakette kam nach 2 Tagen an. Kann ich nur empfehlen!"
            },
            {
              name: "Sandra K.", 
              rating: 5,
              text: "Viel schneller als beim TÜV. Online-Bestellung war in 5 Minuten fertig."
            },
            {
              name: "Michael R.",
              rating: 5,
              text: "Professioneller Service, faire Preise und schnelle Lieferung. Gerne wieder!"
            }
          ].map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <div className="font-medium">{review.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen zur Online-Bestellung</h2>
        <div className="space-y-6">
          {[
            {
              question: "Ist die Online-Bestellung sicher?",
              answer: "Ja, alle Daten werden SSL-verschlüsselt übertragen. Wir verwenden sichere Zahlungsanbieter und speichern keine Zahlungsdaten."
            },
            {
              question: "Wie lange dauert die Bearbeitung?",
              answer: "Nach Zahlungseingang prüfen wir Ihre Daten innerhalb von 24 Stunden und versenden die Plakette am nächsten Werktag."
            },
            {
              question: "Was passiert, wenn mein Fahrzeug nicht qualifiziert ist?",
              answer: "Falls Ihr Fahrzeug keine grüne Plakette erhalten kann, erstatten wir den vollen Betrag zurück."
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
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Bereit für die Online-Bestellung?</h2>
        <p className="text-muted-foreground mb-6">
          Sparen Sie Zeit und bestellen Sie Ihre grüne Umweltplakette 
          bequem von zu Hause aus.
        </p>
        <Button size="lg" asChild>
          <Link href="/bestellen">Jetzt online bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
}