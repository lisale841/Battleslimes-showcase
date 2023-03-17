import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import MobileCarousel from './MobileCarousel';



const CarouselPage = () => {
const [width, setWidth] = useState(window.innerWidth);
const breakpoint = 769;



useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
  // subscribe to window resize event "onComponentDidMount"
  window.addEventListener("resize", handleResizeWindow);
  return () => {
    // unsubscribe "onComponentDestroy"
    window.removeEventListener("resize", handleResizeWindow);
  };
}, []);

if (width > breakpoint) {
  return (
      <Carousel />
  );
} else {
  return (
      <MobileCarousel />
  );
}
}

export default CarouselPage;
