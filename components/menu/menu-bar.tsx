import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const MenuBar = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-10">
        <Button variant="ghost" className="p-2">
          <Link
            href="#features"
            onClick={(e) => handleSmoothScroll(e, 'features')}
            className="hover:text-primary transition-colors duration-200 "
          >
            Features
          </Link>
        </Button>

        <Button variant="ghost">
          <Link
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="hover:text-primary transition-colors duration-200"
          >
            Pricing
          </Link>
        </Button>

        <Button variant="ghost">
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
