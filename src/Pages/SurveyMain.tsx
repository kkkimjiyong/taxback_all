import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackColumnLogo from "../Assets/Image/logo_Column_TaxBack2.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";

const SurveyMain = () => {
  const navigate = useNavigate();
  // 평균 환급액
  let average = 2389;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Layout>
      <MainHeader title={"환급받기"} />
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <LogoImage src={TaxBackColumnLogo} alt="로고" />
      <NumberBox>
        <TotlaNumber>총 {averageNumber}건</TotlaNumber>
        <div>을 맡았습니다.</div>
      </NumberBox>

      <ButtonCtn>
        <ButtonLabel>
          <span>양도소득세 </span>환급을 원하세요?
        </ButtonLabel>
        <LookUpButton onClick={() => navigate("/survey/select/assign")}>
          <span></span>양도소득세 환급받기
        </LookUpButton>
      </ButtonCtn>
      <NavBar />
    </Layout>
  );
};

export default SurveyMain;

const LogoImage = styled.img`
  margin-top: 15%;
  height: 30%;
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const NumberBox = styled.div`
  margin-top: 15%;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TotlaNumber = styled.div`
  font-size: 40px;
  color: var(--color-thickSub);
  font-weight: 700;
`;

const ButtonCtn = styled.div`
  margin-top: 30%;
  width: 84%;
  display: flex;
  flex-direction: column;
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 20px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
