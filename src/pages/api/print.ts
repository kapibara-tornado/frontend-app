// 型定義
interface AuthResponse {
  subject_id: string;
  access_token: string;
}

interface JobResponse {
  id: string;
  upload_uri: string;
}

interface ErrorResponse {
  error: string;
}

// pages/api/print.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import https from 'https';

const host = process.env.PRINTER_HOST || ''; // ライセンス発行時に提供されるホスト
const accept = 'application/json;charset=utf-8';
const protocol = '1.1';

const client_id = process.env.CLIENT_ID || '';
const secret = process.env.SECRET || '';
const device = process.env.DEVICE || '';

const auth = Buffer.from(`${client_id}:${secret}`).toString('base64');

// https.Agent インスタンスを作成
const agent = new https.Agent({ rejectUnauthorized: false });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('印刷リクエスト受信');

    // 1. 認証
    const auth_uri = `https://${host}/api/1/printing/oauth2/auth/token?subject=printer`;
    const query_param = new URLSearchParams({
      grant_type: 'password',
      username: device,
      password: ''
    }).toString();

    const authResponse = await axios.post<AuthResponse>(auth_uri, query_param, {
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Basic ${auth}`,
        'Content-Length': query_param.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      httpsAgent: agent // httpsAgent を追加
    });

    console.log('認証レスポンス:', authResponse.data);

    if (authResponse.status !== 200) {
      throw new Error('認証に失敗しました');
    }

    const { subject_id, access_token } = authResponse.data;

    // 2. 印刷ジョブの作成
    const job_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs`;
    const jobData = {
      job_name: 'SampleJob1',
      print_mode: 'document'
    };

    const jobResponse = await axios.post<JobResponse>(job_uri, jobData, {
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Bearer ${access_token}`,
        'Content-Length': JSON.stringify(jobData).length,
        'Content-Type': 'application/json;charset=utf-8'
      },
      httpsAgent: agent // httpsAgent を追加
    });

    console.log('印刷ジョブレスポンス:', jobResponse.data);

    if (jobResponse.status !== 201) {
      throw new Error('印刷ジョブの作成に失敗しました');
    }

    const { id: job_id, upload_uri: base_uri } = jobResponse.data;

    // 3. 印刷ファイルのアップロード
    const local_file_path = 'src/utils/epson/SampleDoc.pdf'; // このパスがサーバーでアクセス可能であることを確認してください
    const content_type = 'application/octet-stream';
    const file_name = `1.${local_file_path.split('.').pop()}`;
    const upload_uri = `${base_uri}&File=${file_name}`;

    const fileData = fs.readFileSync(local_file_path);

    const uploadResponse = await axios.post(upload_uri, fileData, {
      headers: {
        'Host': host,
        'Accept': accept,
        'Content-Length': fileData.length,
        'Content-Type': content_type
      },
      httpsAgent: agent // httpsAgent を追加
    });

    console.log('ファイルアップロードレスポンス:', uploadResponse.data);

    if (uploadResponse.status !== 200) {
      throw new Error('ファイルのアップロードに失敗しました');
    }

    // 4. 印刷の実行
    const print_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs/${job_id}/print`;

    const printResponse = await axios.post(print_uri, null, {
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Bearer ${access_token}`
      },
      httpsAgent: agent // httpsAgent を追加
    });

    console.log('印刷実行レスポンス:', printResponse.data);

    if (printResponse.status !== 200) {
      throw new Error('印刷の実行に失敗しました');
    }

    res.status(200).json({ message: '印刷ジョブが正常に実行されました' });

  } catch (error) {
    console.error('エラー:', error);
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    res.status(500).json({ error: errorMessage });
  }
}

export default handler;