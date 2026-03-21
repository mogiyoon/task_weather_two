export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  coord: { lat: number; lon: number };
  weather: WeatherDescription[];
  main: WeatherMain;
  name: string;
  dt: number;
  timezone: number;
  sys: { country: string; sunrise: number; sunset: number };
  wind: { speed: number };
}
