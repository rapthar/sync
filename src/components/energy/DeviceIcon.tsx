import React from 'react';
import { Tv, WashingMachine, Coffee, Lamp, Printer, Wifi } from 'lucide-react';

const DEVICE_ICONS: Record<string, React.ComponentType<any>> = {
  'Smart TV': Tv,
  'Washing Machine': WashingMachine,
  'Coffee Machine': Coffee,
  'Lamps': Lamp,
  'Printer': Printer,
  'Wi-Fi Router': Wifi,
};

interface DeviceIconProps {
  deviceName: string;
  className?: string;
}

export function DeviceIcon({ deviceName, className = '' }: DeviceIconProps) {
  const Icon = DEVICE_ICONS[deviceName];
  
  if (!Icon) {
    return null;
  }
  
  return <Icon className={`w-5 h-5 ${className}`} />;
}