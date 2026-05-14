import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-orange-300 text-xs font-medium">
              Trusted by 50,000+ happy customers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Discover Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              You&apos;ll Love
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Curated collections of premium electronics, fashion, and accessories — all at
            prices that make sense. New arrivals every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Shop Now
              <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Browse Deals
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "10K+", label: "Products" },
              { value: "50K+", label: "Customers" },
              { value: "4.9 Stars", label: "Avg Rating" },
              { value: "Free", label: "Returns" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
