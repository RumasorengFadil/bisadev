
export const SectionTitle = ({ title, className, children, weight = "medium", align="center" }: { title?: string, className?: string, children?: React.ReactNode, weight?: string, align?: string, size?: string }) => {
    return (
        <h1 className={`text-${align} font-${weight} text-2xl text-black ${className} `}>
            {children ?
                children :
                title
            }
        </h1>
    )   
}