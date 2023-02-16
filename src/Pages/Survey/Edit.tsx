import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Layout } from "../../Global/Layout";
import { SurveyResponse } from "../../Components/Assign/Transfer/TransferSurvey/SurveyResponse";
import { useNavigate, useParams } from "react-router-dom";
import { ProgressBar } from "../../Components/Assign/Transfer/TransferSurvey/ProgressBar";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { TransferHouse_SurveyList } from "../../Assets/Survey/TransferHouseSurvey";
import { TransferLand_SurveyList } from "../../Assets/Survey/TransferLandSurvey";
import { TransferStore_SurveyList } from "../../Assets/Survey/TransferStoreSurvey";
import axios from "axios";

type Tsurvey = {
  type: string;
  question: any;
  responses: any;
};

export const TransferSurveyEdit = () => {
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

  // 총 진행도 (총 질문의 개수)
  const [totalProcess, setTotalProcess] = useState<number>(2);
  // 응답체크 판별하는 상태값
  const [clicked, setClicked] = useState<any[]>([]);
  const [checkClick, setCheckClick] = useState<boolean>(false);

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

  const { index } = useParams();
  const params = useParams();
  let process = Number(index);
  useEffect(() => {
    DivideQuestionHandler(params.type);
  });

  //  뒤로가기 및 다음버튼 이벤트핸들러
  const ButtonClickHandler = () => {
    console.log(clicked);
    if (clicked.length !== 0) {
      PostSurvey();
    } else {
      window.confirm("응답해주세요!");
    }
  };

  // 주택 or 토지 질문별로 구분로직
  const DivideQuestionHandler = (type?: string) => {
    if (type === "주택") {
      setSurveyType(TransferHouse_SurveyList);
      setTotalProcess(5);
    }
    if (type === "토지") {
      setSurveyType(TransferLand_SurveyList);
      setTotalProcess(3);
    }
    if (type === "상가") {
      setSurveyType(TransferStore_SurveyList);
      setTotalProcess(3);
    }
  };

  //? -------------------  설문지 결과보내기   ------------------------

  const PostSurvey = async () => {
    try {
      const response = await axios.put(
        `https://gdgd.shop/user/survey/edit/${process}`,
        { editResponse: clicked },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate("/transfer/survey/sheet");
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
        <SurveyHeader undoPage={"/transfer/survey/result"} />
        <SurveyContentBox>
          <QuestionBox>{surveyType[process]?.question}</QuestionBox>
          <ResponseBox>
            {surveyType[process]?.responses.map((response: any, index: any) => {
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
            <NextBtn
              disabled={clicked.length === 0}
              onClick={() => ButtonClickHandler()}
            >
              수정하기
            </NextBtn>
          </ButtonBox>
        </SurveyContentBox>
        {/* 첫 양도 물건 선택 후, 진행바 보여주기  */}
        {process > 0 && (
          <ProgressBar process={process} totalProcess={totalProcess} />
        )}{" "}
      </Wrap>{" "}
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

const NextBtn = styled.button`
  width: 80%;
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
  justify-content: center;
  margin-top: 50px;
`;
