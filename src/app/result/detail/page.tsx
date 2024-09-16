'use client';

import styled from 'styled-components';
import React from 'react';
import { SimpleSlider } from '@/components/features/SimpleSlider';
import { useResult } from '@/usecases/useResult';
import Loader from '@/components/features/Loader';
import { ResultNothing } from '@/components/features/ResultNothing';
import { PageTransition } from '@/components/PageTransition';
import { motion } from 'framer-motion';

const ResultDetail = () => {
  const { parsedScores, resultedId, loading, timeout } =
    useResult();

  // ローディング中の画面
  if (loading) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  }

  // 1.5秒経過してクッキーが取得できなかった場合
  if (!parsedScores && timeout) {
    return <ResultNothing />;
  }
  return (
    <Wrapper {...PageTransition}>
      <SimpleSlider />
    </Wrapper>
  );
};

export default ResultDetail;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled(motion.div)`
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
