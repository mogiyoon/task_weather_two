"use client";

import { getWeather } from '../entities/weather/api/get-weather';
import { getCurrentPosition } from '../shared/lib/geolocation';

export function TestButton() {
  return (
    <button
      onClick={async () => {
        const { coords } = await getCurrentPosition();
        const data = await getWeather(coords.latitude, coords.longitude);
        console.log("data test ", data);
      }}
    >
      테스트
    </button>
  );
}
