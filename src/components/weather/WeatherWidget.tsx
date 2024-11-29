import React from 'react';
import { WeatherHeader } from './WeatherHeader';
import { WeatherMetrics } from './WeatherMetrics';
import type { WeatherData } from '../../types';

interface WeatherWidgetProps {
  data: WeatherData;
}

export function WeatherWidget({ data }: WeatherWidgetProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 text-white">
      <WeatherHeader 
        temperature={data.temperature}
        time="Sunday Morning"
      />
      
      <div className="h-px bg-gray-800 my-6" />
      
      <WeatherMetrics
        windSpeed={data.windSpeed}
        windSpeedChange={data.windSpeedChange}
        pressure={data.pressure}
        pressureChange={data.pressureChange}
        rainChance={data.rainChance}
      />
      
      <button className="mt-6 text-sm text-gray-400 hover:text-white transition-colors">
        See all
      </button>
    </div>
  );
}