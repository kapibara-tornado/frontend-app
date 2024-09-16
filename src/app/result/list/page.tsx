'use client';

import styled from 'styled-components';
import { BREAKPOINTS } from '@/components/Responsive';
import { ResultCard } from '@/components/features/ResultCard';
import { resultSections } from '@/app/data/resultSections';
import { PageTransition } from '@/components/PageTransition';
import { motion } from 'framer-motion';

function ListResult() {
  return (
    <Wrapper {...PageTransition}>
      <Title>診断結果一覧</Title>
      {resultSections.map((section, index) => (
        <SectionContent
          key={index}
          $bgImage={section.bgimage}
        >
          <SectionTitle>{section.title}</SectionTitle>
          <CardWrapper>
            {section.cards.map((card, index) => (
              <ResultCard
                key={index}
                src={card.src}
                alt={card.alt}
                labels={card.labels}
              />
            ))}
          </CardWrapper>
        </SectionContent>
      ))}
    </Wrapper>
  );
}

export default ListResult;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  padding: 80px 0 40px 0;
`;

const SectionContent = styled.div<{ $bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.SP}) {
    font-size: 2rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    gap: 20px;
  }
`;
