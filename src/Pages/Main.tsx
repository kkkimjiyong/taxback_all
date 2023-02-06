import React from "react";
import styled from "styled-components";
import TaxBackRowLogo from "../Assets/Image/TaxBack_Row_Logo.png";
import TaxBackMainBoxLogo from "../Assets/Image/TaxBack_Main_Box1.png";
import KaKaoLogin from "../Assets/Image/kakao_login_medium_wide.png";
import KaKaoSymbol from "../Assets/Image/KaKao_Symbol.png";
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
        {/* <img
          onClick={() => navigate("/signup")}
          className="kakao"
          src={KaKaoLogin}
          alt="카카오로그인"
        /> */}
        <KaKaoBox>
          <img className="symbol" src={KaKaoSymbol} alt="카카오 심볼" />
          <div className="txt">카카오로 시작하기</div>
        </KaKaoBox>
        <SmallTextBox>
          이메일로{" "}
          <span onClick={() => navigate("/signup")} className="txtcolor">
            회원가입 | 로그인
          </span>
        </SmallTextBox>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 94%;
  height: 100%;
  .boxLogo {
    width: 70%;
    margin-left: 15%;
    margin-top: 2%;
    margin-bottom: 25%;
    @media screen and (max-height: 811px) {
      width: 50%;
      margin-top: 5%;
      margin-bottom: 15%;
      margin-left: 25%;
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
  width: 103%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
`;

const Img = styled.img`
  width: 70%;
  margin-top: 17%;
  @media screen and (max-height: 811px) {
    margin-top: 10%;
  }
  :hover {
    cursor: pointer;
  }
`;

const MainTextBox = styled.div`
  margin: 5% 0 5% 3%;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-thickSub);
  @media screen and (max-height: 811px) {
    font-size: 24px;
  }
`;

const KaKaoBox = styled.div`
  width: 90%;
  height: 51px;
  margin: 0 auto;
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
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  margin-left: 10%;
  margin-top: 4%;
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
