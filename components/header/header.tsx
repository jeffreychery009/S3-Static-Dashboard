'use client';

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search } from './search';
import { ModeToggle } from '../dark-light/themeToggle';
import { Settings } from './settings';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="p-4 border-b border-sidebar-border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <div className="border-l border-sidebar-border h-4"></div>
          <h4 className=" font-medium">
            {pathname
              .split('/')
              .slice(1)
              .join(' ')
              .charAt(0)
              .toUpperCase()
              .concat(pathname.split('/').slice(1).join(' ').slice(1))}
          </h4>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Header;
