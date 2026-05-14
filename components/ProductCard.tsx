"use client";

import { useState } from "react";
import { Star, ShoppingCart, Eye, Check } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const badgeConfig: Record<string, { label: string; className: string }> = {
  sale: { label: "SALE", className: "bg-red-500 text-white" },
  new: { label: "NEW", className: "bg-emerald-500 text-white" },
  hot: { label: "HOT", className: "bg-orange-500 text-white" },
  limited: { label: "LIMITED", className: "bg-purple-600 text-white" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const overlayClass = hovered
    ? "absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 transition-opacity duration-300"
    : "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300";

  const btnClass = added
    ? "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-emerald-500 text-white"
    : "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-gray-900 hover:bg-orange-500 text-white";

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {product.badge && (
          <span className={"absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full tracking-wider " + badgeConfig[product.badge].className}>
            {badgeConfig[product.badge].label}
          </span>
        )}

        {discount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        <div className={overlayClass}>
          <button className="flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200 shadow-lg">
            <Eye size={14} />
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-medium text-orange-500 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button onClick={handleAddToCart} className={btnClass}>
          {added ? (
            <>
              <Check size={16} />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
