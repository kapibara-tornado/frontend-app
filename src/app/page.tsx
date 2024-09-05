'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

//indexページ
export default function Home() {
  return (
    <div>
      <Wrapper>
        <Container>
          <ImageWrapper>
            <Image
              src="/logo.png"
              width={450}
              height={300}
              alt="logo"/>
          </ImageWrapper>
          <ConceptText>
          この診断は<ColoredBoldText>政治</ColoredBoldText>と<ColoredBoldText>性格診断</ColoredBoldText>
          を組み合わせることで、より政治を身近に感じてもらうこ
          とを目的としています。この診断では、<ColoredText>あなたの政治における思想</ColoredText>が分かります。
          </ConceptText>
          <StartButton>
          <Link href={'/play'}>診断スタート→</Link>
        </StartButton>
        </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-image: url('/backgroundImage/indexBackground.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;


const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 27px;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  position: relative;
`;

const ImageWrapper = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 1.8rem;
  font-family: 'Noto Sans JP';
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
`; 

const StartButton = styled.button`
  font-size: 1.5rem;
  color: #000;
  background: #D9D9D9;
  padding: 15px 25px;
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;


const ColoredBoldText = styled.span`
  color: #1E90FF;
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: #00BFFF;
`;



