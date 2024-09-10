'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import {
  PcViewOnly,
  MobileViewOnly,
} from '@/components/Responsive';
import HamburgerMenu from '@/components/features/HamburgerMenu';

//indexページ
export default function Home() {
  return (
    <div>
      <HamburgerMenu />
      <PcViewOnly>
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
              この診断は
              <ColoredBoldText>政治</ColoredBoldText>と
              <ColoredBoldText>性格診断</ColoredBoldText>
              を組み合わせることで、より政治を身近に感じてもらうこ
              とを目的としています。この診断では、
              <ColoredText>
                あなたの政治における思想
              </ColoredText>
              が分かります。
            </ConceptText>
            <StartButton>
              <Link href={'/play'}>診断スタート→</Link>
            </StartButton>
          </Container>
        </Wrapper>
      </PcViewOnly>
      <MobileViewOnly>
        <MobileWrapper>
          <MobileContainer>
            <MobileImageWrapper>
              <Image
                src="/logo.png"
                width={300}
                height={200}
                alt="logo"
              />
            </MobileImageWrapper>
            <MobileConceptText>
              この診断は
              <ColoredBoldText>政治</ColoredBoldText>と
              <ColoredBoldText>性格診断</ColoredBoldText>
              を組み合わせることで、より政治を身近に感じてもらうこ
              とを目的としています。この診断では、
              <ColoredText>
                あなたの政治における思想
              </ColoredText>
              が分かります。
            </MobileConceptText>
            <MobileStartButton>
              <Link href={'/play'}>診断スタート→</Link>
            </MobileStartButton>
          </MobileContainer>
        </MobileWrapper>
      </MobileViewOnly>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

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
  background-image: url('/backgroundImage/indexMobileBackground.png');
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
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
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

const MobileImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 1.8rem;
  font-family: 'Noto Sans JP';
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
`;

const MobileConceptText = styled.p`
  color: #333;
  font-size: 1.3rem;
  font-family: 'Noto Sans JP';
  font-style: normal;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 10px;
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
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
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
