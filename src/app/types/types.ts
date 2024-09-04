import { ReactNode } from "react";

//政治版mbtiカードコンポーネントのプロパティ定義
export interface TypeInfo {
    id: number;
    typeAlphabet: string;
    typeCharacter: string;
    feature: string;
    senseOfValue: string;
}

//似ている政治家カードコンポーネントのプロパティ定義
export interface PoliticianInfo {
    id: number;
    politicianName: string;
    partyName: string;
    explanation: string;
}

//BackgroundImageコンポーネントのプロパティ定義
export interface BackgroundImageProps {
    id: number;
    children: ReactNode;
  }