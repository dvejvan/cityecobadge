"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "de" | "cs" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { getTranslation } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get saved language from localStorage, default to German
  const [language, setLanguageState] = useState<Language>("de");

  // Use effect to load language preference from localStorage on client side
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && ["de", "cs", "en"].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      // Keep default language if localStorage fails
    }
  }, []);

  // Function to set language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem("language", newLanguage);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  // Translation function
  const t = (key: string) => {
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}