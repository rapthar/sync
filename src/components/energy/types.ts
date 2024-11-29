export interface Device {
  name: string;
  devices: number;
  consumption: number;
  type: 'plug' | 'electrical';
}