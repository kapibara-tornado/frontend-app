'use client';

import React from 'react';
import styled from 'styled-components';
import { TypeCard } from '../../components/features/TypeCard';
import { SimilarPoliticianCard } from '../../components/features/SimilarPoliticianCard';
import { BackgroundImage } from '../../components/features/BackgroundImage';
import { getCookie } from '@/lib/Cookie/client';

//診断結果ページ
function Result() {
  //BackgroundImage、Typecard、SimilarPoliticianCardにidを渡す
  const scores = getCookie('scores');

  // TODO: scoresからどの政治家に近いかを判定する処理を追加

  const id = 2;
  return (
    <div>
      <Wrapper>
        {scores ? (
          <BackgroundImage id={id}>
            <Title>診断結果</Title>
            <Container>
              <TypeCard id={id}></TypeCard>
              <SimilarPoliticianCard
                id={id}
              ></SimilarPoliticianCard>
            </Container>
          </BackgroundImage>
        ) : (
          <div>診断結果がありません</div>
        )}
      </Wrapper>
    </div>
  );
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
