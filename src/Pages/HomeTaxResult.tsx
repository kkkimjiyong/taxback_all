import React, { useEffect, useState } from "react";
import { Layout } from "../Global/Layout";
import { MainHeader } from "../Global/MainHeader";
import { SurveyHeader } from "../Global/SurveyHeader";
import TaxBackResult from "../Assets/Image/Transfer_Result.png";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

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

  // ------------------  모달 상태관리   ----------------------
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setModal(true);
  }, []);

  // ----------------------   양도세 납부내역 데이터   --------------------
  const [taxResult, setTaxResult] = useState<any>([
    { title: "2022년", price: "30,975,220" },
    { title: "2021년", price: "30,975,220" },
    { title: "2020년", price: "30,975,220" },
    { title: "2019년", price: "30,975,220" },
    { title: "2018년", price: "30,975,220" },
  ]);

  return (
    <Wrap>
      <SurveyHeader
        undoPage={"/survey/verify/transfer"}
        title={"양도소득세 납부내역 확인"}
      />
      <ResultBox>
        {/* <div className="name">{JSON.parse(name).name}님의</div> */}
        <ResultImg src={TaxBackResult} alt="이미지" />{" "}
        <div className="name">김지용님의</div>
        <div>최근 5년간 납부한 양도소득세는</div>
        <ResultNum>
          <div className="number">{resultNum}원</div>&nbsp;이에요
        </ResultNum>
      </ResultBox>
      <ResultModal modal={modal}>
        {taxResult.map((result: any) => (
          <Result>
            <div className="title">{result.title}</div>
            <div className="dash"></div>
            <div className="price">{result.price}원</div>
          </Result>
        ))}
      </ResultModal>
      <ButtonBox>
        <Button onClick={() => navigate("/survey/start/assign/transfer")}>
          양도소득세 환급받기
        </Button>
      </ButtonBox>
    </Wrap>
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

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultBox = styled.div`
  padding: 10px 0 20px 0;
  margin-top: 38%;
  margin-bottom: -10px;
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
  margin-top: 5px;
  font-weight: 700;
  font-size: 21px;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .title {
    font-size: 22px;
    color: var(--color-main);
    margin-right: 3%;
  }
  .number {
    color: var(--color-sub);
  }
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
  width: 319px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
  z-index: 2;
`;

const ResultModal = styled.div<{ modal: boolean }>`
  opacity: ${({ modal }) => (modal ? "1" : "0")};
  transform: ${({ modal }) =>
    modal ? "translateY(0px)" : "translateY(120px)"};
  transition: all 600ms ease-in-out;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  height: 200px;
  width: 100%;
  max-width: 375px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  z-index: 2;
  box-shadow: 0px -15px 20px -25px gray;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
  width: 90%;
  /* border-bottom: 1px solid #dddddd; */
  .title {
    font-weight: 500;
  }
  .price {
    font-weight: 700;
    color: var(--color-thickSub);
  }
  .dash {
    width: 140px;
    transform: scaleY(0.2);
    border-bottom: 2px dashed gray;
  }
`;
