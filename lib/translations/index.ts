import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { formTranslations } from './forms';
import { pageTranslations } from './pages';
import { navigationTranslations } from './navigation';

export interface Translations {
  [key: string]: {
    de: string;
    cs: string;
    en: string;
  };
}

// Translation cache for performance
const translationCache = new Map<string, Translations>();

// Lazy loading function for translation modules
function loadTranslationModule(moduleName: string): Translations {
  if (translationCache.has(moduleName)) {
    return translationCache.get(moduleName)!;
  }

  let moduleTranslations: Translations = {};

  switch (moduleName) {
    case 'common':
      moduleTranslations = commonTranslations;
      break;
    case 'home':
      moduleTranslations = homeTranslations;
      break;
    case 'forms':
      moduleTranslations = formTranslations;
      break;
    case 'pages':
      moduleTranslations = pageTranslations;
      break;
    case 'navigation':
      moduleTranslations = navigationTranslations;
      break;
    default:
      console.warn(`Unknown translation module: ${moduleName}`);
      return {};
  }

  translationCache.set(moduleName, moduleTranslations);
  return moduleTranslations;
}

// Combined translations with lazy loading
export const translations: Translations = new Proxy({}, {
  get(target, prop: string) {
    // Check all modules for the translation key
    const modules = ['common', 'home', 'forms', 'pages', 'navigation'];
    
    for (const moduleName of modules) {
      const moduleTranslations = loadTranslationModule(moduleName);
      if (moduleTranslations[prop]) {
        return moduleTranslations[prop];
      }
    }
    
    console.warn(`Translation key not found: ${prop}`);
    return {
      de: prop,
      cs: prop,
      en: prop
    };
  }
});

export function getTranslation(key: string, language: string): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  return translation[language as keyof typeof translation] || translation.de || key;
}

// Export individual modules for direct access if needed
export { 
  commonTranslations, 
  homeTranslations, 
  formTranslations, 
  pageTranslations, 
  navigationTranslations 
};