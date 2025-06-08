"use client";

import EnhancedOrderForm from "../../components/EnhancedOrderForm";
import ShippingTimer from "../../components/ShippingTimer";
import { Shield } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function OrderPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{t("orderPageTitle")}</h1>
        <p className="text-lg text-muted-foreground">
          {t("orderPageSubtitle")}
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto mb-10">
        <ShippingTimer />
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm border p-6 mb-12">
        <div className="flex items-start space-x-4 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium mb-1">{t("importantFacts")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("importantFactsInfo")}
            </p>
          </div>
        </div>
        
        <EnhancedOrderForm />
      </div>

      {/* Trust and Information Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Security & Trust */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2 text-green-800">{t("securePayment")}</h3>
            <p className="text-sm text-green-700">{t("securePaymentDesc")}</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-blue-800">{t("officialAuthorization")}</h3>
            <p className="text-sm text-blue-700">{t("officialAuthorizationDesc")}</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-orange-800">{t("fastProcessing")}</h3>
            <p className="text-sm text-orange-700">{t("fastProcessingDesc")}</p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">{t("howItWorks")}</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h4 className="font-medium mb-2">{t("step1Title")}</h4>
              <p className="text-sm text-gray-600">{t("step1Desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h4 className="font-medium mb-2">{t("step2Title")}</h4>
              <p className="text-sm text-gray-600">{t("step2Desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h4 className="font-medium mb-2">{t("step3Title")}</h4>
              <p className="text-sm text-gray-600">{t("step3Desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h4 className="font-medium mb-2">{t("step4Title")}</h4>
              <p className="text-sm text-gray-600">{t("step4Desc")}</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-3">{t("needHelp")}</h3>
          <p className="text-gray-600 mb-4">{t("needHelpDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/kontakt" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.95a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t("contactUs")}
            </a>
            <div className="text-sm text-gray-600">
              {t("orCall")}: <span className="font-medium">+49 30 12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}