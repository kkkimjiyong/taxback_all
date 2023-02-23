import React from "react";
import styled, { keyframes } from "styled-components";
import TaxBackRowLogo from "../Assets/Image/TaxBack_Row_Logo.png";
import TaxBackMainBoxLogo from "../Assets/Image/TaxBack_Main_Box1.png";
import KaKaoLogin from "../Assets/Image/kakao_login_medium_wide.png";
import KaKaoSymbol from "../Assets/Image/KaKao_Symbol.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { Layout } from "../Global/Layout";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const redirectUri = "https://tax-back-transfer.vercel.app/kakao/auth";
  // const redirectUri = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=6ad4090f0f6da30b4f468e9d81481e0e&redirect_uri=${redirectUri}&response_type=code`;

  return (
    <Layout>
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <Wrap>
        <Img src={TaxBackRowLogo} alt="로고" />{" "}
        <MainTextBox>
          세금 무료 조회하고
          <br />
          최저 수수료로 세금 환급 받기
        </MainTextBox>
        <img className="boxLogo" src={TaxBackMainBoxLogo} alt="박스로고" />
        <KaKaoBox
          // onClick={() => alert("개발중입니다!")}
          href={KAKAO_AUTH_URL}
        >
          <img className="symbol" src={KaKaoSymbol} alt="카카오 심볼" />
          <div className="txt">카카오로 시작하기</div>
        </KaKaoBox>
        <SmallTextBox>
          이메일로
          <span onClick={() => navigate("/signup")} className="txtcolor">
            회원가입
          </span>
          <span onClick={() => navigate("/login")} className="txtcolor">
            | 로그인
          </span>
        </SmallTextBox>
      </Wrap>
    </Layout>
  );
};
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
  animation: ${smoothAppear} 1s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 375px;
  height: 100vh;
  .boxLogo {
    width: 75%;
    margin-top: 60px;
    /* margin-left: 75px; */
    margin-bottom: 25%;
    @media screen and (max-height: 730px) {
      width: 55%;
    }
    @media screen and (max-height: 670px) {
      width: 45%;
      margin-top: 40px;
    }
    @media screen and (max-height: 600px) {
      margin-top: 10px;
    }
    @media screen and (max-height: 570px) {
      display: none;
    }
  }
`;

const BackGroundImg = styled.img`
  width: 103%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
`;

const Img = styled.img`
  width: 70%;
  margin-top: 50px;
  margin-right: 60px;
`;

const MainTextBox = styled.div`
  width: 90%;
  margin: 15px 0 5% 28px;
  font-weight: 700;
  font-size: 24px;
  color: var(--color-thickSub);
  @media screen and (max-height: 570px) {
    margin-top: 80px;
  }
`;

const KaKaoBox = styled.a`
  position: absolute;
  bottom: 120px;
  text-decoration: none;
  color: black;
  width: 320px;
  height: 51px;
  background-color: #fee500;
  border-radius: 10px;
  align-items: center;
  display: flex;
  .txt {
    font-weight: 700;
    font-size: 16px;
    margin: 0 auto;
  }
  .symbol {
    position: absolute;
    margin: 4.5% 2%;
    width: 13%;
  }
`;

const SmallTextBox = styled.div`
  position: absolute;
  bottom: 80px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
  color: #777777;
  .txtcolor {
    margin-left: 3px;
    color: #4323a7;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
