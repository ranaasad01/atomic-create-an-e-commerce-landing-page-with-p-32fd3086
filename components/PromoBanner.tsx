"use client";

import { useState } from "react";
import { X } from 'lucide-react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-orange-500 text-white text-sm font-medium py-2.5 px-4 flex items-center justify-center gap-3 relative">
      <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-white/80 shrink-0" />
      <p className="text-center">
        🎉 <strong>Summer Sale — Up to 40% off!</strong> Free shipping on orders over $75.{" "}
        <span className="underline underline-offset-2 cursor-pointer hover:text-orange-100 transition-colors">
          Shop now →
        </span>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
