import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mund from "../../img/Mun.jpg"
import Mund2 from "../../img/Mund2.jpg"
import Mund3 from "../../img/Mund3.jpg"

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
            src={Mund2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="img1"
            src={Mund3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}
