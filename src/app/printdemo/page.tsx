'use client';

import { PrintButton } from '@/components/features/PrintButton';
import React from 'react';
import styled from 'styled-components';

function PrintDemo() {
  return (
    <div>
      <Wrapper>
        <Title>印刷機能デモ</Title>
        <PrintButton />
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
