import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'pptornado2024',
  apiKey: process.env.MICROCMS_API_KEY as string,
});
