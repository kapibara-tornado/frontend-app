'use client';

import styled from 'styled-components';
import { TypeCard } from '../../components/features/TypeCard';
import { SimilarPoliticianCard } from '../../components/features/SimilarPoliticianCard';
import { BackgroundImage } from '../../components/features/BackgroundImage';
import { useResult } from '@/usecases/useResult';
import Loader from '@/components/features/Loader';
import { BREAKPOINTS } from '@/components/Responsive';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// 診断結果ページ
function Result() {
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

        <CenterText>
          <Link href={`/result/detail`}>
            <Button
              variant="outline"
              className="bg-[#33679a] text-white p-6 rounded-md text-center"
            >
              診断結果詳細へ
            </Button>
          </Link>
        </CenterText>
      </BackgroundImage>
    </Wrapper>
  );
}

export default Result;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  padding: 80px 0 40px 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;
