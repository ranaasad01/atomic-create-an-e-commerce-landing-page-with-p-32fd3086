export const dynamic = "force-dynamic";
import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />
      <Hero />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
