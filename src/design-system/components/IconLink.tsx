import Image from "next/image"
import Link from "next/link"

export const IconLink = ({ src, className, children, alt = "icon", href }: { src: string, className?: string, children?: React.ReactNode, alt?: string, href: string }) => {
    return (
        <Link href={href}>
            {children ?
                children
                : <Image
                    className={"w-6 " + className}
                    src={src}
                    alt={alt}
                />}
        </Link>
    )
}