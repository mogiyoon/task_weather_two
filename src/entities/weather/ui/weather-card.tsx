import type { WeatherOverview } from "../model/types";
import { WeatherLocation } from "./weather-location";
import { WeatherCurrentTemp } from "./weather-current-temp";
import { WeatherMinMaxTemp } from "./weather-min-max-temp";
import { WeatherHourlyForecast } from "./weather-hourly-forecast";

interface WeatherCardProps {
  weather: WeatherOverview;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <WeatherLocation weather={weather.current} />
        <WeatherCurrentTemp weather={weather.current} />
        <WeatherMinMaxTemp weather={weather.current} />

        <div className="pt-2">
          <h3 className="mb-3 text-sm font-medium text-zinc-700">시간대별 기온</h3>
          <WeatherHourlyForecast
            items={weather.hourly}
            timezone={weather.current.timezone}
          />
        </div>
      </div>
    </section>
  );
}