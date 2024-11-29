import React from 'react';
import { Home, Smartphone, Palette, BarChart3, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Smartphone, label: 'Devices' },
  { icon: Palette, label: 'Scenes' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-8 space-y-8">
      <div className="text-2xl font-bold text-white mb-12">sync</div>
      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          title={label}
        >
          <Icon size={24} />
        </button>
      ))}
    </nav>
  );
}