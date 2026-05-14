"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Deals", href: "/#deals" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Lumio<span className="text-orange-500">Shop</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-orange-50 transition-colors group"
              aria-label="Shopping cart"
            >
              <ShoppingCart
                size={22}
                className="text-gray-700 group-hover:text-orange-500 transition-colors"
              />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 animate-bounce-once">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
