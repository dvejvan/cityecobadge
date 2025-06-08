"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function TermsAndConditions() {
  const { t, language } = useLanguage();

  const termsContent = {
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      sections: [
        {
          title: "§ 1 Geltungsbereich",
          content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen UmweltBadge GmbH und dem Kunden über die Lieferung von Umweltplaketten."
        },
        {
          title: "§ 2 Vertragsschluss",
          content: "Der Vertrag kommt durch die Bestellung des Kunden und unsere Auftragsbestätigung zustande. Die Bestellung erfolgt über unser Online-Formular."
        },
        {
          title: "§ 3 Preise und Zahlungsbedingungen",
          content: "Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt per Kreditkarte, PayPal oder Überweisung."
        },
        {
          title: "§ 4 Lieferung",
          content: "Die Lieferung erfolgt innerhalb von 2-3 Werktagen nach Zahlungseingang per Post an die angegebene Adresse."
        },
        {
          title: "§ 5 Widerrufsrecht",
          content: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen."
        },
        {
          title: "§ 6 Gewährleistung",
          content: "Für die gelieferten Umweltplaketten gelten die gesetzlichen Gewährleistungsbestimmungen."
        }
      ]
    },
    cs: {
      title: "Všeobecné obchodní podmínky",
      sections: [
        {
          title: "§ 1 Rozsah platnosti",
          content: "Tyto všeobecné obchodní podmínky platí pro všechny smlouvy mezi UmweltBadge GmbH a zákazníkem ohledně dodání ekologických známek."
        },
        {
          title: "§ 2 Uzavření smlouvy",
          content: "Smlouva se uzavírá objednávkou zákazníka a naším potvrzením objednávky. Objednávka se provádí prostřednictvím našeho online formuláře."
        },
        {
          title: "§ 3 Ceny a platební podmínky",
          content: "Všechny ceny jsou uvedeny včetně zákonné DPH. Platba se provádí kreditní kartou, PayPal nebo bankovním převodem."
        },
        {
          title: "§ 4 Dodání",
          content: "Dodání se provádí do 2-3 pracovních dnů po přijetí platby poštou na uvedenou adresu."
        },
        {
          title: "§ 5 Právo na odstoupení",
          content: "Máte právo odstoupit od této smlouvy do čtrnácti dnů bez uvedení důvodů."
        },
        {
          title: "§ 6 Záruka",
          content: "Pro dodané ekologické známky platí zákonné záruční podmínky."
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      sections: [
        {
          title: "§ 1 Scope of Application",
          content: "These general terms and conditions apply to all contracts between UmweltBadge GmbH and the customer regarding the delivery of environmental badges."
        },
        {
          title: "§ 2 Contract Formation",
          content: "The contract is formed by the customer's order and our order confirmation. Orders are placed through our online form."
        },
        {
          title: "§ 3 Prices and Payment Terms",
          content: "All prices include statutory VAT. Payment is made by credit card, PayPal or bank transfer."
        },
        {
          title: "§ 4 Delivery",
          content: "Delivery takes place within 2-3 working days after receipt of payment by post to the specified address."
        },
        {
          title: "§ 5 Right of Withdrawal",
          content: "You have the right to withdraw from this contract within fourteen days without giving reasons."
        },
        {
          title: "§ 6 Warranty",
          content: "The statutory warranty provisions apply to the delivered environmental badges."
        }
      ]
    }
  };

  const content = termsContent[language as keyof typeof termsContent];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-8">{content.title}</h1>
          
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h2 className="text-xl font-semibold text-purple-700 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}