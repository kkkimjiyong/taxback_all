import React from "react";
import styled from "styled-components";
import TaxBackRowLogo from "../Assets/Image/TaxBack_Row_Logo.png";
import TaxBackMainBoxLogo from "../Assets/Image/TaxBack_Main_Box1.png";
import KaKaoLogin from "../Assets/Image/kakao_login_medium_wide.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { Layout } from "../Global/Layout";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {" "}
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <Wrap>
        {" "}
        <Img src={TaxBackRowLogo} alt="로고" />{" "}
        <MainTextBox>
          TaxBack에서
          <br />
          무료로 조회하고
          <br />
          최저 수수료로
          <br />
          세금 환급 받기
        </MainTextBox>
        <img className="boxLogo" src={TaxBackMainBoxLogo} alt="박스로고" />
        <img
          onClick={() => navigate("/signup")}
          className="kakao"
          src={KaKaoLogin}
          alt="카카오로그인"
        />
        <SmallTextBox onClick={() => navigate("/signup")}>
          이메일로 회원가입 | 로그인
        </SmallTextBox>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  .boxLogo {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 10%;
    @media screen and (min-height: 800px) {
      margin-bottom: 30%;
    }
  }
  .kakao {
    width: 80%;
    margin-left: 10%;
    @media screen and (max-height: 819px) {
      margin-top: 1%;
    }
    @media screen and (max-height: 693px) {
      margin-top: 25%;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
`;

const Img = styled.img`
  width: 50%;
  margin-top: 5%;
  :hover {
    cursor: pointer;
  }
`;

const MainTextBox = styled.div`
  margin: 5% 0 5% 2%;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-main);
`;

const SmallTextBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10%;
  margin-top: 3%;
  padding: 3% 0;
  color: var(--color-main);
  border: 1px solid var(--color-main);
  border-radius: 25px;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;
