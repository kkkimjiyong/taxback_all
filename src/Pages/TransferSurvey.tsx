import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Layout } from "../Global/Layout";
import { SurveyResponse } from "../Components/Assign/Transfer/TransferSurvey/SurveyResponse";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../Components/Assign/Transfer/TransferSurvey/ProgressBar";
import { SurveyHeader } from "../Global/SurveyHeader";
import { AlertModal } from "../Global/AlertModal";
import { TransferHouse_SurveyList } from "../Assets/Survey/TransferHouseSurvey";
import { TransferLand_SurveyList } from "../Assets/Survey/TransferLandSurvey";
import { TransferStore_SurveyList } from "../Assets/Survey/TransferStoreSurvey";
import { surveyApi } from "../instance";

type Tsurvey = {
  type: string;
  question: any;
  responses: any;
};

export const TransferSurvey = () => {
  const navigate = useNavigate();

  // 새로고침 막기 변수
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

  // 현재 진행도 상태값
  const [process, setProcess] = useState<number>(0);
  // 총 진행도 (총 질문의 개수)
  const [totalProcess, setTotalProcess] = useState<number>(2);
  // 응답체크 판별하는 상태값
  const [clicked, setClicked] = useState<any[]>([]);
  const [checkClick, setCheckClick] = useState<boolean>(false);
  // 설문지에 대한 응답값
  const [questions, setQuestions] = useState<any[]>([]);
  // 설문지 타입정하는 상태값 (토지인지 주택인지)
  const [surveyType, setSurveyType] = useState<Tsurvey[]>([
    {
      type: "common",
      question: "양도 물건이 무엇인가요?",
      responses: [
        { main: "주택", sub: "아파트,단독주택,상가주택,분양권,입주권" },
        { main: "토지" },
        { main: "상가", sub: "상가 및 오피스텔 분양권 포함" },
      ],
    },
  ]);

  // 질문 바뀌면, 응답 상태값 초기화
  const ResetResponse = () => {
    if (totalProcess !== process) setClicked([]);
    setCheckClick(false);
  };

  //  뒤로가기 및 다음버튼 이벤트핸들러
  const ButtonClickHandler = (direction: string) => {
    ResetResponse();
    // process = 0 일 때, 설문지타입 체크 (토지인지 아파트인지)
    if (process === 0) {
      DivideQuestionHandler();
    }
    // 다음버튼 조건식
    if (direction === "next" && checkClick && process !== totalProcess) {
      setProcess((prev) => prev + 1);
      // 응답 데이터수집
      setQuestions((prev) =>
        prev.concat({
          question: surveyType[process].question,
          response: clicked,
        })
      );
      //! 설문조사가 끝나고, 추가 설문 알림구현
    } else if (direction === "next" && checkClick && process === totalProcess) {
      setQuestions((prev) =>
        prev.concat({
          question: surveyType[process].question,
          response: clicked,
        })
      );
      setAlert(true);
    } else if (direction === "next" && !checkClick) {
      window.confirm("응답을 해주세요");
    }

    // 뒤로가기 버튼 조건식
    if (direction === "back" && process > 0) {
      setProcess((prev) => prev - 1);
      setQuestions((prev) => prev.slice(0, -1));
    }
    // 설문조사페이지를 나가려고 할 때
    if (direction === "back" && process <= 0) {
      if (window.confirm("메인화면으로 가시겠습니까?")) {
        navigate("/survey/start/assign/transfer");
      }
    }
  };

  // 주택 or 토지 질문별로 구분로직
  const DivideQuestionHandler = () => {
    if (clicked[0] === "주택") {
      setSurveyType(TransferHouse_SurveyList);
      setTotalProcess(5);
    }
    if (clicked[0] === "토지") {
      setSurveyType(TransferLand_SurveyList);
      setTotalProcess(3);
    }
    if (clicked[0] === "상가") {
      setSurveyType(TransferStore_SurveyList);
      setTotalProcess(3);
    }
  };

  //? -------------------  설문지 결과보내기   ------------------------

  const PostSurvey = async (type?: string) => {
    try {
      const response = await surveyApi.postSurvey({ responses: questions });
      if (type === "right") {
        navigate("/survey/transfer/result");
      } else {
        navigate("/survey/result/beta");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // //! ---------------------- 알럿창 상태값관리 ------------------------
  const [alert, setAlert] = useState<boolean>(false);

  //! ----------------------   폭죽을 만들어보자!   ----------------------------
  return (
    <Layout>
      <Wrap>
        <SurveyHeader undoPage={"/survey/start/assign/transfer"} />
        <SurveyContentBox>
          <QuestionBox>{surveyType[process].question}</QuestionBox>
          <ResponseBox>
            {surveyType[process].responses.map((response: any, index: any) => {
              return (
                <SurveyResponse
                  index={index}
                  clicked={clicked}
                  setClicked={setClicked}
                  response={response}
                  setCheckClick={setCheckClick}
                  responseLength={surveyType[process].responses.length}
                  checkClick={checkClick}
                  process={process}
                />
              );
            })}
          </ResponseBox>
          <ButtonBox>
            <Button onClick={() => ButtonClickHandler("back")}>뒤로</Button>
            <NextBtn
              disabled={clicked.length === 0}
              onClick={() => ButtonClickHandler("next")}
            >
              다음
              <AiOutlineArrowRight className="icon" />
            </NextBtn>
          </ButtonBox>
        </SurveyContentBox>
        {/* 첫 양도 물건 선택 후, 진행바 보여주기  */}
        {process > 0 && (
          <ProgressBar process={process} totalProcess={totalProcess} />
        )}{" "}
      </Wrap>{" "}
      <AlertModal
        close={false}
        alert={alert}
        setAlert={setAlert}
        rightEvent={() => {
          PostSurvey("right");
        }}
        // leftEvent={() => navigate("/survey/transfer/result")}
        leftEvent={() => {
          PostSurvey("left");
        }}
        mainText={"설문지 최종제출하시겠습니까?"}
        leftText={"전체 응답보기"}
        rightText={"이대로 제출"}
      />
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SurveyContentBox = styled.div`
  position: relative;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const QuestionBox = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  width: 75%;
  margin-top: 153px;
  margin-right: 15%;
`;

const ResponseBox = styled.div`
  width: 90%;
  max-height: 420px;
  margin-top: 5px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 8px;

    /* 가로 스크롤 높이 */
    height: 8px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Button = styled.button`
  border: none;
  color: white;
  width: 38%;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  background-color: var(--color-gray);
  :hover {
    cursor: pointer;
  }
`;

const NextBtn = styled.button`
  width: 58%;
  border: none;
  color: white;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  background-color: var(--color-main);
  display: flex;
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

const ButtonBox = styled.div`
  width: 319px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  z-index: 2;
`;

const Firework = styled.canvas`
  position: absolute;
  background-color: aliceblue;
`;
