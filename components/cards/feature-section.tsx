import { CheckCircle } from 'lucide-react';
import FeaturesCard from './features-card';

const FeatureSection = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6  sm:mt-10 max-w-8xl">
        <FeaturesCard
          icon={
            <CheckCircle className="h-4 w-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
          }
          title="Secure Authentication"
          description="Built-in authentication system with Google & GitHub OAuth, protected routes, and session management."
          features={[
            'Google OAuth Integration',
            'GitHub OAuth Integration',
            'Protected Route Middleware',
            'Session Management',
            'Secure Cookie Handling',
          ]}
          onCtaClick={() => {}}
          ctaText="Explore Auth"
        />
        <FeaturesCard
          icon={
            <CheckCircle className="h-4 w-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
          }
          title="Lightning Fast Performance"
          description="Optimized for speed with Next.js 15, Turbopack, and modern web technologies for blazing fast load times."
          features={[
            'Next.js 15 with Turbopack',
            'Server-Side Rendering',
            'Optimized Images',
            'Code Splitting',
            'Edge Runtime Ready',
          ]}
          onCtaClick={() => {}}
          ctaText="See Performance"
        />
        <FeaturesCard
          icon={
            <CheckCircle className="h-4 w-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
          }
          title="Production Ready"
          description="Complete dashboard, settings pages, CRUD operations, and modern UI components ready for immediate deployment."
          features={[
            'Modern Dashboard Shell',
            'Settings Management',
            'Data Tables with Sorting',
            'Drag & Drop Functionality',
            'Responsive Design',
          ]}
          onCtaClick={() => {}}
          ctaText="View Dashboard"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
