"use client";

import { Categoria, FILTER_CATEGORIES } from "@/lib/data";

interface FilterChipsProps {
  selected: Categoria;
  onChange: (categoria: Categoria) => void;
  counts: Record<Categoria, number>;
}

export default function FilterChips({ selected, onChange, counts }: FilterChipsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
      role="group"
      aria-label="Filtrar oportunidades por categoria"
    >
      {FILTER_CATEGORIES.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            role="radio"
            aria-checked={isActive}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 shrink-0 ${
              isActive
                ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700"
            }`}
          >
            {cat}
            <span
              className={`text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ${
                isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              {counts[cat]}
            </span>
          </button>
        );
      })}
    </div>
  );
}