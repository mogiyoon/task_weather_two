import rawData from "../../../shared/assets/korea_districts.json";
import type { District } from "../model/types";

function parseDistrict(entry: string): District {
  const parts = entry.split("-");
  const sido = parts[0];
  const sigungu = parts[1];
  const dong = parts[2];
  const display_name = dong ?? sigungu ?? sido;

  return {
    id: entry,
    full_name: entry.replace(/-/g, " "),
    sido,
    sigungu,
    dong,
    display_name,
  };
}

export const all_districts: District[] = (rawData as string[]).map(parseDistrict);