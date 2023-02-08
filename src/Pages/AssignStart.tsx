import React, { useState } from "react";
import styled from "styled-components";
import { SurveyHeader } from "../Global/SurveyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../Global/Layout";
import { NavBar } from "../Global/NavBar";
import axios from "axios";
import { AlertModal } from "../Global/AlertModal";

export const AssignStart = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  // 알럿 상태 관리
  const [alert, setAlert] = useState<boolean>(false);

  // 설문지종류에 따른 텍스트 변동
  let SurveyType;
  if (type === "transfer") {
    SurveyType = "양도소득세";
  } else {
    SurveyType = "종합부동산세";
  }

  const verifyAlreadySurvey = async () => {
    try {
      const response = await axios.get("https://gdgd.shop/user/survey/start", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response);
      if (response.data.message === "already") {
        setAlert(true);
      } else if (response.data.message === "none") navigate("/survey/transfer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Wrap>
        <SurveyHeader undoPage={"/result"} title={`${SurveyType} 환급받기`} />
        <ConsultingBox>
          간단한 설문을 통해 <br /> {SurveyType} 환급여부 알아보기
          <ConsultingBtn>1:1 문의하기</ConsultingBtn>
        </ConsultingBox>
        <TextBox>
          고객님의 {type === "transfer" ? "양도소득세" : "종합부동산세"}의
          정확한 환급을 위해 <br /> 간단한 설문조사를 시행하고 있어요
        </TextBox>
        <TextBox>
          고객님의 환급 가능성을 확인하기 위한 자료로
          <br />
          활용되오니 성실하게 답변해주시면 감사하겠습니다.
        </TextBox>
        <BottomBtn onClick={verifyAlreadySurvey}>
          {SurveyType} 환급 설문하기
        </BottomBtn>
      </Wrap>
      <AlertModal
        alert={alert}
        setAlert={setAlert}
        leftEvent={() => setAlert(false)}
        rightEvent={() => navigate("/survey/transfer")}
        mainText={"이미 진행하신 적이 있습니다. 그래도 진행하시겠습니까?"}
        rightText={"그래도 진행할래요"}
        leftText={"괜찮아요"}
      />
      {/* <NavBar /> */}
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

const ConsultingBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40%;
  margin-bottom: 2%;
  padding: 5% 4%;
  width: 86%;
  background-color: var(--color-contentBox);
  border-radius: 5px;
  color: var(--color-thickSub);
  font-weight: 600;
`;

const ConsultingBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  margin-top: 20px;
  width: 80px;
  padding: 2% 1%;
  border-radius: 30px;
  background-color: var(--color-sub);
`;

const TextBox = styled.div`
  width: 90%;
  text-align: start;
  margin-top: 5%;
  font-size: 0.9rem;
`;

const BottomBtn = styled.div`
  margin-top: 90px;
  width: 80%;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 25px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  :hover {
    cursor: pointer;
  }
`;
