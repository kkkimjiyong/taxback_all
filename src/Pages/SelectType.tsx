import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackRowLogo from "../Assets/Image/TaxBack_Row_Logo.png";
import TaxBackColumnLogo from "../Assets/Image/logo_Column_TaxBack2.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";
import Zoom from "react-reveal/Zoom";

const SelectType = () => {
  const navigate = useNavigate();

  // 기존 택스백 url로 연결
  const TaxBack = () => {
    window.location.href = "https://apply.tax-back.kr/";
  };
  return (
    <Layout>
      <Wrap>
        <MainHeader title={"환급받기"} />
        <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
        <LogoImage src={TaxBackColumnLogo} alt="로고" />
        <LogoImage className="rowLogo" src={TaxBackRowLogo} alt="로고" />

        <ButtonCtn className="top">
          <ButtonLabel>
            <span className="midsub">법인세, 소득세</span> &nbsp;환급을
            원하세요?
          </ButtonLabel>
          <BusinessBtn onClick={() => navigate("/business")}>
            사업자 세금 환급받기
          </BusinessBtn>
        </ButtonCtn>
        <ButtonCtn>
          <ButtonLabel>
            <span className="midsub">양도소득세</span>&nbsp; 환급을 원하세요?
          </ButtonLabel>
          <LookUpButton onClick={() => navigate("/transfer")}>
            양도소득세 환급받기
          </LookUpButton>
        </ButtonCtn>
      </Wrap>
      <NavBar />
    </Layout>
  );
};

export default SelectType;

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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LogoImage = styled.img`
  @media screen and (min-height: 850px) {
    margin-top: 150px;
    margin-bottom: 20px;
  }
  margin-top: 50px;
  height: 170px;
  @media screen and (max-height: 740px) {
    display: none;
  }
  &.rowLogo {
    display: none;
    @media screen and (max-height: 740px) {
      display: block;
      height: 100px;
    }
    @media screen and (max-height: 610px) {
      display: none;
    }
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;
const ConetentBox = styled.div`
  animation: ${smoothAppear} 1s;
  width: 300px;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  display: none;
  @media screen and (min-height: 880px) {
    margin-top: 40px;
  }
  &.second {
    @media screen and (max-height: 950px) {
      display: none;
    }
    margin-top: 20px;
    width: 300px;
    height: 90px;
    padding: 20px;
  }
  @media screen and (min-height: 800px) {
    display: block;
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

const ButtonCtn = styled.div`
  animation: ${smoothAppear} 800ms linear;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  .midsub {
    color: var(--color-midSub);
  }
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;

const BusinessBtn = styled.div`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 319px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 14px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 319px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 14px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
