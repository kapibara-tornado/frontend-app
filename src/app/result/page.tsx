'use client';

import styled from 'styled-components';
import { TypeCard } from '../../components/features/TypeCard';
import { SimilarPoliticianCard } from '../../components/features/SimilarPoliticianCard';
import { BackgroundImage } from '../../components/features/BackgroundImage';
import { useResult } from '@/usecases/useResult';
import Link from 'next/link';

// 診断結果ページ
function Result() {
  const { parsedScores, resultedId, loading, timeout } =
    useResult();

  // ローディング中の画面
  if (loading) {
    return <div>Loading...</div>;
  }

  // 1.5秒経過してクッキーが取得できなかった場合
  if (
    !parsedScores ||
    resultedId === undefined ||
    timeout
  ) {
    return <div>診断結果がありません</div>;
  }

  return (
    <Wrapper>
      <BackgroundImage resultedId={resultedId}>
        <Title>診断結果</Title>
        <Container>
          <TypeCard id={resultedId} />
          <SimilarPoliticianCard id={resultedId} />
        </Container>
      </BackgroundImage>
    </Wrapper>
  );
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 50px;
  margin-top: 30px;
`;

const Title = styled.h1`
  text-align: left;
  padding-top: 100px;
  padding-left: 250px;
  font-size: 3rem;
`;
