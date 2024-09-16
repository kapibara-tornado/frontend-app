'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { questions } from '../data/questions';
import { useQuestions } from '@/usecases/useQuestions';
import { ProgressBarWithCount } from '@/components/features/ProgressBarWithCount';
import { BREAKPOINTS } from '@/components/Responsive';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PageTransition } from '@/components/PageTransition';

// 質問回答画面
function Play() {
  const {
    currentQuestion,
    currentQuestionIndex,
    onClickBadHandler,
    onClickGoodHandler,
  } = useQuestions(questions);

  const totalQuestions = questions.length; // 総質問数

  const progress =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const [swipeDirection, setSwipeDirection] = useState<
    'left' | 'right' | null
  >(null);

  const [isMobile, setIsMobile] = useState(false);

  const swipeVariants = {
    hidden: { x: 0, opacity: 1 },
    swipeLeft: { x: '-60vw', opacity: 0 },
    swipeRight: { x: '60vw', opacity: 0 },
  };

  useEffect(() => {
    // モバイル判定
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(BREAKPOINTS.SP));
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBadClick = () => {
    if (isMobile) {
      setSwipeDirection('left');
      setTimeout(() => {
        onClickBadHandler();
        setSwipeDirection(null);
      }, 500);
    } else {
      onClickBadHandler();
    }
  };

  const handleGoodClick = () => {
    if (isMobile) { 
      setSwipeDirection('right');
      setTimeout(() => {
        onClickGoodHandler();
        setSwipeDirection(null);
      }, 500);
    } else {
      onClickGoodHandler();
    }
  };

  return (
    <Wrapper {...PageTransition}>
      <ProgressBarWithCount
        progress={progress}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <QuestionArea
        variants={swipeVariants}
        animate={
          isMobile && swipeDirection
            ? swipeDirection === 'right'
              ? 'swipeRight'
              : 'swipeLeft'
            : 'hidden'
        }
        initial="hidden"
      >
        <ImageWrapper>
          <Image
            src={currentQuestion.questionImage}
            width={200}
            height={200}
            alt={currentQuestion.questionAlt}
          />
        </ImageWrapper>
        <Question>{currentQuestion.question}</Question>
      </QuestionArea>
      <Buttons>
        <BadButton onClick={handleBadClick}>
          <Image
            src={'/buttons/badbutton.png'}
            alt="badbutton"
            width={120}
            height={120}
          />
        </BadButton>
        <GoodButton onClick={handleGoodClick}>
          <Image
            src={'/buttons/goodbutton.png'}
            alt="badbutton"
            width={120}
            height={120}
          />
        </GoodButton>
      </Buttons>
    </Wrapper>
  );
}

export default Play;

const Wrapper = styled(motion.div)`
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
  position: relative;
  overflow: hidden;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    padding: 30px;
  }
`;

const QuestionArea = styled(motion.div)`
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
  justify-content: center;
  margin-top: 40px;
  gap: 200px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    gap: 70px;
  }
`;

const GoodButton = styled.button`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${BREAKPOINTS.SP}) {
      transform: none;
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 80px;
    height: 80px;

    &:active {
      transform: scale(0.9);
    }
  }
`;

const BadButton = styled.button`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${BREAKPOINTS.SP}) {
      transform: none;
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 80px;
    height: 80px;

    &:active {
      transform: scale(0.9);
    }
  }
`;
