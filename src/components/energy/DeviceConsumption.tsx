import React from 'react';
import type { ConsumptionCategory } from './types';
import { CategoryHeader } from './CategoryHeader';
import { DeviceIcon } from './DeviceIcon';

interface DeviceConsumptionProps {
  categories: ConsumptionCategory[];
}

export function DeviceConsumption({ categories }: DeviceConsumptionProps) {
  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category.name}>
          <CategoryHeader 
            name={category.name} 
            totalConsumption={category.totalConsumption} 
          />
          <div className="space-y-4">
            {category.devices.map(device => (
              <div key={device.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <DeviceIcon 
                    deviceName={device.name} 
                    className={device.type === 'plug' ? 'text-blue-400' : 'text-yellow-400'}
                  />
                  <div>
                    <div>{device.name}</div>
                    {device.devices > 1 && (
                      <div className="text-xs text-gray-500">
                        {device.devices} DEVICES
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-gray-400">{device.consumption} kWh</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}