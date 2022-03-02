import React from "react";
import styled from "styled-components";
import "../assets/fonts/font.css";

export default function Header() {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <DesktopHeaderBlock>
          <DesktopHeaderLogoArea href="/">CQRE</DesktopHeaderLogoArea>
          <DesktopHeaderMenuArea>
            <FirstLink href="/about">About</FirstLink>
            <MenuLink href="/project">Project</MenuLink>
            <MenuLink href="/apply">Apply</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </DesktopHeaderMenuArea>
        </DesktopHeaderBlock>
      </HeaderWrapper>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 10;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const HeaderWrapper = styled.div`
  position: relative;
`;

const DesktopHeaderBlock = styled.div`
  padding-left: 2vw;
  position: relative;
  display: flex;
  align-items: center;
  height: 6vh;
  width: 95%;
  background-color: white;
`;

const DesktopHeaderLogoArea = styled.a`
  text-decoration: none;
  color: #112d4e;
  margin-top: 5px;
  font-family: Multicolore;
  font-size: 30px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1379px) {
    font-size: 28px;
  }
`;

const DesktopHeaderMenuArea = styled.div`
  flex: 1 1 0%;
  margin-left: 2.5vw;
  display: flex;
  position: relative;
`;

const FirstLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 1379px) {
    font-size: 16px;
  }
`;

const MenuLink = styled.a`
  margin-left: 2.5vw;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 1379px) {
    font-size: 16px;
  }
`;
