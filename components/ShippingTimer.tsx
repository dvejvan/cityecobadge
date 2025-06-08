"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function ShippingTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 });
  const [cutoffPassed, setCutoffPassed] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      // Check if it's past 12:00 (noon)
      if (currentHour >= 12) {
        setCutoffPassed(true);
        return;
      }
      
      // Calculate time left until 12:00
      const hoursLeft = 11 - currentHour;
      const minutesLeft = 59 - currentMinute;
      
      setTimeLeft({ hours: hoursLeft, minutes: minutesLeft });
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 rounded-lg bg-primary/10 text-foreground text-center">
      <Clock className="mr-2 h-5 w-5 text-primary" />
      {cutoffPassed ? (
        <p>
          <span className="font-medium">{t("pastCutoffTime")}</span>
        </p>
      ) : (
        <p>
          <span className="font-medium">{timeLeft.hours} {t("hours")} {timeLeft.minutes} {t("minutes")} - </span>
          {t("orderBy12ForSameDay")}
        </p>
      )}
    </div>
  );
}