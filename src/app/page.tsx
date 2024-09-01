'use client';

import Link from 'next/link';
import styled from 'styled-components';

//indexページ
export default function Home() {
  return (
    <div>
      <BackgroundDiv>
        <ConceptText>
          government of the people, <br />
          <ColoredText>by the people,</ColoredText> for the
          people
        </ConceptText>
        <StartButton>
          <Link href={'/play'}>診断スタート</Link>
        </StartButton>
      </BackgroundDiv>
    </div>
  );
}

const BackgroundDiv = styled.div`
  background-image: url('/indexBackground.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ConceptText = styled.h1`
  color: #000;
  font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  margin-bottom: 100px;
  text-align: left;
`;

const ColoredText = styled.span`
  color: #9400d3;
`;

const StartButton = styled.button`
  font-size: 1.5rem;
  color: #000;
  background: #fff;
  padding: 15px 25px;
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
