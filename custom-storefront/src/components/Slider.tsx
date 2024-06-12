"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, TouchEvent } from "react";

const slides = [
  {
    id: 1,
    title: "Start Bright with Aptamil",
    description: "Nurturing Little Ones with Love",
    // img: "/banner/aptamil.jpg",
    img: "https://images.pexels.com/photos/5692269/pexels-photo-5692269.jpeg",
    url: "/",
    bg: "bg-aptamilPrimary",
    btn: "btn-dark ring-white",
  },
  {
    id: 2,
    title: "The Diapers Your Baby Deserves",
    description: "Explore Our Authentic Diaper Collection",
    img: "/banner/diaper.jpg",
    url: "/",
    bg: "bg-almaraiPrimary",
    btn: "btn-dark ring-white",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startXRef.current - currentXRef.current;
    if (diff > 50) {
      // Swiped left
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      // Swiped right
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-[calc(100vh-56px)] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex justify-center items-center">
              <div className="flex flex-col gap-6 md:gap-10 p-2 md:p-8 items-center">
                <h2 className="md:text-2xl">{slide.description}</h2>
                <h2 className="font-bold text-2xl md:text-5xl xl:text-8xl text-center">
                  {slide.title}
                </h2>
                <Link href={slide.url}>
                  <button className={`${slide.btn}`}>Shop Now</button>
                </Link>
              </div>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2 grid place-items-center">
              <Image src={slide.img} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      <div
        id="button-for-swipe"
        className="absolute m-auto left-1/2 bottom-8 flex gap-4"
      >
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-500 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
