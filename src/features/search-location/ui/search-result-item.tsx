"use client";

export interface SearchLocationItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface SearchResultItemProps {
  item: SearchLocationItem;
  onSelect: (item: SearchLocationItem) => void;
}

export function SearchResultItem({
  item,
  onSelect,
}: SearchResultItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left transition hover:border-zinc-300 hover:bg-zinc-50"
      >
        <div className='flex justify-between gap-40'>
          <div className="text-sm font-medium text-zinc-900">{item.title}</div>
          {item.subtitle ? (
            <div className="mt-1 text-xs text-zinc-500">{item.subtitle}</div>
          ) : null}
        </div>
      </button>
    </li>
  );
}