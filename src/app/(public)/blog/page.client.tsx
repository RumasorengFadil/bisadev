import BlogSection from "@/features/public/blog/components/BlogSection";
import HeroSection from "@/features/public/blog/components/HeroSection";
import SearchFilterSection from "@/features/public/blog/components/SearchFilterSection";

export default function PageClient() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Search & Filter */}
      <SearchFilterSection />

      <BlogSection />
    </div>
  );
}
