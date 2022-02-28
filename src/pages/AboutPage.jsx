import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import study from "../assets/img/about_study.png";
import project from "../assets/img/about_project.png";
import sub from "../assets/img/about_sub.png";
import education from "../assets/img/about_education.png";
import communication from "../assets/img/about_communication.png";
import curriculum from "../assets/img/about_curriculum.png";

export default function AboutPage() {
  return (
    <>
      <Header />
      <ImgSection>
        <Img src={study} alt="study" />
      </ImgSection>
      <IntroduceSectionWrapper>
        <IntroduceSection>
          <IntroduceLogo>Introduce</IntroduceLogo>
          <Explain>
            CQRE는 화합, 경험, 성장, 흥미를 중요 가치로 생각하는 프로젝트
            동아리입니다.
          </Explain>
          <Explain>
            CQRE에서 개발자, 디자이너와 함께 실무 협업 서비스 구현을 경험하고
            자신을 성장시키세요 !
          </Explain>
          <br />
          <br />
        </IntroduceSection>
      </IntroduceSectionWrapper>
      <PointSection>
        <PointLogo>Point</PointLogo>
        <PointImgSection>
          <PointImg src={project} alt="project" />
          <PointSubImg src={sub} alt="sub" />
        </PointImgSection>
        <PointTitleSection>
          <PointLeftTitle>메인 프로젝트</PointLeftTitle>
          <PointRightTitle>서브 프로젝트</PointRightTitle>
        </PointTitleSection>
        <PointExplainSection>
          <PointExplain>
            개발자와 디자이너가 팀을 이루어 1년 동안 서비스 기획, 디자인, 개발,
            런칭까지의 과정을 경험합니다.
          </PointExplain>
          <PointRightExplain>
            기업체와 연계하여 단기 외주 프로젝트를 진행합니다.
          </PointRightExplain>
        </PointExplainSection>
        <PointImgSection>
          <PointImg src={education} alt="education" />
          <PointImg src={communication} alt="communication" />
        </PointImgSection>
        <PointTitleSection>
          <PointLeftTitle>신입 회원</PointLeftTitle>
          <PointRightTitle>커뮤니케이션</PointRightTitle>
        </PointTitleSection>
        <PointExplainSection>
          <PointExplain>
            개발을 처음 접하는 동아리원 또한 팀에 소속되어 상대적으로 쉬운
            난이도의 과제를 배정받아 프로젝트를 함께 경험합니다.
          </PointExplain>
          <PointFourthExplain>
            정기적으로 전체 세미나를 진행하여 각 팀의 상황을 보고하고
            피드백합니다.
          </PointFourthExplain>
        </PointExplainSection>
      </PointSection>
      <ActivitySection>
        <ActivityLogo>Activity</ActivityLogo>
        <Img src={curriculum} alt="curriculum" />
      </ActivitySection>
      <DetailSection>
        <Detail>
          메인 프로젝트 과정은 서비스 런칭까지의 과정의 최소한의 제시이며 팀
          상황에 따라 유동적으로 변동 가능합니다.
        </Detail>
      </DetailSection>
    </>
  );
}

const ImgSection = styled.div`
  display: flex;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const IntroduceSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #faf7f7;
`;

const IntroduceSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const IntroduceLogo = styled.h1`
  font-size: 56px;
  font-weight: 600;
  font-family: Pretendard-SemiBold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
  margin-block-end: 0.3em;
  @media screen and (max-width: 1379px) {
    font-size: 32px;
  }
`;

const Explain = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-block-start: 0;
  margin-block-end: 0;
  @media screen and (max-width: 1379px) {
    font-size: 16px;
  }
`;

const PointSection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const PointLogo = styled.h1`
  font-size: 56px;
  font-weight: 600;
  font-family: Pretendard-SemiBold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
  margin-block-end: 0.6em;
  @media screen and (max-width: 1379px) {
    font-size: 32px;
  }
`;

const PointImgSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PointImg = styled.img`
  width: 20vw;
  height: 25vh;
`;

const PointSubImg = styled.img`
  width: 19vw;
  height: 24vh;
  border-radius: 15px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
`;

const PointTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PointLeftTitle = styled.h1`
  font-family: Pretendard-Regular;
  width: 20vw;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.72px;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-right: 6.125vw;
  color: #000;
  @media screen and (max-width: 1379px) {
    font-size: 16px;
  }
`;

const PointRightTitle = styled.h1`
  width: 20vw;
  font-family: Pretendard-Regular;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.72px;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 6.4vw;
  color: #000;
  @media screen and (max-width: 1379px) {
    font-size: 16px;
  }
`;

const PointExplainSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PointExplain = styled.h1`
  width: 20vw;
  font-family: Pretendard-Regular;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  margin-block-start: 0.3em;
  color: #000;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;

const PointRightExplain = styled.h1`
  width: 20vw;
  font-family: Pretendard-Regular;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  margin-block-start: 0.3em;
  color: #000;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;

const PointFourthExplain = styled.h1`
  width: 20vw;
  font-family: Pretendard-Regular;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  margin-block-start: 0.3em;
  color: #000;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;

const ActivitySection = styled.div`
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const ActivityLogo = styled.h1`
  font-size: 56px;
  font-weight: 600;
  font-family: Pretendard-SemiBold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
  @media screen and (max-width: 1379px) {
    font-size: 32px;
  }
`;

const DetailSection = styled.div`
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const Detail = styled.h1`
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: center;
  color: #393939;
  @media screen and (max-width: 1379px) {
    font-size: 12px;
  }
`;
