'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PrintButton from '@/components/features/PrintButton';

function PrintDemo() {
  return(
    <div>
      <Wrapper>
        <Title>印刷機能デモ</Title>
        <PrintButton/>
      </Wrapper>
    </div>
  );
}

export default PrintDemo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
  font-size: 3rem;
`;

const Printbutton = styled.button`
  background-color: red;
  border: 2px solid red;
  color: white;
  font-size: 1.5rem;
  padding: 3px 6px;
  cursor: pointer;
  text-align: center;
  border-radius: 15px; 
  line-height: 1.5;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: darkred;
  }

  &:active {
    background-color: #a00000;
    transform: scale(0.95);
  }
`;