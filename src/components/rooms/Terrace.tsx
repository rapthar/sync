import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 't1',
    name: 'Terrace Lights',
    type: 'light',
    status: 'on',
    room: 'Terrace',
    usedSince: '19:00',
    image: '/images/devices/terrace-lights.jpg',
  },
  {
    id: 't2',
    name: 'Outdoor Speakers',
    type: 'speaker',
    status: 'off',
    room: 'Terrace',
    usedSince: '18:30',
    image: '/images/devices/outdoor-speakers.jpg',
  },
  {
    id: 't3',
    name: 'Heat Lamp',
    type: 'thermostat',
    status: 'on',
    room: 'Terrace',
    usedSince: '19:15',
    image: '/images/devices/heat-lamp.jpg',
  },
];

export function Terrace() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/rooms/terrace.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/rooms/terrace.jpg"
          />
          <img
            src="/images/rooms/terrace.jpg"
            alt="Terrace"
            className="w-full h-full object-cover opacity-90"
          />
        </picture>
        
        <LiveIndicator />
        
        <RoomStats
          temperature={19}
          humidity={50}
          power={180}
          efficiency={95}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {devices.map(device => (
          <DeviceCard 
            key={device.id} 
            device={device}
            onStatusChange={handleDeviceStatusChange}
          />
        ))}
      </div>
    </div>
  );
}