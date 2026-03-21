import { all_districts } from "./district-data";
import type { SearchLocationItem } from "../model/types";

export function searchDistricts(query: string): SearchLocationItem[] {
  if (!query.trim()) return [];

  const q = query.trim();

  return all_districts
    .filter(
      (district) =>
        district.display_name.includes(q) ||
        district.sigungu?.includes(q) ||
        district.sido.includes(q) ||
        district.full_name.includes(q),
    )
    .slice(0, 8)
    .map((district) => ({
      id: district.id,
      title: district.display_name,
      subtitle: district.full_name,
    }));
}