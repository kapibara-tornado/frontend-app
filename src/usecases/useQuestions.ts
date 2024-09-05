import { useState } from 'react';
import { Question } from '../types/types';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/lib/Cookie/client';

export const useQuestions = (questions: Question[]) => {
  const router = useRouter();
  // 現在の質問のインデックス
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [scores, setScores] = useState({
    E: 0,
    P: 0,
    A: 0,
    S: 0,
    L: 0,
    C: 0,
    I: 0,
    N: 0,
  });

  // 現在の質問
  const currentQuestion = questions[currentQuestionIndex];

  const onClickGoodHandler = () => {
    const updatedScores = { ...scores };

    currentQuestion.options.yes.forEach((option) => {
      updatedScores[option.value] += option.point;
    });

    // スコアを更新
    setScores(updatedScores);
    // 次の質問へ
    if (currentQuestionIndex >= questions.length - 1) {
      setCookie(
        'scores',
        JSON.stringify(updatedScores),
        30
      );
      router.push('/result');
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onClickBadHandler = () => {
    const updatedScores = { ...scores };

    currentQuestion.options.no.forEach((option) => {
      updatedScores[option.value] += option.point;
    });

    // スコアを更新
    setScores(updatedScores);
    // 次の質問へ
    if (currentQuestionIndex >= questions.length - 1) {
      setCookie(
        'scores',
        JSON.stringify(updatedScores),
        30
      );
      router.push('/result');
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    currentQuestion,
    scores,
    onClickGoodHandler,
    onClickBadHandler,
  };
};
