"use client";

import { weatherApi } from '@/src/entities/weather/api/get-weather';
import { weatherQueryKeys } from "@/src/entities/weather/model/query-key";
import { useQuery } from "@tanstack/react-query";

export const useCoordWeather = ({ lat, lon }: { lat: number | undefined; lon: number | undefined }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey:
      lat != null && lon != null
        ? weatherQueryKeys.currentByCoords(lat, lon)
        : weatherQueryKeys.all,
    queryFn: async () => {
      if (lat == null || lon == null) {
        return null
      }
      return weatherApi.getCoordWeather(lat, lon);
    },
    enabled: lat != null && lon != null,
  });

  return { data, isPending, isError, error };
};
