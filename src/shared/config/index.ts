export const OWM_API_KEY = process.env.NEXT_PUBLIC_OWM_API_KEY!;
export const OWM_BASE_URL = 'https://api.openweathermap.org';

export const FAVORITES_STORAGE_KEY = 'weather_favorites';
export const MAX_FAVORITES = 6;

export const DEFAULT_UNITS = 'metric' as const;
export const DEFAULT_LANG = 'kr' as const;
