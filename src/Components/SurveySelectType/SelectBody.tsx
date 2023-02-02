import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../../Global/NavBar";
import { SurveyHeader } from "../../Global/SurveyHeader";
export const SelectBody = ({ kind }: { kind: string }) => {
  const navigate = useNavigate();

  // 평균 환급액
  let average = 1234567;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Wrap>
      {" "}
      <SurveyHeader undoPage={`/`} title={"양도소득세 환급받기"} />
      <ContentBox>
        세무법인 프라이어의 <br />
        세무사들에게 평균 <span>{averageNumber}원</span>을 환급 받았어요
      </ContentBox>
      {kind === "assign" && (
        <SelectBtn onClick={() => navigate(`/survey/start/assign/transfer`)}>
          양도소득세로 환급받기
        </SelectBtn>
      )}
      <NavBar />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70%;
  margin-top: 40%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  width: 90%;
  height: 50%;
  padding: 5% 0;
  margin-bottom: 10%;
  border-radius: 20px;
  color: var(--color-thickSub);
  background-color: var(--color-contentBox);
`;

const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-main);
  width: 80%;
  border: 1px solid var(--color-main);
  height: 50px;
  border-radius: 40px;
  :hover {
    background-color: var(--color-main);
    color: white;
    opacity: 1;
    cursor: pointer;
  }
`;
