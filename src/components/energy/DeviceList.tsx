import React from 'react';
import { DeviceIcon } from './DeviceIcon';
import type { Device } from './types';

interface DeviceListProps {
  devices: Device[];
}

export function DeviceList({ devices }: DeviceListProps) {
  return (
    <div className="space-y-4">
      {devices.map(device => (
        <div key={device.name} className="flex items-center justify-between text-sm group hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <DeviceIcon 
                deviceName={device.name} 
                className={`${device.type === 'plug' ? 'text-blue-400' : 'text-yellow-400'} transition-transform group-hover:scale-110`}
              />
            </div>
            <div>
              <div className="text-white">{device.name}</div>
              <div className="text-xs text-gray-500">
                {device.devices} {device.devices === 1 ? 'DEVICE' : 'DEVICES'}
              </div>
            </div>
          </div>
          <div className="text-gray-400 tabular-nums">{device.consumption} kWh</div>
        </div>
      ))}
    </div>
  );
}