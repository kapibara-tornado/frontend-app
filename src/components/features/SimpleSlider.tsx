'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ResultDetailArea } from './ResultDetailArea';
import { useResult } from '@/usecases/useResult';
import { ScoreBar } from './ScoreBar';

export const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { parsedScores } = useResult();

  const determineIdsBasedOnScores = () => {
    if (!parsedScores) return [0, 0, 0, 0];

    const ids = [];

    if (parsedScores.E > parsedScores.P) {
      ids.push(1);
    } else {
      ids.push(2);
    }
    if (parsedScores.A > parsedScores.S) {
      ids.push(3);
    } else {
      ids.push(4);
    }
    if (parsedScores.L > parsedScores.C) {
      ids.push(5);
    } else {
      ids.push(6);
    }
    if (parsedScores.I > parsedScores.N) {
      ids.push(7);
    } else {
      ids.push(8);
    }
    return ids;
  };

  const idsForResultDetailArea =
    determineIdsBasedOnScores();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) =>
      setActiveSlide(next),
    customPaging: (i: number) => (
      <Dot active={i === activeSlide} />
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div>
      <SliderContainer>
        <StyledSlider {...settings}>
          <div>
            <ResultDetailArea
              id={idsForResultDetailArea[0]}
            />
            {parsedScores && (
              <ScoreBar score={parsedScores.E > parsedScores.P ? parsedScores.E : parsedScores.P} direction={parsedScores.E > parsedScores.P ? 'left' : 'right'} id={1}/>
            )}
          </div>
          <div>
            <ResultDetailArea
              id={idsForResultDetailArea[1]}
            />
            {parsedScores && (
              <ScoreBar score={parsedScores.A > parsedScores.S ? parsedScores.A : parsedScores.S} direction={parsedScores.A > parsedScores.S ? 'left' : 'right'} id={3}/>
            )}
          </div>
          <div>
            <ResultDetailArea
              id={idsForResultDetailArea[2]}
            />
            {parsedScores && (
              <ScoreBar score={parsedScores.L > parsedScores.C ? parsedScores.L : parsedScores.C} direction={parsedScores.L > parsedScores.C ? 'left' : 'right'} id={5}/>
            )}
          </div>
          <div>
            <ResultDetailArea
              id={idsForResultDetailArea[3]}
            />
            {parsedScores && (
              <ScoreBar score={parsedScores.I > parsedScores.N ? parsedScores.I : parsedScores.N} direction={parsedScores.I > parsedScores.N ? 'left' : 'right'} id={7}/>
            )}
          </div>
        </StyledSlider>
      </SliderContainer>
    </div>
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

const Dot = styled.div<{ active: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) =>
    active ? '#333' : '#ddd'};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
