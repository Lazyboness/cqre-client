import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <LeftMenu>
              <Link href="/">
                <TextLogo>CQRE</TextLogo>
              </Link>
            </LeftMenu>
            <MiddleMenuList>
              <MiddleMenu>
                <Link href="/about">About</Link>
              </MiddleMenu>
              <MiddleMenu>
                <Link href="/project">Project</Link>
              </MiddleMenu>
              <MiddleMenu>
                <Link href="/board">Board</Link>
              </MiddleMenu>
              <MiddleMenu>
                <Link href="/apply">Apply</Link>
              </MiddleMenu>
              <MiddleMenu>
                <Link href="/product">Product</Link>
              </MiddleMenu>
              <MiddleMenu>
                <Link href="/contact">Contact</Link>
              </MiddleMenu>
            </MiddleMenuList>
            <RightMenuList>
              <RightMenu>
                <Link href="/login">login</Link>
              </RightMenu>
              <RightMenu>
                <Link href="/signup">sign up</Link>
              </RightMenu>
            </RightMenuList>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
}

const Base = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const LeftMenu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  padding: 0 0 0 3vw;
`;

const MiddleMenuList = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  padding: 0 21vw 0 23vw;
`;

const MiddleMenu = styled.li`
  font-weight: 500;
  padding: 0 2vw 0 2vw;
`;

const RightMenuList = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  padding: 0 3vw 0 0;
`;

const RightMenu = styled.li`
  font-weight: 300;
  padding: 0 0 0 1vw;
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
