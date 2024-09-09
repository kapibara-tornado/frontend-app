import React from 'react';
import styled from 'styled-components';


const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  position: relative;
  width: 50%;
`;


const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px; 
  margin-top: 10px;
  position: relative;
`;


const Progress = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 20px;
  background-color: #76c7c0;
  transition: width 0.5s ease;
`;


const QuestionCount = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

type ProgressBarProps = {
  progress: number; // プログレスの割合 (0-100)
  currentQuestion: number; // 現在の質問番号
  totalQuestions: number; // 総質問数
};

const ProgressBarWithCount: React.FC<ProgressBarProps> = ({ progress, currentQuestion, totalQuestions }) => {
  return (
    <ProgressContainer>
      <ProgressBarContainer>
        <Progress progress={progress} />
      </ProgressBarContainer>
      <QuestionCount>
        {currentQuestion}/{totalQuestions}
      </QuestionCount>
    </ProgressContainer>
  );
};

export default ProgressBarWithCount;
