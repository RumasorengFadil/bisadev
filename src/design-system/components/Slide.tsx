"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../molecules/PrimaryButton";

interface Slide {
    title: string;
    image: string;
    description: string;
    price: string;
}

interface SlidesProps {
    slides: Slide[];
    interval?: number;
    children?: React.ReactNode;
}

export const Slides = ({ slides, interval = 3000, children }: SlidesProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);
    const [isHolding, setIsHolding] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEnd.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStart.current - touchEnd.current > 50) {
            goToNext();
        }
        if (touchStart.current - touchEnd.current < -50) {
            goToPrevious();
        }
    };

    const handleMouseDown = () => {
        setIsHolding(true);
    };

    const handleMouseUp = () => {
        setIsHolding(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isHolding) {
                goToNext();
            }
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, interval, isHolding]);

    return (
        <div
            className="flex flex-col space-y-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div
                className="flex transition-transform ease-linear duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="bg-white py-4 rounded-lg space-y-4 min-w-full"
                    >
                        <h1 className="text-center text-primaryDark px-4">
                            {slide.title}
                        </h1>
                        <div className="flex px-4 flex-col md:flex-row space-y-4 md:space-x-4">
                            <div className="relative mx-auto w-full max-w-52 h-[200px] sm:h-[200px]">
                                <Image
                                    unoptimized
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                    className="rounded-t-md h-full w-full"
                                />
                            </div>
                            <p className="text-justify">{slide.description}</p>
                        </div>

                        <div className="flex flex-col space-y-4 justify-between items-center px-4 md:flex-row md:space-y-0">
                            <div></div>
                            <div className="flex flex-col text-center">
                                <p>Harga Mulai Dari</p>
                                <p className="text-primaryDark">{slide.price}</p>
                            </div>

                            <Link href="/maintenance">
                                <PrimaryButton>Lihat Paket</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="flex space-x-2 p-1 rounded-lg bg-white">
                    {slides.map((_, i) =>
                        <div onClick={() => goToSlide(i)} key={i} className={`w-2 h-2 rounded-full transition-all duration-1000 cursor-pointer ${i === currentIndex ? "bg-primaryDark" : "border border-primaryDark"}`}></div>
                    )}
                </div>
            </div>
        </div>
    );
};
