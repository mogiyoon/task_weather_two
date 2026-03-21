import type { HourlyForecastItem } from "../model/types";
import { formatHour } from "../lib/format-hour";
import { formatTemperature } from "../lib/format-temperature";

interface WeatherHourlyForecastProps {
  items: HourlyForecastItem[];
  timezone?: number;
}

export function WeatherHourlyForecast({
  items,
  timezone = 0,
}: WeatherHourlyForecastProps) {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-400">
        시간대별 예보가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {items.map((item) => (
        <div
          key={item.dt}
          className="min-w-[72px] rounded-2xl bg-zinc-50 px-3 py-4 text-center"
        >
          <div className="text-xs text-zinc-500">
            {formatHour(item.dt, timezone)}
          </div>
          <div className="mt-2 text-base font-medium text-zinc-900">
            {formatTemperature(item.temp)}
          </div>
        </div>
      ))}
    </div>
  );
}