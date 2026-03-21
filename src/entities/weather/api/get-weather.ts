import { owmClient } from "@/src/shared/api";
import { CurrentWeather } from "../model/types";

export const getWeather = async (
  lat: number,
  lon: number,
): Promise<CurrentWeather> => {
  const { data } = await owmClient.get<CurrentWeather>("/data/2.5/weather", {
    params: { lat, lon },
  });
  return data;
};
