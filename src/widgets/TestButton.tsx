"use client";

import { getCoordWeather } from '../entities/weather/api/get-weather';
import { getCurrentPosition } from '../shared/lib/geolocation';

export function TestButton() {
  return (
    <button
      onClick={async () => {
        const { coords } = await getCurrentPosition();
        const data = await getCoordWeather(coords.latitude, coords.longitude);
        console.log("data test ", data);
      }}
    >
      테스트
    </button>
  );
}
