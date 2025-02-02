import { MdOutlineEmail } from "react-icons/md"
import { SectionTitle } from "../components/SectionTitle"
import { FiPhone } from "react-icons/fi"
import { IconLink } from "../components/IconLink"

interface FindUsProps {}

export const FooterFindUs: React.FC<FindUsProps> = () => {
    return (
        <section id="find-us" className="w-full space-y-4">
            <SectionTitle align="left" size="base" weight="semibold" className="text-base" title="Hubungi Kami" />
            <div>
                <div className="flex py-2 items-center space-x-2">
                    <div className="bg-orange-500 w-max p-1 rounded-full">
                        <MdOutlineEmail
                            size={20}
                            className="text-white"
                        />
                    </div>
                    <p>abhiparayamahardika@gmail.com</p>
                </div>
                <div className="flex py-2 items-center space-x-2">
                    <div className="bg-orange-500 w-max p-1 rounded-full">
                        <FiPhone
                            size={20}
                            className="text-white"
                        />
                    </div>
                    <p>+625244682780</p>
                </div>
            </div>

            <div>
                <SectionTitle align="left" size="base" weight="semibold" className="text-base" title="Follow Us" />
                <div className="flex space-x-4 py-2">
                    <IconLink href="" src="/images/app/medsos/instagram.png"  alt="instagram" />
                    <IconLink href="https://www.facebook.com/profile.php?id=61572221173111" src="/images/app/medsos/facebook.png" alt="facebook" />
                    <IconLink href="" src="/images/app/medsos/x.png" alt="x" />
                    <IconLink href="" src="/images/app/medsos/linkedin.png" alt="linkedin" />
                </div>
            </div>
        </section>
    )
}
