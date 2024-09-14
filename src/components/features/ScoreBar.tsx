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
  console.log("score:", score);
  console.log("Percentage:", percentage);
  const type = ResultDetail.find((type) => type.id === id);
  console.log("TYPE:", type);
  // console.log("ScoreBarTypeID:", type.id);
  if (!type) {
    return null;
  }
  return (
    <div>
      <ScoreBarWrapper>
      <ScoreInfo>
          <PercentageText>{percentage}%</PercentageText>
          <TypeText id={id} />
        </ScoreInfo>
        <BarContainer>
          <Bar
            percentage={percentage}
            direction={direction}
            id={id}
          />
        </BarContainer>
        <ShowType>
          {type.id === 1 && (
            <TypeFlex>
              <p>E</p>
              <p>P</p>
            </TypeFlex>
          )}
          {type.id === 2 && (
            <TypeFlex>
              <p>E</p>
              <p>P</p>
            </TypeFlex>
          )}
          {type.id === 3 && (
            <TypeFlex>
              <p>A</p>
              <p>S</p>
            </TypeFlex>
          )}
          {type.id === 4 && (
            <TypeFlex>
              <p>A</p>
              <p>S</p>
            </TypeFlex>
          )}
          {type.id === 5 && (
            <TypeFlex>
              <p>C</p>
              <p>L</p>
            </TypeFlex>
          )}
          {type.id === 6 && (
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
          {type.id === 8 && (
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
const getColorById = (id: number) => {
  switch (id) {
    case 1:
      return '#97AC12';
    case 2:
      return '#97AC12';
    case 3:
      return '#6D2CC9';
    case 4:
      return '#6D2CC9';
    case 5:
      return '#B22A2A';
    case 6:
      return '#B22A2A';
    case 7:
      return '#0B8697';
    case 8:
      return '#0B8697';
  }
};
const TypeText = ({ id }: { id: number }) => {
  const text = getTypeText(id);
  return <TypeTextSpan>{text}</TypeTextSpan>;
};
const getTypeText = (id: number) => {
  switch (id) {
    case 1:
      return 'の経済重視型';
    case 2:
      return 'の進歩的型';
    case 3:
      return 'の権威主義型';
    case 4:
      return 'の自由主義型';
    case 5:
      return 'のリベラル型';
    case 6:
      return '保守型';
    case 7:
      return 'の国際主義型';
    case 8:
      return 'の愛国主義型';
    default:
      return '';
  }
};
const ScoreBarWrapper = styled.div`
  width: 100%;
  text-align: left;
`;
const BarContainer = styled.div`
  width: 70%;
  background-color: #E0E0E0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`;
const ScoreInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Bar = styled.div<{
  percentage: number;
  direction: 'left' | 'right';
  id: number;
}>`
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ id }) => getColorById(id)};
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
`;
const TypeTextSpan = styled.span`
  margin-left: 10px;
  color: #666;
  font-weight: normal;
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