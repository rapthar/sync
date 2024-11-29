import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MetricRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: number;
  unit: string;
  hideChangeUnit?: boolean;
}

export function MetricRow({ 
  icon: Icon, 
  label, 
  value, 
  change,
  unit,
  hideChangeUnit
}: MetricRowProps) {
  const isPositive = change > 0;
  const Arrow = isPositive ? ArrowUp : ArrowDown;
  
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
          <Icon size={14} className="text-gray-400" />
        </div>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>{value}</span>
        <div className="flex items-center gap-1 text-xs">
          <Arrow 
            size={14} 
            className={isPositive ? 'text-green-400' : 'text-red-400'} 
          />
          <span className={isPositive ? 'text-green-400' : 'text-red-400'}>
            {Math.abs(change)}{!hideChangeUnit && unit}
          </span>
        </div>
      </div>
    </div>
  );
}