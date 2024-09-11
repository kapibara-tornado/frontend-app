import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Cross1Icon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';

type Props = {
  isResult: boolean;
};

export const HamburgerMenu = ({ isResult }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Nav>
      <MenuButton onClick={toggleModal}>
        {isModalOpen ? (
          <Overlay onClick={onClose}>
            <ModalContent
              onClick={(e) => e.stopPropagation()}
            >
              <FlexEnd>
                <CloseButton onClick={onClose}>
                  <Cross1Icon width={40} height={40} />
                </CloseButton>
              </FlexEnd>
              <NavList>
                <NavItem>
                  <StyledLink href={'/'} onClick={onClose}>
                    ホーム
                  </StyledLink>
                </NavItem>
                {isResult && (
                  <NavItem>
                    <StyledLink
                      href={'/result'}
                      onClick={onClose}
                    >
                      結果
                    </StyledLink>
                  </NavItem>
                )}
                <NavItem>
                  <StyledLink
                    href={'/listresult'}
                    onClick={onClose}
                  >
                    診断結果一覧
                  </StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink
                    href={'/printdemo'}
                    onClick={onClose}
                  >
                    印刷
                  </StyledLink>
                </NavItem>
              </NavList>
              <KapibaraImage
                src="/kapibara.svg"
                alt="カピバラ"
                width={130}
                height={130}
              />
            </ModalContent>
          </Overlay>
        ) : (
          <HamburgerMenuIcon width={40} height={40} />
        )}
      </MenuButton>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 3px;
  right: 0;
`;

const MenuButton = styled.div`
  padding: 15px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  padding: 15px;
  width: 250px;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #fff;
  z-index: 1001;
  background-image: url('/backgroundImage/hamburgerBg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
`;

const NavItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  width: 100%;
  font-size: 1.2rem;
`;

const KapibaraImage = styled(Image)`
  margin: 5rem auto;
`;
