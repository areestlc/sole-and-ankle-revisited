/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay 
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label="Mobile Menu">
        <Wrapper>
        <Header>
            <CloseButton onClick={onDismiss}>
              <Icon id="close" />
            </CloseButton>
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
        </Header>
        <Nav>
          <ActiveLink href="/sale">Sale</ActiveLink>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
        </Wrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-overlay);
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  padding: 0 32px;
  padding-right: 0;
  padding-bottom: 16px;
  margin-left: auto;
  height: 100%;
  width: 300px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

const Nav = styled.nav`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 4px;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
  color: black;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${QUERIES.phoneAndDown} {
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: var(--weight-medium);
  color: var(--color-gray-900);
  line-height: 2;
`;

const ActiveLink = styled(Link)`
  color: var(--color-secondary);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 8px 0;

  & ${Link} {
    color: var(--color-gray-700);
    font-size: ${14 / 16}rem;
  }
`;

export default MobileMenu;
