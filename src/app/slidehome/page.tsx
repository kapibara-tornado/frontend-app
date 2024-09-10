'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  Slideshow,
  Slide,
} from '../../components/features/Slideshow';
import {
  PcViewOnly,
  MobileViewOnly,
} from '@/components/Responsive';

//indexページ
function SlideHome() {
  return (
    <div>
      <PcViewOnly>
        <Wrapper>
          <Container>
            <ImageWrapper>
              <Slideshow>
                <Slide
                  src="/logo.png"
                  alt="logo"
                  duration={3000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample"
                  duration={5000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample2"
                  duration={5000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample3"
                  duration={6000}
                ></Slide>
              </Slideshow>
            </ImageWrapper>
            <ConceptText>あなたはどのタイプ？</ConceptText>
            <StartButton>
              <Link href={'/play'}>政治家診断→</Link>
            </StartButton>
          </Container>
        </Wrapper>
      </PcViewOnly>
      <MobileViewOnly>
        <MobileWrapper>
          <MobileContainer>
            <MobileImageWrapper>
              <Slideshow>
                <Slide
                  src="/logo.png"
                  alt="logo"
                  width={300}
                  height={200}
                  duration={3000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample"
                  width={300}
                  height={200}
                  duration={5000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample2"
                  width={300}
                  height={200}
                  duration={5000}
                ></Slide>
                <Slide
                  src="/static.jpeg"
                  alt="sample3"
                  width={300}
                  height={200}
                  duration={6000}
                ></Slide>
              </Slideshow>
            </MobileImageWrapper>
            <MobileConceptText>
              あなたはどのタイプ？
            </MobileConceptText>
            <MobileStartButton>
              <Link href={'/play'}>政治家診断→</Link>
            </MobileStartButton>
          </MobileContainer>
        </MobileWrapper>
      </MobileViewOnly>
    </div>
  );
}

export default SlideHome;

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

const MobileWrapper = styled.div`
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
  margin: 300px;
`;

const MobileContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 27px;
  text-align: center;
  width: 100%;
  height: 100px;
  display: flex;
  max-width: 500px;
  min-height: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 250px;
  padding-top: 20px;
`;

const MobileImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 125px;
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 4rem;
  font-family: 'Noto Sans JP';
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 30px;
`;

const MobileConceptText = styled.p`
  color: #333;
  font-size: 2.5rem;
  font-family: 'Noto Sans JP';
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  font-size: 1.5rem;
  color: #000;
  background: #d9d9d9;
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

const MobileStartButton = styled.button`
  font-size: 1.5rem;
  color: #000;
  background: #d9d9d9;
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
  color: #1e90ff;
  font-weight: bold;
`;

const ColoredText = styled.span`
  color: #00bfff;
`;
