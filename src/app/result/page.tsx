'use client';

import React from 'react';
import styled from 'styled-components';
import TypeCard from '../components/TypeCard';
import SimilarPoliticianCard from '../components/SimilarPoliticianCard';

function Page() {
  return (
    <div>
      <Wrapper>
        <Title>診断結果</Title>
        <Container>
          <TypeCard id={1}></TypeCard>
          <SimilarPoliticianCard
            id={3}
          ></SimilarPoliticianCard>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Page;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 50px;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 100px;
  font-size: 3rem;
`;
