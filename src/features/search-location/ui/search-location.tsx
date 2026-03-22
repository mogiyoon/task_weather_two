"use client";

import { useState } from "react";
import { SearchInput } from "./search-input";
import { SearchResults } from "./search-result";
import { searchDistricts, SearchLocationItem } from "@/src/entities/location";

interface SearchLocationProps {
  onSelect: (item: SearchLocationItem) => void;
}

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
