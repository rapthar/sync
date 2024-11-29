import React from 'react';
import { Logo } from './Logo';
import { NavItems } from './NavItems';

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-8">
      <Logo />
      <NavItems isCollapsed={true} />
    </nav>
  );
}