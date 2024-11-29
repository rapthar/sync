import React from 'react';
import { NavItem } from './NavItem';
import { 
  Command,
  Lightbulb,
  Music2,
  Coffee,
  Sun,
  Thermometer,
  Shield,
  Bell,
  Settings
} from 'lucide-react';

const navItems = [
  { icon: Command, label: 'Dashboard', isActive: true, className: 'bg-pink-500/20 text-white' },
  { icon: Lightbulb, label: 'Lighting' },
  { icon: Music2, label: 'Media' },
  { icon: Coffee, label: 'Kitchen' },
  { icon: Sun, label: 'Environment' },
  { icon: Thermometer, label: 'Temperature' },
  { icon: Shield, label: 'Security' },
  { icon: Bell, label: 'Notifications', className: 'mt-auto' },
  { icon: Settings, label: 'Settings' }
];

interface NavItemsProps {
  isCollapsed: boolean;
}

export function NavItems({ isCollapsed }: NavItemsProps) {
  return (
    <div className="flex-1 flex flex-col items-center space-y-8">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={item.isActive}
          isCollapsed={isCollapsed}
          className={item.className}
        />
      ))}
    </div>
  );
}