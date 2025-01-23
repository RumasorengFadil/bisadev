export const FigCaption = ({ caption, className, children, size="sm" }: { caption?: string, className?: string, children?: React.ReactNode, size?:string }) => {
    return (
        <figcaption className={`text-center text-${size} ${className}`}>
            {children ? children : caption}
        </figcaption>
    )
}