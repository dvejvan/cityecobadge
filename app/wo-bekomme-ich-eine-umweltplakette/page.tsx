import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowRight, MapPin, Clock, Euro, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wo bekomme ich eine Umweltplakette? | Alle Möglichkeiten im Überblick",
  description: "Erfahren Sie alle Möglichkeiten, wo Sie eine Umweltplakette erhalten können. Online, beim TÜV, bei der Zulassungsstelle oder in der Werkstatt - wir zeigen alle Optionen.",
  keywords: "wo Umweltplakette bekommen, Umweltplakette kaufen, TÜV Umweltplakette, Zulassungsstelle Umweltplakette",
};

export default function WoBekommeIchUmweltplakettePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Wo bekomme ich eine Umweltplakette?
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Es gibt verschiedene Möglichkeiten, eine Umweltplakette zu erhalten. 
          Wir zeigen Ihnen alle Optionen mit Vor- und Nachteilen im Überblick.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/bestellen">Online bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#optionen">Alle Optionen ansehen</Link>
          </Button>
        </div>
      </div>

      {/* Options Overview */}
      <section id="optionen" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Alle Möglichkeiten im Überblick</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Online Option */}
          <Card className="border-primary/50">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                <CardTitle className="text-green-600">Online bestellen</CardTitle>
              </div>
              <CardDescription>Empfohlen: Schnell, bequem und günstig</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 verfügbar, 5 Minuten Bestellzeit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ab 12,90€ inkl. Versand</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Lieferung nach Hause</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/bestellen">Jetzt online bestellen</Link>
              </Button>
            </CardContent>
          </Card>

          {/* TÜV Option */}
          <Card>
            <CardHeader>
              <CardTitle>TÜV/DEKRA Prüfstellen</CardTitle>
              <CardDescription>Klassischer Weg vor Ort</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Öffnungszeiten beachten, Wartezeiten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Ca. 15-20€</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Fahrt zur Prüfstelle nötig</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Mitbringen:</strong> Fahrzeugschein und Personalausweis
              </div>
            </CardContent>
          </Card>

          {/* Registration Office */}
          <Card>
            <CardHeader>
              <CardTitle>Zulassungsstelle</CardTitle>
              <CardDescription>Bei der örtlichen Behörde</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Termine oft erforderlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Ca. 10-15€</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Nur zu Geschäftszeiten</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Vorteil:</strong> Oft günstiger als TÜV
              </div>
            </CardContent>
          </Card>

          {/* Workshop Option */}
          <Card>
            <CardHeader>
              <CardTitle>KFZ-Werkstätten</CardTitle>
              <CardDescription>Bei autorisierten Werkstätten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Nach Werkstatt-Öffnungszeiten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Ca. 20-30€</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Nicht alle Werkstätten berechtigt</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Tipp:</strong> Vorher anrufen und Berechtigung erfragen
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <div className="bg-secondary rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Direkter Vergleich</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Kriterium</th>
                <th className="text-center p-3 bg-primary/10 rounded-t">Online</th>
                <th className="text-center p-3">TÜV/DEKRA</th>
                <th className="text-center p-3">Zulassungsstelle</th>
                <th className="text-center p-3">Werkstatt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Preis</td>
                <td className="text-center p-3 bg-primary/5">ab 12,90€</td>
                <td className="text-center p-3">15-20€</td>
                <td className="text-center p-3">10-15€</td>
                <td className="text-center p-3">20-30€</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Verfügbarkeit</td>
                <td className="text-center p-3 bg-primary/5">24/7</td>
                <td className="text-center p-3">Geschäftszeiten</td>
                <td className="text-center p-3">Termine nötig</td>
                <td className="text-center p-3">Geschäftszeiten</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Dauer</td>
                <td className="text-center p-3 bg-primary/5">5 Minuten</td>
                <td className="text-center p-3">30-60 Min</td>
                <td className="text-center p-3">30-90 Min</td>
                <td className="text-center p-3">20-40 Min</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Anfahrt nötig</td>
                <td className="text-center p-3 bg-primary/5">Nein</td>
                <td className="text-center p-3">Ja</td>
                <td className="text-center p-3">Ja</td>
                <td className="text-center p-3">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-card border rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Was Sie überall benötigen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Erforderliche Unterlagen:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Fahrzeugschein (Zulassungsbescheinigung Teil I)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Personalausweis oder Reisepass</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Bei Online-Bestellung: Foto/Scan des Fahrzeugscheins</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Wichtige Hinweise:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>Fahrzeugschein muss auf Ihren Namen lauten</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>Bei Leasing: Vollmacht des Leasinggebers nötig</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>Alte Fahrzeugscheine werden nicht akzeptiert</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Location Finder */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Standorte in Ihrer Nähe finden</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>TÜV Süd</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Über 800 Standorte deutschlandweit. Servicestellen in allen größeren Städten.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://www.tuev-sued.de" target="_blank">Standorte finden</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DEKRA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mehr als 600 Niederlassungen. Online-Terminbuchung verfügbar.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://www.dekra.de" target="_blank">Standorte finden</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zulassungsstellen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Örtliche Behörden in jeder Stadt. Termine oft online buchbar.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="https://www.service-bw.de" target="_blank">Termine buchen</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen</h2>
        <div className="space-y-6">
          {[
            {
              question: "Welche Option ist am schnellsten?",
              answer: "Die Online-Bestellung ist definitiv am schnellsten. Sie dauert nur 5 Minuten und Sie müssen nirgendwo hinfahren."
            },
            {
              question: "Wo ist es am günstigsten?",
              answer: "Die Zulassungsstelle ist oft am günstigsten (10-15€), aber Sie müssen Anfahrt und Wartezeit einkalkulieren. Online kostet ab 12,90€ mit Versand."
            },
            {
              question: "Kann ich die Plakette für jemand anderen holen?",
              answer: "Ja, mit einer schriftlichen Vollmacht und Kopie des Personalausweises des Fahrzeughalters ist das möglich."
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
        <h2 className="text-2xl font-bold mb-4">Unser Tipp: Online bestellen</h2>
        <p className="text-muted-foreground mb-6">
          Sparen Sie Zeit und Nerven. Bestellen Sie Ihre Umweltplakette 
          bequem online und lassen Sie sie sich nach Hause liefern.
        </p>
        <Button size="lg" asChild>
          <Link href="/bestellen">Jetzt online bestellen <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
}