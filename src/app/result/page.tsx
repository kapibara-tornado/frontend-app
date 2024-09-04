'use client';

import React from 'react';
import styled from 'styled-components';
import TypeCard from '../components/TypeCard';
import SimilarPoliticianCard from '../components/SimilarPoliticianCard';
import BackgroundImage from '../components/BackgroundImage';

//診断結果ページ
function Page() {
  return (
    <div>
      <Wrapper>
        <BackgroundImage id={16}>
        <Title>診断結果</Title>
        <Container>
          <TypeCard id={1}></TypeCard>
          <SimilarPoliticianCard
            id={3}
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
