'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function ListResult() {
  return (
    <div>
      <Wrapper>
        <Title>診断結果一覧</Title>
        <Content>
          <SectionTitle>保守的な経済統制派</SectionTitle>
          <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/EACN.jpeg'
              alt = "EACN">
              </Avator>
              <Label>EACN</Label>
              <Label>経済的保守主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PACN.jpeg'
              alt = "PACN">
              </Avator>
              <Label>PACN</Label>
              <Label>進歩的保守主義者</Label>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/EACI.jpeg'
              alt = "EACI">
              </Avator>
              <Label>EACI</Label>
              <Label>国際経済保守主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PACI.jpeg'
              alt = "PACI">
              </Avator>
              <Label>PACI</Label>
              <Label>国際進歩的保守主義者</Label>
            </Card>
            </CardWrapper>
        </Content>
        <Content>
          <SectionTitle>自由市場主義派</SectionTitle>
          <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/ELCN.jpeg'
              alt = "ELCN">
              </Avator>
              <Label>ELCN</Label>
              <Label>自由市場国家主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PLCN.jpeg'
              alt = "PLCN">
              </Avator>
              <Label>PLCN</Label>
              <Label>自由主義保守主義者</Label>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/ELCI.jpeg'
              alt = "ELCI">
              </Avator>
              <Label>ELCI</Label>
              <Label>自由市場国際主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PLCI.jpeg'
              alt = "PLCI">
              </Avator>
              <Label>PLCI</Label>
              <Label>国際自由主義保守主義者</Label>
            </Card>
            </CardWrapper>
        </Content>
        <Content>
          <SectionTitle>進歩的国家主義派</SectionTitle>
          <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/EALN.jpeg'
              alt = "EALN">
              </Avator>
              <Label>EALN</Label>
              <Label>経済的国家自由主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/ELLN.jpeg'
              alt = "ELLN">
              </Avator>
              <Label>ELLN</Label>
              <Label>自由主義国家主義者</Label>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/PALN.jpeg'
              alt = "PALN">
              </Avator>
              <Label>PALN</Label>
              <Label>進歩的国家自由主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PLLN.jpeg'
              alt = "PLLN">
              </Avator>
              <Label>PLLN</Label>
              <Label>進歩的自由国家主義者</Label>
            </Card>
            </CardWrapper>
        </Content>
        <Content>
          <SectionTitle>国際協力重視派</SectionTitle>
          <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/EALI.jpg'
              alt = "EALI">
              </Avator>
              <Label>EALI</Label>
              <Label>国際経済自由主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/ELLI.jpeg'
              alt = "ELLI">
              </Avator>
              <Label>ELLI</Label>
              <Label>自由主義国際主義者</Label>
            </Card>
            </CardWrapper>
            <CardWrapper>
            <Card>
              <Avator 
              src = '/Types/PALI.jpeg'
              alt = "PALI">
              </Avator>
              <Label>PALI</Label>
              <Label>国際進歩的自由主義者</Label>
            </Card>
            <Card>
              <Avator
              src = '/Types/PLLI.jpeg'
              alt = "PLLI">
              </Avator>
              <Label>PLLI</Label>
              <Label>国際自由進歩主義者</Label>
            </Card>
            </CardWrapper>
        </Content>
      </Wrapper>
    </div>
  );
};

export default ListResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
  font-size: 3rem;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-top: 200px;
  text-align: center;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin:0 auto;
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
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
`