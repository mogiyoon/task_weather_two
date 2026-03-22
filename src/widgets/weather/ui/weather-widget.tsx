"use client";

import { SearchLocationItem } from "@/src/entities/location";
import { WeatherCard } from "@/src/entities/weather";
import { useCoordWeather } from "@/src/features/weather/model/use-coord-weather";
import { useLocationWeather } from "@/src/features/weather/model/use-location-weather";
import { getCurrentPosition } from "@/src/shared/lib/geolocation";
import { useEffect, useMemo, useState } from "react";

type Coordination = {
  lat: number;
  lon: number;
};

export function WeatherWidget({
  location,
}: {
  location: SearchLocationItem | undefined;
}) {
  const [currentPosition, setCurrentPosition] = useState<Coordination | null>(null);
  const [positionError, setPositionError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const pos = await getCurrentPosition();
        setCurrentPosition({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
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

  const hasSelectedLocation = !!location?.title;

  const locationQuery = useLocationWeather({
    location: location?.title,
  });

  const selectedPosition = useMemo<Coordination | null>(() => {
    if (hasSelectedLocation) {
      if (locationQuery.data && locationQuery.data.length > 0) {
        return {
          lat: locationQuery.data[0].lat,
          lon: locationQuery.data[0].lon,
        };
      }

      return null;
    }

    return currentPosition;
  }, [hasSelectedLocation, locationQuery.data, currentPosition]);

  const coordQuery = useCoordWeather({
    lat: selectedPosition?.lat,
    lon: selectedPosition?.lon,
  });

  console.log("location ", location);
  console.log("coord query data ", coordQuery);

  if (!hasSelectedLocation && positionError) {
    return (
      <section className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-red-500">{positionError}</div>
      </section>
    );
  }

  if (hasSelectedLocation && locationQuery.isPending) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-zinc-500">
          선택한 지역 좌표를 찾는 중입니다...
        </div>
      </section>
    );
  }

  if (hasSelectedLocation && locationQuery.isError) {
    return (
      <section className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-red-500">
          {locationQuery.error instanceof Error
            ? locationQuery.error.message
            : "선택한 지역 정보를 불러오지 못했습니다."}
        </div>
      </section>
    );
  }

  if (!hasSelectedLocation && !currentPosition) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-zinc-500">
          현재 위치를 확인하는 중입니다...
        </div>
      </section>
    );
  }

  if (coordQuery.isPending) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-zinc-500">
          날씨 정보를 불러오는 중입니다...
        </div>
      </section>
    );
  }

  if (coordQuery.isError) {
    return (
      <section className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
        <div className="text-sm text-red-500">
          {coordQuery.error instanceof Error
            ? coordQuery.error.message
            : "날씨 정보를 불러오지 못했습니다."}
        </div>
      </section>
    );
  }

  if (!coordQuery.data) {
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
        current: coordQuery.data,
        hourly: [],
      }}
    />
  );
}