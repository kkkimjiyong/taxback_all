import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";

export const PhoneNumber = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Layout>
      <SurveyHeader title="비밀번호 재설정하기" undoPage="/about/edit" />
      <InputBox className="top">
        <InputLabel>휴대폰 번호 *</InputLabel>
        <Input placeholder="휴대폰 번호를 입력해주세요" />
        <ChangeBtn>인증번호</ChangeBtn>
      </InputBox>
      <InputBox>
        <InputLabel>인증 번호 *</InputLabel>
        <Input placeholder="인증 번호를 입력해주세요" />
        <ChangeBtn>확인</ChangeBtn>
      </InputBox>
      <Button>휴대폰 번호 변경</Button>
    </Layout>
  );
};

const InputBox = styled.div`
  position: relative;
  margin-top: 8px;
  width: 300px;
  height: 50px;
  background-color: var(--color-inputBox);
  border-radius: 10px;
  padding: 15px 22px;
  &.top {
    margin-top: 140px;
  }
  .showPassword {
    position: absolute;
    right: 15px;
    transition: all 400ms ease-in-out;
    color: var(--color-thickSub);
    font-weight: 400;
    font-size: 10px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const InputLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  width: 200px;
  ::placeholder {
    font-weight: 400;
    font-size: 12px;
  }

  font-weight: 400;
  font-size: 16px;
  color: var(--color-midSub);
  border: none;
  padding: 2% 0%;
  background-color: transparent;
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
  background-color: var(--color-gray);
  color: white;
  font-weight: 700;
  font-size: 12px;
  :hover {
    background-color: var(--color-midSub);
  }
`;

const Button = styled.div`
  margin-top: 400px;
  margin-bottom: 50px;
  background-color: var(--color-gray);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
`;
