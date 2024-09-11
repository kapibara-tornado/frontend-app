'use client';

import styled from 'styled-components';

interface BackgroundImageProps {
  resultedId: number;
  children: React.ReactNode;
}

export const BackgroundImage = ({
  resultedId,
  children,
}: BackgroundImageProps) => {
  let backgroundImagePath: string =
    '/backgroundImage/defaultBackground.png';

  //idに基づいて画像パスを決定
  switch (true) {
    case [1, 2, 9, 10].includes(resultedId):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundConservative.png';
      break;
    case [5, 6, 13, 14].includes(resultedId):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundLiberal.png';
      break;
    case [3, 7, 11, 15].includes(resultedId):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundProgressive.png';
      break;
    case [4, 8, 12, 16].includes(resultedId):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundInternational.png';
      break;
    default:
      backgroundImagePath =
        '/backgroundImage/defaultBackground.png';
  }

  return (
    <div>
      <Wrapper bdimagepath={backgroundImagePath}>
        {children}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div<{ bdimagepath: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url(${(props) => props.bdimagepath});

  // コンポーネント内でスクロールさせる
  overflow-y: scroll;
`;
