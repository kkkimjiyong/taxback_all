import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";

export const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SurveyHeader title={"회원정보"} undoPage={"/about"} />
      <InputBox className="top">
        <InputLabel>이름</InputLabel>
        <Input />
      </InputBox>
      <InputBox>
        <InputLabel>이메일</InputLabel>
        <Input />
      </InputBox>
      <Button onClick={() => navigate("password")} className="password">
        비밀번호 재설정하기
      </Button>
      <InputBox>
        <InputLabel>휴대폰 번호</InputLabel>
        <Input />
        <ChangeBtn>변경하기</ChangeBtn>
      </InputBox>
      <CheckTitle>마케팅 정보 수신 동의</CheckTitle>
      <CheckCtn>
        <FlexBox>
          <FlexBox>
            {" "}
            <CheckBox type={"checkbox"} /> <CheckLabel>이메일</CheckLabel>
          </FlexBox>
          <FlexBox className="kakao">
            {" "}
            <CheckBox type={"checkbox"} />
            <CheckLabel>카카오톡 | SMS</CheckLabel>
          </FlexBox>
        </FlexBox>

        <EditDate>최종 수정일 : 0000-00-00 HH:MM</EditDate>
      </CheckCtn>
      <Button onClick={() => alert("개발중입니다.")} className="save">
        저장하기
      </Button>
    </Layout>
  );
};

const InputBox = styled.div`
  position: relative;
  &.top {
    margin-top: 143px;
  }
  margin-top: 8px;
  width: 300px;
  height: 50px;
  background-color: var(--color-inputBox);
  border-radius: 10px;
  padding: 15px 22px;
`;

const InputLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-midSub);
  border: none;
  padding: 2% 0%;
  background-color: transparent;
`;

const Button = styled.div`
  &.password {
    border: 1px solid var(--color-main);
    color: var(--color-main);
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }
  &.save {
    margin-top: 88px;
    background-color: var(--color-gray);
    color: white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  margin: 20px 0;
`;

const ChangeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 32px;
  border-radius: 50px;
  position: absolute;
  right: 15px;
  top: 25px;
  background-color: var(--color-midSub);
  color: white;
  font-weight: 700;
  font-size: 12px;
`;

const CheckTitle = styled.div`
  width: 303px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
  color: var(--color-thickSub);
`;

const CheckCtn = styled.div`
  margin-top: 8px;
  width: 300px;
  height: 50px;
  background-color: var(--color-inputBox);
  border-radius: 10px;
  padding: 15px 22px;
`;

const FlexBox = styled.div`
  display: flex;
  &.kakao {
    margin-left: 92px;
  }
`;

const CheckBox = styled.input`
  transform: scale(1.5);
`;

const CheckLabel = styled.div`
  margin-left: 6px;
  font-weight: 400;
  font-size: 13px;
`;

const EditDate = styled.div`
  margin-top: 7px;
  font-weight: 500;
  font-size: 12px;
  color: #999999;
`;
