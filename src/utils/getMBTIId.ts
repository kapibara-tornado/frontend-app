'use client';

import { Scores } from '@/types/types';

// 1 EACN (Economic, Authoritarian, Conservative, Nationalist)
// 2 EACI (Economic, Authoritarian, Conservative, Internationalist)
// 3 EALN (Economic, Authoritarian, Liberal, Nationalist)
// 4 EALI (Economic, Authoritarian, Liberal, Internationalist)
// 5 ELCN (Economic, Libertarian, Conservative, Nationalist)
// 6 ELCI (Economic, Libertarian, Conservative, Internationalist)
// 7 ELLN (Economic, Libertarian, Liberal, Nationalist)
// 8 ELLI (Economic, Libertarian, Liberal, Internationalist)
// 9 PACN (Progressive, Authoritarian, Conservative, Nationalist)
// 10 PACI (Progressive, Authoritarian, Conservative, Internationalist)
// 11 PALN (Progressive, Authoritarian, Liberal, Nationalist)
// 12 PALI (Progressive, Authoritarian, Liberal, Internationalist)
// 13 PLCN (Progressive, Libertarian, Conservative, Nationalist)
// 14 PLCI (Progressive, Libertarian, Conservative, Internationalist)
// 15 PLLN (Progressive,  Libertarian, Liberal, Nationalist)
// 16 PLLI (Progressive, Libertarian, Liberal, Internationalist)

// E vs P
// A vs S
// C vs L
// I vs N


export const getMBTIId = (scores: Scores | undefined) => {
  if (!scores) {
    return 1;
  }
  const { E, P, A, S, L, C, I, N } = scores;
  if (E > P && A > S && C > L && I < N) {
    return 1;
  }
  if (E > P && A > S && C > L && I > N) {
    return 2;
  }
  if (E > P && A > S && C < L && I < N) {
    return 3;
  }
  if (E > P && A > S && C < L && I > N) {
    return 4;
  }
  if (E > P && A < S && C > L && I < N) {
    return 5;
  }
  if (E > P && A < S && C > L && I > N) {
    return 6;
  }
  if (E > P && A < S && C < L && I < N) {
    return 7;
  }
  if (E > P && A < S && C < L && I > N) {
    return 8;
  }
  if (E < P && A > S && C > L && I < N) {
    return 9;
  }
  if (E < P && A > S && C > L && I > N) {
    return 10;
  }
  if (E < P && A > S && C < L && I < N) {
    return 11;
  }
  if (E < P && A > S && C < L && I > N) {
    return 12;
  }
  if (E < P && A < S && C > L && I < N) {
    return 13;
  }
  if (E < P && A < S && C > L && I > N) {
    return 14;
  }
  if (E < P && A < S && C < L && I < N) {
    return 15;
  }
  if (E < P && A < S && C < L && I > N) {
    return 16;
  }
  return 1;
};
