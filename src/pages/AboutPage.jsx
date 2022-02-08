import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Study from '../assets/img/about_study.png';

export default function AboutPage() {
  return (
    <>
      <Header />
      <ImgSection>
        <Img src={Study} alt="Study" />
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
        </IntroduceSection>
      </IntroduceSectionWrapper>
      <PointSection>
        <PointLogo>Point</PointLogo>
      </PointSection>
      <ActivitySection>
        <ActivityLogo>Activity</ActivityLogo>
        <ActivityTitleSection>
          <ActivityTitleNewbie>뉴비</ActivityTitleNewbie>
          <ActivityTitleProject>프로젝터</ActivityTitleProject>
        </ActivityTitleSection>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityFirstLogo>자격 요건</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>
              프로그래밍을 처음 접하는 자
            </ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>
              하나 이상의 언어를 다루는 자
            </ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection>
            <ActivityFirstLogo>1학기 초반</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection>
            <ActivityExplainLogo> 웹, 개론, HTML, CSS</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection>
            <ActivityExplainLogo>시장 조사 및 기획</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <ExamSection>
          <ExamLogo>중간고사</ExamLogo>
        </ExamSection>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection>
            <ActivityFirstLogo>1학기 후반</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection>
            <ActivityExplainLogo>Javascript</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection>
            <ActivityExplainLogo>디자인</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <ExamSection>
          <ExamLogo>기말고사</ExamLogo>
        </ExamSection>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityFirstLogo>하계 방학</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>To do list 제작 과제</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>개발</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection>
            <ActivityFirstLogo>2학기 초반</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection>
            <ActivityExplainLogo>React</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection>
            <ActivityExplainLogo>개발</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <ExamSection>
          <ExamLogo>중간고사</ExamLogo>
        </ExamSection>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection>
            <ActivityFirstLogo>2학기 후반</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection>
            <ActivityExplainLogo>Node.js</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection>
            <ActivityExplainLogo>런칭 및 데이터 수집</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
        <ExamSection>
          <ExamLogo>기말고사</ExamLogo>
        </ExamSection>
        <div style={{ display: 'flex' }}>
          <ActivityFirstSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityFirstLogo>동계 방학</ActivityFirstLogo>
          </ActivityFirstSection>
          <ActivitySecondSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>미니 프로젝트</ActivityExplainLogo>
          </ActivitySecondSection>
          <ActivityThirdSection style={{ borderBottom: 'solid 1px #e8e8e8' }}>
            <ActivityExplainLogo>서비스 개선</ActivityExplainLogo>
          </ActivityThirdSection>
        </div>
      </ActivitySection>
    </>
  );
}

const ImgSection = styled.div`
  display: flex;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
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
  font-family: PretendardVariable;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
`;

const Explain = styled.h1`
  font-family: PretendaraVariable;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-block-start: 0;
  margin-block-end: 0;
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
  font-family: PretendardVariable;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
`;

const ActivitySection = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const ActivityLogo = styled.h1`
  font-size: 56px;
  font-weight: 600;
  font-family: PretendardVariable;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.12px;
  margin-block-start: 0;
`;

const ActivityTitleSection = styled.div`
  height: 106px;
  background-color: #e8e8e8;
  padding-left: 10vw;
  padding-right: 10vw;
  border-radius: 5px;
  display: flex;
`;

const ActivityTitleNewbie = styled.div`
  font-family: PretendardVariable;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  width: 35vw;
  height: 47px;
  margin-right: 0;
  margin-top: 29px;
  text-align: left;
`;

const ActivityTitleProject = styled.div`
  font-family: PretendardVariable;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  width: 25vw;
  height: 47px;
  margin-right: 0;
  margin-top: 29px;
  text-align: left;
`;

const ExamSection = styled.div`
  width: 100%;
  height: 89px;
  background-color: #e8e8e8;
  display: flex;
`;

const ExamLogo = styled.span`
  width: 95px;
  height: 33px;
  font-family: PretendardVariable;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  color: #000;
  padding-top: 30px;
`;

const ActivityFirstSection = styled.div`
  width: 10vw;
  height: 89px;
  border-right: solid 1px #e8e8e8;
`;

const ActivityFirstLogo = styled.div`
  width: 116px;
  height: 33px;
  font-family: PretendardVariable;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  padding-top: 30px;
  color: #000;
`;

const ActivitySecondSection = styled.div`
  width: 450px;
  height: 89px;
  border-right: solid 1px #e8e8e8;
`;

const ActivityThirdSection = styled.div`
  width: 28vw;
  height: 89px;
`;
const ActivityExplainLogo = styled.div`
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  color: #000;
  padding-top: 28px;
  padding-left: 10px;
`;
