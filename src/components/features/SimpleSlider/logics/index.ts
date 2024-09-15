import { Scores } from '@/types/types';
export const getScore = (
  i: number,
  parsedScores: Scores
) => {
  switch (i) {
    case 1:
      return parsedScores.E > parsedScores.P
        ? parsedScores.E
        : parsedScores.P;
    case 2:
      return parsedScores.A > parsedScores.S
        ? parsedScores.A
        : parsedScores.S;
    case 3:
      return parsedScores.L > parsedScores.C
        ? parsedScores.L
        : parsedScores.C;
    case 4:
      return parsedScores.I > parsedScores.N
        ? parsedScores.I
        : parsedScores.N;
    default:
      return 1;
  }
};
export const getDirection = (
  i: number,
  parsedScores: Scores
) => {
  switch (i) {
    case 1:
      return parsedScores.E > parsedScores.P
        ? 'left'
        : 'right';
    case 2:
      return parsedScores.A > parsedScores.S
        ? 'left'
        : 'right';
    case 3:
      return parsedScores.C > parsedScores.L
        ? 'left'
        : 'right';
    case 4:
      return parsedScores.N > parsedScores.I
        ? 'left'
        : 'right';
    default:
      return 'left';
  }
};
export const determineIdsBasedOnScores = (
  parsedScores: Scores | undefined
) => {
  if (!parsedScores) return [0, 0, 0, 0];
  const ids = [];
  if (parsedScores.E > parsedScores.P) {
    ids.push(1);
  } else {
    ids.push(2);
  }
  if (parsedScores.A > parsedScores.S) {
    ids.push(3);
  } else {
    ids.push(4);
  }
  if (parsedScores.L > parsedScores.C) {
    ids.push(5);
  } else {
    ids.push(6);
  }
  if (parsedScores.I > parsedScores.N) {
    ids.push(7);
  } else {
    ids.push(8);
  }
  console.log("ids:", ids);
  return ids;
};