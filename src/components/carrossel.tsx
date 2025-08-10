import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => resetTimeout();
  }, [currentIndex, images.length]);

  return (
    <div
      className="position-relative mx-auto"
      style={{ maxWidth: '700px', userSelect: 'none' }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="d-block w-100 rounded"
        style={{ height: '400px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Carousel;
