'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Play() {
  return (
    <div>
      <Wrapper>
        <Card>
          <Question>
            この質問はテストです。この質問はテストです。
          </Question>
        </Card>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 120vh;
  background-color: #f0ffff;
  padding-top: 100px;
  padding-bottom: 150px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 700px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

const Question = styled.p`
  font-size: 1.8rem;
  color: #333;
`;

const Buttons = styled.div`
  display: flex;
  gap: 100px;
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
`;
