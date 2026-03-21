import { TestButton } from "@/src/widgets/TestButton";
import { WeatherPanel } from '@/src/widgets/weather-panel/ui/weather-panel';
import { WeatherWidget } from '@/src/widgets/weather/ui/weather-widget';

export function HomePage() {
  return (
    <div className='h-screen'>
      <WeatherPanel />
    </div>
  );
}
