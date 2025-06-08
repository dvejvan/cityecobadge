import { Metadata } from "next";
import PaymentForm from "../../../components/PaymentForm";
import ShippingTimer from "../../../components/ShippingTimer";

export const metadata: Metadata = {
  title: "Zahlung | Grüne Umweltplakette",
  description: "Schließen Sie Ihre Bestellung ab und bezahlen Sie Ihre grüne Umweltplakette. Sichere Zahlungsmethoden verfügbar.",
  keywords: "Umweltplakette Zahlung, grüne Plakette bezahlen, sichere Zahlung, Bestellung abschließen",
};

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Zahlung</h1>
        <p className="text-lg text-muted-foreground">
          Wählen Sie Ihre bevorzugte Zahlungsmethode und schließen Sie Ihre Bestellung ab
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-10">
        <ShippingTimer />
      </div>

      <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm border p-6 mb-12">
        <PaymentForm />
      </div>
    </div>
  );
}