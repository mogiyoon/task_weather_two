import type { CurrentWeather } from "../model/types";

interface WeatherLocationProps {
  weather: CurrentWeather;
}

export function WeatherLocation({ weather }: WeatherLocationProps) {
  return (
    <div className="text-sm text-zinc-500">
      <span className="font-medium text-zinc-800">{weather.name}</span>
      {weather.sys.country ? `, ${weather.sys.country}` : ""}
    </div>
  );
}