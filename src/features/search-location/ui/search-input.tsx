"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChange,
  onSearch,
  placeholder = "지역을 검색하세요",
}: SearchInputProps) {
  return (
    <div className="w-full">
      <label htmlFor="search-location" className="sr-only">
        지역 검색
      </label>

      <div className="flex items-center gap-2">
        <input
          id="search-location"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
          placeholder={placeholder}
          className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
        />

        <button
          type="button"
          onClick={onSearch}
          className="shrink-0 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          검색
        </button>
      </div>
    </div>
  );
}