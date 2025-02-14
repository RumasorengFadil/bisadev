"use client"

import { SectionTitle } from "../components/SectionTitle";

export const TitleWithCaption = ({ className = "", title = "" }: { className?: string, title?: string }) => {
    return <>
        <div className={"flex flex-col space-y-2 font-bold " + className}>
            <SectionTitle
                weight="bold"
                align="left"
                title={title}
            />
            <p>
                Jelajahi kumpulan artikel terbaru dari bbyts, mulai dari inovasi
                teknologi, strategi bisnis digital, hingga tren UI/UX.
            </p>
        </div>
    </>

}