import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from "../components/Header";
import styled from "styled-components";
import ionic from "../assets/img/ionic.png";
import email from "../assets/img/email.svg";
import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";

function App() {
  const url = "cqrecore@gmail.com";
  return (
    <div>
      <Header />
      <Section>
        <SectionContainer>
          <SectionText>
            <SectionTextHigh>SCH</SectionTextHigh>
            <SectionTextHigh>Project Society</SectionTextHigh>
            <SectionTextHigh>Cqre</SectionTextHigh>
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
        <ImageContainer>
          <Image src={ionic} alt="ionic" />
        </ImageContainer>
      </Section>
      <Footer>
        <FooterContainer>
          <CopyToClipboard
            text={url}
            onCopy={() => alert("메일이 복사되었습니다")}
            style={{ cursor: "pointer" }}
          >
            <FooterIcon src={email} alt="email" />
          </CopyToClipboard>
          <a href="https://github.com/SCH-CQRE" style={{ margin: "0 auto" }}>
            <FooterIcon src={github} alt="github" />
          </a>
          <a
            href="https://www.facebook.com/CQRE-110543228235787"
            style={{ margin: "0 auto" }}
          >
            <FooterIcon src={facebook} alt="facebook" />
          </a>
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
  min-height: 75vh;
  padding: 10vh 21vw 15vh 19vw;
  box-sizing: border-box;
  font-size: calc(10px + 2vmin);
  color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #014880;
  @media screen and (max-width: 500px){
    padding: 5vh 10vw 4vh 10vw;
  }
`;

const SectionContainer = styled.div`
  width: 30%;
  height: 150px;
  margin: 4px 0 0 13px;
  margin-top:10vh
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
  @media screen and (max-width: 1440px){
    font-size: 30px;
  }
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

const ImageContainer = styled.div`
  width: 20em;
  display: flex;
  margin-left: 14rem;
  @media screen and (max-width: 1379px) {
    display: none;
  }
`;

const Image = styled.img`
width: 20em;
@media screen and (max-width: 1440px) {
  width: 15em;
  height: 15em;
}
`

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
