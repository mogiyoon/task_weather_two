"use client";

import { WeatherCard } from "@/src/entities/weather";
import { useWeather } from "@/src/features/weather/model/use-weather";
import { getCurrentPosition } from "@/src/shared/lib/geolocation";
import { useEffect, useState } from "react";

export function WeatherWidget() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [positionError, setPositionError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const pos = await getCurrentPosition();
        setPosition(pos);
      } catch (err) {
        setPositionError(
          err instanceof Error
            ? err.message
            : "현재 위치를 가져오지 못했습니다.",
        );
      }
    };

    void fetchPosition();
  }, []);

  const { data, isPending, isError, error } = useWeather({
    lat: position?.coords.latitude,
    lon: position?.coords.longitude,
  });

  if (isPending) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-zinc-500">
          날씨 정보를 불러오는 중입니다...
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-red-500">
          {error instanceof Error
            ? error.message
            : "날씨 정보를 불러오지 못했습니다."}
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-zinc-500">
          표시할 날씨 정보가 없습니다.
        </div>
      </section>
    );
  }

  return (
    <WeatherCard
      weather={{
        current: data,
        hourly: [],
      }}
    />
  );
}
