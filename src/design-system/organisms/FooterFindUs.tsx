import { MdOutlineEmail } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { SectionTitle } from "../components/SectionTitle"
import { IconLink } from "../components/IconLink"
import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { FaTiktok } from "react-icons/fa"


export const FooterFindUs: React.FC = ({ }) => {
    return (
        <section id="find-us" className="w-full space-y-4 text-white">
            <SectionTitle align="left" size="base" weight="semibold" className="text-base text-white" title="Hubungi Kami" />
            <div>
                <div className="flex py-2 items-center space-x-2">
                    <div className="bg-primary w-max p-1 rounded-full">
                        <MdOutlineEmail
                            size={20}
                            className="text-black"
                        />
                    </div>
                    <p>abhiparayamahardika@gmail.com</p>
                </div>
                <div className="flex py-2 items-center space-x-2">
                    <div className="bg-primary w-max p-1 rounded-full">
                        <FiPhone
                            size={20}
                            className="text-black"
                        />
                    </div>
                    <p>+6285178137881</p>
                </div>
            </div>

            <div>
                <SectionTitle align="left" size="base" weight="semibold" className="text-base text-white" title="Follow Us" />
                <div className="flex space-x-4 py-2">
                    <Link href="https://www.instagram.com/b.bytsid/">
                        <Instagram size={24} />
                    </Link>
                    <Link href="https://www.tiktok.com/@b.bytsid">
                        <FaTiktok size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/abhiparaya-mahardika/posts/?feedView=all">
                        <Linkedin size={24} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
