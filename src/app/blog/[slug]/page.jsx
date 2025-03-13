import BlogHeader from "@/design-system/organisms/BlogHeader";
import { ContactUs } from "@/design-system/organisms/ContactUs";
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs";
import { FooterProducts } from "@/design-system/organisms/FooterProducts";
import { FooterService } from "@/design-system/organisms/FooterService";
import ApplicationLayout from "@/Layouts/ApplicationLayout";

export default function BlogPost({ params }) {
  const { slug } = params;

  const header = (
    <>
      <BlogHeader />
    </>
  );

  const content = <>
    <div className="flex flex-col px-10 space-y-1">
      <h1 className="text-xl font-semibold">Atomic Design, Jadikan Codinganmu Lebih Terstruktur Dengan Atomic Desain </h1>
      <p>
        <span>Bbyts</span> {" - "}
        <span>22 Februari 2025</span>{", "}
        <span>12:00 WIB</span>
      </p>
      <p>Oleh Ramadhan</p>
    </div>
  </>;

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
