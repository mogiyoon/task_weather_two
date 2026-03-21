import type { CurrentWeather } from "../model/types";
import { formatTemperature } from "../lib/format-temperature";

interface WeatherMinMaxTempProps {
  weather: CurrentWeather;
}

export function WeatherMinMaxTemp({ weather }: WeatherMinMaxTempProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-zinc-600">
      <span>최저 {formatTemperature(weather.main.temp_min)}</span>
      <span className="text-zinc-300">/</span>
      <span>최고 {formatTemperature(weather.main.temp_max)}</span>
    </div>
  );
}