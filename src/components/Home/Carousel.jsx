import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mund from "../../img/Mun.jpg"

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caru">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="img1"
            src={Mund}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img1"
            src={Mund}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img1"
            src={Mund}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}
