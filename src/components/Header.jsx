import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <DesktopHeader>
          <LogoBlock>
            <Link href="/">
              <TextLogo>CQRE</TextLogo>
            </Link>
          </LogoBlock>
          <MenuBlock>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
            <MenuLogo>
              <Link href="/about">About</Link>
            </MenuLogo>
          </MenuBlock>
          <SignBlock>
            <Link href="/login">login</Link>
            <SignLogo>
              <Link href="/signup">sign up</Link>
            </SignLogo>
          </SignBlock>
        </DesktopHeader>
      </HeaderWrapper>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 10;
`;

const HeaderWrapper = styled.div`
  position: relative;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const DesktopHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  color: white;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

const MenuBlock = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  display: flex;
  position: relative;
`;

const MenuLogo = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  align-items: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const SignBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.25rem;
`;

const SignLogo = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: black;
  margin-left: 1rem;
`;
