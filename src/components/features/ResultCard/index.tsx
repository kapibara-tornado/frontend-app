import { BREAKPOINTS } from '@/components/Responsive';
import { CardInfo } from '@/types/types';
import Image from 'next/image';
import styled from 'styled-components';

export const ResultCard = ({
  src,
  alt,
  labels,
}: CardInfo) => {
  return (
    <CardContainer>
      <StyledImage
        src={src}
        alt={alt}
        width={150}
        height={150}
      />
      {labels.map((label, index) => (
        <Label key={index}>{label}</Label>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.SP}) {
    width: 45%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Label = styled.p`
  margin-top: 10px;
  font-size: 1.8rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1.2rem;
  }
`;
