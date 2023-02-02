import React from "react";
import { Layout } from "../Global/Layout";
import { MainHeader } from "../Global/MainHeader";
import { SurveyHeader } from "../Global/SurveyHeader";
import TaxBackResult from "../Assets/Image/Transfer_Result.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const HomeTaxResult = () => {
  const navigate = useNavigate();

  let result = 184625721;
  let resultNum = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Layout>
      <SurveyHeader undoPage={"/survey/verify"} title={"양도세 납부내역"} />
      <ResultBox>
        <div className="name">박종혁 요양병원장님의</div>
        <div>양도세 납부 내역</div>
        <ResultImg src={TaxBackResult} alt="이미지" />
        <ResultNum>
          <div className="title">총 납부 세액</div> <div>{resultNum}원</div>
        </ResultNum>
      </ResultBox>{" "}
      <SubTxt>* 최근 5년간의 신고자료를 통해 확인된 결과에요.</SubTxt>
      <SubTxt>
        * 보다 정확한 계산을 위해 <span className="mid">추가정보입력</span>을
        통해 사업장의 상세정보를 입력해주세요.
      </SubTxt>
      <ButtonBox>
        <Button className="left">추가 정보 입력</Button>
        <Button onClick={() => navigate("/survey/start/assign/transfer")}>
          환급 신청하기
        </Button>
      </ButtonBox>
    </Layout>
  );
};

const ResultBox = styled.div`
  margin-top: 30%;
  margin-bottom: 5%;
  width: 90%;
  height: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-contentBox);
  color: var(--color-thickSub);
  font-weight: 700;
  border-radius: 10px;
  .name {
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ResultImg = styled.img`
  margin-top: 3%;
  width: 45%;
`;

const ResultNum = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-sub);
  .title {
    font-size: 22px;
    color: var(--color-main);
    margin-right: 3%;
  }
`;

const SubTxt = styled.div`
  width: 90%;
  font-size: 11px;
  color: var(--color-gray);
`;

const Button = styled.div`
  font-weight: 600;
  color: white;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  border-radius: 30px;
  background-color: var(--color-main);
  &.left {
    background-color: white;
    color: var(--color-main);
    border: 1px solid var(--color-main);
    :hover {
      background-color: var(--color-sub);
      color: white;
    }
  }
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin-top: 12%;
`;
