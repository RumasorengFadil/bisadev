import Link from "next/link"
import { FigCaption } from "./FigCaption"

export const IconLink = ({ src, className, children, alt = "icon", href }: { src: string, className?: string, children?: React.ReactNode, alt?: string, href: string }) => {
    return (
        <Link href={href}>
            {children ?
                children
                : <img
                    className={"w-6 " + className}
                    src={src}
                    alt={alt}
                />}
        </Link>
    )
}