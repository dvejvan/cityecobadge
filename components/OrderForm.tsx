"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// Create dynamic form schema based on current language
const createFormSchema = (t: (key: string) => string) => z.object({
  licensePlate: z.string().min(1, { message: t("licensePlate") + " " + t("isRequired") }),
  brand: z.string().min(1, { message: t("brand") + " " + t("isRequired") }),
  model: z.string().min(1, { message: t("model") + " " + t("isRequired") }),
  fuelType: z.string().min(1, { message: t("fuelType") + " " + t("isRequired") }),
  year: z.string().regex(/^\d{4}$/, { message: t("enterValidYear") }),
  firstName: z.string().min(1, { message: t("firstName") + " " + t("isRequired") }),
  lastName: z.string().min(1, { message: t("lastName") + " " + t("isRequired") }),
  email: z.string().email({ message: t("enterValidEmail") }),
  phone: z.string().min(1, { message: t("phoneNumber") + " " + t("isRequired") }),
  street: z.string().min(1, { message: t("street") + " " + t("isRequired") }),
  houseNumber: z.string().min(1, { message: t("houseNumber") + " " + t("isRequired") }),
  zipCode: z.string().regex(/^\d{5}$/, { message: t("enterValidZipCode") }),
  city: z.string().min(1, { message: t("city") + " " + t("isRequired") }),
});

export default function OrderForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const router = useRouter();
  
  // Create form schema with current language
  const formSchema = createFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      licensePlate: "",
      brand: "",
      model: "",
      fuelType: "",
      year: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      houseNumber: "",
      zipCode: "",
      city: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError("Die Datei ist zu groß. Maximale Größe: 5MB");
      setSelectedFile(null);
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setFileError("Ungültiger Dateityp. Erlaubt sind PDF, JPEG und PNG.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const nextStep = async () => {
    // For step 1, validate vehicle information
    if (step === 1) {
      const result = await form.trigger(["licensePlate", "brand", "model", "fuelType", "year"]);
      if (!result) return;

      if (!selectedFile && !fileError) {
        setFileError(t("pleaseUploadVehicleRegistration"));
        return;
      }

      if (fileError) return;

      setStep(2);
      return;
    }

    // For step 2, validate contact information
    if (step === 2) {
      const result = await form.trigger([
        "firstName", "lastName", "email", "phone", "street", "houseNumber", "zipCode", "city"
      ]);
      if (!result) return;

      onSubmit(form.getValues());
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Order form submitted:", values);
    console.log("Uploaded file:", selectedFile);
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Redirect to checkout page after successful form submission
      toast.success("Bestellung erfolgreich aufgegeben", {
        description: "Sie werden zur Zahlungsseite weitergeleitet.",
      });
      
      // Store order data in session storage for checkout page
      sessionStorage.setItem("orderData", JSON.stringify({
        ...values,
        fileUploaded: !!selectedFile,
        fileName: selectedFile?.name || ""  
      }));
      
      router.push("/bestellen/zahlung");
    }, 1500);
  }

  return (
    <Form {...form}>
      <form className="space-y-6">
        {step === 1 && (
          <>
            <h3 className="text-lg font-medium mb-4">{t("vehicleInformation")}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="licensePlate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("licensePlate")} *</FormLabel>
                    <FormControl>
                      <Input placeholder="M-AB 1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("brand")} *</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Volkswagen" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("model")} *</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Golf" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("fuelType")} *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t("selectFuelType")} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="benzin">{t("petrol")}</SelectItem>
                        <SelectItem value="diesel">{t("diesel")}</SelectItem>
                        <SelectItem value="hybrid">{t("hybrid")}</SelectItem>
                        <SelectItem value="elektro">{t("electric")}</SelectItem>
                        <SelectItem value="gas">Autogas (LPG/CNG)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("yearOfManufacture")} *</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 2018" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <FormLabel htmlFor="vehicleDocument">{t("uploadVehicleRegistration")} *</FormLabel>
                <Input 
                  id="vehicleDocument"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1"
                />
                {fileError && <p className="text-sm font-medium text-destructive mt-2">{fileError}</p>}
                {selectedFile && !fileError && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("fileSelected")}: {selectedFile.name}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  {t("uploadDesc")}
                </p>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-lg font-medium mb-4">{t("personalDetails")}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("firstName")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("firstName")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("lastName")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("lastName")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("email")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("phoneNumber")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("phoneNumber")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>{t("street")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("street")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="houseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("houseNumber")} *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nr." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("zipCode")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("zipCode")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>{t("city")} *</FormLabel>
                    <FormControl>
                      <Input placeholder={t("city")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}

        <div className="flex justify-between pt-4">
          {step === 2 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              {t("back")}
            </Button>
          )}
          {step === 1 && (
            <Button type="button" onClick={nextStep} className="ml-auto">
              {t("continue")}
            </Button>
          )}
          {step === 2 && (
            <Button type="button" onClick={nextStep} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("processing")}
                </>
              ) : (
                t("submitOrder")
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}