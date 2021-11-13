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
      <Header>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
          </CloseButton>
          <VisuallyHidden>
            Dismiss modal
          </VisuallyHidden>
      </Header>
        <nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
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
  background: var(--color-primary-alpha3);
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  padding: 0 16px;
  border-radius: 0 0 8px 8px;

  nav {
    display: flex;
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndDown} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid hsl(0deg 0% 80%);
    gap: 1.5rem;
    padding: 8px 0;

    @media ${QUERIES.phoneAndDown} {
      flex-direction: column;
      gap: revert;
    }
`;

const Header = styled.header`
  padding: 4px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(0deg 0% 80%);
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
  color: var(--color-primary);
`;

export default MobileMenu;
