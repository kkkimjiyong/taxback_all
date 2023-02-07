import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../Global/Layout";
import { ResultBox } from "../Components/BetaResult/ResultBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Tresult = {
  question: string;
  response: string;
};

export const BetaResult = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [result, setResult] = useState<Tresult[]>([]);
  const [secondresult, setSecondResult] = useState<Tresult[]>([]);

  const GetResult = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/user/survey/result",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.data.secondResponses.length) {
        setSecondResult(response.data.secondResponses);
        setResult(response.data.responses);
        setName(response.data.name);
      } else {
        setResult(response.data.responses);
        setName(response.data.name);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetResult();
  }, []);
  return (
    <Layout>
      <Header>{name}님 설문조사 결과지(시범용)</Header>
      <ResultCtn>
        {result.map((response: Tresult, index: number) => {
          return (
            <ResultBox
              question={response.question}
              response={response.response}
              index={index}
            />
          );
        })}
      </ResultCtn>
      <BtnBox>
        <Button onClick={() => navigate("/survey")}>홈으로</Button>
        <Button
          onClick={() => {
            if (secondresult.length) {
              setResult(secondresult);
            } else {
              alert("추가설문에 참여하지 않으셨습니다.");
            }
          }}
          className="second"
        >
          추가 설문지{" "}
        </Button>
      </BtnBox>
    </Layout>
  );
};

const Header = styled.div`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-main);
`;

const ResultCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 70%;
`;

const BtnBox = styled.div`
  width: 90%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 50px;
`;

const Button = styled.button`
  border: none;
  width: 40%;
  height: 50px;
  border-radius: 25px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--color-gray);
  &.second {
    background-color: var(--color-main);
    width: 55%;
  }
  :hover {
    cursor: pointer;
  }
`;
