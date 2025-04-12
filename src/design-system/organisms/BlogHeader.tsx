"use client"
import Link from "next/link";
import ApplicationLogoBlack from "../components/ApplicationLogoBlack";
import SearchBar from "../molecules/SearchBar";

const BlogHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-5 bg-gradient-to-t from-primary to-[#FFFAEA]">
            {/* Logo */}
            <Link className="px-4" href="/">
                <ApplicationLogoBlack className="cursor-pointer w-24" />
            </Link>

            {/* Search Bar dan Kategori */}
            <div className="flex flex-col space-y-3 items-end">
                <div className="flex items-center">
                    <p className="hidden md:inline-block">Cari artikel disini</p>
                    <SearchBar onChange={() => { }} />
                </div>
                <div className="px-4 hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <Link href="">Terbaru</Link>
                        <Link href="">HTML</Link>
                        <Link href="">Database</Link>
                        <Link href="">Java</Link>
                        <Link href="">Photoshop</Link>
                        <Link href="">Python</Link>
                        <Link href="">UI/UX</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
