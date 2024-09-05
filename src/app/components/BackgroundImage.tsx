'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BackgroundImageProps } from '../types/types';

const BackgroundImage = ({
  id,
  children,
}: BackgroundImageProps) => {
  let backgroundImagePath: string = '/backgroundImage/defaultBackground.png';

  //idに基づいて画像パスを決定
  switch (true) {
    case [1, 2, 9, 10].includes(id):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundConservative.png';
      break;
    case [5, 6, 13, 14].includes(id):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundLiberal.png';
      break;
    case [3, 7, 11, 15].includes(id):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundProgressive.png';
      break;
    case [4, 8, 12, 16].includes(id):
      backgroundImagePath =
        '/backgroundImage/resultBackgroundInternational.png';
      break;
      default:
        backgroundImagePath = '/backgroundImage/defaultBackground.png';
  }

  return (
    <div>
      <Wrapper backgroundImagePath={backgroundImagePath}>
        {children}
      </Wrapper>
    </div>
  );
};

export default BackgroundImage;

const Wrapper = styled.div<{ backgroundImagePath: string }>`
  background-image: url(${props => props.backgroundImagePath});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;