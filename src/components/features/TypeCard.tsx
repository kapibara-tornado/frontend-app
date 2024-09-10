import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { YourTypes } from '@/app/data/yourTypesData';

//政治版mbti
export const TypeCard = ({ id }: { id: number }) => {
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
            <ContentHeader>
              <CharacterImage
                src={type.characterImage}
                alt="Character Image"
                width={100}
                height={100}
              />
              <TypeInfo>
                <TypeAlphabet>
                  {type.typeAlphabet}
                </TypeAlphabet>
                <TypeCharacter>
                  {type.typeCharacter}
                </TypeCharacter>
              </TypeInfo>
            </ContentHeader>
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  height: 450px;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

const TypeInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const CharacterImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;
