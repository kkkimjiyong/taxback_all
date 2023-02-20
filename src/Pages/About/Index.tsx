import React from "react";
import styled from "styled-components";
import { Layout } from "../../Global/Layout";
import { MainHeader } from "../../Global/MainHeader";
import { IoIosArrowForward } from "react-icons/io";
import { NavBar } from "../../Global/NavBar";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <MainHeader title={"더 보기"} />
      <Wrap>
        <MoreCtn>
          <MoreList onClick={() => navigate("/about/apply")}>
            내 환급 신청 내역
            <IoIosArrowForward className="icon" size={22} />
          </MoreList>
          <MoreList onClick={() => navigate("/about/edit")}>
            프로필 수정
            <IoIosArrowForward className="icon" size={22} />
          </MoreList>
          <MoreList>
            알림 설정
            <IoIosArrowForward className="icon" size={22} />
          </MoreList>
          <MoreList className="logout" onClick={() => navigate("/")}>
            로그아웃
            <IoIosArrowForward className="icon" size={22} />
          </MoreList>
        </MoreCtn>
        <GridCtn>
          <FlexBox>
            <GridBox>공지사항</GridBox>
            <GridBox>자주 묻는 질문</GridBox>
          </FlexBox>
          <FlexBox>
            <GridBox>이용 가이드</GridBox>
            <GridBox>버전 2.72 (최신)</GridBox>
          </FlexBox>
        </GridCtn>

        <HelpText>도움이 필요하신가요?</HelpText>
        <HelpCallBtn onClick={() => navigate("/about/counsel")}>
          1:1 문의하기
        </HelpCallBtn>
        <QuitText>탈퇴하기</QuitText>
      </Wrap>
      <NavBar />
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
`;

const MoreCtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const MoreList = styled.div`
  font-weight: 500;
  width: 80%;
  padding: 20px 0;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  &.logout {
    border: none;
  }
  :hover {
    border-bottom: 1px solid #999999;
    font-weight: 600;
    cursor: pointer;
  }
  .icon {
    color: var(--color-gray);
    :hover {
      color: #999999;
    }
  }
`;

const GridCtn = styled.div`
  margin-top: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  height: 12%;
`;

const GridBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  margin: 5px;
  width: 150px;
  height: 77px;
  background-color: #faf9ff;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;

const HelpText = styled.div`
  margin-top: 30px;
  font-weight: 500;
  font-size: 16px;
  color: var(--color-main);
`;

const HelpCallBtn = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 318px;
  height: 50px;
  background-color: var(--color-main);
  color: white;
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }
`;

const QuitText = styled.div`
  margin-top: 15px;
  font-weight: 500;
  font-size: 13px;
  color: var(--color-gray);
  :hover {
    cursor: pointer;
  }
`;
