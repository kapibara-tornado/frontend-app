'use client';

import styled from 'styled-components';
import { PrintButton } from '@/components/features/PrintButton';
import { usePrintDocument } from './hooks/printDocument';
import { useEffect, useState } from 'react';

function PrintDemo() {
  const [input, setInput] =
    useState<HTMLCollectionOf<Element> | null>(null);
  const { printDocument, loading } =
    usePrintDocument(input);

  useEffect(() => {
    setInput(
      document.getElementsByClassName('invoicePages')
    );
  }, []);

  // エプソンからのQA後に本番環境でも印刷可能にする
  const printDocumentHandler = async () => {
    if (process.env.NODE_ENV === 'development') {
      await printDocument();
    } else {
      alert('印刷機能は開発環境のみ利用可能です');
    }
  };

  return (
    <div>
      <Wrapper>
        <Title>印刷機能デモ</Title>

        <PrintButton
          onClick={printDocumentHandler}
          loading={loading}
        />

        <div className="invoicePages" id="invoicePageOne">
          <h1>トルネードハッカソン</h1>
          <p>カピバラ</p>
        </div>
      </Wrapper>
    </div>
  );
}

export default PrintDemo;

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
