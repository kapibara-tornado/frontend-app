import { client } from '..';

export const getBgHome = async () => {
  const data = await client.get({
    endpoint: 'kapibara-tornado-bg',
    contentId: 'uw0n8mkgp9l',
  });
};
