'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';

//質問回答画面
function Play() {
  return (
    <div>
      <Wrapper>
        <QuestionArea>
          <ImageWrapper>
            <Image
              src="/static.jpeg"
              width={300}
              height={200}
              alt="sample"
            />
          </ImageWrapper>
          <Question>
            この質問はテストです。この質問はテストです。この質問はテストです。この質問はテストです。
          </Question>
        </QuestionArea>
        <Buttons>
          <BadButton>Bad</BadButton>
          <GoodButton>Good</GoodButton>
        </Buttons>
      </Wrapper>
    </div>
  );
}

export default Play;

const Wrapper = styled.div`
  background-image: url(/backgroundImage/questionBackground.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  `;

const QuestionArea = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 1000px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Question = styled.p`
  font-size: 1.8rem;
  color: #333;
  padding-top: 40px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 150px;
  margin-top: 50px;
`;
const GoodButton = styled.button`
  color: #fff;
  font-weight: 800;
  background-color: #3cb371;
  border-radius: 50%;
  line-height: 150px;
  width: 150px;
  height: 150px;
  padding: 0;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2e8b57;
  }
`;

const BadButton = styled.button`
  color: #fff;
  font-weight: 800;
  background-color: #dc143c;
  border-radius: 50%;
  line-height: 150px;
  width: 150px;
  height: 150px;
  padding: 0;
  font-size: 1.5rem;
  transition: background-color 0.8s;
  &:hover {
    background-color: #a10b2d;
  }
`;
