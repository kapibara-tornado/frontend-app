'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ResultDetail } from '@/app/data/resultDetail';

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
            <YourType colorid={String(id)}>
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
`;

const Data = styled.div`
  flex: 1;
`;

const Explanation = styled.div`
  flex: 1;
`;

const StyledImage = styled(Image)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const YourType = styled.div<{ colorid: string }>`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-top: 50px;
  color: ${({ colorid }) =>
    colorid === '1' || colorid === '2'
      ? '#97ac12'
      : colorid === '3' || colorid === '4'
      ? '#6d2cc9'
      : colorid === '5' || colorid === '6'
      ? '#b22a2a'
      : '#0b8697'};
`;

const TypeDescription = styled.p`
  font-size: 1.2rem;
  padding-top: 90px;
  text-align: left;
`;
