"use client";

import {
  SearchResultItem,
  type SearchLocationItem,
} from "./search-result-item";

interface SearchResultsProps {
  items: SearchLocationItem[];
  onSelect: (item: SearchLocationItem) => void;
  emptyMessage?: string;
}

export function SearchResults({
  items,
  onSelect,
  emptyMessage = "검색 결과가 없습니다.",
}: SearchResultsProps) {
  if (!items.length) {
    return (
      <div className="rounded-2xl bg-white border border-dashed border-zinc-200 px-4 py-6 text-center text-sm text-zinc-400">
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <SearchResultItem key={item.id} item={item} onSelect={onSelect} />
      ))}
    </ul>
  );
}