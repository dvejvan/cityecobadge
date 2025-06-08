import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Grüne Umweltplakette",
  description: "Kontaktieren Sie uns für Fragen zur grünen Umweltplakette. Unser Kundenservice steht Ihnen gerne zur Verfügung.",
  keywords: "Kontakt, Umweltplakette, grüne Plakette, Kundenservice, Hilfe, Beratung",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="text-lg text-muted-foreground">
          Haben Sie Fragen zur Umweltplakette oder benötigen Hilfe bei der Bestellung? Unser Team steht Ihnen gerne zur Verfügung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Telefon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">Werktags 9-17 Uhr</p>
            <p className="font-medium">+49 30 123456789</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              E-Mail
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">24/7 erreichbar</p>
            <p className="font-medium">info@umweltbadge.de</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Adresse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">Geschäftsstelle</p>
            <p className="font-medium">Umweltstraße 123</p>
            <p className="font-medium">10115 Berlin</p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Kontaktformular</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Öffnungszeiten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="py-2 px-4 bg-muted rounded-md">
            <p className="font-medium">Montag - Freitag</p>
            <p className="text-muted-foreground">9:00 - 17:00 Uhr</p>
          </div>
          <div className="py-2 px-4 bg-muted rounded-md">
            <p className="font-medium">Samstag & Sonntag</p>
            <p className="text-muted-foreground">Geschlossen</p>
          </div>
        </div>
      </div>
    </div>
  );
}