"use client";

import { SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";
import { CourseSearchParams } from "@/features/dashboard/courses/types";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/navigation";

type Category = {
  id: string;
  name: string;
};

type CourseFiltersProps = {
  filters: CourseSearchParams,
  categories?: Category[];
  maxPrice?: number;
  setFilter: <K extends keyof CourseSearchParams>(key: K, value: CourseSearchParams[K] | ((prev: CourseSearchParams[K]) => CourseSearchParams[K])) => void
  resetFilter: () => void
};

export default function CourseFilters({
  filters,
  categories,
  maxPrice,
  setFilter,
  resetFilter
}: CourseFiltersProps) {

  const router = useRouter();

  return (
    <aside className="w-full lg:w-64 shrink-0">
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
          {categories &&
            <div className="mb-6">
              <Label className="text-neutral-900 mb-3">Category</Label>
              <div className="space-y-2">
                {categories?.slice(0, 6).map((category) => (
                  <div key={category.name} className="flex items-center">
                    <Checkbox
                      id={`cat-${category.name}`}
                      checked={filters?.categories?.includes(category.name)}
                      onCheckedChange={(checked) => setFilter("categories", (prev: string[] = []) => {
                        const isChecked = checked === true;

                        if (isChecked) {
                          return [...prev, category.name];
                        }
                        return prev.filter((c) => c !== category.name);
                      })}
                    />
                    <Label
                      htmlFor={`cat-${category.name}`}
                      className="ml-2 text-neutral-700 cursor-pointer"
                    >
                      {category.name}
                      {/* ({category.count}) */}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          }

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

          {/* Rating Filter */}
          {/* <div>
            <h4 className="text-neutral-900 mb-3">Minimum Rating</h4>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5].map((rating) => (
                <div key={rating} className="flex items-center">
                  <Checkbox id={`rating-${rating}`} />
                  <Label
                    htmlFor={`rating-${rating}`}
                    className="ml-2 text-neutral-700 cursor-pointer"
                  >
                    {rating}+ ⭐
                  </Label>
                </div>
              ))}
            </div>
          </div> */}

        </CardContent>
      </Card>
    </aside>
  );
}