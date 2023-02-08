import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import TransferImage from "../Assets/Image/Transfer_Result.png";
import { TextModal } from "../Global/TextModal";
import { useNavigate } from "react-router-dom";
import { userApi } from "../instance";

export const TransferSurveyResult = () => {
  const navigate = useNavigate();

  //? ---------------------- 법적 근거 텍스트 모달 ------------------------------
  // 모달 상태값 관리
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const RefundBasisButtonHandler = (): void => {
    setActiveModal(true);
  };

  const [user, setUser] = useState<any>({});
  const GetUser = async () => {
    try {
      const response = await userApi.getUser();
      console.log(response.data);
      setUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <Layout>
      <SurveyHeader undoPage={"/"} />
      <TextBox>
        <span className="dark">{user.name}</span>님은
      </TextBox>
      <TextBox className="subText">
        <span className="mid"> 2주택자 조정지역 매매</span>에 속하므로
        <br />
        <span className="dark">환급 가능성이 있어요.</span>
      </TextBox>
      <LookUpBtn onClick={RefundBasisButtonHandler}>
        환급근거 살펴보기
      </LookUpBtn>
      <ImageBox>
        <img className="img" src={TransferImage} alt="이미지" />
        <ImageTextBox>
          지금까지 같은 Case의 고객님 중 88%가 <br />
          <span className="bold">양도소득세 환급신청</span>으로
          <br />
          평균 1,123,345원을 환급 받았어요.
        </ImageTextBox>
      </ImageBox>
      <BottomBtn onClick={() => navigate("/survey/transfer/done")}>
        양도소득세 무료 상담하기
      </BottomBtn>
      <TextModal active={activeModal} setActive={setActiveModal} />
    </Layout>
  );
};

const TextBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 90%;
  margin-top: 153px;
  &.subText {
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
  }
`;

const LookUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 62%;
  font-weight: 700;
  font-size: 12px;
  color: white;
  margin-top: 20px;
  padding: 2.2% 2.5%;
  border-radius: 30px;
  background-color: var(--color-midSub);
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35%;
  border-radius: 15px;
  background-color: #fcf4f0;
  margin-top: 8%;
  .img {
    width: 50%;
  }
`;

const ImageTextBox = styled.div`
  text-align: center;
  margin-top: 2%;
  width: 90%;
  .bold {
    font-size: 18px;
  }
`;

const BottomBtn = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  border-radius: 25px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
