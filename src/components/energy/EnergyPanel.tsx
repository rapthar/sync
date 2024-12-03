import React from 'react';
import { PowerSummary } from './PowerSummary';
import { DeviceList } from './DeviceList';

const devices = [
  { name: 'Lamps', devices: 10, consumption: 78, type: 'electrical' },
  { name: 'Smart TV', devices: 1, consumption: 180, type: 'plug' },
  { name: 'Coffee Machine', devices: 1, consumption: 110, type: 'electrical' },
  { name: 'Printer', devices: 1, consumption: 40, type: 'plug' },
  { name: 'Washing Machine', devices: 1, consumption: 133, type: 'plug' },
  { name: 'Wi-Fi Router', devices: 2, consumption: 30, type: 'plug' },
];

export function EnergyPanel() {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 md:p-6 text-white h-full lg:h-[calc(100%-2rem)] flex flex-col">
      <div className="flex-shrink-0">
        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Power Consumption</h2>
        <p className="text-sm text-gray-400 mb-6">Summary of energy consumption</p>
        <PowerSummary dailyUsage={48} monthlyUsage={680} />
      </div>
      
      <div className="flex-grow overflow-y-auto pr-2 -mr-2 scrollbar-thin">
        <DeviceList devices={devices} />
      </div>
    </div>
  );
}