import React from 'react';
import { MonitorSmartphone, Lightbulb, Plug } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ComponentType<any>> = {
  'Appliances': Plug,
  'Lighting': Lightbulb,
  'Electronics': MonitorSmartphone,
};

interface CategoryHeaderProps {
  name: string;
  totalConsumption: number;
}

export function CategoryHeader({ name, totalConsumption }: CategoryHeaderProps) {
  const Icon = CATEGORY_ICONS[name];
  
  return (
    <div className="flex items-center justify-between text-sm font-medium text-gray-300 border-b border-gray-800 pb-2 mb-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-gray-400" />}
        <span>{name}</span>
      </div>
      <span>{totalConsumption} kWh</span>
    </div>
  );
}