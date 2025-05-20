import React, { useRef, useState } from 'react';
import DealsCard from '../generalComponents/DealsCard';

const DealsCarousel = ({ dealProducts }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle dot click
  const scrollToIndex = (index) => {
    const card = carouselRef.current.children[index];
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  // Track scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative w-full pl-5 md:pl-10 lg:pl-20">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex gap-3 p-5 overflow-x-auto md:px-10 whitespace-nowrap snap-x snap-mandatory lg:px-20 scrollbar_hidden scroll-smooth"
      >
        {dealProducts.map((product) => (
          <DealsCard
            key={product.id}
            {...product}
            extraClasses="min-w-80 md:min-w-[40rem] lg:min-w-[70rem] snap-start"
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-1 md:-bottom-1 left-1/2">
        {dealProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-1 h-1 md:w-6 md:h-1 lg:w-8 transition-all duration-300 rounded-md ${
              index === activeIndex 
                ? 'bg-primary opacity-100 dark:bg-darkPrimary' 
                : 'bg-text/60 dark:bg-darkText/60 opacity-50 hover:opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsCarousel;