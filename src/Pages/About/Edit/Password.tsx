import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";

export const Password = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Layout>
      <SurveyHeader title="비밀번호 재설정하기" undoPage="/about/edit" />
      <InputBox className="top">
        <InputLabel>현재 비밀번호 *</InputLabel>
        <Input placeholder="영문,숫자,특수문자 혼합 8~16자" />
      </InputBox>
      <InputBox>
        <InputLabel>새로운 비밀번호 *</InputLabel>
        <Input placeholder="abc@gmail.com" />
        <span className="showPassword" onClick={() => setVisible(!visible)}>
          {visible ? "비밀번호 표시" : "비밀번호 숨기기"}
        </span>
      </InputBox>
      <InputBox>
        <InputLabel>새 비밀번호 확인 *</InputLabel>
        <Input placeholder="비밀번호를 한 번 더 입력해주세요" />
        <span className="showPassword" onClick={() => setVisible(!visible)}>
          {visible ? "비밀번호 표시" : "비밀번호 숨기기"}
        </span>
      </InputBox>
      <Button>비밀번호 변경</Button>
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

const Button = styled.div`
  margin-top: 300px;
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
