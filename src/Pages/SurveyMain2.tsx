import React from "react";
import styled from "styled-components";
import TaxBackRowLogo from "../Assets/Image/MainLogo2.png";
import TaxBackMainBoxLogo from "../Assets/Image/Taxback_Main_Box.png";
import KaKaoLogin from "../Assets/Image/kakao_login_medium_wide.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { Layout } from "../Global/Layout";
import { useNavigate } from "react-router-dom";

export const SurveyMain2 = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {" "}
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
      <Wrap>
        {" "}
        <Img src={TaxBackRowLogo} alt="로고" />{" "}
        <MainTextBox>
          세금 무료 조회하고
          <br />
          최저 수수료로 환급 받기
        </MainTextBox>
        <img className="boxLogo" src={TaxBackMainBoxLogo} alt="박스로고" />
        <SmallTextBox onClick={() => navigate("/signup")}>
          양도소득세 환급 받기
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
    margin-left: 22%;
    margin-bottom: 4%;
  }
  .kakao {
    transform: scale(1);
    width: 92%;
    margin-left: 3%;
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
  width: 60%;
  margin-top: 15%;
  :hover {
    cursor: pointer;
  }
`;

const MainTextBox = styled.div`
  margin: 2% 0 5% 2%;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-main);
`;

const SmallTextBox = styled.div`
  position: absolute;
  bottom: 5%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-left: 3%;
  margin-top: 3%;
  padding: 4% 0;
  color: white;
  background-color: var(--color-main);
  border: 1px solid var(--color-main);
  border-radius: 40px;
  :hover {
    cursor: pointer;
    color: var(--color-lightSub);
  }
`;
