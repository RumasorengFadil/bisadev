import { MdOutlineEmail } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { SectionTitle } from "../components/SectionTitle"
import { IconLink } from "../components/IconLink"


export const FooterFindUs: React.FC = ({}) => {
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
                    <IconLink href="https://www.instagram.com/b.byts" src="/images/app/medsos/instagram.png"  alt="instagram" />
                    <IconLink href="https://www.facebook.com/profile.php?id=61572221173111" src="/images/app/medsos/facebook.png" alt="facebook" />
                    <IconLink href="" src="/images/app/medsos/x.png" alt="x" />
                    <IconLink href="" src="/images/app/medsos/linkedin.png" alt="linkedin" />
                </div>
            </div>
        </section>
    )
}
