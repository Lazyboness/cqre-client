import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ionic from "../assets/img/ionic.png";
import email from "../assets/img/email.svg";
import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";

function App() {
  return (
    <div>
      <Header />
      <Section>
        <SectionContainer>
          <SectionText>
            <SectionTextHigh>SCH</SectionTextHigh>
            <SectionTextHigh>Project Society</SectionTextHigh>
            <SectionTextHigh>Core</SectionTextHigh>
            <SectionTextLow>
              안녕하세요 순천향대학교 프로젝트 동아리 CQRE 입니다.
            </SectionTextLow>
            <AboutButton>
              <a
                href="/about"
                id="about"
                style={{
                  color: "#3d72af",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontFamily: "Pretendard-SemiBold",
                  textDecoration: "none",
                }}
              >
                Go to About
              </a>
            </AboutButton>
          </SectionText>
        </SectionContainer>
        <Image>
          <img style={{ width: "30em" }} src={ionic} alt="ionic"></img>
        </Image>
      </Section>
      <Footer>
        <FooterContainer>
          <FooterIcon src={email} alt="email" />
          <FooterIcon src={github} alt="github" />
          <FooterIcon src={facebook} alt="facebook" />
        </FooterContainer>
        <FooterText>
          Copyright CQRE Since 2022. All rights reserved CQRE
        </FooterText>
      </Footer>
    </div>
  );
}

const Section = styled.div`
  display: flex;
  min-height: 80vh;
  padding: 20vh 21vw 10vh 19vw;
  box-sizing: border-box;
  font-size: calc(10px + 2vmin);
  color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #014880;
`;

const SectionContainer = styled.div`
  width: 30%;
  height: 150px;
  margin: 4px 0 0 13px;
`;
const SectionText = styled.div`
  width: 100%;
  color: white;
  font-family: Pretendard-ExtraLight;
  font-weight: 600;
  letter-spacing: -1.12px;
`;
const SectionTextHigh = styled.div`
  font-size: 40px;
  font-family: Pretendard-SemiBold;
`;
const SectionTextLow = styled.div`
  font-size: 25px;
  font-family: Pretendard-SemiBold;
  margin-top: 50px;
  width: 560px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const AboutButton = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 28px;
  background: white;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    width: 160px;
    height: 45px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 7vh;
  padding: 0;
  background: #fff;
  justify-content: center;
`;

const FooterContainer = styled.div`
  display: flex;
  margin: 1.5rem auto 2vh auto;
  width: 100px;
`;
const FooterIcon = styled.img`
  margin: 0 auto;
  width: 25px;
`;

const Image = styled.div`
  width: 20em;
  display: flex;
  margin-left: 14rem;
  @media screen and (max-width: 1379px) {
    display: none;
  }
`;

const FooterText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: Pretendard-Regular;
  font-size: 18px;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;

export default App;
