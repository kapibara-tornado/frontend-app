import styled from 'styled-components';
import { Progress } from '@/components/ui/progress';

type Props = {
  progress: number; // プログレスの割合 (0-100)
  currentQuestionIndex: number; // 現在の質問番号
  totalQuestions: number; // 総質問数
};

export const ProgressBarWithCount = ({
  progress,
  currentQuestionIndex,
  totalQuestions,
}: Props) => {
  return (
    <ProgressContainer>
      <QuestionCount>
        {currentQuestionIndex + 1}/{totalQuestions}
      </QuestionCount>
      <Progress value={progress} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
`;

const QuestionCount = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 10px 0;
`;
