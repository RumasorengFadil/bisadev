import { Card } from "@/components/ui/card";
import { CheckCircle, Monitor, ShoppingCart } from "lucide-react";

export default function ProductPreviewSection() {
    return (
        <section className="py-20 dark:bg-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Products</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                        Exciting new products coming soon to revolutionize your business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br p-8 from-[#FFB700]/5 to-transparent">
                        <ShoppingCart className="w-12 h-12 text-[#FFB700] mb-4" />
                        <h3 className="text-2xl font-semibold mb-3">Digital Marketplace</h3>
                        <p className="text-gray-400 mb-4 font-medium">
                            Launch your own multi-vendor marketplace with advanced features for sellers, buyers, and administrators. Built with scalability and security in mind.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Multi-vendor support
                            </li>
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Integrated payment gateway
                            </li>
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Advanced analytics
                            </li>
                        </ul>
                    </Card>

                    <Card className="bg-gradient-to-br p-8 from-[#FFB700]/5 to-transparent h-full">
                        <Monitor className="w-12 h-12 text-[#FFB700] mb-4" />
                        <h3 className="text-2xl font-semibold mb-3">POS System</h3>
                        <p className="text-gray-400 mb-4 font-medium">
                            Modernize your retail operations with an intuitive POS system that handles inventory, sales, and customer management seamlessly.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Real-time inventory tracking
                            </li>
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Customer loyalty programs
                            </li>
                            <li className="flex items-center font-medium">
                                <CheckCircle size={16} className="text-[#FFB700] mr-2" />
                                Cloud-based reporting
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    )
}