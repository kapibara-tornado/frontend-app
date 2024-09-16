import React, { useState, useEffect, ReactNode, CSSProperties}from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { PcViewOnly, MobileViewOnly } from '@/components/Responsive';

// スライドショーのプロパティ型
interface SlideshowProps{
  children: ReactNode;
}

// スライドのプロパティ型
interface SlideProps {
  src: string;
  alt: string;
  width?: number;   
  height?: number;
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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  position: realative;
`;

// スライドの画像スタイル
const SlideImageWrapper = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MobileSlideImageWrapper = styled.div`
  padding-bottom: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
// スライドのコンポーネント
const Slide: React.FC<SlideProps> = ({ src, alt, width = 450, height = 300,duration, style }) => (
  <div>
  <PcViewOnly>
  <SlideImageWrapper style={style}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </SlideImageWrapper>
  </PcViewOnly>
  <MobileViewOnly>
    <MobileSlideImageWrapper style={style}>
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      />
    </MobileSlideImageWrapper>
  </MobileViewOnly>
  </div>

);

export { Slideshow, Slide };