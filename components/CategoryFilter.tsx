"use client";

import { categories } from "@/lib/data";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            active === cat
              ? "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-orange-500 text-white shadow-md shadow-orange-500/30"
              : "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
