// components/FeaturedProducts.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
    return (
        <section id="products" className="py-32 min-h-screen px-4 bg-secondary-light">
            <div className="max-w-6xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Produk Unggulan Kami
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Blio */}
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <CardTitle className="text-2xl font-semibold">Blio - Marketplace Portofolio Digital</CardTitle>
                            <p className="text-muted-foreground">
                                Blio helps creators and professionals build attractive, professional, and accessible online portfolios.
                                A selection of templates, custom domains, and full features make Blio the ideal solution for showcasing your work.
                            </p>
                            <Button variant="default">See Details</Button>
                        </CardContent>
                    </Card>

                    {/* BPOS */}
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <CardTitle className="text-2xl font-semibold">BPOS - Integrated Cashiering & Accounting Application</CardTitle>
                            <p className="text-muted-foreground">
                                BPOS is a modern Point of Sale system with automated accounting features.
                                It helps MSMEs manage transactions, stock, and financial reports easily and efficiently.
                            </p>
                            <Button variant="default">See Details</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
