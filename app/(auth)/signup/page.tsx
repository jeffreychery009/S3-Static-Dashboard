'use client';

import { GalleryVerticalEnd } from 'lucide-react';

import { SignupForm } from '@/components/auth/signup-form';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-svh lg:grid lg:grid-cols-2">
      <div className="flex flex-col min-h-svh lg:min-h-0 gap-4 p-4 sm:p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            SaaS Lite
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 sm:px-0">
          <div className="w-full max-w-sm sm:max-w-xs md:max-w-[400px]">
            <SignupForm />
          </div>
        </div>
      </div>

      {/* Right side with theme toggle and image */}
      <div className="relative flex flex-col">
        {/* Theme toggle positioned at top right */}

        {/* Image container */}
        <div className="relative hidden md:flex lg:flex items-center justify-center p-8 mt-40 mr-32">
          <Image
            src="/white-iphone-banner.png"
            width={1000}
            height={1000}
            alt="Image"
            className="object-contain dark:brightness-[0.2] dark:grayscale max-w-full max-h-full dark:hidden block"
          />
          <Image
            src="/black-iphone-banner.png"
            width={1000}
            height={1000}
            alt="Image"
            className="object-contain max-w-full max-h-full dark:block hidden"
          />
        </div>
      </div>
    </div>
  );
}
