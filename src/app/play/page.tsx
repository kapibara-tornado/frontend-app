'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { questions } from '../data/questions';
import { useQuestions } from '@/usecases/useQuestions';
import { ProgressBarWithCount } from '@/components/features/ProgressBarWithCount';
import { BREAKPOINTS } from '@/components/Responsive';

//質問回答画面
function Play() {
  const {
    currentQuestion,
    currentQuestionIndex,
    onClickBadHandler,
    onClickGoodHandler,
  } = useQuestions(questions);

  const totalQuestions = questions.length; //総質問数

  const progress =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <Wrapper>
      <ProgressBarWithCount
        progress={progress}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <QuestionArea>
        <ImageWrapper>
          <Image
            src="/static.jpeg"
            width={300}
            height={200}
            alt="sample"
          />
        </ImageWrapper>
        <Question>{currentQuestion.question}</Question>
      </QuestionArea>
      <Buttons>
        <BadButton onClick={onClickBadHandler}>
          Bad
        </BadButton>
        <GoodButton onClick={onClickGoodHandler}>
          Good
        </GoodButton>
      </Buttons>
    </Wrapper>
  );
}

export default Play;

const Wrapper = styled.div`
  background-image: url('/backgroundImage/questionBackground.png');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 60px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    padding: 30px;
  }
`;

const QuestionArea = styled.div`
  background-color: #fff;
  border-radius: 27px;
  padding: 40px;
  border-top: 10px solid #cff4f9;
  border-bottom: 10px solid #cff4f9;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Question = styled.p`
  font-size: 1.8rem;
  color: #333;
  padding-top: 40px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1.4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 50px;
`;
const GoodButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  background-color: #3cb371;
  border-radius: 50%;
  line-height: 150px;
  width: 150px;
  height: 150px;
  padding: 0;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2e8b57;
  }

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 64px;
    height: 64px;
    font-size: 1rem;
  }
`;

const BadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  background-color: #dc143c;
  border-radius: 50%;
  line-height: 150px;
  width: 150px;
  height: 150px;
  padding: 0;
  font-size: 1.5rem;
  transition: background-color 0.8s;
  &:hover {
    background-color: #a10b2d;
  }

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 64px;
    height: 64px;
    font-size: 1rem;
  }
`;
