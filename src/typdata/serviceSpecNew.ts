export interface ServiceSpec {
    name: string;
    description: string;
    basic: boolean | string | number;
    pro: boolean | string | number;
    business: boolean | string | number;
}