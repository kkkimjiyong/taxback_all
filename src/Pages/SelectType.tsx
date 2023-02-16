import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackColumnLogo from "../Assets/Image/logo_Column_TaxBack.png";
import TaxBackRowLogo from "../Assets/Image/logo_Column_TaxBack2.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";

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
          {" "}
          <ButtonLabel>
            <span className="midsub">법인세, 소득세</span> &nbsp;환급을
            원하세요?
          </ButtonLabel>
          <HrefBtn href="https://apply.tax-back.kr/">
            사업자 세금 환급받기
          </HrefBtn>
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
      {/* <NavBar /> */}
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
`;

const LogoImage = styled.img`
  @media screen and (min-height: 850px) {
    margin-top: 15%;
  }
  margin-top: 50px;
  transform: scale(1);
  &.rowLogo {
    display: none;
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const ButtonCtn = styled.div`
  animation: ${smoothAppear} 800ms linear;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  &.top {
    margin-top: 60px;
  }
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

const HrefBtn = styled.a`
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
