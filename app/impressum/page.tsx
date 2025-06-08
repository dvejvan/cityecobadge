"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function Imprint() {
  const { t, language } = useLanguage();

  const imprintContent = {
    de: {
      title: "Impressum",
      sections: [
        {
          title: "Angaben gemäß § 5 TMG",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin\nDeutschland"
        },
        {
          title: "Kontakt",
          content: "Telefon: +49 30 123456789\nE-Mail: info@umweltbadge.de"
        },
        {
          title: "Registereintrag",
          content: "Eintragung im Handelsregister\nRegistergericht: Amtsgericht Berlin-Charlottenburg\nRegisternummer: HRB 123456"
        },
        {
          title: "Umsatzsteuer-ID",
          content: "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:\nDE123456789"
        },
        {
          title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
          content: "Max Mustermann\nUmweltstraße 123\n10115 Berlin"
        }
      ]
    },
    cs: {
      title: "Právní informace",
      sections: [
        {
          title: "Údaje podle § 5 TMG",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin\nNěmecko"
        },
        {
          title: "Kontakt",
          content: "Telefon: +49 30 123456789\nE-Mail: info@umweltbadge.de"
        },
        {
          title: "Zápis v rejstříku",
          content: "Zápis v obchodním rejstříku\nRejstříkový soud: Amtsgericht Berlin-Charlottenburg\nČíslo rejstříku: HRB 123456"
        },
        {
          title: "DIČ",
          content: "Daňové identifikační číslo podle §27 a zákona o DPH:\nDE123456789"
        },
        {
          title: "Odpovědný za obsah podle § 55 odst. 2 RStV",
          content: "Max Mustermann\nUmweltstraße 123\n10115 Berlin"
        }
      ]
    },
    en: {
      title: "Legal Notice",
      sections: [
        {
          title: "Information according to § 5 TMG",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin\nGermany"
        },
        {
          title: "Contact",
          content: "Phone: +49 30 123456789\nE-Mail: info@umweltbadge.de"
        },
        {
          title: "Register Entry",
          content: "Entry in the commercial register\nRegister court: Amtsgericht Berlin-Charlottenburg\nRegister number: HRB 123456"
        },
        {
          title: "VAT ID",
          content: "VAT identification number according to §27 a VAT law:\nDE123456789"
        },
        {
          title: "Responsible for content according to § 55 para. 2 RStV",
          content: "Max Mustermann\nUmweltstraße 123\n10115 Berlin"
        }
      ]
    }
  };

  const content = imprintContent[language as keyof typeof imprintContent];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">{content.title}</h1>
          
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
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