"use client";

import { useLanguage } from "../lib/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { value: "de", label: "Deutsch", code: "DE" },
    { value: "cs", label: "Čeština", code: "CZ" },
    { value: "en", label: "English", code: "EN" }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-28 h-8 text-xs">
        <SelectValue>
          <span className="flex items-center gap-1">
            {currentLanguage?.code}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="text-xs">
            <span className="flex items-center gap-2">
              <span className="font-medium text-xs">{lang.code}</span>
              {lang.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
