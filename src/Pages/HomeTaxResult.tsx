import React, { useEffect, useState } from "react";
import { Layout } from "../Global/Layout";
import { MainHeader } from "../Global/MainHeader";
import { SurveyHeader } from "../Global/SurveyHeader";
import TaxBackResult from "../Assets/Image/Transfer_Result.png";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

export const HomeTaxResult = () => {
  const navigate = useNavigate();

  // const name: any = localStorage.getItem("user");

  let result = 184625721;

  // --------   글자 타이핑효과  ---------
  const [number, setNumber] = useState<number>(184625721 - 80);
  const [stop, setStop] = useState<boolean>(false);
  let resultNum = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!stop) {
        if (number === result) {
          setStop(true);
        } else {
          setNumber((prev: any) => prev + 1);
        }
      }
    }, 20);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <Layout>
      <SurveyHeader
        undoPage={"/survey/verify/transfer"}
        title={"양도세 납부내역"}
      />
      <ResultBox>
        {/* <div className="name">{JSON.parse(name).name}님의</div> */}
        <div className="name">김지용님의</div>
        <div>양도세 납부 내역</div>
        <ResultImg src={TaxBackResult} alt="이미지" />
        <ResultNum>
          <div className="title">총 납부 세액</div>{" "}
          <div className="number">{resultNum}원</div>
        </ResultNum>
      </ResultBox>{" "}
      <SubTxt>* 최근 5년간의 신고자료를 통해 확인된 결과에요.</SubTxt>
      <SubTxt>
        * 보다 정확한 계산을 위해 <span className="mid">추가정보입력</span>을
        통해 사업장의 상세정보를 입력해주세요.
      </SubTxt>
      <ButtonBox>
        <Button onClick={() => navigate("/survey/start/assign/transfer")}>
          예상 가능 환급액 점검하기
        </Button>
      </ButtonBox>
    </Layout>
  );
};

const number = keyframes`
     0% {
    opacity: 0;
    transform: scale(0.7);
  }
  60% {
    transform:  scale(1.1);
  }
  100% {
    opacity: 1;
    transform:  scale(1);
  }
`;

const ResultBox = styled.div`
  padding: 10px 0;
  margin-top: 38%;
  margin-bottom: 5%;
  width: 90%;
  height: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-contentBox);
  color: var(--color-thickSub);
  font-weight: 700;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  .name {
    color: black;
  }
`;

const ResultImg = styled.img`
  margin-top: 3%;
  width: 55%;
`;

const ResultNum = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  font-weight: 700;
  font-size: 21px;
  color: var(--color-sub);
  .title {
    font-size: 22px;
    color: var(--color-main);
    margin-right: 3%;
  }
  .number {
    animation: ${number} 1s;
  }
`;

const SubTxt = styled.div`
  width: 90%;
  font-size: 11px;
  color: var(--color-gray);
`;

const Button = styled.div`
  color: white;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  border-radius: 30px;
  background-color: var(--color-main);
  &.left {
    background-color: white;
    color: var(--color-main);
    border: 1px solid var(--color-main);
    :hover {
      background-color: var(--color-sub);
      color: white;
    }
  }
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
