// components/PrintButton.tsx

import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PrintButton: React.FC = () => {
//   const handlePrint = async () => {
//     try {
//       // APIルートにリクエストを送信して印刷を開始する
//       const response = await fetch('api/print', {
//         method: 'POST',
//       });

//       if (!response.ok) {
//         throw new Error('印刷ジョブの開始に失敗しました');
//       }

//       const result = await response.json();
//       console.log('印刷ジョブが正常に開始されました:', result);
//       alert('印刷ジョブが正常に開始されました');
//     } catch (error) {
//       console.error('印刷ジョブの開始中にエラーが発生しました:', error);
//       alert('印刷ジョブの開始中にエラーが発生しました');
//     }
//   };
const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
const handlePrint = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/print');
      if (response.status === 200) {
        alert('印刷ジョブが正常に実行されました');
      } else {
        setError('印刷ジョブの実行に失敗しました');
      }
    } catch (err) {
      setError('印刷ジョブの実行中にエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Printbutton onClick={handlePrint} disabled={loading}>
       診断結果<br />Print
    </Printbutton>
  );
};

export default PrintButton;

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
