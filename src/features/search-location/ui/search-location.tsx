"use client";

import { useState } from "react";
import { SearchInput } from "./search-input";
import type { SearchLocationItem } from "./search-result-item";
import { SearchResults } from "./search-result";
import { searchDistricts } from "@/src/entities/location";

interface SearchLocationProps {
  onSelect: (item: SearchLocationItem) => void;
}

const MOCK_ITEMS: SearchLocationItem[] = [
  { id: "seoul-gangnam", title: "강남", subtitle: "서울 강남구" },
  { id: "seoul-banpo", title: "반포", subtitle: "서울 서초구 반포동" },
  { id: "busan-haeundae", title: "해운대", subtitle: "부산 해운대구" },
];

export function SearchLocation({ onSelect }: SearchLocationProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchLocationItem[]>([]);

  const handleQuery = (value: string) => {
    setQuery(value);
    const q = value.trim();

    if (!q) {
      setResults([]);
      return;
    }

    const filtered = searchDistricts(q);
    setResults(filtered);
  }

  const handleSearch = () => {
    if (results) {
      onSelect(results[0]);
    }
  };

  const handleSelect = (item: SearchLocationItem) => {
    onSelect(item);
    setQuery("");
    setResults([]);
  };

  return (
    <div className="space-y-3">
      <SearchInput value={query} onChange={handleQuery} onSearch={handleSearch} />

      <div className="relative">
        <div className="absolute">
          {!!query.trim() && (
            <SearchResults items={results} onSelect={handleSelect} />
          )}
        </div>
      </div>
    </div>
  );
}
