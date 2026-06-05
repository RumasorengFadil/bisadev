
"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
    text,
    typingSpeed = 100,
    pause = 1500,
}: {
    text: string;
    typingSpeed?: number;
    pause?: number;

}) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }

        const resetTimeout = setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
        }, pause);

        return () => clearTimeout(resetTimeout);
    }, [index, text, typingSpeed, pause]);

    return (
        <span>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}