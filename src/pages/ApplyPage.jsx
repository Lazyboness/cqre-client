
import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

export default function ApplyPage() {
  return (
    <>
      <Header />
      <ApplySectionWrapper>
        <ApplySection>
          <ApplyLogo>Apply</ApplyLogo>
          <Explain>CQRE와 함께 할 멋진 팀원을 모집합니다.</Explain>
        </ApplySection>
      </ApplySectionWrapper>
      <EligibilitySection>
        <EligibilityLogo>지원자격</EligibilityLogo>
        <EligibilityExplain>
          <div style={{ display: 'flex' }}>
            <PurpleCircle />
            최소 1년 이상 동아리 활동을 지속할 수 있는 사람
          </div>
          <div style={{ display: 'flex' }}>
            <PurpleCircle />
            협업 프로젝트를 경험하고 싶은 사람
          </div>
          <div style={{ display: 'flex' }}>
            <PurpleCircle />
            뉴비팀일 경우 기초교육과 과제를 성실히 수행할 수 있는 사람
          </div>
        </EligibilityExplain>
      </EligibilitySection>
      <RecruitmentLogoSection>
        <RecruitmentLogo>모집과정</RecruitmentLogo>
      </RecruitmentLogoSection>
      <RecruitmentSection>
        <GreyCircle>
          <GreyCircleLogo>서류접수</GreyCircleLogo>
        </GreyCircle>
        <GreyTriangle />
        <GreyCircle>
          <GreyCircleAuditionLogo>면접</GreyCircleAuditionLogo>
        </GreyCircle>
        <GreyTriangle />
        <GreyCircle>
          <GreyCircleLogo>합격 발표</GreyCircleLogo>
        </GreyCircle>
        <GreyTriangle />
        <GreyCircle>
          <GreyCircleLogo>정규활동</GreyCircleLogo>
        </GreyCircle>
      </RecruitmentSection>
      <ApplyBtnSection>
        <ApplyBtn>
          <ApplyBtnText>지원하기</ApplyBtnText>
        </ApplyBtn>
      </ApplyBtnSection>
    </>
  );
}

const ApplySectionWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: #faf7f7;
`;

const ApplySection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const ApplyLogo = styled.h1`
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

const EligibilitySection = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const EligibilityLogo = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0.3em;
  font-family: Pretendard-SemiBold;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const EligibilityExplain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: left;
  color: #000;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const PurpleCircle = styled.div`
  width: 14px;
  height: 14px;
  background-color: #6458f5;
  border-radius: 7px;
  margin-top: 0.8rem;
  margin-right: 0.5rem;
`;

const RecruitmentLogoSection = styled.div`
  padding-left: 20vw;
  padding-right: 20vw;
`;

const RecruitmentLogo = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0.3em;
  font-family: Pretendard-SemiBold;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const RecruitmentSection = styled.div`
  padding-left: 20vw;
  padding-right: 20vw;
  display: flex;
`;

const GreyCircle = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 5vw;
  background-color: #dbe1ee;
`;

const GreyCircleLogo = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  margin-top: 4vw;
  margin-left: 2.5vw;
`;

const GreyCircleAuditionLogo = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 1.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  margin-top: 4vw;
  margin-left: 3.675vw;
`;

const GreyTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 1vw solid #666666;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 4vw;
  color: #707070;
`;

const ApplyBtnSection = styled.div`
  padding-left: 33.125vw;
  padding-right: 33.125vw;
`;

const ApplyBtn = styled.div`
  margin-top: 3vw;
  width: 29vw;
  height: 4vw;
  border-radius: 5vw;
  background-color: #6458f5;
`;

const ApplyBtnText = styled.h1`
  padding-top: 1vw;
  margin-left: 12vw;
  font-family: Pretendard-Regular;
  font-size: 1.75vw;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
  text-align: left;
  color: #e8e8e8;
`;