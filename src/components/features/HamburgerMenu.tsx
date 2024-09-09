import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';

// ModalMenuコンポーネント
const ModalMenu: React.FC<ModalMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <MenuList>
          <MenuItem>
            <StyledLink href={'/'} onClick={onClose}>Home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href={'/listresult'} onClick={onClose}>診断結果一覧</StyledLink>
          </MenuItem>     
        </MenuList>
      </ModalContent>
    </Overlay>
  );
};

// ModalMenuPropsインターフェース
interface ModalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// HamburgerMenuコンポーネント
const HamburgerMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Nav>
      <MenuIcon onClick={toggleModal}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <ModalMenu isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Nav>
  );
};

export default HamburgerMenu;

// スタイリング（Styled Components）
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  padding: 10px;
  div {
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
    transition: 0.4s;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  height: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  width: 100%;

  &:hover {
    background-color: #f0f0f0;
  }
`;
