import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import styled from 'styled-components';
import React from 'react';
import {SimilarPolitician} from '@/app/data/similarPoliticianData';



const SimilarPoliticianCard = ({ id }: { id: number }) => {
  const type = SimilarPolitician.find(
    (type) => type.id === id
  );
  if (!type) {
    return null;
  }
  return (
    <div>
      <CardContainer>
        <StyledCard>
          <CardTitle>あなたの考え方に似た政治家</CardTitle>
          <CardContent>
            <PoliticianName>
              {type.politicianName}
            </PoliticianName>
            <PartyName>{type.partyName}</PartyName>
            <Explanation>{type.explanation}</Explanation>
          </CardContent>
        </StyledCard>
      </CardContainer>
    </div>
  );
};

export default SimilarPoliticianCard;

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
  font-weight: 700;
  color: #555;
  display: block;
  margin: 10px;
  padding: 20px;
`;
