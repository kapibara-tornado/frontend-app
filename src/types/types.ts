//政治版mbtiカードコンポーネントのプロパティ定義
export interface TypeInfo {
  id: number;
  typeAlphabet: string;
  typeCharacter: string;
  feature: string;
  senseOfValue: string;
  characterImage: string;
}

//似ている政治家カードコンポーネントのプロパティ定義
export interface PoliticianInfo {
  id: number;
  politicianName: string;
  partyName: string;
  explanation: string;
  politicianImage: string;
}

// 軸の型定義
interface Axis {
  value: 'E' | 'P' | 'A' | 'S' | 'L' | 'C' | 'I' | 'N';
  political:
    | 'Economic'
    | 'Progressive'
    | 'Authoritarian'
    | 'Libertarian'
    | 'Conservative'
    | 'Liberal'
    | 'Nationalism'
    | 'Internationalism';
}

// 質問の型定義
export interface Question {
  id: number;
  type:
    | 'economicVsProgressive'
    | 'authoritarianVsLibertarian'
    | 'conservativeVsLiberal'
    | 'nationalismVsInternationalism';
  title: string;
  question: string;
  options: {
    // 今後の拡張性を考慮して、配列にしている
    yes: [
      {
        value: Axis['value'];
        point: number;
      }
    ];
    no: [
      {
        value: Axis['value'];
        point: number;
      }
    ];
  };
}

//診断結果一覧画面のキャラ情報
export interface CardInfo {
  src: string;
  alt: string;
  labels: string[];
}

export interface Scores {
  E: number;
  P: number;
  A: number;
  S: number;
  L: number;
  C: number;
  I: number;
  N: number;
}

//診断結果詳細の情報
export interface ResultDetailInfo {
  id: number;
  genre: string;
  genreImage: string;
  yourType: string;
  typeDescription: string;
}