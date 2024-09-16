import { BREAKPOINTS } from '@/components/Responsive';
import styled from 'styled-components';
import { BackgroundImage } from '../BackgroundImage';
import Image from 'next/image';

export const ResultNothing = () => {
  return (
    <Wrapper>
      <BackgroundImage resultedId={0}>
        <DefaultContainer>
          <ImageWrapper>
            <Image
              src="/badkapibara.png"
              width={300}
              height={200}
              alt="kapibara"
            />
          </ImageWrapper>
        </DefaultContainer>
        <TextContainer>
          <ConceptText>
            <NoBreakText>診断できませんでした</NoBreakText>
            <br />
            <NoBreakText>
              もう一度お試しください
            </NoBreakText>
          </ConceptText>
        </TextContainer>
      </BackgroundImage>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  bottom: 0;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    width: 70%;
    padding-top: 100px;
    justify-content: center;
    padding-bottom: 5px;
    margin-bottom: 10px;
    padding-top: -50px;
    margin: 0 auto;
    z-index: 2;
  }
`;

const TextContainer = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 27px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  z-index: 1;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    display: flex;
    background-color: #fff;
    border-radius: 27px;
    text-align: center;
    width: 80%;
    max-width: 500px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-break: break-all;
    z-index: 1;
  }
`;

const ConceptText = styled.p`
  color: #333;
  font-size: 2.5rem;
  font-style: normal;
  padding-left: 70px;
  padding-right: 70px;

  @media screen and (max-width: ${BREAKPOINTS.SP}) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

// 改行させない文字
const NoBreakText = styled.span`
  white-space: nowrap;
`;
