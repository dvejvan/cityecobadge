"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { 
  HelpCircle, 
  ShoppingCart, 
  Truck, 
  Settings, 
  Scale,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FAQPage() {
  const { t } = useLanguage();

  const faqCategories = [
    {
      id: "general",
      icon: HelpCircle,
      title: t("faqGeneralTitle"),
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      questions: [
        {
          question: t("whatIsUmweltplakette"),
          answer: t("whatIsUmweltplaketteAnswer")
        },
        {
          question: t("whichBadgeDoINeed"),
          answer: t("whichBadgeDoINeedAnswer")
        },
        {
          question: t("howLongValid"),
          answer: t("howLongValidAnswer")
        },
        {
          question: t("whereCanIBuy"),
          answer: t("whereCanIBuyAnswer")
        }
      ]
    },
    {
      id: "order",
      icon: ShoppingCart,
      title: t("faqOrderTitle"),
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      questions: [
        {
          question: t("whatDocumentsNeeded"),
          answer: t("whatDocumentsNeededAnswer")
        },
        {
          question: t("howMuchCosts"),
          answer: t("howMuchCostsAnswer")
        },
        {
          question: t("multipleBadgesOrder"),
          answer: t("multipleBadgesOrderAnswer")
        }
      ]
    },
    {
      id: "delivery",
      icon: Truck,
      title: t("faqDeliveryTitle"),
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      questions: [
        {
          question: t("howLongDelivery"),
          answer: t("howLongDeliveryAnswer")
        }
      ]
    },
    {
      id: "technical",
      icon: Settings,
      title: t("faqTechnicalTitle"),
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      questions: [
        {
          question: t("isMyVehicleEligible"),
          answer: t("isMyVehicleEligibleAnswer")
        },
        {
          question: t("canITransferBadge"),
          answer: t("canITransferBadgeAnswer")
        },
        {
          question: t("whatIfDamaged"),
          answer: t("whatIfDamagedAnswer")
        },
        {
          question: t("foreignVehicles"),
          answer: t("foreignVehiclesAnswer")
        }
      ]
    },
    {
      id: "legal",
      icon: Scale,
      title: t("faqLegalTitle"),
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      questions: [
        {
          question: t("whatFineWithoutBadge"),
          answer: t("whatFineWithoutBadgeAnswer")
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("faqPageTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("faqPageSubtitle")}
          </p>
          <div className="mt-6">
            <Badge className="bg-green-600 text-white text-lg px-4 py-2">
              {t("onlyGreenValid")}
            </Badge>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className={category.color}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 text-2xl ${category.iconColor}`}>
                    <IconComponent className="h-6 w-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Action Section */}
        <section className="mt-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8">
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">{t("readyForGreenBadge")}</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {t("readyForGreenBadgeDesc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/bestellen">{t("orderNow")}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/umweltplakette-informationen">{t("learnMore")}</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mt-12">
          <Card className="border-muted">
            <CardContent className="pt-8">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("stillHaveQuestions")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("stillHaveQuestionsDesc")}
                </p>
                <Button variant="outline" asChild>
                  <Link href="/kontakt">{t("questionsContact")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}