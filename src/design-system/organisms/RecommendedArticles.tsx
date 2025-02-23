import Image from "next/image";
import ArticleHeader from "../molecules/ArticleHeader";

interface Article {
    image: string;
    title: string;
    category: string;
    author: string;
    date: string;
}

interface RecommendedArticles {
    articles?: Article[];
}

const RecommendedArticles: React.FC<RecommendedArticles> = ({ articles }) => {
    return (
        <div className="flex flex-col space-y-8">
            <ArticleHeader label="Rekomendasi Artikel" title="Untuk Kamu" caption="Dapatkan insight terbaik untuk mengembangkan bisnis dan meningkatkan efisiensi dengan solusi teknologi yang tepat. 🚀" />

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 px-10">
                <div className="flex space-y-1 w-full flex-col shadow-md rounded-md">
                    <div className="relative w-full h-[200px] sm:h-[200px]">
                        <Image
                            src="/images/common/atoms.jpg"
                            alt="Contoh Gambar"
                            fill
                            objectFit="cover"
                            priority
                            className="rounded-t-md h-full w-full"
                        />
                    </div>
                    <div className="flex p-1 flex-col space-y-2">
                        <p className="text-secondary font-medium text-xs">Artikel Terbaru</p>
                        <h1 className="font-semibold">Atomic Desain Untuk Menjadikan Codinganmu Lebih</h1>

                        <div className="flex justify-between text-xs">
                            <p>Oleh: <span className="text-secondary">Ramadhan</span></p>
                            <p>12 Maret 2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-1 w-full flex-col shadow-md rounded-md">
                    <div className="relative w-full h-[200px] sm:h-[200px]">
                        <Image
                            src="/images/common/atoms.jpg"
                            alt="Contoh Gambar"
                            fill
                            objectFit="cover"
                            priority
                            className="rounded-t-md h-full w-full"
                        />
                    </div>
                    <div className="flex p-1 flex-col space-y-2">
                        <p className="text-secondary font-medium text-xs">Artikel</p>
                        <h1 className="font-semibold">Atomic Desain Untuk Menjadikan Codinganmu Lebih</h1>

                        <div className="flex justify-between text-xs">
                            <p>Oleh: <span className="text-secondary">Ramadhan</span></p>
                            <p>12 Maret 2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-1 w-full flex-col shadow-md rounded-md">
                    <div className="relative w-full h-[200px] sm:h-[200px]">
                        <Image
                            src="/images/common/atoms.jpg"
                            alt="Contoh Gambar"
                            fill
                            objectFit="cover"
                            priority
                            className="rounded-t-md h-full w-full"
                        />
                    </div>
                    <div className="flex p-1 flex-col space-y-2">
                        <p className="text-secondary font-medium text-xs">Artikel</p>
                        <h1 className="font-semibold">Atomic Desain Untuk Menjadikan Codinganmu Lebih</h1>

                        <div className="flex justify-between text-xs">
                            <p>Oleh: <span className="text-secondary">Ramadhan</span></p>
                            <p>12 Maret 2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-1 w-full flex-col shadow-md rounded-md">
                    <div className="relative w-full h-[200px] sm:h-[200px]">
                        <Image
                            src="/images/common/atoms.jpg"
                            alt="Contoh Gambar"
                            fill
                            objectFit="cover"
                            priority
                            className="rounded-t-md h-full w-full"
                        />
                    </div>
                    <div className="flex p-1 flex-col space-y-2">
                        <p className="text-secondary font-medium text-xs">Artikel</p>
                        <h1 className="font-semibold">Atomic Desain Untuk Menjadikan Codinganmu Lebih</h1>

                        <div className="flex justify-between text-xs">
                            <p>Oleh: <span className="text-secondary">Ramadhan</span></p>
                            <p>12 Maret 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 px-10">
        //   {articles.map((article, index) => (
        //     <div key={index} className="flex space-y-1 w-full flex-col shadow-md rounded-md">
        //       <div className="relative w-full h-[200px] sm:h-[200px]">
        //         <Image
        //           src={article.image}
        //           alt={article.title}
        //           fill
        //           style={{ objectFit: "cover" }}
        //           priority
        //           className="rounded-t-md h-full w-full"
        //         />
        //       </div>
        //       <div className="flex p-1 flex-col space-y-2">
        //         <p className="text-secondary font-medium text-xs">{article.category}</p>
        //         <h1 className="font-semibold">{article.title}</h1>
        //         <div className="flex justify-between text-xs">
        //           <p>
        //             Oleh: <span className="text-secondary">{article.author}</span>
        //           </p>
        //           <p>{article.date}</p>
        //         </div>
        //       </div>
        //     </div>
        //   ))}
        // </div>
    );
};

export default RecommendedArticles;
