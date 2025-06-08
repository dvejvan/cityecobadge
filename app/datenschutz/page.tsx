"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();

  const privacyContent = {
    de: {
      title: "Datenschutzerklärung",
      intro: "Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes auf.",
      sections: [
        {
          title: "1. Verantwortlicher",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin, Deutschland\nEmail: info@umweltbadge.de\nTel: +49 30 123456789"
        },
        {
          title: "2. Erhebung und Speicherung personenbezogener Daten",
          content: "Wir erheben und speichern nur die für die Bestellung Ihrer Umweltplakette notwendigen Daten wie Name, Adresse und Fahrzeugdaten."
        },
        {
          title: "3. Ihre Rechte",
          content: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten."
        }
      ]
    },
    cs: {
      title: "Zásady ochrany osobních údajů",
      intro: "Tyto zásady ochrany osobních údajů vás informují o druhu, rozsahu a účelu zpracování osobních údajů v rámci naší online služby.",
      sections: [
        {
          title: "1. Správce údajů",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin, Německo\nEmail: info@umweltbadge.de\nTel: +49 30 123456789"
        },
        {
          title: "2. Shromažďování a ukládání osobních údajů",
          content: "Shromažďujeme a ukládáme pouze údaje nezbytné pro objednání vaší ekologické známky, jako je jméno, adresa a údaje o vozidle."
        },
        {
          title: "3. Vaše práva",
          content: "Máte právo na přístup, opravu, vymazání a omezení zpracování vašich osobních údajů."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      intro: "This privacy policy informs you about the type, scope and purpose of processing personal data within our online service.",
      sections: [
        {
          title: "1. Data Controller",
          content: "UmweltBadge GmbH\nUmweltstraße 123\n10115 Berlin, Germany\nEmail: info@umweltbadge.de\nTel: +49 30 123456789"
        },
        {
          title: "2. Collection and Storage of Personal Data",
          content: "We collect and store only the data necessary for ordering your environmental badge, such as name, address and vehicle data."
        },
        {
          title: "3. Your Rights",
          content: "You have the right to access, rectification, deletion and restriction of processing of your personal data."
        }
      ]
    }
  };

  const content = privacyContent[language as keyof typeof privacyContent];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-green-800 mb-8">{content.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {content.intro}
            </p>
            
            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
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