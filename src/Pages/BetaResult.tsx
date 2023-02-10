import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../Global/Layout";
import { ResultBox } from "../Components/BetaResult/ResultBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { surveyApi } from "../instance";
import { Loading } from "./Loading";
import { AlertModal } from "../Global/AlertModal";

type Tresult = {
  question: string;
  response: string;
};

export const BetaResult = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [result, setResult] = useState<Tresult[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [click, setClick] = useState<number>(0);
  const [surveyType, setSurveyType] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [secondresult, setSecondResult] = useState<Tresult[]>([]);
  const [alert, setAlert] = useState<boolean>(false);

  const GetResult = async () => {
    try {
      const response = await surveyApi.getResult();
      setResult(response.data.responses);
      setName(response.data.name);
      setSurveyType(response.data.type);
      console.log(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetResult();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <Header>{name}님 설문조사 응답지</Header>
        <ResultCtn>
          {result.map((response: Tresult, index: number) => {
            return (
              <ResultBox
                click={click}
                setEdit={setEdit}
                setClick={setClick}
                setAlert={setAlert}
                edit={edit}
                question={response.question}
                response={response.response}
                index={index}
              />
            );
          })}
        </ResultCtn>
        <BtnBox>
          <Button
            edit={edit}
            onClick={() => navigate("/survey/transfer/result")}
          >
            결과페이지로
          </Button>
          <Button edit={edit} onClick={() => setEdit(!edit)} className="second">
            {edit ? "취소" : "수정하기"}
          </Button>
        </BtnBox>
        <AlertModal
          alert={alert}
          setAlert={setAlert}
          leftEvent={() => setAlert(false)}
          rightEvent={() => navigate(`/survey/transfer/${click}/${surveyType}`)}
          mainText={`${click + 1}번 질문 응답을 수정하시겠습니까?`}
          rightText={"수정할래요"}
          leftText={"괜찮아요"}
        />
      </Layout>
    );
  }
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
  height: 70vh;
  width: 100%;
`;

const BtnBox = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div<{ edit: boolean }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 50px;
  border-radius: 25px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--color-gray);
  &.second {
    color: ${({ edit }) => edit && " var(--color-main)"};
    background-color: ${({ edit }) =>
      edit ? "var(--color-lightSub)" : "var(--color-main)"};
    /* background-color: var(--color-main); */
    width: 55%;
  }
  :hover {
    cursor: pointer;
  }
`;
