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
  const [printWidth, setPrintWidth] = useState<number>(0);
  const [printHeight, setPrintHeight] = useState<number>(0);
  const [input, setInput] =
    useState<HTMLCollectionOf<Element> | null>(null);
  const { printDocument, loading } = usePrintDocument(
    input,
    printWidth,
    printHeight
  );

  useEffect(() => {
    setInput(
      document.getElementsByClassName('invoicePages')
    );

    setPrintWidth(window.innerWidth);
    setPrintHeight(window.innerHeight);
  }, []);

  // 縦横幅変えた時の処理
  useEffect(() => {
    const handleResize = () => {
      setPrintWidth(window.innerWidth);
      setPrintHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const idsForResultDetailArea =
    determineIdsBasedOnScores(parsedScores);
  const type = YourTypes.find(
    (type) => type.id === resultedId
  );
  if (!type || !parsedScores) return null;

  const printDocumentHandler = async () => {
    await printDocument();
  };

  return (
    <Container>
      <Wrapper
        className="invoicePages"
        id="invoicePageOne"
        $printHeight={printHeight}
        $printWidth={printWidth}
      >
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
      </Wrapper>
      <BottomButton>
        <PrintButton
          onClick={printDocumentHandler}
          loading={loading}
        />
      </BottomButton>
    </Container>
  );
}

export default ResultPrinter;

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div<{
  $printHeight: number;
  $printWidth: number;
}>`
  background-image: url('/backgroundImage/indexBackground.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => props.$printHeight}px;
  width: ${(props) => props.$printWidth}px;
  margin: 0 auto;

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

const BottomButton = styled.div`
  position: absolute;
  bottom: 50px;
  left: 51%;
  transform: translateX(-50%);

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    bottom: 30px;
  }
`;
