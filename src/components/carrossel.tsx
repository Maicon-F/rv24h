import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  images: string[];
  showArrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, showArrows = false }) => {
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="position-relative mx-auto"
      style={{ maxWidth: '700px', userSelect: 'none' }}
    >
      {showArrows && (
        <button className="arrow-btn start-0" onClick={prevSlide} aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="d-block w-100 rounded"
        style={{ height: '400px', objectFit: 'cover' }}
      />

      {showArrows && (
        <button className="arrow-btn end-0" onClick={nextSlide} aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      <style>{`
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          border: none;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .arrow-btn:hover {
          background: rgba(0, 0, 0, 0.6);
          transform: translateY(-50%) scale(1.08);
        }
        .start-0 {
          left: 10px;
        }
        .end-0 {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;

