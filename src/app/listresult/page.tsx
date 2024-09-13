'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { CardInfo } from '@/types/types';
import { BREAKPOINTS } from '@/components/Responsive';

//診断結果一覧のデータ
const sections = [
  {
    title: '保守的な経済統制派',
    bgimage:
      '/backgroundImage/resultDetailBackgroundConservative.png',
    cards: [
      {
        src: '/Types/EACN.jpg',
        alt: 'EACN',
        labels: ['EACN', '経済的保守主義者'],
      },
      {
        src: '/Types/PACN.jpg',
        alt: 'PACN',
        labels: ['PACN', '進歩的保守主義者'],
      },
      {
        src: '/Types/EACI.jpg',
        alt: 'EACI',
        labels: ['EACI', '国際経済的保守主義者'],
      },
      {
        src: '/Types/PACI.jpg',
        alt: 'PACI',
        labels: ['PACI', '国際進歩的保守主義者'],
      },
    ],
  },
  {
    title: '自由市場主義派',
    bgimage:
      '/backgroundImage/resultDetailBackgroundLiberal.png',
    cards: [
      {
        src: '/Types/ELCN.jpg',
        alt: 'ELCN',
        labels: ['ELCN', '自由市場的国際主義者'],
      },
      {
        src: '/Types/PLCN.jpg',
        alt: 'PLCN',
        labels: ['PLCN', '保守的自由主義者'],
      },
      {
        src: '/Types/ELCI.jpg',
        alt: 'ELCI',
        labels: ['ELCI', '自由市場的国際主義者'],
      },
      {
        src: '/Types/PLCI.jpg',
        alt: 'PLCI',
        labels: ['PLCI', '保守的国際自由主義者'],
      },
    ],
  },
  {
    title: '進歩的国家主義派',
    bgimage:
      '/backgroundImage/resultDetailBackgroundProgressive.png',
    cards: [
      {
        src: '/Types/EALN.jpg',
        alt: 'EALN',
        labels: ['EALN', '経済的国家自由主義者'],
      },
      {
        src: '/Types/ELLN.jpg',
        alt: 'ELLN',
        labels: ['ELLN', '国家的自由主義者'],
      },
      {
        src: '/Types/PALN.jpg',
        alt: 'PALN',
        labels: ['PALN', '進歩的国家自由主義者'],
      },
      {
        src: '/Types/PLLN.jpg',
        alt: 'PLLN',
        labels: ['PLLN', '進歩的自由国家主義者'],
      },
    ],
  },
  {
    title: '国際協力重視派',
    bgimage:
      'backgroundImage/resultDetailBackgroundInternational.png',
    cards: [
      {
        src: '/Types/EALI.jpg',
        alt: 'EALI',
        labels: ['EALI', '国際経済的自由主義者'],
      },
      {
        src: '/Types/ELLI.jpg',
        alt: 'ELLI',
        labels: ['ELLI', '国際的自由主義者'],
      },
      {
        src: '/Types/PALI.jpg',
        alt: 'PALI',
        labels: ['PALI', '国際進歩的自由主義者'],
      },
      {
        src: '/Types/PLLI.jpg',
        alt: 'PLLI',
        labels: ['PLLI', '進歩的国際自由主義者'],
      },
    ],
  },
];

const Card = ({ src, alt, labels }: CardInfo) => {
  return (
    <CardContainer>
      <StyledImage
        src={src}
        alt={alt}
        width={150}
        height={150}
      />
      {labels.map((label, index) => (
        <Label key={index}>{label}</Label>
      ))}
    </CardContainer>
  );
};

function ListResult() {
  return (
    <div>
      <Wrapper>
        <Title>診断結果一覧</Title>
        {sections.map((section, index) => (
          <SectionContent
            key={index}
            bgimage={section.bgimage}
          >
            <SectionTitle>{section.title}</SectionTitle>
            <CardWrapper>
              {section.cards.map((card, index) => (
                <Card
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
    </div>
  );
}

export default ListResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 50px;
  font-size: 3rem;

  @media (max-width: ${BREAKPOINTS.SP}) {
    font-size: 2rem;
    padding-top: 150px;
  }
`;

const SectionContent = styled.div<{ bgimage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    padding: 30px 0 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  padding-top: 150px;

  @media (max-width: ${BREAKPOINTS.SP}) {
    margin-top: 70px;
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.SP}) {
    width: 45%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Label = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1.2rem;
  }
`;
