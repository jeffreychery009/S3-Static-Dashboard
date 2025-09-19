import { AppSidebar } from '@/components/sidebar/appSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-sidebar">
      <SidebarProvider>
        <div className="mt-4"></div>
        <main className="flex w-full flex-row">
          <AppSidebar />

          <div className="sm:my-4 sm:mr-4 flex-1 w-full min-w-0 sm:border-2 sm:border-sidebar-border bg-white dark:bg-[#0A0A0A] rounded-lg">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
