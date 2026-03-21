"use client";

import { getWeather } from "@/src/entities/weather/api/get-weather";
import { weatherQueryKeys } from "@/src/entities/weather/model/query-key";
import { useQuery } from "@tanstack/react-query";

export const useWeather = ({ lat, lon }: { lat?: number; lon?: number }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey:
      lat != null && lon != null
        ? weatherQueryKeys.currentByCoords(lat, lon)
        : weatherQueryKeys.all,
    queryFn: async () => {
      if (lat == null || lon == null) {
        throw new Error("위치 정보가 없습니다.");
      }
      return getWeather(lat, lon);
    },
    enabled: lat != null && lon != null,
  });

  return { data, isPending, isError, error };
};
