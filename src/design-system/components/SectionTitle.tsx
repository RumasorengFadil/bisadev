
export const SectionTitle = ({ title, className, children, weight = "medium", align="center" }: { title?: string, className?: string, children?: React.ReactNode, weight?: string, align?: string, size?: string }) => {
    return (
        <h2 className={`text-${align} font-${weight} text-2xl text-black ${className} `}>
            {children ?
                children :
                title
            }
        </h2>
    )   
}