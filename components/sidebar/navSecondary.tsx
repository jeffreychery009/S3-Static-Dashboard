import { Settings, Search, HelpCircle } from 'lucide-react';
import React from 'react';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';

const navSecondary = [
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: HelpCircle,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
];

const NavSecondary = ({ className }: { className?: string }) => {
  return (
    <SidebarGroup className={className}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavSecondary;
