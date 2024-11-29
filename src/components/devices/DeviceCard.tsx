import React from 'react';
import { PowerButton } from './PowerButton';
import type { Device } from '../../types';

interface DeviceCardProps {
  device: Device;
  onStatusChange?: (deviceId: string, status: 'on' | 'off') => void;
}

export function DeviceCard({ device, onStatusChange }: DeviceCardProps) {
  const handleStatusChange = (status: 'on' | 'off') => {
    onStatusChange?.(device.id, status);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-square group">
      <img
        src={device.image}
        alt={device.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-medium">{device.name}</div>
          <PowerButton 
            initialStatus={device.status}
            onChange={handleStatusChange}
          />
        </div>
        
        {device.usedSince && (
          <div className="text-xs text-gray-400 uppercase">
            Used since {device.usedSince}
          </div>
        )}
      </div>
    </div>
  );
}