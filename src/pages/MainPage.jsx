import React from 'react';
import Header from '../components/Header';
import styled from "styled-components";
import ionic from "../assets/img/ionic.png"
import email from "../assets/img/email.svg"
import facebook from "../assets/img/facebook.svg"
import github from "../assets/img/github.svg"

export default function MainPage() {
  return (
    <>
    <Header />
    <Section>
      <SectionContainer>
        <SectionText>
          <SectionTextHigh>SCH</SectionTextHigh>
          <SectionTextHigh>Project Society</SectionTextHigh>
          <SectionTextHigh>Core</SectionTextHigh>
          <SectionTextLow >안녕하세요 순천향대학교 프로젝트 동아리 CQRE 입니다.</SectionTextLow>
          <AboutButton>
            <a href="/about" style={{color:"#3d72af", width: "100%", display:"flex", justifyContent:"center", fontSize:"20px", textDecoration:"none" }}>Go to About</a>
          </AboutButton>
        </SectionText>
      </SectionContainer>
      <Image>
        <img style={{width:"30em"}} src={ionic} alt="ionic"></img>
        </Image>
    </Section>
    <Footer>
      <FooterContainer>
        <FooterIcon src={email} alt="email"/>
        <FooterIcon src={github} alt="github" />
        <FooterIcon src={facebook} alt="facebook" />
      </FooterContainer>
      <FooterText>Copyright CQRE Since 2022. All rights reserved CQRE</FooterText>
    </Footer>
    </>
  )
}

const Section = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  padding: 12%;
  box-sizing:border-box;
  justify-content:center;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  background-color: #014880;

`

const SectionContainer = styled.div`
  width: 30%;
  height: 150px;
  margin: 4px 0 0 13px;

`
const SectionText = styled.div`
  width: 100%;
  color: white;
  font-family:Pretendard-ExtraLight;
  font-weight: 600;
  letter-spacing: -1.12px;
`
const SectionTextHigh = styled.div`
font-size:40px;
`
const SectionTextLow = styled.div`
font-size:25px;
margin-top:50px;
@media screen and (max-width:1440px){
  font-size:22px;
}
@media screen and (max-width:1024px){
  font-size:17px;
}
`
const AboutButton = styled.div`
width: 150px;
height: 40px;
border-radius: 28px;
background: white;
margin-top: 50px;
display:flex;
align-items:center;
justify-content:center;
`

const Footer = styled.div`
width: 100%;
height: 100px;
padding: 0 0 41px;
background: #fff;
justify-content:center;
`

const FooterContainer = styled.div`
display:flex;
margin: 4em auto 1em auto;
width:100px;
`
const FooterIcon = styled.img`
margin: 0 auto;
width:25px;
`

const Image = styled.div`
width: 20em;
display:flex;
margin-left: 100px;
`

const FooterText = styled.div`
display:flex;
width:100%;
justify-content:center;
font-family:Pretendard-ExtraLight;
font-size:18px;
`