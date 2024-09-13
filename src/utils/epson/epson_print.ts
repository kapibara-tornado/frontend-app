'use server';

import fs from 'fs';

const host = process.env.PRINTER_HOST || ''; // e.g. xxxx.xxxxx.xxx
const client_id = process.env.CLIENT_ID || ''; // Your client ID
const secret = process.env.SECRET || ''; // Your secret
const device = process.env.DEVICE || ''; // Your device ID
const accept = 'application/json;charset=utf-8';
const protocol = '1.1';

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

  console.log('HOST:', host);
  console.log('AUTH_URI:', auth_uri);

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
    throw new Error('Failed to authenticate');

  const result = (await response.json()) as AuthResponse;
  console.log('認証完了');

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
    throw new Error('Failed to create print job');

  const result =
    (await response.json()) as PrintJobResponse;
  console.log('印刷ジョブ作成完了');

  return result;
};

// 3. ファイルをアップロード
const uploadFile = async (
  access_token: string,
  base_uri: string,
  pdfData: Buffer
) => {
  const fileName = 'kapibara_tornado.pdf';
  const upload_uri = `${base_uri}&File=${fileName}`;

  // TODO: ここでおちてる
  const response = await fetch(upload_uri, {
    method: 'POST',
    headers: {
      Host: host,
      Accept: accept,
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/octet-stream',
    },
    body: pdfData,
  });

  if (response.status !== 200)
    throw new Error('Failed to upload file');

  const result = await response.json();
  console.log('ファイルアップロード完了');

  return result;
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
  console.log('印刷実行完了');

  return result;
};

// ============================== 本体 ==================================
// 印刷ジョブを処理する例
export const handlePrintJob = async () => {
  try {
    const authResult = await authenticate();
    const { access_token, subject_id } = authResult;

    const printJobResult = await createPrintJob(
      access_token,
      subject_id
    );
    const { upload_uri, id: job_id } = printJobResult;

    console.log('upload_uri:', upload_uri);
    await uploadFile(
      access_token,
      upload_uri,
      fs.readFileSync('src/utils/epson/SampleDoc.pdf')
    ); // ファイルパスを調整

    const printResult = await executePrint(
      access_token,
      subject_id,
      job_id
    );
    return printResult;
  } catch (error) {
    console.error('Print job failed:', error);
  }
};
