import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CurrentCheck } from "../../../Components/Apply/CheckSvg";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";

type Ttitle = {
  title: string;
  emphasis: string;
  title2: string;
  sub: string;
};

export const Detail = () => {
  const [current, setCurrent] = useState<number>(1);
  const [progressData, setProgressData] = useState<Ttitle>({
    title: "세금환급 담당자를",
    emphasis: "배정 중이에요",
    title2: "이에요",
    sub: "최대 00일이 소요될 수 있어요",
  });

  useEffect(() => {
    setProgressData(CurrentProgress[current - 1]);
  }, []);

  // 진행상태값 객체저장
  const CurrentProgress = [
    {
      title: "세금환급 담당자를",
      emphasis: "배정 중",
      title2: "이에요",
      sub: "최대 00일이 소요될 수 있어요",
    },
    {
      title: "세금환급 담당자가",
      emphasis: "연락 예정",
      title2: "이에요",
      sub: "예정시간 13 ~ 14시",
    },
    {
      title: "환급이",
      emphasis: "진행 중",
      title2: "이에요",
      sub: "최대 0일이 소요될 수 있어요",
    },
    {
      title: "환급이",
      emphasis: "완료",
      title2: "되었어요",
      sub: "완료일: 0000-00-00",
    },
  ];

  return (
    <Layout>
      <SurveyHeader title={"내 환급 신청 내역"} undoPage={"/about/apply"} />
      <InfoBox>
        <div className="type">경정청구</div>
        <div className="title">
          회사이름<span className="titletype">(법인)</span>
        </div>
        <div className="date">신청일 | 2022-02-22</div>
      </InfoBox>{" "}
      <ProgressTitle>
        {progressData.title}&nbsp;
        <span className="emphasis">{progressData?.emphasis}</span>
        {progressData?.title2}
      </ProgressTitle>
      <ProgressSub>{progressData.sub}</ProgressSub>
      <ProgressCtn>
        <CurrentCheck current={current === 1} />
        <CurrentCheck current={current === 2} />
        <CurrentCheck current={current === 3} />
        <CurrentCheck current={current === 4} />
        <GrayLine />
      </ProgressCtn>{" "}
      <HelpBox>
        <div>
          {" "}
          <div className="title">
            세금 환급 담당자가
            <br />
            배정 중이에요
          </div>
          <div className="sub">문의사항은 고객센터로 연락주세요</div>
        </div>
        <HelpBtn>문의하기</HelpBtn>
      </HelpBox>
    </Layout>
  );
};

const InfoBox = styled.div`
  margin-top: 143px;
  padding: 14px 20px;
  width: 303px;
  height: 65px;
  background-color: var(--color-contentBox);
  border-radius: 10px;
  .type {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-midSub);
  }
  .titletype {
    font-weight: 500;
    font-size: 13px;
  }
  .title {
    margin: 2px 0;
    font-weight: 500;
    font-size: 16px;
  }
  .date {
    font-weight: 500;
    font-size: 12px;
  }
`;

const ProgressTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 20px;
  .emphasis {
    color: var(--color-midSub);
  }
`;

const ProgressSub = styled.div`
  margin-bottom: 35px;
  font-weight: 500;
  font-size: 13px;
`;

const ProgressCtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  width: 303px;
`;

const GrayLine = styled.div`
  width: 243px;
  height: 1px;
  background-color: #d9d9d9;
  position: absolute;
`;

const HelpBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38px;
  width: 289px;
  height: 64px;
  padding: 26px 30px 26px 24px;
  border: 1px solid #bfb9d9;
  border-radius: 10px;
  .title {
    font-weight: 500;
    font-size: 16px;
  }
  .sub {
    margin-top: 5px;
    font-weight: 500;
    font-size: 12px;
    color: #999999;
  }
`;

const HelpBtn = styled.div`
  position: absolute;
  width: 77px;
  height: 32px;
  border-radius: 50px;
  background-color: var(--color-midSub);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 46px;
  font-weight: 700;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
`;
