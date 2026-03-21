export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure?: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherCoord {
  lat: number;
  lon: number;
}

export interface WeatherSys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherWind {
  speed: number;
  deg?: number;
}

export interface CurrentWeather {
  coord: WeatherCoord;
  weather: WeatherDescription[];
  main: WeatherMain;
  name: string;
  dt: number;
  timezone: number;
  sys: WeatherSys;
  wind: WeatherWind;
}

export interface HourlyForecastItem {
  dt: number;
  temp: number;
  weather: WeatherDescription[];
}

export interface WeatherOverview {
  current: CurrentWeather;
  hourly: HourlyForecastItem[];
}