import { Metadata } from "next";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { Check, ChevronRight, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Bestellung erfolgreich | Grüne Umweltplakette",
  description: "Ihre Bestellung der grünen Umweltplakette wurde erfolgreich abgeschlossen. Vielen Dank für Ihren Einkauf.",
  keywords: "Bestellung erfolgreich, Umweltplakette bestellt, grüne Plakette gekauft, Bestellbestätigung",
};

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Bestellung erfolgreich!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Vielen Dank für Ihre Bestellung. Wir haben Ihre Zahlung erhalten und werden Ihre grüne Umweltplakette so schnell wie möglich bearbeiten.
        </p>
        
        <div className="bg-card border rounded-lg p-6 mb-8 text-left">
          <h2 className="text-xl font-bold mb-4">Was passiert als Nächstes?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Bestätigungs-E-Mail</h3>
                <p className="text-muted-foreground">
                  Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrer Bestellung.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Bearbeitung</h3>
                <p className="text-muted-foreground">
                  Wir werden Ihre Fahrzeugdaten prüfen und Ihre grüne Umweltplakette vorbereiten.
                  Dieser Vorgang dauert in der Regel 1-2 Werktage.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <ChevronRight className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Versand</h3>
                <p className="text-muted-foreground">
                  Nach erfolgreicher Prüfung wird Ihre Plakette per Post versendet. Sie erhalten eine
                  Versandbestätigung per E-Mail mit Tracking-Informationen.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-muted p-4 rounded-lg mb-8">
          <p className="font-medium mb-2">Ihre Bestellnummer</p>
          <p className="text-xl font-bold mb-0">#UB{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
          
          <Button asChild>
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}