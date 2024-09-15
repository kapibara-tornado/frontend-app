'use client';

import styled from 'styled-components';
import { BREAKPOINTS } from '@/components/Responsive';
import { useResult } from '@/usecases/useResult';
import {
  determineIdsBasedOnScores,
  getDirection,
  getScore,
} from '@/components/features/SimpleSlider/logics';
import { YourTypes } from '@/app/data/yourTypesData';
import Image from 'next/image';
import { ScoreBar } from '@/components/features/ScoreBar';
import { useEffect, useState } from 'react';
import { usePrintDocument } from './hooks/printDocument';
import { PrintButton } from '@/components/features/PrintButton';

function ResultPrinter() {
  const { parsedScores, resultedId } = useResult();
  const [input, setInput] =
    useState<HTMLCollectionOf<Element> | null>(null);
  const { printDocument, loading } =
    usePrintDocument(input);

  useEffect(() => {
    setInput(
      document.getElementsByClassName('invoicePages')
    );
  }, []);
  const idsForResultDetailArea =
    determineIdsBasedOnScores(parsedScores);
  const type = YourTypes.find(
    (type) => type.id === resultedId
  );
  if (!type || !parsedScores) return null;

  // エプソンからのQA後に本番環境でも印刷可能にする
  const printDocumentHandler = async () => {
    if (process.env.NODE_ENV === 'development') {
      await printDocument();
    } else {
      alert('印刷機能は開発環境のみ利用可能です');
    }
  };

  return (
    <Wrapper className="invoicePages" id="invoicePageOne">
      <Title>{type.typeCharacter}</Title>
      <CharacterImage
        src={type.characterImage}
        alt="Character Image"
        width={100}
        height={100}
      />
      <TypeCard>
        {idsForResultDetailArea.map((id, index) => (
          <TypeCardSection key={id}>
            <p>{index + 1}.</p>

            <ScoreBar
              score={getScore(index + 1, parsedScores)}
              direction={getDirection(
                index + 1,
                parsedScores
              )}
              id={idsForResultDetailArea[index]}
            />
          </TypeCardSection>
        ))}
      </TypeCard>
      <PrintButton
        onClick={printDocumentHandler}
        loading={loading}
      />
    </Wrapper>
  );
}

export default ResultPrinter;

const Wrapper = styled.div`
  background-image: url('/backgroundImage/indexBackground.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    background-image: url('/backgroundImage/indexMobileBackground.png');
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  padding: 80px 0 40px 0;
`;

const CharacterImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const TypeCard = styled.div``;

const TypeCardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
