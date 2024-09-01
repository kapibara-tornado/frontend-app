import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import styled from 'styled-components';
import { YourTypes } from '../data/yourTypesData';
import { Description } from '@radix-ui/react-toast';

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
          <TypeAlphabet>{type.TypeAlphabet}</TypeAlphabet>
          <TypeCharacter>{type.TypeCharacter}</TypeCharacter>
          <CardDescription>
            <DescriptionTitle>特徴</DescriptionTitle>
            {type.feature}
          </CardDescription>
          <CardDescription>
            <DescriptionTitle>価値観</DescriptionTitle>
            {type.senseOfValue}
          </CardDescription>
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
  max-width: 600px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;  
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  
  padding: 20px;
  background-color: #fff; 
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

const DescriptionTitle = styled.span`
  font-weight: bold;
  color: #0070f3;
  display: block;
  margin-bottom: 5px;
`;