'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ResultDetailArea } from '../ResultDetailArea';
import { useResult } from '@/usecases/useResult';
import { ScoreBar } from '../ScoreBar';
import {
  determineIdsBasedOnScores,
  getDirection,
  getScore,
} from './logics';
import { BREAKPOINTS } from '@/components/Responsive';
export const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { parsedScores } = useResult();
  const idsForResultDetailArea =
    determineIdsBasedOnScores(parsedScores);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) =>
      setActiveSlide(next),
    customPaging: (i: number) => (
      <Dot active={i === activeSlide ? 'true' : 'false'} />
    ),
    dotsClass: 'slick-dots custom-dots',
  };
  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {parsedScores &&
          Array.from({ length: 4 }).map(
            (
              _,
              index //添え字が0から始まる
            ) => (
              <div key={index}>
                <ResultDetailArea
                  id={idsForResultDetailArea[index]}
                />
                <ScoreBar
                  score={getScore(index + 1, parsedScores)}
                  direction={getDirection(
                    index + 1,
                    parsedScores
                  )}
                  id={idsForResultDetailArea[index]}
                />
              </div>
            )
          )}
      </StyledSlider>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  max-width: 1000px;
  height: 620px;
  margin: 50px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  @media (max-width: ${BREAKPOINTS.SP}) {
    margin: 15px;
  }
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
  .slick-dots.custom-dots {
    bottom: -50px;
  }
  .slick-dots.custom-dots li {
    margin: 0 10px;
  }
`;
const Dot = styled.div<{ active: 'true' | 'false' }>`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) =>
    active === 'true' ? '#333' : '#ddd'};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #333;
  }
`;
