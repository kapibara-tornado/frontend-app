'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ResultDetail } from '@/app/data/resultDetail';
import { BREAKPOINTS } from '../Responsive';

export const ResultDetailArea = ({
  id,
}: {
  id: number;
}) => {
  const type = ResultDetail.find((type) => type.id === id);
  if (!type) {
    return null;
  }
  return (
    <div>
      <Wrapper>
        <Genre>{type.genre}</Genre>
        <MainContent>
          <Data>
            <StyledImage
              src={type.genreImage}
              alt="genreImage"
              width={300}
              height={300}
            />
          </Data>
          <Explanation>
            <YourType $colorId={String(id)}>
              {type.yourType}
            </YourType>
            <TypeDescription>
              {type.typeDescription}
            </TypeDescription>
          </Explanation>
        </MainContent>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    padding: 0;
  }
`;

const Genre = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const Data = styled.div`
  flex: 1;
`;

const Explanation = styled.div`
  flex: 1;
`;

const StyledImage = styled(Image)`
  padding-top: 40px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    padding: 0;
    width: 180px;
    object-fit: cover;
  }
`;

const YourType = styled.div<{ $colorId: string }>`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-top: 50px;
  color: ${({ $colorId }) =>
    $colorId === '1' || $colorId === '2'
      ? '#97ac12'
      : $colorId === '3' || $colorId === '4'
      ? '#6d2cc9'
      : $colorId === '5' || $colorId === '6'
      ? '#b22a2a'
      : '#0b8697'};

  @media (max-width: ${BREAKPOINTS.SP}) {
    padding: 0;
  }
`;

const TypeDescription = styled.p`
  font-size: 1.2rem;
  padding-top: 90px;
  text-align: left;

  @media (max-width: ${BREAKPOINTS.SP}) {
    padding: 30px 0;
    font-size: 1rem;
  }
`;
