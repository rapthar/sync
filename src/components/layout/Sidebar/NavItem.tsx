import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed: boolean;
  className?: string;
}

export function NavItem({ icon: Icon, label, isActive, isCollapsed, className = '' }: NavItemProps) {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors relative group ${
        isActive 
          ? 'text-white' 
          : 'text-gray-500 hover:text-white hover:bg-gray-800/50'
      } ${className}`}
      title={isCollapsed ? label : undefined}
    >
      <Icon size={20} strokeWidth={1.5} />
      {isCollapsed && (
        <div className="absolute left-14 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          {label}
        </div>
      )}
    </button>
  );
}