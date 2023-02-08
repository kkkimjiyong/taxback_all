import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { AlertModal } from "../Global/AlertModal";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  SecondaryHouseSurvey,
  SecondaryLandSurvey,
} from "../Assets/Survey/TransferSecondarySurvey";
import { useNavigate, useParams } from "react-router-dom";
import { surveyApi } from "../instance";

// 설문지 질문 타입
type TSecondartObject = {
  type: String;
  question: String;
  responses: any[];
  placeholder?: string;
};

export const SecondarySurvey = () => {
  // 새로고침 막기 변수
  // 새로고침 이벤트객체 뭐엿더라/// 일단 any

  const preventClose = (e: any) => {
    e.preventDefault();
    e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  // ------------------- -------------------------
  const { type } = useParams();
  const navigate = useNavigate();
  console.log(type);

  const [surveyList, setSurveyList] = useState<any[]>([]);
  const CheckSurveyList = () => {
    if (type === "land") {
      setSurveyList(SecondaryLandSurvey);
      setTotalProcess(1);
    }
    if (type === "house") {
      setSurveyList(SecondaryHouseSurvey);
      setTotalProcess(1);
    }
  };

  useEffect(() => {
    CheckSurveyList();
    console.log(surveyList);
  }, []);

  //현재 진행도 상태값
  const [process, setProcess] = useState<number>(0);

  //총 진행도 상태값
  const [totalProcess, setTotalProcess] = useState<number>(1);

  //현재 질문 응답데이터 상태값
  const [response, setResponse] = useState<string>("");

  //추가 설문 토탈 응답데이터 상태값
  const [totalResponses, setTotalResponses] = useState<any[]>([]);

  const BackButtonHandler = () => {
    if (process === 0) {
      if (window.confirm("메인화면으로 나가시겠습니까?")) {
        navigate("/");
      }
    } else {
      setProcess((prev) => prev - 1);
      setTotalResponses((prev) => prev.slice(0, -1));
    }
  };

  const NextButtonHandler = () => {
    if (response.length > 1 && process !== totalProcess) {
      setProcess((prev) => prev + 1);
      setTotalResponses((prev) =>
        prev.concat({
          question: surveyList[process].question,
          response: response,
        })
      );
      setResponse("");
    } else if (response.length <= 1 && process !== totalProcess) {
      window.confirm("응답을 해주세요");
    }
    if (process === totalProcess) {
      setTotalResponses((prev) =>
        prev.concat({
          question: surveyList[process].question,
          response: response,
        })
      );
      setAlert(true);
    }
  };

  const PostSurvey = async () => {
    try {
      console.log(totalResponses);
      const response = await surveyApi.postSecondSurvey({
        secondResponses: totalResponses,
      });
      navigate("/survey/transfer/result");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //알럿모달 상태값 관리
  const [alert, setAlert] = useState<boolean>(false);

  return (
    <Layout>
      <SurveyHeader undoPage={"/survey"} />
      <QuestionBox>{surveyList[process]?.question}</QuestionBox>
      <TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setResponse(e.target.value)
        }
        value={response}
        placeholder="예: 일시적 2주택 상태로 비과세가 가능하다고 생각하였으나, 비과세 받지 못함."
      />
      <ButtonBox>
        <Button onClick={BackButtonHandler}>뒤로</Button>
        <NextBtn
          disabled={response.length <= 1}
          onClick={NextButtonHandler}
          className="written"
        >
          다음
          <AiOutlineArrowRight className="icon" />
        </NextBtn>
      </ButtonBox>
      <AlertModal
        alert={alert}
        setAlert={setAlert}
        rightEvent={() => {
          PostSurvey();
        }}
        // leftEvent={() => navigate("/survey/transfer/result")}
        leftEvent={() => {
          navigate("/survey/result/beta");
        }}
        mainText={"설문지 최종제출하시겠습니까?"}
        leftText={"전체 응답보기"}
        rightText={"이대로 제출"}
      />
    </Layout>
  );
};

const QuestionBox = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  width: 90%;
  margin-top: 153px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  width: 85%;
  height: 200px;
  margin-bottom: 5%;
  padding: 5% 2%;
  border-radius: 15px;
  border: 1px solid var(--color-gray);
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 50px;
`;

const Button = styled.div`
  font-weight: 600;
  width: 38%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: var(--color-gray);
  :hover {
    cursor: pointer;
  }
`;

const NextBtn = styled.button`
  font-weight: 600;
  color: white;
  width: 58%;
  border-radius: 30px;
  background-color: var(--color-main);
  border: none;
  align-items: center;
  justify-content: center;
  :disabled {
    background-color: var(--color-gray);
  }
  .icon {
    margin-left: 10px;
  }
  :hover {
    cursor: pointer;
  }
`;
