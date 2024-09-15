'use client';

import {
  MobileViewOnly,
  PcViewOnly,
} from '@/components/Responsive';
import { useResult } from '@/usecases/useResult';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { HamburgerMenu } from '../HamburgerMenu';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { parsedScores } = useResult();
  return (
    <>
      <Container>
        <Link href={'/'}>
          <ImageWrapper>
            <Image
              src="/logo.svg"
              width={80}
              height={50}
              alt="logo"
            />
          </ImageWrapper>
        </Link>

        <PcViewOnly>
          <NavList>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/'}>ホーム</Link>
              </Button>
            </li>
            {parsedScores && (
              <li>
                <Button variant="link" size={'lg'}>
                  <Link href={'/result'}>結果</Link>
                </Button>
              </li>
            )}
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/result/list'}>
                  診断結果一覧
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size={'lg'}>
                <Link href={'/result/printer'}>印刷</Link>
              </Button>
            </li>
          </NavList>
        </PcViewOnly>
        <MobileViewOnly>
          <HamburgerMenu
            isResult={parsedScores ? true : false}
          />
        </MobileViewOnly>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 5px 30px;
  text-align: center;
  list-style: none;
`;
