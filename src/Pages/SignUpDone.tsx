import React, { useEffect } from "react";
import styled from "styled-components";
import DoneImage from "../Assets/Image/TaxBack_SignUpDone.png";
import { Layout } from "../Global/Layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const SignUpDone = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/survey");
  //   }, 5000);
  // });
  return (
    <Layout>
      <Header>
        회원 가입 완료 <AiFillCheckCircle className="icon" />
      </Header>
      <ContentBox>
        <img className="img" src={DoneImage} alt="완료이미지" />
        <ContentTxt>
          <span>홍길동</span>님의 회원가입을 <br />
          축하드려요
        </ContentTxt>
        <HelpTxt>5초 후 홈 화면으로 이동합니다</HelpTxt>
      </ContentBox>{" "}
      <HomeBtn onClick={() => navigate("/survey")}>
        홈 화면으로 이동하기
      </HomeBtn>
    </Layout>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-top: 10%;
  color: var(--color-thickSub);
  font-size: 24px;
  font-weight: 600;
  .icon {
    margin-left: 10px;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img {
    width: 60%;
  }
`;

const ContentTxt = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 5% 0;
`;

const HelpTxt = styled.div`
  font-size: 14px;
`;

const HomeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 3%;
  margin-bottom: 25%;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  background-color: var(--color-main);
  color: white;
  :hover {
    cursor: pointer;
  }
`;
