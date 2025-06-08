"use client";

import { Check } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export default function StepIndicator({ currentStep, totalSteps, stepTitles }: StepIndicatorProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 font-semibold
                    ${isCompleted 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : isCurrent 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-muted border-muted-foreground/30 text-muted-foreground'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <span className="text-lg font-bold leading-none">{stepNumber}</span>
                  )}
                </div>
                
                {/* Step Title */}
                <div className="mt-3 text-center w-20">
                  <span className={`text-xs font-medium leading-tight block ${
                    isCurrent ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-muted-foreground'
                  }`}>
                    {stepTitles[index]}
                  </span>
                </div>
              </div>
              
              {/* Connector Line */}
              {stepNumber < totalSteps && (
                <div 
                  className={`
                    flex-1 h-0.5 mx-4 transition-all duration-200 self-start mt-6
                    ${stepNumber < currentStep ? 'bg-green-600' : 'bg-muted-foreground/30'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
      
      {/* Current Step Information */}
      <div className="text-center mt-8">
        <div className="text-sm text-muted-foreground font-medium">
          {t("step")} {currentStep} {t("of")} {totalSteps}
        </div>
      </div>
    </div>
  );
}