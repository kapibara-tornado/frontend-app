'use client';
import { handlePrintJob } from '@/utils/epson/epson_print';
import { useState } from 'react';
import styled from 'styled-components';

export const PrintButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePrint = async () => {
    setLoading(true);
    await handlePrintJob();
    setLoading(false);
  };

  return (
    <Printbutton onClick={handlePrint} disabled={loading}>
      診断結果
      <br />
      Print
    </Printbutton>
  );
};

const Printbutton = styled.button`
  background-color: red;
  border: 2px solid red;
  color: white;
  font-size: 1.5rem;
  padding: 3px 6px;
  cursor: pointer;
  text-align: center;
  border-radius: 15px;
  line-height: 1.5;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: darkred;
  }

  &:active {
    background-color: #a00000;
    transform: scale(0.95);
  }
`;
