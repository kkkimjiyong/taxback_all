import React, { useEffect } from "react";
import styled from "styled-components";
import DoneImage from "../Assets/Image/TaxBack_SignUpDone.png";
import { Layout } from "../Global/Layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const SignUpDone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/survey");
    // }, 5000);
  });
  return (
    <Layout>
      <Wrap>
        <Header>
          회원 가입 완료 <AiFillCheckCircle className="icon" />
        </Header>
        <ContentBox>
          <img className="img" src={DoneImage} alt="완료이미지" />
          <ContentTxt>
            <span className="name">홍길동</span>님의 회원가입을 <br />
            축하드려요🥳
          </ContentTxt>
          <HelpTxt>5초 후 홈 화면으로 이동합니다</HelpTxt>
        </ContentBox>{" "}
        <HomeBtn onClick={() => navigate("/")}>홈 화면으로 이동하기</HomeBtn>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin-top: 94px;
  display: flex;
  align-items: center;
  width: 90%;
  margin-left: 20px;
  color: var(--color-thickSub);
  font-size: 24px;
  font-weight: 600;
  .icon {
    margin-left: 10px;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-thickSub);
  .img {
    margin-top: 83px;
    margin-bottom: 10px;
    width: 70%;
  }
`;

const ContentTxt = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin: 30px 0;
  .name {
    color: var(--color-midSub);
  }
`;

const HelpTxt = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const HomeBtn = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79%;
  padding: 3.7% 3%;
  margin-top: 70px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  background-color: var(--color-main);
  color: white;
  :hover {
    cursor: pointer;
  }
`;
