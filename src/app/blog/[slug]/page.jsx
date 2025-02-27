import ApplicationLogoBlack from "@/design-system/components/ApplicationLogoBlack";
import SearchBar from "@/design-system/molecules/SearchBar";
import { ContactUs } from "@/design-system/organisms/ContactUs";
import { FooterFindUs } from "@/design-system/organisms/FooterFindUs";
import { FooterProducts } from "@/design-system/organisms/FooterProducts";
import { FooterService } from "@/design-system/organisms/FooterService";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Link from "next/link";

export default function BlogPost({ params }) {
  const { slug } = params;

  const header = (
    <>
      <div className="flex justify-between items-center py-5 bg-gradient-to-t from-primary to-[#FFFAEA]">
        <Link className="px-4" href="/">
          <ApplicationLogoBlack className="cursor-pointer w-24" />
        </Link>
        <div className="flex flex-col space-y-3 items-end">
          <SearchBar />
          <div className="px-4">
            <div className="flex items-center space-x-8">
              <Link href="">Terbaru</Link>
              <Link href="">HTML</Link>
              <Link href="">Database</Link>
              <Link href="">Java</Link>
              <Link href="">Photoshop</Link>
              <Link href="">Python</Link>
              <Link href="">UI/UX</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const content = <></>;

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
