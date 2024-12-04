import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='carousel-image' src="/images/carousel/calendar.jpg" alt="not found"/>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-image' src="/images/carousel/box.jpg" alt="not found"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-image' src="/images/carousel/army.jpg" alt="not found"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;