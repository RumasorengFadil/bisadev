import { Product, ProductListItem } from "@/features/dashboard/product-digital/types";
import { formatIDR } from "@/utils/format-idr.util";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function ProductCard({
  category,
  product,
  rating_avg,
  reviews,
  user,
}: ProductListItem) {
  return (
    <Link
      href={`/product-digital/${product.slug}/detail`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="aspect-video relative bg-neutral-100 overflow-hidden">
        <Image
          src={product.thumbnail_url}
          alt={product.title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          fill
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-emerald-50 text-primary text-xs rounded-full">
            {category.name}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-900">{rating_avg}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{reviews} reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatIDR(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
