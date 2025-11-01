import { PricingPlan } from "./pricingPlan";
import { ServiceSpec } from "./ServiceSpec";

export interface Service {
    id:string,
    heading: ServiceHeading,
    serviceSpecs: ServiceSpec[],
    pricingPlans: PricingPlan[] 
}