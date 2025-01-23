
export const SectionTitle = ({ title, className, children, weight = "medium" }: { title?: string, className?: string, children?: React.ReactNode, weight?: string, align?: string, size?: string }) => {
    return (
        <h1 className={`text-center font-${weight} text-2xl ${className}`}>
            {children ?
                children :
                title
            }
        </h1>
    )
}