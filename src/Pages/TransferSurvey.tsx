import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Transfer_SurveyList } from "../Assets/Survey/TransferSurveyList";
import { Layout } from "../Global/Layout";
import { SurveyResponse } from "../Components/Assign/Transfer/TransferSurvey/SurveyResponse";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../Components/Assign/Transfer/TransferSurvey/ProgressBar";
import { SurveyHeader } from "../Global/SurveyHeader";
import { addSurveyResponse } from "../Redux/Modules/SurveySlice";
import { useAppDispatch } from "../Redux/ConfigStore/ConfigStore";
import { AlertModal } from "../Global/AlertModal";

export const TransferSurvey = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
  const [totalProcess, setTotalProcess] = useState<number>(1);
  // 응답체크 판별하는 상태값
  const [clicked, setClicked] = useState<number>(-1);
  const [checkClick, setCheckClick] = useState<boolean>(false);
  // 설문지에 대한 응답값
  const [responses, setResponses] = useState<
    { question: string; response: string }[]
  >([]);
  // 설문지 타입정하는 상태값 (토지인지 주택인지)
  const [surveyType, setSurveyType] = useState<string>();

  // 질문 바뀌면, 응답 상태값 초기화
  const ResetResponse = () => {
    setClicked(-1);
    setCheckClick(false);
  };

  //  뒤로가기 및 다음버튼 이벤트핸들러
  const ButtonClickHandler = (direction: string) => {
    // process = 0 일 때, 설문지타입 체크 (토지인지 아파트인지)
    if (process === 0) {
      DivideQuestionHandler();
    }

    // 기존 설문 완료 시, 추가설문 알림

    // "토지" 일 경우, 바로 12번 질문으로
    if (direction === "next" && surveyType === "land" && process === 6) {
      ResetResponse();
      setProcess(11);
    } else {
      // 다음버튼 조건식
      if (direction === "next" && checkClick && process !== totalProcess) {
        ResetResponse();
        setProcess((prev) => prev + 1);
        // 응답 데이터수집
        setResponses((prev) =>
          prev.concat({
            question: Transfer_SurveyList[process].question,
            response: Transfer_SurveyList[process].responses[clicked].main,
          })
        );
        dispatch(
          addSurveyResponse({
            question: Transfer_SurveyList[process].question,
            response: Transfer_SurveyList[process].responses[clicked].main,
          })
        );

        // 설문조사가 끝나고, 추가 설문 알림구현
      } else if (
        direction === "next" &&
        checkClick &&
        process === totalProcess
      ) {
        setAlert(true);
      } else if (direction === "next" && !checkClick) {
        window.confirm("응답을 해주세요");
      }
    }
    if (direction === "back" && surveyType === "land" && process === 11) {
      ResetResponse();
      setProcess(6);
    } else {
      // 뒤로가기 버튼 조건식
      if (direction === "back" && process > 0) {
        ResetResponse();
        setProcess((prev) => prev - 1);
        setResponses((prev) => prev.slice(0, -1));
      }
      // 설문조사페이지를 나가려고 할 때
      if (direction === "back" && process <= 0) {
        if (window.confirm("메인화면으로 가시겠습니까?")) {
          navigate("/survey");
        }
      }
    }
  };

  // 주택 or 토지 질문별로 구분로직
  const DivideQuestionHandler = () => {
    if (clicked === 0) {
      setSurveyType("house");
      setTotalProcess(10);
    }
    if (clicked === 1) {
      setSurveyType("land");
      setTotalProcess(13);
    }
    if (clicked === 2) {
      setSurveyType("house");
      setTotalProcess(10);
    }
  };

  // //? ----------------------- 알럿창 관리 --------------------------

  // //! ---------------------- 알럿창 상태값관리 ------------------------
  const [alert, setAlert] = useState<boolean>(false);
  // const [rightButtonTxt, setRightButtonTxt] = useState();
  // const [leftButtonTxt, setLeftButtonTxt] = useState();
  // const [rightButtonEvent, setRightButtonEvent] = useState();
  // const [leftButtonEvent, setLeftButtonEvent] = useState();
  // const [contentTxt, setContentTxt] = useState();

  //! 설문이 끝났을 때 알럿창
  // const DoneSurveyAlert = () => {
  //   const SubmitSurveyHandler = () => {
  //     alert("제출완료!");
  //   };
  //   setAlert(true);
  //   setRightButtonTxt("추가 설문 할래요");
  //   setLeftButtonTxt("이대로 제출");
  //   setLeftButtonEvent(SubmitSurveyHandler);
  //   setRightButtonEvent(() => navigate("/survey"));
  //   setContentTxt("추가 설문을 진행할 경우 환급 확률과 금액이 정확해져요.");
  // };

  //! 설문조사 도중 나가게될 경우,
  // const ExitDuringSurveyAlert = () => {
  //   console.log("exit");
  //   setAlert(true);
  //   setRightButtonTxt("계속 진행 할래요");
  //   setLeftButtonTxt("나갈래요");
  //   setLeftButtonEvent(() => navigate("/"));
  //   setRightButtonEvent(setAlert(false));
  //   setContentTxt(
  //     "홈으로 나가게 되면 처음부터 다시 설문을 진행해야해요. 그래도 나가시겠어요?"
  //   );
  // };

  return (
    <Layout>
      <Wrap>
        <SurveyHeader undoPage={"/survey/start/assign/transfer"} />
        <SurveyContentBox>
          <QuestionBox>{Transfer_SurveyList[process].question}</QuestionBox>
          <ResponseBox>
            {Transfer_SurveyList[process].responses.map((response, index) => {
              return (
                <SurveyResponse
                  index={index}
                  clicked={clicked}
                  setClicked={setClicked}
                  response={response}
                  setCheckClick={setCheckClick}
                  responses={responses}
                />
              );
            })}
          </ResponseBox>
          <ButtonBox>
            <Button onClick={() => ButtonClickHandler("back")}>뒤로</Button>
            <NextBtn
              disabled={clicked === -1}
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
        )}
      </Wrap>{" "}
      {/* 알럿모달에 함수 어케 넘길까 일단 보류  */}
      <AlertModal
        alert={alert}
        setAlert={setAlert}
        rightEvent={() => navigate(`/survey/transfer/second/${surveyType}`)}
        leftEvent={() => navigate("/")}
        mainText={"추가 설문을 진행할 경우 환급 확률과 금액이 정확해져요."}
        leftText={"이대로 제출"}
        rightText={"추가 설문 할래요"}
      />
    </Layout>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100%;
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
  /* ::-webkit-scrollbar {
    display: none; Chrome , Safari , Opera
  } */
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
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
