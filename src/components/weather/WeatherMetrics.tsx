import React from 'react';
import { Wind, Droplets } from 'lucide-react';
import { MetricRow } from './MetricRow';

interface WeatherMetricsProps {
  windSpeed: number;
  windSpeedChange: number;
  pressure: number;
  pressureChange: number;
  rainChance: number;
}

export function WeatherMetrics({ 
  windSpeed, 
  windSpeedChange,
  pressure,
  pressureChange,
  rainChance 
}: WeatherMetricsProps) {
  return (
    <div className="space-y-4">
      <MetricRow
        icon={Wind}
        label="WIND SPEED"
        value={`${windSpeed} km/h`}
        change={windSpeedChange}
        unit="km/h"
      />
      
      <MetricRow
        icon={Droplets}
        label="PRESSURE"
        value={`${pressure} hpa`}
        change={pressureChange}
        unit="hpa"
      />
      
      <MetricRow
        icon={Droplets}
        label="RAIN CHANCE"
        value={`${rainChance}%`}
        change={-12}
        unit="%"
        hideChangeUnit
      />
    </div>
  );
}