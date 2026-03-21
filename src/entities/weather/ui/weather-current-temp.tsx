import type { CurrentWeather } from "../model/types";
import { formatTemperature } from "../lib/format-temperature";

interface WeatherCurrentTempProps {
  weather: CurrentWeather;
}

export function WeatherCurrentTemp({ weather }: WeatherCurrentTempProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="text-5xl font-semibold text-zinc-900">
        {formatTemperature(weather.main.temp)}
      </div>
      <div className="text-sm capitalize text-zinc-500">
        {weather.weather[0]?.description ?? "-"}
      </div>
    </div>
  );
}