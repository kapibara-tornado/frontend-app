import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import styled from 'styled-components';
import { YourTypes } from '@/app/data/yourTypesData';

//政治版mbti
const TypeCard = ({ id }: { id: number }) => {
  const type = YourTypes.find((type) => type.id === id);
  if (!type) {
    return null;
  }
  return (
    <div>
      <CardContainer>
        <StyledCard>
          <CardTitle>あなたのタイプ</CardTitle>
          <CardContent>
            <TypeAlphabet>{type.typeAlphabet}</TypeAlphabet>
            <TypeCharacter>
              {type.typeCharacter}
            </TypeCharacter>
            <Explanation>
              <DescriptionTitle>特徴</DescriptionTitle>
              {type.feature}
            </Explanation>
            <Explanation>
              <DescriptionTitle>価値観</DescriptionTitle>
              {type.senseOfValue}
            </Explanation>
          </CardContent>
        </StyledCard>
      </CardContainer>
    </div>
  );
};

export default TypeCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  height: 400px;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const TypeAlphabet = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const TypeCharacter = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
`;

const Explanation = styled(CardDescription)`
  padding: 15px;
`;

const DescriptionTitle = styled.span`
  font-weight: 700;
  color: #0070f3;
  display: block;
  margin-bottom: 10px;
`;
