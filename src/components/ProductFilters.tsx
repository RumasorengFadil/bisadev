"use client";

import { SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ProductSearchParams } from "@/features/dashboard/product-digital/types";
import { Button } from "./ui/button";

type Category = {
  id: string;
  name: string;
};

type ProductFiltersProps = {
  filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  };
  categories?: Category[];
  maxPrice?: number;
  setFilter:  <K extends keyof ProductSearchParams>(key: K, value: ProductSearchParams[K]) => void;
  resetFilter: () => void;
};

export default function ProductFilters({
  filters,
  categories,
  maxPrice,
  setFilter,
  resetFilter,
}: ProductFiltersProps) {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <Card className="sticky top-24">
        <CardContent className="p-6">
          
          {/* Header */}
            <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2 items-center">
              <SlidersHorizontal className="w-5 h-5" />
              <h3 className="font-semibold text-gray-900">Filters</h3>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilter}
            >
              Clear All
            </Button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <Label className="mb-3 block">Category</Label>

            <RadioGroup
              value={filters.category ?? "all"}
              onValueChange={(value) =>
                setFilter("category", value)
              }
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All Products</Label>
              </div>

              {categories?.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center space-x-2"
                >
                  <RadioGroupItem
                    value={category.name}
                    id={category.id}
                  />
                  <Label htmlFor={category.id}>
                    {category.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <Label className="mb-3 block">Price Range</Label>

            <div className="space-y-4">
              <Slider
                value={[
                  filters.minPrice ?? 0,
                  filters.maxPrice ?? 0,
                ]}
                onValueChange={(value) => {
                  setFilter("minPrice", value[0]);
                  setFilter("maxPrice", value[1]);
                }}
                max={maxPrice}
                step={10000}
              />

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    filters.minPrice ?? 0
                  )}
                </span>
                <span>
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    filters.maxPrice ?? 0
                  )}
                </span>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </aside>
  );
}