'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function ResultCECA() {
  return (
    <div>
      <Wrapper>
        <Title>診断結果一覧</Title>
        <Content>
          <SectionTitle>保守的な経済統制派</SectionTitle>
          <CardWrapper>
            <Card>
              <Avator 
              src = '/static.jpeg'
              alt = "EACN">
              </Avator>
              <Label>EACN</Label>
            </Card>
            <Card>
              <Avator
              src = '/static.jpeg'
              alt = "PACI">
              </Avator>
              <Label>PACI</Label>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
              <Avator 
              src = '/static.jpeg'
              alt = "PACn">
              </Avator>
              <Label>PACN</Label>
            </Card>
            <Card>
              <Avator
              src = '/static.jpeg'
              alt = "PLCL">
              </Avator>
              <Label>PLCL</Label>
            </Card>
            </CardWrapper>
        </Content>
      </Wrapper>
    </div>
  );
};

export default ResultCECA;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
  font-size: 1.5rem;
`;


const Content = styled.div`
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 150px;
  padding: 0;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Avator = styled.img` 
  width: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  max-witdth: 150px; 
`;

const Label = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  margin: 0 auto;
  text-align: center;
`