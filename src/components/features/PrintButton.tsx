'use client';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  loading: boolean;
};

export const PrintButton = ({
  onClick,
  loading,
}: Props) => {
  return (
    <Printbutton onClick={onClick} disabled={loading}>
      診断結果
      <br />
      Print
    </Printbutton>
  );
};

const Printbutton = styled.button`
  background-color: red;
  border: 2px solid red;
  color: white;
  font-size: 1.5rem;
  padding: 3px 6px;
  cursor: pointer;
  text-align: center;
  border-radius: 15px;
  line-height: 1.5;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: darkred;
  }

  &:active {
    background-color: #a00000;
    transform: scale(0.95);
  }
`;
