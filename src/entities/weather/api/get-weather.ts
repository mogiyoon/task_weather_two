import { owmClient } from "@/src/shared/api";
import { CurrentWeather, ForecastResponse, GeoLocation } from "../model/types";

export const weatherApi = {
  getCoordWeather: async (
    lat: number,
    lon: number,
  ): Promise<CurrentWeather> => {
    const { data } = await owmClient.get<CurrentWeather>("/data/2.5/weather", {
      params: { lat, lon },
    });
    return data;
  },

  getForecast: async (lat: number, lon: number): Promise<ForecastResponse> => {
    const { data } = await owmClient.get<ForecastResponse>(
      "/data/2.5/forecast",
      {
        params: { lat, lon, cnt: 40 },
      },
    );
    return data;
  },

  getLocationWeather: async (query: string): Promise<GeoLocation[]> => {
    const { data } = await owmClient.get<GeoLocation[]>("/geo/1.0/direct", {
      params: { q: `${query},KR`, limit: 5 },
    });
    return data;
  },
};
