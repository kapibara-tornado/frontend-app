"use server";

// Import necessary Node.js modules
import fetch from 'node-fetch'; // Ensure you install 'node-fetch' for server-side fetching
import fs from 'fs';
import path from 'path';

// Get environment variables securely from process.env (make sure these are stored in a .env file)
const host = process.env.PRINTER_HOST || '';  // e.g. xxxx.xxxxx.xxx
const client_id = process.env.CLIENT_ID || ''; // Your client ID
const secret = process.env.SECRET || ''; // Your secret
const device = process.env.DEVICE || ''; // Your device ID
const accept = 'application/json;charset=utf-8';
const protocol = '1.1';

// Function for basic auth header
const getAuthHeader = () => {
  const auth = Buffer.from(`${client_id}:${secret}`).toString('base64');
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
  export async function authenticate(): Promise<AuthResponse> {
    const auth_uri = `https://${host}/api/1/printing/oauth2/auth/token?subject=printer`;

    console.log("HOST:", host);
    console.log("AUTH_URI:", auth_uri);
  
    const body = new URLSearchParams({
      grant_type: 'password',
      username: device,
      password: '',  // 必要に応じて調整
    });
  
    const response = await fetch(auth_uri, {
      method: 'POST',
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: body.toString(),
    });
  
    const result = await response.json() as AuthResponse;
    
    if (response.status !== 200) throw new Error('Failed to authenticate');
    return result;
  }
  
  // 2. 印刷ジョブを作成
  export async function createPrintJob(access_token: string, subject_id: string): Promise<PrintJobResponse> {
    const job_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs`;
  
    const jobData = JSON.stringify({
      job_name: 'SampleJob1',
      print_mode: 'document',
    });
  
    const response = await fetch(job_uri, {
      method: 'POST',
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: jobData,
    });
  
    const result = await response.json() as PrintJobResponse;
    
    if (response.status !== 201) throw new Error('Failed to create print job');
    return result;
  }
  
  // 3. ファイルをアップロード
  export async function uploadFile(access_token: string, base_uri: string, localFilePath: string) {
    const fileData = await import('fs/promises').then(fs => fs.readFile(localFilePath)); // ファイル内容を読み込む

    console.log("FileData:", fileData);
  
    const fileName = '1.SampleDoc.pdf'; // PDFファイルと仮定
    const upload_uri = `${base_uri}&File=${fileName}`;
    
  
    const response = await fetch(upload_uri, {
      method: 'POST',
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/octet-stream',
      },
      body: fileData,
    });
  
    const result = await response.json();
    
    if (response.status !== 200) throw new Error('Failed to upload file');
    return result;
  }
  
  // 4. 印刷を実行
  export async function executePrint(access_token: string, subject_id: string, job_id: string) {
    const print_uri = `https://${host}/api/1/printing/printers/${subject_id}/jobs/${job_id}/print`;
  
    const response = await fetch(print_uri, {
      method: 'POST',
      headers: {
        'Host': host,
        'Accept': accept,
        'Authorization': `Bearer ${access_token}`,
      },
    });
  
    const result = await response.json();
    
    if (response.status !== 200) throw new Error('Failed to execute print');
    return result;
  }
  
  // 印刷ジョブを処理する例
  export async function handlePrintJob() {
    try {
      const authResult = await authenticate();
      const { access_token, subject_id } = authResult;
  
      const printJobResult = await createPrintJob(access_token, subject_id);
      const { upload_uri, id: job_id } = printJobResult;
  
      await uploadFile(access_token, upload_uri, './SampleDoc.pdf'); // ファイルパスを調整
  
      const printResult = await executePrint(access_token, subject_id, job_id);
      return printResult;
    } catch (error) {
      console.error('Print job failed:', error);
    }
  }
  