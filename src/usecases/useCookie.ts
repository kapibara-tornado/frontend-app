'use client';
import {
  deleteCookie,
  getCookie,
  setCookie,
} from '@/lib/Cookie/client';
import { useState, useEffect } from 'react';

/**
 * クッキーを管理するカスタムフック
 * - クッキーの値を監視し、変更時に状態を更新
 */
export const useCookie = (key: string) => {
  const [cookieValue, setCookieValue] = useState<string>();

  useEffect(() => {
    // クッキーが変更されたら、stateを更新する
    const checkCookieChange = () => {
      const currentCookieValue = getCookie(key);
      if (currentCookieValue !== cookieValue) {
        setCookieValue(currentCookieValue);
      }
    };

    // setIntervalを使用してクッキーの値を監視（1秒ごと）
    const intervalId = setInterval(checkCookieChange, 1000);

    return () => clearInterval(intervalId); // クリーンアップ
  }, [cookieValue, key]);

  // クッキーの値を更新する関数
  const updateCookie = (value: string) => {
    setCookie(key, value, 30);
    setCookieValue(value); // ローカルstateも更新
  };

  // クッキーを削除する関数
  const removeCookie = () => {
    deleteCookie(key);
    setCookieValue(undefined); // ローカルstateをクリア
  };

  return {
    cookieValue,
    updateCookie,
    removeCookie,
  };
};
