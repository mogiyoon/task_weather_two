"use client";

import { weatherApi } from '@/src/entities/weather/api/get-weather';
import { weatherQueryKeys } from "@/src/entities/weather/model/query-key";
import { useQuery } from "@tanstack/react-query";

export const useLocationWeather = ({ location }: { location: string | undefined }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey:
      location
        ? weatherQueryKeys.currentByRegion(location)
        : weatherQueryKeys.all,
    queryFn: async () => {
      if (location == null) {
        return null
      }
      return weatherApi.getLocationWeather(location);
    },
    enabled: location != null,
  });

  return { data, isPending, isError, error };
};
