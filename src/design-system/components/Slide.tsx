"use client"
import { useEffect, useRef, useState } from "react";

export const Slides = ({ slides, interval = 3000, object }: { slides: Array<string>, interval?: number, object?: string }) => {
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
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e: any) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: any) => {
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
        <div
            style={{
                transform: `translate(-${(currentIndex) * 100}%)`,
            }}
            className="flex w-full h-full transition-transform ease-linear duration-1000"
            onClick={goToNext}
        >
            {slides.map((slide,i) =>
                <img
                    key={i}
                    className={"w-full h-auto flex-shrink-0 " + object}
                    src={slide}
                    alt=""
                    draggable="false"
                />
            )}
        </div>
    )
}


// import React, { useRef, useState } from 'react';

// const CustomSlider = () => {
//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const startPosition = useRef(0);
//   const currentTranslate = useRef(0);
//   const prevTranslate = useRef(0);

//   const slides = [
//     { id: 1, title: 'Slide 1', image: '/images/slide1.jpg' },
//     { id: 2, title: 'Slide 2', image: '/images/slide2.jpg' },
//     { id: 3, title: 'Slide 3', image: '/images/slide3.jpg' },
//   ];

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     startPosition.current = e.clientX;
//     sliderRef.current.style.transition = 'none';
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     const currentPosition = e.clientX;
//     const distance = currentPosition - startPosition.current;
//     currentTranslate.current = prevTranslate.current + distance;

//     sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     const movedBy = currentTranslate.current - prevTranslate.current;

//     if (movedBy < -100 && currentIndex < slides.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     } else if (movedBy > 100 && currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }

//     sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
//     prevTranslate.current = -currentIndex * sliderRef.current.offsetWidth;
//     sliderRef.current.style.transform = `translateX(${prevTranslate.current}px)`;
//   };

//   const handleMouseLeave = () => {
//     if (isDragging) handleMouseUp();
//   };

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         ref={sliderRef}
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="w-full flex-shrink-0"
//             style={{ minWidth: '100%' }}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="text-center p-4 bg-gray-800 text-white">
//               {slide.title}
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Tombol Navigasi */}
//       <button
//         onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={() => setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default CustomSlider;
