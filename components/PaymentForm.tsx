"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import { Loader2, CreditCard, CreditCardIcon, Landmark, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface OrderSummary {
  firstName: string;
  lastName: string;
  email: string;
  licensePlate: string;
  brand: string;
  model: string;
}

const formSchema = z.object({
  paymentMethod: z.enum(["creditCard", "paypal", "bankTransfer"]),
  cardNumber: z.string().optional(),
  cardHolder: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

export default function PaymentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState<OrderSummary | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "creditCard",
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    },
  });

  // Get current payment method
  const paymentMethod = form.watch("paymentMethod");

  // Load order data from session storage
  useEffect(() => {
    const storedData = sessionStorage.getItem("orderData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setOrderData(parsedData);
      } catch (e) {
        console.error("Error parsing order data:", e);
        toast.error("Fehler beim Laden der Bestelldaten");
        router.push("/bestellen");
      }
    } else {
      // If no order data exists, redirect back to order form
      toast.error("Keine Bestelldaten gefunden");
      router.push("/bestellen");
    }
  }, [router]);

  // Dynamic form validation based on payment method
  useEffect(() => {
    if (paymentMethod === "creditCard") {
      form.register("cardNumber", { required: "Kartennummer ist erforderlich" });
      form.register("cardHolder", { required: "Karteninhaber ist erforderlich" });
      form.register("expiryDate", { required: "Ablaufdatum ist erforderlich" });
      form.register("cvv", { required: "CVV ist erforderlich" });
    } else {
      form.unregister("cardNumber");
      form.unregister("cardHolder");
      form.unregister("expiryDate");
      form.unregister("cvv");
    }
  }, [paymentMethod, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Payment form submitted:", values);
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Clear session storage
      sessionStorage.removeItem("orderData");
      
      // Redirect to success page
      toast.success("Zahlung erfolgreich", {
        description: "Ihre Bestellung wurde erfolgreich abgeschlossen.",
      });
      
      router.push("/bestellen/erfolg");
    }, 2000);
  }

  if (!orderData) {
    return (
      <div className="text-center py-8">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Bestelldaten werden geladen...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Order summary */}
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Bestellzusammenfassung</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm">Fahrzeug</h4>
              <p className="text-muted-foreground">{orderData.brand} {orderData.model}</p>
              <p className="text-muted-foreground">Kennzeichen: {orderData.licensePlate}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm">Kunde</h4>
              <p className="text-muted-foreground">{orderData.firstName} {orderData.lastName}</p>
              <p className="text-muted-foreground">{orderData.email}</p>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between">
                <span>Preis (inkl. MwSt.)</span>
                <span className="font-medium">14,99 €</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Versand</span>
                <span className="font-medium">2,95 €</span>
              </div>
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Gesamtbetrag</span>
                <span>17,94 €</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment form */}
      <div className="md:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Zu Testzwecken</AlertTitle>
              <AlertDescription>
                Dies ist eine Demo-Anwendung. Es werden keine echten Zahlungen verarbeitet.
              </AlertDescription>
            </Alert>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Zahlungsmethode</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-secondary/50 cursor-pointer transition-colors">
                        <RadioGroupItem value="creditCard" id="creditCard" />
                        <Label htmlFor="creditCard" className="flex items-center cursor-pointer flex-1">
                          <CreditCard className="h-4 w-4 mr-2" /> Kreditkarte
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-secondary/50 cursor-pointer transition-colors">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex items-center cursor-pointer flex-1">
                          <CreditCardIcon className="h-4 w-4 mr-2" /> PayPal
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-secondary/50 cursor-pointer transition-colors">
                        <RadioGroupItem value="bankTransfer" id="bankTransfer" />
                        <Label htmlFor="bankTransfer" className="flex items-center cursor-pointer flex-1">
                          <Landmark className="h-4 w-4 mr-2" /> Banküberweisung
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {paymentMethod === "creditCard" && (
              <div className="space-y-4 border rounded-md p-4">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kartennummer</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cardHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Karteninhaber</FormLabel>
                      <FormControl>
                        <Input placeholder="Max Mustermann" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ablaufdatum</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/JJ" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sicherheitscode</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <Alert className="bg-[#F0F4F9] border-[#0070BA] text-[#0070BA]">
                <AlertDescription>
                  Nach dem Klick auf "Jetzt bezahlen" werden Sie zu PayPal weitergeleitet, um die Zahlung abzuschließen.
                </AlertDescription>
              </Alert>
            )}

            {paymentMethod === "bankTransfer" && (
              <Alert className="bg-secondary">
                <AlertDescription>
                  Nach Abschluss der Bestellung erhalten Sie eine E-Mail mit unseren Bankdaten und Ihrer Bestellnummer.
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Zahlung wird verarbeitet...
                </>
              ) : (
                `Jetzt bezahlen (17,94 €)`
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}