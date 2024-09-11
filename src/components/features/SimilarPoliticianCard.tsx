import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import { SimilarPolitician } from '@/app/data/similarPoliticianData';

export const SimilarPoliticianCard = ({
  id,
}: {
  id: number;
}) => {
  const type = SimilarPolitician.find(
    (type) => type.id === id
  );
  if (!type) {
    return null;
  }
  return (
    <CardContainer>
      <StyledCard>
        <CardTitle>あなたの考え方に似た政治家</CardTitle>
        <CardContent>
          <ContentHeader>
            <PoliticianImage
              src={type.politicianImage}
              alt="Character Image"
              width={100}
              height={100}
            />
            <PoliticianInfo>
              <PoliticianName>
                {type.politicianName}
              </PoliticianName>
              <PartyName>{type.partyName}</PartyName>
            </PoliticianInfo>
          </ContentHeader>
          <Explanation>{type.explanation}</Explanation>
        </CardContent>
      </StyledCard>
    </CardContainer>
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
  min-height: 450px;
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
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
`;

const PoliticianImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const PoliticianInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PoliticianName = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const PartyName = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
  padding: 5px;
`;

const Explanation = styled.span`
  color: #64748b;
  display: inline-block;
  margin-top: 60px;
  line-height: 30px;
`;
