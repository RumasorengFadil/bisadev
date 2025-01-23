import { FigCaption } from "./FigCaption"

export const Figure = ({ src, figCaption="", className, children, rounded="" }: { src: string, figCaption?: string, className?: string, children?: React.ReactNode, rounded?:string }) => {
    return (
        <figure className={"flex flex-col space-y-2 " + className}>
            <img className={`w-full rounded-${rounded}`} src={src} alt="" />
            {children ? children : <FigCaption caption={figCaption} />}
        </figure>
    )
}