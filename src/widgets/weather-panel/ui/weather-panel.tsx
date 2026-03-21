"use client";

import { SearchInput } from "@/src/features/search-location";
import { WeatherWidget } from "../../weather/ui/weather-widget";
import { useState } from "react";
import { SearchLocation } from "@/src/features/search-location/ui/search-location";
import { SearchLocationItem } from "@/src/features/search-location/ui/search-result-item";

export function WeatherPanel() {
  const [location, setLocation] = useState<SearchLocationItem>();

  return (
    <div>
      <SearchLocation onSelect={(val) => setLocation(val)} />
      <div className="flex justify-center items-center h-full">
        <WeatherWidget />
      </div>
    </div>
  );
}
