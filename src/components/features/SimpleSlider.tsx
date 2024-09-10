'use client';

import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => <Dot active={i === activeSlide}/>,  
    dotsClass: "slick-dots custom-dots", 
  };

  return (
    <div>
      <SliderContainer>
      <StyledSlider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      </StyledSlider>
      </SliderContainer>
      
    </div>
  )
}

const SliderContainer = styled.div`
  max-width: 1000px;
  height: 600px;
  margin: 50px auto; 
  background-color: white; 
  padding: 30px; 
  border-radius: 10px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -10px;
  }
  
  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-dots.custom-dots {
    bottom: -500px;
  }

  .slick-dots.custom-dots li {
    margin: 0 10px;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) => (active ? '#333' : '#ddd')}; 
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; 
  }
`;