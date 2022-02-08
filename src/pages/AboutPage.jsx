import React from 'react';
import styled from 'styled-components';
import Study from '../static/images/about_study.png';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <StudyImage src={Study} alt="Study"></StudyImage>
      <IntroduceWrapper>
        <Introduce>Introduce</Introduce>
      </IntroduceWrapper>
      <div></div>
    </>
  );
}

const StudyImage = styled.img`
  width: 1920px;
  height: 240px;
`;

const IntroduceWrapper = styled.div`
  width: 1920px;
  height: 376px;
  margin: 240px 0 78px;
  padding: 80px 370px 130px;
  background-color: #faf7f7;
`;

const Introduce = styled.h1`
  width: 240px;
  height: 66px;
  margin: 0 940px 24px 0;
  font-family: PretendardVariable;
  font-size: 56px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  text-align: left;
  color: #000;
`;
