export interface District {
  id: string;
  full_name: string;
  sido: string;
  sigungu?: string;
  dong?: string;
  display_name: string;
}

export interface SearchLocationItem {
  id: string;
  title: string;
  subtitle?: string;
}