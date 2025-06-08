"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { 
  Loader2, 
  Upload, 
  FileText, 
  Truck,
  Zap,
  Edit,
  CheckCircle
} from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import StepIndicator from "./StepIndicator";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// Create dynamic form schema based on current language
const createFormSchema = (t: (key: string) => string) => z.object({
  // Vehicle data
  licensePlate: z.string().min(1, { message: t("licensePlate") + " " + t("isRequired") }),
  fuelType: z.string().min(1, { message: t("fuelType") + " " + t("isRequired") }),
  year: z.string().regex(/^\d{4}$/, { message: t("enterValidYear") }),
  
  // Orderer data
  firstName: z.string().min(1, { message: t("firstName") + " " + t("isRequired") }),
  lastName: z.string().min(1, { message: t("lastName") + " " + t("isRequired") }),
  email: z.string().email({ message: t("enterValidEmail") }),
  phone: z.string().min(1, { message: t("phoneNumber") + " " + t("isRequired") }),
  ordererStreet: z.string().min(1, { message: t("street") + " " + t("isRequired") }),
  ordererHouseNumber: z.string().min(1, { message: t("houseNumber") + " " + t("isRequired") }),
  ordererZipCode: z.string().regex(/^\d{5}$/, { message: t("enterValidZipCode") }),
  ordererCity: z.string().min(1, { message: t("city") + " " + t("isRequired") }),
  ordererCompany: z.string().optional(),
  
  // Delivery data
  sameAsOrderer: z.boolean().default(true),
  deliveryName: z.string().optional(),
  deliveryCompany: z.string().optional(),
  deliveryStreet: z.string().optional(),
  deliveryHouseNumber: z.string().optional(),
  deliveryZipCode: z.string().optional(),
  deliveryCity: z.string().optional(),
  
  // Shipping options
  shippingType: z.enum(["standard", "express"]).default("standard"),
  
  // Agreement
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "Sie müssen den Bedingungen zustimmen" // Will be replaced by translation
  }),
});

type FormData = z.infer<ReturnType<typeof createFormSchema>>;

