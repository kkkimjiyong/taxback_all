import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../../Global/Layout";
import BackGroundLogo from "../../Assets/Image/BackGround_Logo.png";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../../Global/MainHeader";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import HeadShake from "react-reveal/HeadShake";
import Pulse from "react-reveal/Pulse";
import { motion } from "framer-motion";

const SurveyMain = () => {
  const navigate = useNavigate();
  // 평균 환급액
  let average = 2389;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // --------   일정시간 진행하지 않으면, 버튼 강조 애니메이션   ----------------------

  const [btnAnimationTrue, setAnimationTrue] = useState<boolean>();
  const [btnAnimation, setAnimation] = useState<number>(0);

  useEffect(() => {
    const button = setInterval(() => {
      if (btnAnimationTrue) setAnimation((prev: any) => prev + 1);
    }, 2500);
    setTimeout(() => {
      setAnimationTrue(true);
    }, 2000);
    return () => clearInterval(button);
  });

  // -----------------   경정청구 사례 데이터   ---------------------------------
  const process = useRef<number>(0);
  const [change, setChange] = useState<number>(0);
  const [processAnimation, setProcessAnimation] = useState<boolean>(true);
  // 5초에 한 번씩 사례내용 바꾸기
  useEffect(() => {
    const example = setInterval(() => {
      if (process.current === 2) {
        process.current = 0;
      } else {
        process.current += 1;
      }
    }, 2700);
    return () => clearInterval(example);
  });

  useEffect(() => {
    const example1 = setInterval(() => {
      if (change === 2) {
        setChange(0);
      } else {
        setChange((prev) => prev + 1);
      }
    }, 2200);
    return () => clearInterval(example1);
  });

  const exampleData = [
    {
      title: "김**님",
      number: "347,268,530",
      title2: "원 환급완료",
      comment:
        "택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요. 빠르고 정확하게 해주신 덕분에 많은 환급금액을 받을 수 있었어요",
      person: "1세대 1주택자 김**님",
    },
    {
      title: "이**님",
      number: "78,269,308",
      title2: "원 환급완료",
      comment:
        "택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요. 빠르고 정확하게 해주신 덕분에 많은 환급금액을 받을 수 있었어요",
      person: "1세대 1주택자 이**님",
    },
    {
      title: "성**님",
      number: "891,930",
      title2: "원 환급완료",
      comment:
        "택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요. 빠르고 정확하게 해주신 덕분에 많은 환급금액을 받을 수 있었어요",
      person: "1세대 1주택자 성**님",
    },
  ];

  return (
    <Layout>
      <Wrap>
        <MainHeader title={"환급 받기"} />
        <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
        <ConetentBox change={change === process.current}>
          <div className="title">
            {exampleData[process.current].title},&nbsp;{" "}
            <span className="number">
              {" "}
              {exampleData[process.current].number}
            </span>
            원 환급완료
          </div>
          <div className="comment">{exampleData[process.current].comment}</div>
          <div className="person">{exampleData[process.current].person}</div>
        </ConetentBox>
        <NumberTitle>양도소득세 환급 | 양도소득세 신고자</NumberTitle>
        <NumberCtn>
          <div>
            <NumberBox>
              <TotlaNumber>
                <div className="number"> 6</div>
                <div className="number"> 1</div>
              </TotlaNumber>
              <div className="unit1">%</div>
            </NumberBox>
            <div className="sub"> 환급 발생 비율</div>
          </div>
          <div>
            <NumberBox>
              <TotlaNumber>
                <div className="number"> 1</div>
                <div className="number"> 1</div>
                <div className="number"> 5</div>
                <div className="number"> 0</div>
              </TotlaNumber>{" "}
              <div className="unit2">만원</div>
            </NumberBox>{" "}
            <div className="sub2">평균 환급금액</div>
          </div>
        </NumberCtn>
        <ButtonCtn>
          <ButtonLabel>
            <span className="color">양도소득세 </span>&nbsp;환급을 원하세요?
          </ButtonLabel>
          <HeadShake spy={btnAnimation}>
            <LookUpButton onClick={() => navigate("/transfer/verify")}>
              양도소득세환급받기
            </LookUpButton>
          </HeadShake>
        </ButtonCtn>
      </Wrap>
    </Layout>
  );
};

export default SurveyMain;

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideCtn = styled.div`
  width: 1650px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

// const ContentCtn = styled.div`
//   background-color: aliceblue;
//   width: 330px;
//   margin: auto 0;
//   display: flex;
//   overflow: hidden;
// `;

const ConetentBox = styled.div<{ change: boolean }>`
  /* animation: ${smoothAppear} 2s infinite; */
  width: 300px;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  margin-top: 20%;
  transition: all 200ms;
  @media screen and (min-height: 800px) {
    margin-top: 35%;
  }
  .number {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-main);
  }
  .title {
    color: var(--color-main);
    margin-bottom: 20px;
  }
  .comment {
    color: black;
    width: 100%;
    font-size: 12px;
    line-height: 160%;
  }
  .person {
    margin-top: 5%;
    font-size: 14px;
    color: #6b6b6b;
  }
`;
const NumberTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  width: 85%;
  margin-top: 10%;
  padding: 1% 0;
  color: var(--color-thickSub);
  border-bottom: 1px solid var(--color-thickSub);
  @media screen and (max-height: 660px) {
    font-size: 12px;
    margin-top: 5%;
  }
`;

const NumberCtn = styled.div`
  position: relative;
  margin-top: 10px;
  margin-right: 40px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sub {
    bottom: -22px;
    margin-left: 7px;
    position: absolute;
    font-size: 12px;
    color: var(--color-thickSub);
    @media screen and (max-height: 660px) {
      font-size: 10px;
    }
  }
  .sub2 {
    bottom: -22px;
    margin-left: 7px;
    position: absolute;
    font-size: 12px;
    color: var(--color-thickSub);
    @media screen and (max-height: 660px) {
      font-size: 10px;
    }
  }
`;

const NumberBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 20px;

  .unit1 {
    position: absolute;
    bottom: -5px;
    right: -22px;
  }
  .unit2 {
    position: absolute;
    bottom: -5px;
    right: -40px;
  }
`;

const TotlaNumber = styled.div`
  display: flex;
  font-size: 50px;
  color: var(--color-midSub);
  font-weight: 700;

  .number {
    animation: ${smoothAppear} 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 4px;
    height: 50px;
    padding: 2px;
    background-color: white;
    box-shadow: 0px 3px 3px 0px gray;
  }
`;

const ButtonCtn = styled.div`
  position: fixed;
  bottom: 50px;
  width: 84%;
  display: flex;
  flex-direction: column;
  @media screen and (min-height: 730px) {
    margin-top: 20%;
  }
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 30px;
  .color {
    color: var(--color-midSub);
  }
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 319px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin: 10px auto 0 auto;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
