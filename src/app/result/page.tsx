'use client';

import React from 'react';
import styled from 'styled-components';
import { TypeCard } from '../../components/features/TypeCard';
import { SimilarPoliticianCard } from '../../components/features/SimilarPoliticianCard';
import { BackgroundImage } from '../../components/features/BackgroundImage';

//診断結果ページ
function Page() {
  //BackgroundImage、Typecard、SimilarPoliticianCardにidを渡す
  const id = 2;
  return (
    <div>
      <Wrapper>
        <BackgroundImage id={id}>
          <Title>診断結果</Title>
          <Container>
            <TypeCard id={id}></TypeCard>
            <SimilarPoliticianCard
              id={id}
            ></SimilarPoliticianCard>
          </Container>
        </BackgroundImage>
      </Wrapper>
    </div>
  );
}

export default Page;

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
