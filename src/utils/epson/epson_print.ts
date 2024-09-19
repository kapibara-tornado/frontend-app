'use server';

import * as https from 'https';

const host = process.env.PRINTER_HOST || '';
const client_id = process.env.CLIENT_ID || '';
const secret = process.env.SECRET || '';
const device = process.env.DEVICE || '';
const accept = 'application/json;charset=utf-8';

// Function for basic auth header
const getAuthHeader = () => {
  const auth = Buffer.from(
    `${client_id}:${secret}`
  ).toString('base64');
  return `Basic ${auth}`;
};

// レスポンスの型を定義
interface AuthResponse {
  access_token: string;
  subject_id: string;
}

interface PrintJobResponse {
  upload_uri: string;
  id: string;
}

// 1. 認証
const authenticate = async (): Promise<AuthResponse> => {
  const auth_uri = `https://${host}/api/1/printing/oauth2/auth/token?subject=printer`;
  const body = new URLSearchParams({
    grant_type: 'password',
    username: device,
    password: '', // 必要に応じて調整
  });

  const response = await fetch(auth_uri, {
    method: 'POST',
    headers: {
      Host: host,
      Accept: accept,
      Authorization: getAuthHeader(),
      'Content-Type':
        'application/x-www-form-urlencoded; charset=utf-8',
    },
    body: body.toString(),
  });

  if (response.status !== 200)
    throw new Error('[1]: Failed to authenticate');

  const result = (await response.json()) as AuthResponse;
  console.log('[OK][1]: 認証完了');

  return result;
};

// 2. 印刷ジョブを作成
const createPrintJob = async (
  access_token: string,
  subject_id: string
): Promise<PrintJobResponse> => {
  const job_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs`;

  const jobData = JSON.stringify({
    job_name: 'SampleJob1',
    print_mode: 'document',
  });

  const response = await fetch(job_uri, {
    method: 'POST',
    headers: {
      Host: host,
      Accept: accept,
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: jobData,
  });

  if (response.status !== 201)
    throw new Error('[2]: Failed to create print job');

  const result =
    (await response.json()) as PrintJobResponse;
  console.log('[OK][2]: 印刷ジョブ作成完了');

  return result;
};

// 3. ファイルをアップロード
const uploadFile = async (
  access_token: string,
  base_uri: string,
  buffer: Buffer,
  subject_id: string,
  job_id: string
) => {
  const fileName = '1.pdf';
  const upload_uri = `${base_uri}&File=${fileName}`;

  const maxFileSize = 20 * 1024 * 1024; // 20MB

  // ファイルサイズをチェック
  if (buffer.length > maxFileSize) {
    console.error('[3]: File size exceeds the limit');
    process.exit(1);
  }
  console.log('[OK][3-1]: ファイルサイズチェック完了');

  // HTTPリクエストオプションを設定
  const options: https.RequestOptions = {
    method: 'POST',
    headers: {
      Host: host,
      Accept: accept,
      Authorization: `Bearer ${access_token}`,
      'Content-Length': buffer.length,
      'Content-Type': 'application/octet-stream',
    },
  };

  const req = https.request(upload_uri, options, (res) => {
    let responseBody = '';

    // データを受け取る
    res.on('data', (chunk) => {
      responseBody += chunk;
    });

    // レスポンスの処理完了時
    res.on('end', async () => {
      console.log('[OK][3-2]ファイルアップロード完了');

      // HTTPステータスコードの確認
      if (res.statusCode !== 200) {
        console.error(
          'Upload failed with status code:',
          res.statusCode
        );
        process.exit(1);
      } else {
        const printResult = await executePrint(
          access_token,
          subject_id,
          job_id
        );
        return printResult;
      }
    });
  });

  // リクエストのエラー処理
  req.on('error', (error) => {
    console.error('[3]', error);
    process.exit(1);
  });

  req.write(buffer);
  req.end();
};

// 4. 印刷を実行
const executePrint = async (
  access_token: string,
  subject_id: string,
  job_id: string
) => {
  const print_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs/${job_id}/print`;

  const response = await fetch(print_uri, {
    method: 'POST',
    headers: {
      Host: host,
      Accept: accept,
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status !== 200)
    throw new Error('Failed to execute print');

  const result = await response.json();
  console.log('[OK][4]: 印刷実行完了');

  return result;
};

// 印刷ジョブを処理する例
export const handlePrintJob = async (base64: string) => {
  try {
    const buffer = Buffer.from(base64, 'base64');
    const authResult = await authenticate();
    const { access_token, subject_id } = authResult;

    const printJobResult = await createPrintJob(
      access_token,
      subject_id
    );
    const { upload_uri, id: job_id } = printJobResult;

    await uploadFile(
      access_token,
      upload_uri,
      buffer,
      subject_id,
      job_id
    );
  } catch (error) {
    console.error('Print job failed:', error);
  }
};
