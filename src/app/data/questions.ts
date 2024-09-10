import { Question } from '../../types/types';

export const questions: Question[] = [
  // 経済重視 (E) vs. 進歩的価値観 (P) - 追加の質問
  {
    id: 1,
    type: 'economicVsProgressive',
    title: '経済重視 (E) vs. 進歩的価値観 (P)',
    question:
      '企業やベンチャーが新しい技術やサービスを自由に開発できる環境が重要だと思う。',
    options: {
      yes: [
        {
          value: 'E',
          point: 1,
        },
      ],
      no: [
        {
          value: 'P',
          point: 1,
        },
      ],
    },
  },
  {
    id: 2,
    type: 'economicVsProgressive',
    title: '経済重視 (E) vs. 進歩的価値観 (P)',
    question:
      '経済成長のためには、環境問題への対策を後回しにするのもやむを得ないと思う。',
    options: {
      yes: [
        {
          value: 'E',
          point: 1,
        },
      ],
      no: [
        {
          value: 'P',
          point: 1,
        },
      ],
    },
  },
  {
    id: 3,
    type: 'economicVsProgressive',
    title: '経済重視 (E) vs. 進歩的価値観 (P)',
    question:
      '格差の是正よりも、全体の経済成長を優先するべきだと思う。',
    options: {
      yes: [
        {
          value: 'E',
          point: 1,
        },
      ],
      no: [
        {
          value: 'P',
          point: 1,
        },
      ],
    },
  },

  // 権威主義 (A) vs. 自由主義 (S) - 追加の質問
  {
    id: 4,
    type: 'authoritarianVsLibertarian',
    title: '権威主義 (A) vs. 自由主義 (S)',
    question:
      'インターネット上の有害情報を制限するために、政府の規制が必要だと思う。',
    options: {
      yes: [
        {
          value: 'A',
          point: 1,
        },
      ],
      no: [
        {
          value: 'S',
          point: 1,
        },
      ],
    },
  },
  {
    id: 5,
    type: 'authoritarianVsLibertarian',
    title: '権威主義 (A) vs. 自由主義 (S)',
    question:
      '個人情報を守るためには、政府がプライバシーに介入することも許容されるべきだと思う。',
    options: {
      yes: [
        {
          value: 'A',
          point: 1,
        },
      ],
      no: [
        {
          value: 'S',
          point: 1,
        },
      ],
    },
  },
  {
    id: 6,
    type: 'authoritarianVsLibertarian',
    title: '権威主義 (A) vs. 自由主義 (S)',
    question:
      '若者が政治に参加しやすくするために、政府がSNSやネット上での活動を推進するべきだと思う。',
    options: {
      yes: [
        {
          value: 'S',
          point: 1,
        },
      ],
      no: [
        {
          value: 'A',
          point: 1,
        },
      ],
    },
  },

  // 保守 (C) vs. リベラル (L) - 追加の質問
  {
    id: 7,
    type: 'conservativeVsLiberal',
    title: '保守 (C) vs. リベラル (L)',
    question:
      '同性婚やLGBTQ+の権利を法的に保障することは重要だと思う。',
    options: {
      yes: [
        {
          value: 'L',
          point: 1,
        },
      ],
      no: [
        {
          value: 'C',
          point: 1,
        },
      ],
    },
  },
  {
    id: 8,
    type: 'conservativeVsLiberal',
    title: '保守 (C) vs. リベラル (L)',
    question:
      '性別やジェンダーに関係なく、平等な機会が保障されるべきだと思う。',
    options: {
      yes: [
        {
          value: 'L',
          point: 1,
        },
      ],
      no: [
        {
          value: 'C',
          point: 1,
        },
      ],
    },
  },
  {
    id: 9,
    type: 'conservativeVsLiberal',
    title: '保守 (C) vs. リベラル (L)',
    question:
      '日本の伝統文化や慣習は現代社会でも守られるべきだと思う。',
    options: {
      yes: [
        {
          value: 'C',
          point: 1,
        },
      ],
      no: [
        {
          value: 'L',
          point: 1,
        },
      ],
    },
  },

  // 国家主義 (N) vs. 国際主義 (I) - 追加の質問
  {
    id: 10,
    type: 'nationalismVsInternationalism',
    title: '国家主義 (N) vs. 国際主義 (I)',
    question:
      '日本は国際的な問題解決に積極的に参加するべきだと思う。',
    options: {
      yes: [
        {
          value: 'I',
          point: 1,
        },
      ],
      no: [
        {
          value: 'N',
          point: 1,
        },
      ],
    },
  },
  {
    id: 11,
    type: 'nationalismVsInternationalism',
    title: '国家主義 (N) vs. 国際主義 (I)',
    question:
      '日本の若者が海外で学ぶ機会を増やすために、政府が支援すべきだと思う。',
    options: {
      yes: [
        {
          value: 'I',
          point: 1,
        },
      ],
      no: [
        {
          value: 'N',
          point: 1,
        },
      ],
    },
  },
  {
    id: 12,
    type: 'nationalismVsInternationalism',
    title: '国家主義 (N) vs. 国際主義 (I)',
    question:
      'グローバル化が進む中で、他国との連携は避けられないと思う。',
    options: {
      yes: [
        {
          value: 'I',
          point: 1,
        },
      ],
      no: [
        {
          value: 'N',
          point: 1,
        },
      ],
    },
  },
];
