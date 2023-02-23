import React, { useState } from "react";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Global/Layout";
import { NavBar } from "../../Global/NavBar";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { BusinessModal } from "../../Global/BusinessModal";

export const Business = () => {
  const navigate = useNavigate();

  const [alert, setAlert] = useState<boolean>(false);

  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={"사업자 세금 환급받기"} undoPage={"/select"} />
        <ResultBox>
          세무법인 프라이어의 <br />
          세무사들에게
          <br />
          <div>
            평균 <span className="result">1,234,567원</span>을
          </div>
          환급 받았어요
        </ResultBox>
        <Button onClick={() => setAlert(true)}>법인사업자로 환급받기</Button>
        <Button onClick={() => setAlert(true)}>개인사업자로 환급받기</Button>
      </Wrap>
      <BusinessModal setAlert={setAlert} alert={alert} />
      <NavBar />
    </Layout>
  );
};

const Wrap = styled.div``;

const ResultBox = styled.div`
  text-align: center;
  padding: 25px 70px;
  width: 180px;
  height: 115px;
  background-color: var(--color-contentBox);
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  margin-top: 163px;
  margin-bottom: 10px;
  .result {
    color: var(--color-midSub);
  }
`;

const Button = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-main);
  color: var(--color-main);
  border-radius: 30px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 16px;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
    color: white;
  }
`;
