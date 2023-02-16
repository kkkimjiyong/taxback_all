import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import HeadShake from "react-reveal/HeadShake";

const SurveyMain = () => {
  const navigate = useNavigate();
  // 평균 환급액
  let average = 2389;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // --------   일정시간 진행하지 않으면, 버튼 강조 애니메이션   ----------------------

  const [btnAnimation, setAnimation] = useState<number>(0);

  useEffect(() => {
    const button = setInterval(() => {
      setAnimation((prev: any) => prev + 1);
    }, 2500);
    return () => clearInterval(button);
  });

  return (
    <Layout>
      <Wrap>
        <MainHeader />
        <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
        <ConetentBox>
          <Zoom right cascade>
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
          </Zoom>
          <div className="comment">
            택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요.
            다른 곳에서는 조회만 해도 세무대리인이 바뀐다고 해서
            망설여지더라고요.
          </div>

          <div className="person">다주택자 A님</div>
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

const ConetentBox = styled.div`
  animation: ${smoothAppear} 1s;
  width: 300px;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  margin-top: 20%;
  @media screen and (min-height: 800px) {
    margin-top: 35%;
  }
  .title {
    color: var(--color-main);
    font-size: 16px;
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
  width: 80%;
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
  margin-right: 7%;
  width: 70%;
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
