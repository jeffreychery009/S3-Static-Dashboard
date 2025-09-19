import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

interface FeaturesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  onCtaClick: () => void;
  ctaText: string;
}

const Features = ({
  icon,
  title,
  description,
  features,
  onCtaClick,
  ctaText,
}: FeaturesCardProps) => {
  return (
    <Card className="h-full shadow-md dark:bg-[#0A0A0A] w-[350px]">
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
        </div>
        <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button onClick={onCtaClick} className="w-full text-sm">
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Features;
