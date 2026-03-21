export const formatHour = (unixTime: number, timezone: number = 0): string => {
  const date = new Date((unixTime + timezone) * 1000);
  const hours = date.getUTCHours();
  return `${String(hours).padStart(2, "0")}:00`;
};