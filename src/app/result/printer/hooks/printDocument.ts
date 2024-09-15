'use client';

import { handlePrintJob } from '@/utils/epson/epson_print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';

/**
 * 印刷処理を行うカスタムフック
 * - dev環境の場合、印刷されたPDFを自身のPC等に保存する
 * @param input - 印刷対象のHTML要素
 * @returns
 *
 * @example
 * const input = document.getElementsByClassName('invoicePages');
 * const { printDocument, loading } = usePrintDocument(input);
 */
export const usePrintDocument = (
  input: HTMLCollectionOf<Element> | null
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const printDocument = async () => {
    if (!input) return;
    setLoading(true);

    const pdf: jsPDF = new jsPDF();

    // BlobをBufferに変換する関数
    const blobToBase64 = async (
      blob: Blob
    ): Promise<string> => {
      const arrayBuffer = await blob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return buffer.toString('base64'); // Base64形式に変換
    };

    for (let i = 0; i < input.length; i++) {
      // html2canvasの非同期処理をawaitで待つ
      const canvas = await html2canvas(
        input[i] as HTMLElement
      );
      const imgData = canvas.toDataURL('image/png');

      // PDFに画像を追加
      pdf.addImage(
        imgData,
        'JPEG',
        0,
        0,
        210,
        148,
        'pdf',
        'NONE',
        0
      );

      // 最後のページでない場合は新しいページを追加
      if (i < input.length - 1) {
        pdf.addPage();
      }
    }

    // PDFのBlobを生成し、それをBufferに変換
    const blob: Blob = pdf.output('blob');
    const base64: string = await blobToBase64(blob);

    try {
      await handlePrintJob(base64);
    } catch (error) {
      console.error(error);
      alert('印刷に失敗しました');
      setLoading(false);
      return;
    }

    // [dev環境のみ実行] 生成したPDFを保存
    if (process.env.NODE_ENV === 'development') {
      pdf.save('download.pdf');
    }
    setLoading(false);
  };

  return { printDocument, loading };
};
