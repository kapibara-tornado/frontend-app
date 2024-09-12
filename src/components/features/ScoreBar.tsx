'use client';

import { ResultDetail } from '@/app/data/resultDetail';
import React from 'react';
import styled from 'styled-components';

export const ScoreBar = ({
  score,
  direction,
  id,
}: {
  score: number;
  direction: 'left' | 'right';
  id: number;
}) => {
  const percentage = Math.min(
    Math.round((score / 3) * 100),
    100
  );
  const type = ResultDetail.find((type) => type.id === id);
  if (!type) {
    return null;
  }
  return (
    <div>
      <ScoreBarWrapper>
        <PercentageText>{percentage}%</PercentageText>
        <BarContainer>
          <Bar
            percentage={percentage}
            direction={direction}
          />
        </BarContainer>
        <ShowType>
          {type.id === 1 && (
            <TypeFlex>
              <p>E</p>
              <p>P</p>
            </TypeFlex>
          )}
          {type.id === 3 && (
            <TypeFlex>
              <p>A</p>
              <p>L</p>
            </TypeFlex>
          )}
          {type.id === 5 && (
            <TypeFlex>
              <p>C</p>
              <p>L</p>
            </TypeFlex>
          )}
          {type.id === 7 && (
            <TypeFlex>
              <p>N</p>
              <p>I</p>
            </TypeFlex>
          )}
        </ShowType>
      </ScoreBarWrapper>
    </div>
  );
};

const ScoreBarWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

const BarContainer = styled.div`
  width: 70%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`;

const Bar = styled.div<{
  percentage: number;
  direction: 'left' | 'right';
}>`
  width: ${({ percentage }) => percentage}%;
  background-color: #4169e1;
  height: 30px;
  transition: width 0.3s ease;
  border-radius: 10px;
  float: ${({ direction }) => direction};
`;

const PercentageText = styled.span`
  color: #333;
  font-weight: bold;
  padding-left: 150px;
  display: block;
  margin-bottom: 10px;
`;

const ShowType = styled.div`
  margin-top: 10px;
  width: 70%;
  margin: 10px auto 0;
`;

const TypeFlex = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    font-weight: bold;
    color: #333;
  }
`;
