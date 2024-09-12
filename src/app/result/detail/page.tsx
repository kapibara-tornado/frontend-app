'use client';

import styled from 'styled-components';
import React from 'react';
import { SimpleSlider } from '@/components/features/SimpleSlider';

const ResultDetail = () => {
  return (
    <Wrapper>
      <SimpleSlider />
    </Wrapper>
  );
};

export default ResultDetail;

const Wrapper = styled.div`
  background-image: url('/backgroundImage/resultDetailBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
