import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TransferImage1 from "../Assets/Image/Transfer_Done.png";
import { useNavigate } from "react-router-dom";

export const TransferDone = () => {
  const navigate = useNavigate();

  //상담 요청일 상태값
  const [requestDate, setRequestDate] = useState<string>("2022-12-12 10:01");
  //연락 가능한 번호 상태값
  const [requestPhoneNumber, setRequestPhoneNumber] =
    useState<string>("02-1234-5678");

  return (
    <Layout>
      <SurveyHeader
        undoPage={"/survey/transfer/result"}
        title={"양도소득세 상담 신청 완료"}
      />
      <Wrap>
        <CheckBox>
          <BsFillCheckCircleFill className="icon" size={24} />
        </CheckBox>
        <ClientName>홍길동님</ClientName>
        <DoneText>양도소득세 무료 상담 요청을 완료하였습니다.</DoneText>
        <InfoBox>
          <InfoTitle>상담 요청일</InfoTitle>
          <InfoDetail>{requestDate}</InfoDetail>
        </InfoBox>
        <InfoBox>
          <FlexBox>
            <div className="content">
              {" "}
              <InfoTitle>연락 가능한 번호</InfoTitle>{" "}
              <InfoDetail>{requestPhoneNumber}</InfoDetail>
            </div>
            <InfoButton>저장</InfoButton>
          </FlexBox>

          <InfoSub>
            해당번호로 연락이 가요. 만약 다른 번호로 연락을 원하신다면 <br />
            수정을 해주세요.
          </InfoSub>
        </InfoBox>
        <InfoBox className="recommendId">
          <FlexBox>
            <div className="content">
              <InfoTitle> 추천인 아이디</InfoTitle>
              <input
                className="recommendInput"
                placeholder="추천인 아이디를 입력하세요"
              />
            </div>

            <InfoButton className="recommendId">확인</InfoButton>
          </FlexBox>
        </InfoBox>
        <FlexBox className="ImageBottomBox">
          <Img className="img" src={TransferImage1} alt="이미지" />
          <div className="ImageBottomTxt">
            세금 환급 담당자가 <br />
            빠른 시일 내에 연락드릴게요
          </div>
        </FlexBox>
        <ButtonBox>
          <HomeButton onClick={() => navigate("/")}>홈으로</HomeButton>
          <NextBtn>상담 신청 내역 보기</NextBtn>
        </ButtonBox>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: 80%;
  padding: 4% 0;
  margin-top: 25%;
`;

const CheckBox = styled.div`
  width: 90%;
  .icon {
    color: var(--color-thickSub);
  }
`;

const ClientName = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 1%;
`;

const DoneText = styled.div`
  width: 90%;
  margin-top: 1%;
  margin-bottom: 5%;
  font-weight: 600;
  font-size: 14px;
`;

const InfoBox = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2% 5%;
  border-radius: 10px;
  margin-top: 2%;
  background-color: var(--color-inputBox);
  &.recommendId {
    height: 8%;
    .recommendInput {
      margin-top: 2%;
      width: 80%;
      border: none;
      background-color: transparent;
    }
  }
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
  }
  .img {
    width: 25%;
  }
  &.ImageBottomBox {
    margin-top: 5%;
    width: 90%;
    border: 1px solid var(--color-sub);
    border-radius: 15px;
    padding: 5%;
    .ImageBottomTxt {
      font-size: 14px;
      margin-left: 35%;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  transform: scale(0.8);
  top: 2%;
  left: 8%;
`;

const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const InfoSub = styled.div`
  font-size: 10px;
  margin-top: 5%;
  color: var(--color-thickSub);
`;

const InfoDetail = styled.div`
  width: 60%;
  font-size: 16px;
  margin-top: 2%;
  color: var(--color-main);
`;

const InfoButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
  width: 20%;
  height: 100%;
  padding: 2% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: var(--color-gray);
  /* &.recommendId {
    margin-top: 0%;
  } */
`;

const HomeButton = styled.div`
  width: 30%;
  font-weight: 600;
  color: var(--color-main);
  border: 2px solid var(--color-main);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--color-lightSub);
    color: var(--color-main);
    border: 2px solid var(--color-lightSub);
    cursor: pointer;
  }
`;

const NextBtn = styled.div`
  width: 60%;
  padding: 3% 0;
  font-weight: 600;
  color: white;
  border-radius: 30px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    margin-left: 10px;
  }
  &.clicked {
    background-color: var(--color-main);
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-left: 10px;
`;
