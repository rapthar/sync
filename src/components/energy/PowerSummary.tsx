import React from 'react';
import { Zap } from 'lucide-react';

interface PowerSummaryProps {
  dailyUsage: number;
  monthlyUsage: number;
}

export function PowerSummary({ dailyUsage, monthlyUsage }: PowerSummaryProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="bg-pink-500/20 rounded-2xl p-4 flex-1">
        <div className="bg-pink-500/20 w-8 h-8 rounded-full flex items-center justify-center mb-2">
          <Zap className="text-white w-4 h-4" />
        </div>
        <div className="text-2xl font-bold">{dailyUsage}kWh</div>
        <div className="text-xs text-gray-400">TODAY</div>
      </div>
      
      <div className="bg-blue-500/20 rounded-2xl p-4 flex-1">
        <div className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center mb-2">
          <Zap className="text-white w-4 h-4" />
        </div>
        <div className="text-2xl font-bold">{monthlyUsage}kWh</div>
        <div className="text-xs text-gray-400">THIS MONTH</div>
      </div>
    </div>
  );
}