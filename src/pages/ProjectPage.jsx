import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

export default function ProjectPage() {
  return (
    <div>
      <Header />
      <ProjectSectionWrapper>
        <ProjectSection>
          <ProjectLogo>Project</ProjectLogo>
          <Explain>CQRE에서 제작한 소중한 프로젝트입니다.</Explain>
        </ProjectSection>
      </ProjectSectionWrapper>
      <NoProjectText>아직 프로젝트가 없어요:( <br />코어에 가입하고, 멋진 1기의 주인공이 되어보세요!</NoProjectText>
    </div>
  );
}

const ProjectSectionWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: #faf7f7;
`;

const ProjectSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const ProjectLogo = styled.h1`
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

const NoProjectText = styled.div`
font-size: 20px;
font-family: Pretendard-Regular;
text-align:center;
display:flex;
justify-content:center;
width:100%;
height:30vw;
align-items:center;
`