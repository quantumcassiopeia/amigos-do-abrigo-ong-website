"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "slide1.webp",
  "slide2.webp",
  "slide3.webp",
  "slide4.webp",
  "slide5.webp",
  "slide6.webp",
];

export default function AutoCarousel({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative aspect-square w-full max-w-[600px] overflow-hidden border-base ${className} `}
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={`/images/${src}`}
          alt={`Slide ${index}`}
          width={600}
          height={600}
          unoptimized
          className={`absolute top-0 left-0 object-contain transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
