import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      '1GB storage',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Team collaboration',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom deployment',
      'Unlimited storage',
      'Advanced security',
      'SLA guarantee',
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg text-pretty">
            Choose the perfect plan for your needs. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-sm">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