export default function EnhancedOrderForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const router = useRouter();
  
  const totalSteps = 6;
  const stepTitles = [
    t("stepVehicleData"),
    t("stepDocuments"), 
    t("stepOrdererData"),
    t("stepDeliveryData"),
    t("stepDeliveryOptions"),
    t("stepSummary")
  ];
  
  // Create form schema with current language
  const formSchema = createFormSchema(t);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      licensePlate: "",
      fuelType: "",
      year: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ordererStreet: "",
      ordererHouseNumber: "",
      ordererZipCode: "",
      ordererCity: "",
      ordererCompany: "",
      sameAsOrderer: true,
      deliveryName: "",
      deliveryCompany: "",
      deliveryStreet: "",
      deliveryHouseNumber: "",
      deliveryZipCode: "",
      deliveryCity: "",
      shippingType: "standard",
      agreeToTerms: false,
    },
  });

  const watchSameAsOrderer = form.watch("sameAsOrderer");
  const watchShippingType = form.watch("shippingType");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError(t("fileTooBig"));
      setSelectedFile(null);
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setFileError(t("invalidFileType"));
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const nextStep = async () => {
    // Validation for each step
    if (step === 1) {
      const result = await form.trigger(["licensePlate", "fuelType", "year"]);
      if (!result) return;
    } else if (step === 2) {
      if (!selectedFile && !fileError) {
        setFileError(t("pleaseUploadVehicleRegistration"));
        return;
      }
      if (fileError) return;
    } else if (step === 3) {
      const result = await form.trigger([
        "firstName", "lastName", "email", "phone", 
        "ordererStreet", "ordererHouseNumber", "ordererZipCode", "ordererCity"
      ]);
      if (!result) return;
    } else if (step === 4) {
      if (!watchSameAsOrderer) {
        const result = await form.trigger([
          "deliveryName", "deliveryStreet", "deliveryHouseNumber", "deliveryZipCode", "deliveryCity"
        ]);
        if (!result) return;
      }
    }

    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const goToStep = (targetStep: number) => {
    if (targetStep < step) {
      setStep(targetStep);
    }
  };

  async function onSubmit(values: FormData) {
    console.log("Enhanced order form submitted:", values);
    console.log("Uploaded file:", selectedFile);
    setIsSubmitting(true);
    
    try {
      // Send order to PrestaShop
      const response = await fetch('/api/prestashop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'createOrder',
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            licensePlate: values.licensePlate,
            fuelType: values.fuelType,
            year: values.year,
            shippingType: values.shippingType,
            // Address data
            address: {
              street: values.ordererStreet,
              houseNumber: values.ordererHouseNumber,
              zipCode: values.ordererZipCode,
              city: values.ordererCity,
              company: values.ordererCompany
            },
            // Delivery address if different
            deliveryAddress: values.sameAsOrderer ? null : {
              name: values.deliveryName,
              company: values.deliveryCompany,
              street: values.deliveryStreet,
              houseNumber: values.deliveryHouseNumber,
              zipCode: values.deliveryZipCode,
              city: values.deliveryCity
            },
            // Order details
            orderDetails: {
              product: 'Zelená ekologická vigneta',
              productReference: 'ECO-BADGE-001',
              price: 12.90,
              shipping: values.shippingType === 'express' ? 5.99 : 0,
              total: values.shippingType === 'express' ? 18.89 : 12.90
            }
          }
        })
      });

      const result = await response.json();
      console.log('PrestaShop API response:', result);

      if (result.success) {
        setIsSubmitting(false);
        
        toast.success(t("orderSuccessfullyPlaced"), {
          description: t("redirectingToPayment"),
        });
        
        // Store order data including PrestaShop IDs for checkout page
        sessionStorage.setItem("orderData", JSON.stringify({
          ...values,
          fileUploaded: !!selectedFile,
          fileName: selectedFile?.name || "",
          prestashopOrderId: result.orderId,
          prestashopCustomerId: result.customerId
        }));
        
        router.push("/bestellen/zahlung");
      } else {
        throw new Error(result.error || 'Failed to create order');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setIsSubmitting(false);
      
      toast.error("Fehler bei der Bestellübertragung", {
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns.",
      });
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{t("vehicleDataTitle")}</CardTitle>
              <CardDescription>{t("vehicleDataSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
              </div>

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
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                {t("documentsTitle")}
              </CardTitle>
              <CardDescription>{t("documentsSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-blue-900">{t("documentsWhatToUpload")}</h4>
                <p className="text-sm text-blue-800 mb-3">{t("documentsExplanation")}</p>
                <div className="text-sm text-blue-700 whitespace-pre-line">
                  {t("documentsWhatToUploadDesc")}
                </div>
              </div>

              <div>
                <FormLabel htmlFor="vehicleDocument" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {t("uploadVehicleRegistration")} *
                </FormLabel>
                <Input 
                  id="vehicleDocument"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2"
                />
                {fileError && <p className="text-sm font-medium text-destructive mt-2">{fileError}</p>}
                {selectedFile && !fileError && (
                  <div className="flex items-center gap-2 mt-2 p-2 bg-green-50 border border-green-200 rounded">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm text-green-700">
                      {t("fileSelected")}: {selectedFile.name}
                    </p>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  {t("documentsAcceptedFormats")}
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{t("ordererDataTitle")}</CardTitle>
              <CardDescription>{t("ordererDataSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                        <Input type="email" placeholder={t("email")} {...field} />
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

              <FormField
                control={form.control}
                name="ordererCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("company")} ({t("optional")})</FormLabel>
                    <FormControl>
                      <Input placeholder={t("company")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="ordererStreet"
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
                  name="ordererHouseNumber"
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
                  name="ordererZipCode"
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
                  name="ordererCity"
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
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{t("deliveryDataTitle")}</CardTitle>
              <CardDescription>{t("deliveryDataSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="sameAsOrderer"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>{t("sameAsOrderer")}</FormLabel>
                      <FormDescription>
                        {t("differentDeliveryAddress")}
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              {!watchSameAsOrderer && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="deliveryName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("deliveryName")} *</FormLabel>
                          <FormControl>
                            <Input placeholder={t("name")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="deliveryCompany"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("deliveryCompany")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("company")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="deliveryStreet"
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
                      name="deliveryHouseNumber"
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
                      name="deliveryZipCode"
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
                      name="deliveryCity"
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
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{t("deliveryOptionsTitle")}</CardTitle>
              <CardDescription>{t("deliveryOptionsSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="shippingType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Card className="flex-1 cursor-pointer" onClick={() => field.onChange("standard")}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <Truck className="h-8 w-8 text-blue-600" />
                                <div className="flex-1">
                                  <h4 className="font-medium">{t("standardShipping")}</h4>
                                  <p className="text-sm text-muted-foreground">{t("standardShippingDesc")}</p>
                                  <p className="text-sm font-medium text-green-600">{t("free")}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Card className="flex-1 cursor-pointer" onClick={() => field.onChange("express")}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <Zap className="h-8 w-8 text-orange-600" />
                                <div className="flex-1">
                                  <h4 className="font-medium">{t("expressShipping")}</h4>
                                  <p className="text-sm text-muted-foreground">{t("expressShippingDesc")}</p>
                                  <p className="text-sm font-medium text-orange-600">+5,99 € {t("additionalCost")}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        );

      case 6:
        const formValues = form.getValues();
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("summaryTitle")}</CardTitle>
                <CardDescription>{t("summarySubtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Vehicle Data Summary */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{t("vehicleData")}</h4>
                    <Button variant="ghost" size="sm" onClick={() => goToStep(1)}>
                      <Edit className="h-4 w-4 mr-1" />
                      {t("editStep")}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{t("licensePlate")}: {formValues.licensePlate}</p>
                    <p>{t("yearOfManufacture")}: {formValues.year}</p>
                    <p>{t("fuelType")}: {formValues.fuelType}</p>
                    {selectedFile && <p>{t("uploadedDocument")}: {selectedFile.name}</p>}
                  </div>
                </div>

                {/* Orderer Data Summary */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{t("ordererData")}</h4>
                    <Button variant="ghost" size="sm" onClick={() => goToStep(3)}>
                      <Edit className="h-4 w-4 mr-1" />
                      {t("editStep")}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{formValues.firstName} {formValues.lastName}</p>
                    <p>{formValues.email}</p>
                    <p>{formValues.phone}</p>
                    {formValues.ordererCompany && <p>{formValues.ordererCompany}</p>}
                    <p>{formValues.ordererStreet} {formValues.ordererHouseNumber}</p>
                    <p>{formValues.ordererZipCode} {formValues.ordererCity}</p>
                  </div>
                </div>

                {/* Delivery Address Summary */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{t("deliveryAddress")}</h4>
                    <Button variant="ghost" size="sm" onClick={() => goToStep(4)}>
                      <Edit className="h-4 w-4 mr-1" />
                      {t("editStep")}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {formValues.sameAsOrderer ? (
                      <p>{t("sameAsOrderer")}</p>
                    ) : (
                      <>
                        <p>{formValues.deliveryName}</p>
                        {formValues.deliveryCompany && <p>{formValues.deliveryCompany}</p>}
                        <p>{formValues.deliveryStreet} {formValues.deliveryHouseNumber}</p>
                        <p>{formValues.deliveryZipCode} {formValues.deliveryCity}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Shipping Summary */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{t("selectedShipping")}</h4>
                    <Button variant="ghost" size="sm" onClick={() => goToStep(5)}>
                      <Edit className="h-4 w-4 mr-1" />
                      {t("editStep")}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      {formValues.shippingType === "express" ? t("expressShipping") : t("standardShipping")}
                      {formValues.shippingType === "express" ? " (+5,99 €)" : ` (${t("free")})`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>{t("orderSummaryTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t("greenBadge")}</span>
                    <span>12,90 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("shipping")}</span>
                    <span>{formValues.shippingType === "express" ? "5,99 €" : t("free")}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>{t("total")}</span>
                    <span>{formValues.shippingType === "express" ? "18,89 €" : "12,90 €"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions Agreement */}
            <Card>
              <CardContent className="pt-6">
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          {t("agreeToTerms")}{" "}
                          <a href="/agb" className="text-primary underline hover:no-underline" target="_blank">
                            {t("termsAndConditionsLink")}
                          </a>{" "}
                          {t("and")}{" "}
                          <a href="/datenschutz" className="text-primary underline hover:no-underline" target="_blank">
                            {t("privacyPolicyLink")}
                          </a>
                          .
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-8">
        <StepIndicator 
          currentStep={step} 
          totalSteps={totalSteps} 
          stepTitles={stepTitles} 
        />
        
        {renderStepContent()}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              {t("back")}
            </Button>
          )}
          
          {step < totalSteps && (
            <Button type="button" onClick={nextStep} className={step === 1 ? "ml-auto" : ""}>
              {t("continue")}
            </Button>
          )}
          
          {step === totalSteps && (
            <Button 
              type="button" 
              onClick={() => {
                // Validate terms agreement before submitting
                if (!form.getValues("agreeToTerms")) {
                  form.setError("agreeToTerms", { 
                    type: "manual", 
                    message: t("agreementRequired") 
                  });
                  return;
                }
                onSubmit(form.getValues());
              }} 
              disabled={isSubmitting} 
              className="ml-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("processing")}
                </>
              ) : (
                t("submitOrderFinal")
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}