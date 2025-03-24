import ArticleHeader from "@/design-system/organisms/ArticleHeader";
import BlogHeader from "@/design-system/organisms/BlogHeader";
import { ContactUs } from "@/design-system/organisms/ContactUs";
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs";
import { FooterProducts } from "@/design-system/organisms/FooterProducts";
import { FooterService } from "@/design-system/organisms/FooterService";
import NewsletterSubscription from "@/design-system/organisms/NewsletterSubscription";
import RecommendedArticles from "@/design-system/organisms/RecommendedArticles";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Image from "next/image";

export async function generateStaticParams() {
  return [
    { slug: "Atomic-Design" },
  ];
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const header = (
    <>
      <BlogHeader />
    </>
  );

  const content = (
    <>
      <ArticleHeader
        title="Atomic Design, Jadikan Codinganmu Lebih Terstruktur Dengan Atomic Desain"
        author="Ramadhan"
        date="22 Februari 2025"
        time="12:00 WIB"
        source="Bbyts"
      />

      <div className="flex flex-col space-y-4 px-10">
        <div className="relative w-[600px] h-[300px] mx-auto rounded">
          <Image
            unoptimized
            src="/images/common/atoms.jpg"
            alt="Contoh Gambar"
            fill
            objectFit="cover"
            priority
            className="rounded-t-md h-full w-full"
          />
        </div>

        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          alias laboriosam esse, tempore nobis excepturi sint saepe nostrum quos
          tempora dolores corporis iusto in natus magnam incidunt fuga ut hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          maxime eligendi similique cum odio exercitationem, culpa totam nisi
          voluptatem ea asperiores, veritatis quod nulla facilis laudantium
          distinctio? Dignissimos, magnam repellendus? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Distinctio rerum minus modi,
          adipisci quos ea neque architecto eaque magni aperiam minima,
          voluptate natus nam qui! Officiis sequi assumenda aspernatur velit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
          distinctio, ex eum illo quis est adipisci quasi dolorum molestias
          mollitia iste? Labore at quas porro obcaecati dignissimos error
          suscipit.
        </p>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          alias laboriosam esse, tempore nobis excepturi sint saepe nostrum quos
          tempora dolores corporis iusto in natus magnam incidunt fuga ut hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          maxime eligendi similique cum odio exercitationem, culpa totam nisi
          voluptatem ea asperiores, veritatis quod nulla facilis laudantium
          distinctio? Dignissimos, magnam repellendus? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Distinctio rerum minus modi,
          adipisci quos ea neque architecto eaque magni aperiam minima,
          voluptate natus nam qui! Officiis sequi assumenda aspernatur velit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
          distinctio, ex eum illo quis est adipisci quasi dolorum molestias
          mollitia iste? Labore at quas porro obcaecati dignissimos error
          suscipit.
        </p>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          alias laboriosam esse, tempore nobis excepturi sint saepe nostrum quos
          tempora dolores corporis iusto in natus magnam incidunt fuga ut hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          maxime eligendi similique cum odio exercitationem, culpa totam nisi
          voluptatem ea asperiores, veritatis quod nulla facilis laudantium
          distinctio? Dignissimos, magnam repellendus? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Distinctio rerum minus modi,
          adipisci quos ea neque architecto eaque magni aperiam minima,
          voluptate natus nam qui! Officiis sequi assumenda aspernatur velit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam
          distinctio, ex eum illo quis est adipisci quasi dolorum molestias
          mollitia iste? Labore at quas porro obcaecati dignissimos error
          suscipit.
        </p>
      </div>

      <RecommendedArticles />

     <NewsletterSubscription />
    </>
  );

  const footer = (
    <>
      <ContactUs />

      <FooterProducts />

      <FooterService />

      <FooterFindUs />
    </>
  );
  return (
    <ApplicationLayout
      header={header}
      content={content}
      footer={{ content: footer, copyright: "" }}
    />
  );
}
