import React, { useState, useEffect, ReactNode, CSSProperties}from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// スライドショーのプロパティ型
interface SlideshowProps{
  children: ReactNode;
}

// スライドのプロパティ型
interface SlideProps {
  src: string;
  alt: string;
  duration?: number; // 表示時間（ミリ秒）
  style?: CSSProperties;
}

// スライドショーのコンポーネント
const Slideshow: React.FC<SlideshowProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = React.Children.toArray(children) as React.ReactElement<SlideProps>[];

  useEffect(() => {
    // 現在のスライドの表示時間を取得
    const currentSlide = slides[currentIndex];
    const duration = currentSlide.props.duration || 3000; // デフォルトは3秒

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slides.length
      );
    }, duration);

    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  return (
    <SlidesContainer>
      {/* {slides.map((slide, index) =>
        React.cloneElement(slide, {
          style: {
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          },
        })
      )} */}
      {slides.map((slide, index) =>
        React.cloneElement(slide, {
          style: {
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
        })
      )}
    </SlidesContainer>
  );
};

// スライドのスタイル
const SlidesContainer = styled.div`
  // position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  position: realative;
`;

// スライドの画像スタイル
const SlideImageWrapper = styled.div`
  // position: absolute;
  padding-bottom: 450px;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
// スライドのコンポーネント
const Slide: React.FC<SlideProps> = ({ src, alt, duration, style }) => (
  <SlideImageWrapper style={style}>
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      />
  </SlideImageWrapper>

);

export { Slideshow, Slide };