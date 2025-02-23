"use client"

export const TitleWithCaption = ({ className = "", title = ""}: { className?: string, title?: string, caption?: string }) => {
    return <>
        <div className={"flex flex-col space-y-2 " + className}>
            <h1 className={`text-left font-bold text-2xl text-black `}>
                {title}
            </h1>
        </div>
    </>

}