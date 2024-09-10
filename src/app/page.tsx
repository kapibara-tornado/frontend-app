'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from '@/components/Responsive';

//indexページ
export default function Home() {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image
            src="/logo.png"
            width={450}
            height={300}
            alt="logo"
          />
        </ImageWrapper>
        <ConceptText>
          Politics&Personalities(
          <NoBreakText>
            <ColoredText>政治</ColoredText>&times;
            <ColoredText>性格診断</ColoredText>
          </NoBreakText>
          )とは、 あなたがどういった
          <ColoredBoldText>政治的な考え方</ColoredBoldText>
          をするのか診断します。
          <br />
          政治がわからない/判断できない人の手助けをするツールです。
        </ConceptText>
        <StartButton>
          <Link href={'/play'}>診断スタート→</Link>
        </StartButton>
      </Container>
    </Wrapper>
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
  height: 100vh;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    background-image: url('/backgroundImage/indexMobileBackground.png');
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 27px;
  border-top: 10px solid #cff4f9;
  border-bottom: 10px solid #cff4f9;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  position: relative;
  padding: 15px;
`;

const ImageWrapper = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 1.8rem;
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const StartButton = styled.button`
  font-size: 1.5rem;
  color: #000;
  background: #cff4f9;
  padding: 15px 25px;
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: inline-block;
  font-weight: bold;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ColoredBoldText = styled.span`
  color: #1e90ff;
  font-weight: bold;
  white-space: nowrap;
`;

const ColoredText = styled.span`
  color: #00bfff;
`;

// 改行させない文字
const NoBreakText = styled.span`
  white-space: nowrap;
`;
