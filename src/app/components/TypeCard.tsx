import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import styled from 'styled-components';
import { TypeInfo } from '@/app/types/types';

const YourTypes: TypeInfo[] = [
  {
    id: 1,
    TypeAlphabet: 'EACN',
    TypeCharacter: '経済的保守主義者',
    description:
      '経済成長と安定を最優先に考える。市場の自由を尊重しつつ、政府の強い統制を支持。伝統的な価値観や国家の独立を重視し、保守的な政策を推進する。',
  },
  {
    id: 2,
    TypeAlphabet: 'EACI',
    TypeCharacter: '国際経済的保守主義者',
    description:
      '経済成長を重視し、国際的な協力や貿易を推進するが、強力な政府の統制を支持。伝統的な価値観を保持しながら、国際的な影響力を拡大する。',
  },
];

const TypeCard = ({ id }: { id: number }) => {
  const type = YourTypes.find((type) => type.id === id);
  if (!type) {
    return;
  }
  return (
    <div>
      <Card>
        <CardTitle>あなたのタイプ</CardTitle>
        <CardContent>
          <TypeAlphabet>{type.TypeAlphabet}</TypeAlphabet>
          <TypeCharacter>
            {type.TypeCharacter}
          </TypeCharacter>
          <CardDescription>
            {type.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypeCard;

const TypeAlphabet = styled.h1`
  text-align: center;
`;

const TypeCharacter = styled.h2`
  text-align: center;
`;
