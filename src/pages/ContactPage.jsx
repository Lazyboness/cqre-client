import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import email from "../assets/img/email.svg";
import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";
import khsoo from "../assets/img/khsoo.jpeg";
import dsyou from "../assets/img/dsyou.jpeg";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactSectionWrapper>
        <ContactSection>
          <ContactLogo>Contact</ContactLogo>
          <Explain>
            궁금하신 점이 있으시다면 CQRE Email이나 회장단으로 문의바랍니다.
          </Explain>
        </ContactSection>
      </ContactSectionWrapper>
      <ContactToCQRESection>
        <ContactToCQRESectionTitle>Contact To CQRE</ContactToCQRESectionTitle>
      </ContactToCQRESection>
      <ContactSNSCircleSection>
        <ContactSNSFirstCircle>
          <ContactSNSImage src={email} alt="email" />
        </ContactSNSFirstCircle>
        <ContactSNSCircle>
          <a href="https://github.com/SCH-CQRE">
            <ContactSNSImage src={github} alt="github" />
          </a>
        </ContactSNSCircle>
        <ContactSNSCircle>
          <a href="https://www.facebook.com/CQRE-110543228235787">
            <ContactSNSImage src={facebook} alt="facebook" />
          </a>
        </ContactSNSCircle>
      </ContactSNSCircleSection>
      <BoardSection>
        <BoardTitle>CQRE 회장단</BoardTitle>
      </BoardSection>

      <ProfileContainer>
        <ProfileContent>
          <ImgSection>
           <KhsooImg src={khsoo} alt="khsoo" />
          </ImgSection>
          <BoardLeftName>19 김현수 | 2022 회장</BoardLeftName>
        </ProfileContent>
        <ProfileContent>
          <ImgSection>
          <DsyooImg src={dsyou} alt="dsyou" />
          </ImgSection>
          <BoardRightName>18 유동선 | 2022 부회장</BoardRightName>
        </ProfileContent>
      </ProfileContainer>
      
      {/* <ImgSection>
        <KhsooImg src={khsoo} alt="khsoo" />
        <DsyooImg src={dsyou} alt="dsyou" />
      </ImgSection>
      <BoardNameSection>
        <BoardLeftName>19 김현수 | 2022 회장</BoardLeftName>
        <BoardRightName>18 유동선 | 2022 부회장</BoardRightName>
      </BoardNameSection> */}
      {/* <div style={{ display: "flex" }}>
        <BoardExplainSection>
          <BoardLeftExplain>
            CQRE회장 김현수입니다.
            <br />잘 부탁드립니다.
          </BoardLeftExplain>
          <BoardRightExplain>
            CQRE부회장 유동선입니다.
            <br />잘 부탁드립니다.
          </BoardRightExplain>
        </BoardExplainSection>
      </div> */}
      <Space />
    </>
  );
}

const Space = styled.div`
margin-bottom:100px;
`

const ProfileContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 0 auto;
width: 40%;
justify-content:center;
align-items:center;

`

const ProfileContent = styled.div`
display:block;
`

const ContactSectionWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: #faf7f7;
`;

const ContactSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const ContactLogo = styled.h1`
  font-size: 56px;
  font-weight: 600;
  font-family: Pretendard-Semibold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
  margin-block-end: 0.6em;
  @media screen and (max-width: 1379px) {
    font-size: 24px;
  }
`;

const Explain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-block-start: 0;
  margin-block-end: 0;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;

const ContactToCQRESection = styled.div`
  padding-top: 2.5rem;
  display: flex;
  justify-content:center;
`;

const ContactToCQRESectionTitle = styled.h1`
  font-family: Pretendard-SemiBold;
  font-size: 1.5vw;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
  text-align: center;
  margin-block-start: 0;
  color: #000;
`;

const ContactSNSCircleSection = styled.div`
  padding-bottom: 0.5rem;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3%;
  justify-content:center;
`;

const ContactSNSFirstCircle = styled.div`
  width: 9.5vw;
  height: 9.5vw;
  border-radius: 5vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

const ContactSNSCircle = styled.div`
  width: 9.5vw;
  height: 9.5vw;
  border-radius: 5vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

const ContactSNSImage = styled.img`
  width: 2.75vw;
  height: 2.75vw;
  margin-top: 3.3vw;
  margin-left: 3.4vw;
`;

const BoardSection = styled.div`
  padding-top: 2.75rem;
  display:flex;
  justify-content:center;
`;

const BoardTitle = styled.h1`
  font-family: Pretendard-SemiBold;
  font-size: 1.5vw;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
  color: #6458f5;
`;

const ImgSection = styled.div`
  display: flex;
  margin: 0 auto;
`;

const KhsooImg = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  display:flex;
  margin:0 auto;

  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const DsyooImg = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  display:flex;
  margin:0 auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

`;

const BoardNameSection = styled.div`
  padding-left: 22%;
  text-align: center;
  display: flex;
`;

const BoardLeftName = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 440px) {
    font-size: 9px;
    margin-left: 1.5vw;
  }
`;

const BoardRightName = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 440px) {
    font-size: 9px;
    margin-left: 1.5vw;
  }
`;

const BoardExplainSection = styled.div`
  padding-left: 22vw;
  padding-right: 20vw;
  text-align: center;
  display: flex;
`;

const BoardLeftExplain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.25vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  margin-block-start: 0;
  margin-left: 13.5vw;
  color: #000;
`;

const BoardRightExplain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.25vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  margin-block-start: 0;
  margin-left: 7.5vw;
  color: #000;
`;
