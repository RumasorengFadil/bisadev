import { PurchasesType } from "@/enums/product-type.enum";
import { User } from "@/features/auth/types";

export interface Review {
    id: string;
    product_id: string;

    product_type: PurchasesType; // sesuaikan enum backend kamu

    rating: number;
    review: string;

    is_verified_purchase: boolean;
    is_visible: boolean;

    user: User;

    created_at: string; // ISO date
    updated_at: string; // ISO date
}