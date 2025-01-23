
export const Copyright = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <p className={"text-center font-extralight " + className}>
            {children}
        </p>
    )
}