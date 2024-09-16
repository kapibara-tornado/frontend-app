'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { BREAKPOINTS } from '@/components/Responsive';
import {
  Slideshow,
  Slide,
} from '@/components/features/Slideshow';
import { PageTransition } from '@/components/PageTransition';
import { motion } from 'framer-motion';

//indexページ
export default function Home() {
  return (
    <Wrapper
      initial={PageTransition.initial}
      animate={PageTransition.animate}
      exit={PageTransition.exit}
      variants={PageTransition.variants}
      transition={PageTransition.transition}
    >
      <Container>
        <ConceptText>
          あなたは<NoBreakText>どのタイプ？</NoBreakText>
        </ConceptText>
        <ImageWrapper>
          <Slideshow>
            <Slide
              src="/Home/home1.png"
              alt="home1"
              duration={3000}
            ></Slide>
            <Slide
              src="/Home/home2.png"
              alt="home2"
              duration={3000}
            ></Slide>
            <Slide
              src="/Home/home3.png"
              alt="home3"
              duration={3000}
            ></Slide>
          </Slideshow>
        </ImageWrapper>
        <StartButton href={'/play'}>
          政治×性格診断→
        </StartButton>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  background-image: url('/backgroundImage/indexBackground.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 50px 20px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    background-image: url('/backgroundImage/indexMobileBackground.png');
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
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
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
  font-size: 3rem;
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 400px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    margin-top: 300px;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

const StartButton = styled(Link)`
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
  z-index: 10;

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

// 改行させない文字
const NoBreakText = styled.span`
  white-space: nowrap;
`;
