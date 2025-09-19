'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import HomeTheme from '@/components/dark-light/home-theme';
import MenuBar from '@/components/menu/menu-bar';
import { PricingSection } from '@/components/pricing/pricing-section';
import FeatureSection from '@/components/cards/feature-section';
import Footer from '@/components/footer';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-row justify-between items-center relative">
          <div className="flex">
            <span className="sm:text-2xl text-xl font-semibold">SaaS Lite</span>
          </div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <MenuBar />
          </div>
          <div className="flex items-center gap-2">
            <HomeTheme />
            {/* Ghost button */}
            <Button variant="ghost">Get Started</Button>
            <Link href="/dashboard">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
        <span className="sm:text-sm text-xs text-muted-foreground">v1.0.0</span>
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="sm:text-6xl text-4xl font-semibold text-center">
            Clean Starter for your SaaS
          </h1>
          <span className="sm:text-lg text-sm max-w-2xl text-center leading-relaxed mt-4 line-height-relaxed">
            Authentification, Protected Routes, a clean Dashboard shell, Settings page, and one
            example CRUD entity. Built for Rapid Client Delivery and easy Customization.
          </span>
          <Image
            src="/dashboard.png"
            alt="SaaS Lite"
            width={1500}
            height={1500}
            className="mt-10 rounded-md sm:rounded-xl shadow-2xl dark:shadow-black/20 border border-border/20 max-w-full h-auto dark:hidden block"
          />
          <Image
            src="/dashboard-dark.png"
            alt="SaaS Lite"
            width={1500}
            height={1500}
            className="mt-10 rounded-md sm:rounded-xl shadow-2xl dark:shadow-black/20 border border-border/20 max-w-full h-auto hidden dark:block"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-48" id="features">
          <h2 className="text-2xl sm:text-4xl font-semibold">Features Overview</h2>
          <span className="text-sm sm:text-lg text-muted-foreground text-center px-4 mt-4">
            Explore the features that make our app stand out
          </span>
        </div>
        {/* Features */}
        <div className="mt-16 sm:mt-12">
          <FeatureSection />
        </div>

        {/* Pricing */}
        <div className="mt-16 sm:mt-40" id="pricing">
          <PricingSection />
        </div>

        {/* Get Started */}
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-40">
          <h2 className="text-2xl sm:text-4xl font-semibold">Ready to get started?</h2>
          <span className="text-sm sm:text-lg text-muted-foreground text-center px-4 mt-2">
            Start your journey with our app today
          </span>
          <Button className="mt-4">Get Started</Button>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
