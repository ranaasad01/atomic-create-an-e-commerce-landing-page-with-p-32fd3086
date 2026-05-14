"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hand-picked items across every category — quality guaranteed or your money back.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
