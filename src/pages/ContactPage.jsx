import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import email from '../assets/img/email.svg';
import facebook from '../assets/img/facebook.svg';
import github from '../assets/img/github.svg';
import khsoo from '../assets/img/khsoo.jpeg';
import dsyou from '../assets/img/dsyou.jpeg';

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
          <ContactSNSImage src={github} alt="github" />
        </ContactSNSCircle>
        <ContactSNSCircle>
          <ContactSNSImage src={facebook} alt="facebook" />
        </ContactSNSCircle>
      </ContactSNSCircleSection>
      <BoardSection>
        <BoardTitle>CQRE 회장단</BoardTitle>
      </BoardSection>
      <ImgSection>
        <KhsooImg src={khsoo} alt="khsoo" />
        <DsyooImg src={dsyou} alt="dsyou" />
      </ImgSection>
      <BoardNameSection>
        <BoardLeftName>김현수 | 2022 회장</BoardLeftName>
        <BoardRightName>유동선 | 2022 부회장</BoardRightName>
      </BoardNameSection>
      <div style={{ display: 'flex' }}>
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
      </div>
    </>
  );
}

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
`;

const Explain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ContactToCQRESection = styled.div`
  padding-left: 20vw;
  padding-right: 20vw;
  padding-top: 2.5rem;
  display: flex;
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
  margin-left: 25.5vw;
  color: #000;
`;

const ContactSNSCircleSection = styled.div`
  padding-bottom: 0.5rem;
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
  position: relative;
`;

const ContactSNSFirstCircle = styled.div`
  margin-left: 15vw;
  margin-right: 1vw;
  width: 9.5vw;
  height: 9.5vw;
  border-radius: 5vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

const ContactSNSCircle = styled.div`
  margin-left: 1vw;
  margin-right: 1vw;
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
  padding-left: 22vw;
  padding-right: 20vw;
  text-align: center;
  display: flex;
`;

const BoardTitle = styled.h1`
  font-family: Pretendard-SemiBold;
  font-size: 1.5vw;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
  text-align: left;
  margin-left: 25.4vw;
  color: #6458f5;
`;

const ImgSection = styled.div`
  padding-left: 22vw;
  padding-right: 20vw;
  text-align: center;
  display: flex;
`;

const KhsooImg = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  margin-left: 13.5vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const DsyooImg = styled.img`
  width: 12vw;
  height: 12vw;
  border-radius: 6vw;
  margin-left: 7.7vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const BoardNameSection = styled.div`
  padding-left: 22vw;
  padding-right: 20vw;
  text-align: center;
  display: flex;
`;

const BoardLeftName = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.25vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #000;
  margin-left: 14.9vw;
`;

const BoardRightName = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.25vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #000;
  margin-left: 9.75vw;
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
  margin-left: 7vw;
  color: #000;
`;
