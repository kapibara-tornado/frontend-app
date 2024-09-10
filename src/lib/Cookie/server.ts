'use server';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * サーバーサイドでのクッキー操作
 * - 使用例: サーバーサイドでの認証情報の保持
 */

/**
 * クッキーを取得する
 */
export const getServerSideCookie = (
  req: NextApiRequest,
  key: string
): string | undefined => {
  const cookie = req.headers.cookie
    ?.split('; ')
    .find((c) => c.startsWith(`${key}=`));

  return cookie?.split('=')[1];
};

/**
 * クッキーをセットする
 */
export const setServerSideCookie = (
  res: NextApiResponse,
  key: string,
  value: string,
  maxAgeSeconds: number
) => {
  res.setHeader(
    'Set-Cookie',
    `${key}=${value}; Path=/; HttpOnly; Max-Age=${maxAgeSeconds}`
  );
};

/**
 * クッキーを削除する
 */
export const deleteServerSideCookie = (
  res: NextApiResponse,
  key: string
) => {
  res.setHeader(
    'Set-Cookie',
    `${key}=; Path=/; HttpOnly; Max-Age=0`
  );
};
