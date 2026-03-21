export const weatherQueryKeys = {
  all: ["weather"] as const,

  current: () => [...weatherQueryKeys.all, "current"] as const,

  currentByCoords: (lat: number, lon: number) =>
    [...weatherQueryKeys.current(), "coords", lat, lon] as const,

  currentByRegion: (regionName: string) =>
    [...weatherQueryKeys.current(), "region", regionName] as const,
};