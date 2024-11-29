export interface Device {
  id: string;
  name: string;
  type: 'light' | 'speaker' | 'thermostat' | 'camera' | 'humidifier';
  status: 'on' | 'off';
  room: string;
  usedSince?: string;
  value?: number;
  unit?: string;
  image: string;
}

export interface WeatherData {
  temperature: number;
  windSpeed: number;
  windSpeedChange: number;
  pressure: number;
  pressureChange: number;
  rainChance: number;
}