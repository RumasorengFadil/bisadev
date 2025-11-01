import { PricingPlan } from "./pricingPlan";
import { ServiceSpec } from "@/typdata/serviceSpecNew";

export interface Service {
    id:string,
    heading: ServiceHeading,
    serviceSpecs: ServiceSpec[],
    pricingPlans: PricingPlan[] 
}