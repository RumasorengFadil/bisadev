import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PricingPlan } from "@/typdata/pricingPlan";
import { Check, X, HelpCircle } from "lucide-react";

interface ServiceSpec {
    name: string;
    description: string;
    basic: boolean | string | number;
    pro: boolean | string | number;
    business: boolean | string | number;
}

export function ServiceSection({serviceSpecs, pricingplans}:{serviceSpecs:ServiceSpec[], pricingplans: PricingPlan[]}) {
    return (
        <section className="flex flex-col justify-center min-h-screen py-20 space-y-16 px-6 border-b md:px-16">
            {/* Title & Description*/}
            <div className="flex flex-col gap-4">
                <h2 className="text-center font-bold leading-[120%] text-5xl">Jasa Pembuatan Website Landing Page</h2>
                <p className="text-center max-w-[800px] leading-relaxed mx-auto">Transformasikan bisnis Anda dengan layanan pembuatan website profesional kami. Mulai dari halaman arahan yang menawan hingga profil perusahaan yang komprehensif, kami menciptakan pengalaman digital yang menghasilkan hasil.</p>
            </div>

            {/* Service Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                                <th className="py-6 px-6 text-left text-gray-900">
                                    Spesifikasi Layanan
                                </th>
                                {pricingplans.map((data: PricingPlan,i) =>
                                    <th className="py-6 px-6 text-center text-gray-900" key={i}>
                                        <div className="flex flex-col items-center gap-1" >
                                            <span>{data.package}</span>
                                            <span className="text-secondary">Rp. {data.price}</span>
                                        </div>
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {serviceSpecs.map((spec, index) => (
                                <SpecificationRow key={index} spec={spec} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-t border-gray-200">
                    <div className="hidden md:block"></div>
                    <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-200">
                        Pesan Sekarang
                    </button>
                    <button className="px-6 py-3 bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg">
                        Pesan Sekarang
                    </button>
                    <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-200">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
}


function SpecificationRow({ spec }: { spec: ServiceSpec }) {
    const renderValue = (value: boolean | string | number) => {
        if (typeof value === "boolean") {
            return value ? (
                <Check className="w-5 h-5 text-green-600 mx-auto" />
            ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
            );
        }
        return <span className="text-gray-700">{value}</span>;
    };

    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                    <span className="text-gray-900">{spec.name}</span>
                    <TooltipProvider delayDuration={200}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
                                    <HelpCircle className="w-4 h-4" />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                                <p>{spec.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </td>
            <td className="py-4 px-6 text-center">{renderValue(spec.basic)}</td>
            <td className="py-4 px-6 text-center bg-blue-50/50">
                {renderValue(spec.pro)}
            </td>
            <td className="py-4 px-6 text-center">{renderValue(spec.business)}</td>
        </tr>
    );
}
