import { getCookie } from '@/lib/Cookie/client';
import { Scores } from '@/types/types';
import { getMBTIId } from '@/utils/getMBTIId';
import { useEffect, useState } from 'react';

export const useResult = () => {
  const [parsedScores, setParsedScores] =
    useState<Scores>();
  const [resultedId, setResultedId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);
  const [timeout, setTimeoutReached] =
    useState<boolean>(false);

  useEffect(() => {
    const scores = getCookie('scores');

    // 1.5秒間のタイムアウトを設定
    const timeoutId = setTimeout(() => {
      setTimeoutReached(true);
      setLoading(false);
    }, 1500);

    if (scores) {
      try {
        const parsed = JSON.parse(scores);
        setParsedScores(parsed);
        const id = getMBTIId(parsed);
        setResultedId(id);
        setLoading(false); // クッキーが見つかったらローディングを終了
        clearTimeout(timeoutId); // タイムアウトを解除
      } catch (error) {
        console.error('Failed to parse scores:', error);
        setLoading(false);
        clearTimeout(timeoutId);
      }
    }
  }, []);

  return { parsedScores, resultedId, loading, timeout };
};
