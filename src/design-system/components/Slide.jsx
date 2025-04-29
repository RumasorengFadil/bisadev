"use client";
import { useEffect, useRef, useState } from "react";

export const Slides = ({ slides, interval = 3000, object }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const [isHolding, setIsHolding] = useState(false);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 50) {
      goToNext(); // Geser ke kanan
    }
    if (touchStart.current - touchEnd.current < -50) {
      goToPrevious(); // Geser ke kiri
    }
  };

  // Aktifkan hold
  const handleMouseDown = () => {
    setIsHolding(true);
  };

  // Matikan hold
  const handleMouseUp = () => {
    setIsHolding(false);
  };

  // Autoplay logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHolding) {
        goToNext(); // Move to the next slide every X seconds
      }
    }, interval);

    // Clear the interval when component unmounts or when a manual navigation happens
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, interval]);

  return (
    <div>
      <div
        className="transition-transform ease-linear duration-1000"
        style={{
          transform: `translate(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div className="bg-white py-4 rounded-lg space-y-4">
            <h1 className="text-center text-primaryDark px-4">{slide.title}</h1>
            <div className="flex px-4 flex-col md:flex-row space-y-4 md:space-x-4">
              <div className="relative mx-auto w-full max-w-52 h-[200px] sm:h-[200px]">
                <Image
                  unoptimized
                  src={slide.image}
                  alt="Contoh Gambar"
                  fill
                  objectFit="cover"
                  priority
                  className="rounded-t-md h-full w-full"
                />
              </div>
              <p className="text-justify">{slide.description}</p>
            </div>

            <div className="flex justify-between items-center px-4">
              <div></div>
              <div className="flex flex-col text text-center">
                <p className="">Harga Mulai Dari</p>
                <p className="text-primaryDark">{slide.price}</p>
              </div>

              <Link href={""}>
                <PrimaryButton className="">Lihat Paket</PrimaryButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
