"use client";

import { WeatherWidget } from "../../weather/ui/weather-widget";
import { useEffect, useState } from "react";
import { SearchLocation } from "@/src/features/search-location/ui/search-location";
import { SearchLocationItem } from '@/src/entities/location';

export function WeatherPanel() {
  const [location, setLocation] = useState<SearchLocationItem>();

  return (
    <div>
      <SearchLocation onSelect={(val) => setLocation(val)} />
      <div className="flex justify-center items-center h-full">
        <WeatherWidget location={location}/>
      </div>
    </div>
  );
}
