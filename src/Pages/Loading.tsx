import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import TaxBackRowLogo from "../Assets/Image/TaxBack_Row_Logo.png";
export const Loading = () => {
  return (
    <Layout>
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <RowLogo src={TaxBackRowLogo} alt="로고" />{" "}
      <Wrap>
        <Spinner></Spinner>
        <HelpTxt>잠시만 기다려 주세요..</HelpTxt>
      </Wrap>
    </Layout>
  );
};

const spin = keyframes`
    from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
`;

const RowLogo = styled.img`
  position: absolute;
  width: 60%;
  left: 3%;
  top: 5%;
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const HelpTxt = styled.div`
  position: absolute;
  bottom: 38%;
  color: var(--color-thickSub);
  font-weight: 700;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: var(--color-main);
  border-bottom-color: var(--color-main);
  animation: ${spin} 0.8s ease infinite;
`;
