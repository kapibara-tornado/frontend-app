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
import Image from 'next/image';


// 診断結果ページ
function List() {
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
    return (
    <Wrapper>
      <BackgroundImage resultedId={0}>
        <DefaultContainer>
          <ImageWrapper>
            <Image
            src="/badkapibara.png"
            width={300}
            height={200}
            alt="kapibara"
            />
          </ImageWrapper>
        </DefaultContainer>
          <TextContainer>
          <ConceptText>
            <NoBreakText>
              診断できませんでした
            </NoBreakText>
            <br />
            <NoBreakText>
              もう一度お試しください
            </NoBreakText>
          </ConceptText>
          </TextContainer>
      </BackgroundImage>
    </Wrapper>
  );
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

export default List;

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

const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  bottom: 0;
  
  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 70%;
    padding-top: 100px;
    justify-content: center;
    padding-bottom: 5px;
    margin-bottom: 10px;
    padding-top: -50px;
    margin: 0 auto;
    z-index: 2;
  }
`;

const TextContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 27px;
  text-align: center;
  width: 100%;
  margin: -15px auto;
  max-width: 600px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  z-index: 1;

  @media screen and (max-width: ${BREAKPOINTS.SP}){
    display: flex;
    background-color: #fff;
    border-radius: 27px;
    text-align: center;
    width: 80%;
    margin: -15px auto;
    max-width: 500px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-break: break-all;
    z-index: 1;
  }
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 2.5rem;
  font-style: normal;
  padding-left: 70px;
  padding-right: 70px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

// 改行させない文字
const NoBreakText = styled.span`
  white-space: nowrap;
`;