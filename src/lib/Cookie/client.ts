import Cookies from 'js-cookie';

/**
 * クライアントサイドでのクッキー操作
 * - 使用例: ユーザーが即時にクッキーを利用する場合
 * クッキーが取られたり書き換えられたりしても問題ない情報のみを保存すること
 */

/**
 * クッキーを取得する
 */
export const getCookie = (
  key: string
): string | undefined => {
  return Cookies.get(key);
};

/**
 * クッキーをセットする
 */
export const setCookie = (
  key: string,
  value: string,
  expiresDays: number
) => {
  Cookies.set(key, value, { expires: expiresDays });
};

/**
 * クッキーを削除する
 */
export const deleteCookie = (key: string) => {
  Cookies.remove(key);
};
