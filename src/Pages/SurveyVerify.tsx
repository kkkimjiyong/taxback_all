import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  registerNumber: string;
};

type TpostUserInfo = {
  주: string;
  이: string;
  휴: string;
  특: "없음";
  selectdb: "192.168.1.33";
};

export const SurveyVerify = () => {
  const navigate = useNavigate();

  //yup을 이용한 유효섬겅증방식
  const formSchema = yup.object({
    name: yup
      .string()
      .required("이름을 입력해주세요")
      .min(2, "최소 2자 이상 가능합니다")
      .max(6, "최대 6자 까지만 가능합니다"),
    phoneNumber: yup
      .string()
      .required("전화번호를 입력해주세요")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "전화번호 양식에 맞게 입력해주세요"
      ),
    registerNumber: yup
      .string()
      .required("주민등록번호를 입력해주세요")
      .min(13)
      .max(13),
  });

  // 서버 API 데이터 전송
  const PostUser = async (userInfo: TpostUserInfo) => {
    try {
      const response = axios.post("https://apply.tax-back.kr/ift_htax_edi", {
        userInfo: userInfo,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입 submit 핸들러
  const SubmitHandler = (): void => {
    console.log(getValues());

    const userInfo: TpostUserInfo = {
      주: getValues().registerNumber,
      이: getValues().name,
      휴: getValues().phoneNumber,
      특: "없음",
      selectdb: "192.168.1.33",
    };
    console.log(userInfo);

    PostUser(userInfo);
  };

  //useForm 설정
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserInfo>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  return (
    <Layout>
      <Wrap>
        <SurveyHeader
          title={`양도소득세 환급받기`}
          undoPage={`/survey/start/assign/transfer`}
        />
        <ContentTxt className="top">간편인증을 통한 세금환급 조회</ContentTxt>
        <InputBox>
          {" "}
          <Label htmlFor="name">이름</Label>
          <Input type={"text"} placeholder="예) 홍길동" {...register("name")} />
        </InputBox>{" "}
        <InputBox>
          {" "}
          <Label htmlFor="phoneNumber">휴대폰번호</Label>
          <Input
            type={"text"}
            placeholder="휴대 전화번호를 입력해주세요."
            {...register("phoneNumber")}
          />
        </InputBox>{" "}
        <InputBox>
          {" "}
          <Label htmlFor="registerNumber">주민등록번호</Label>
          <Input
            type={"text"}
            placeholder="주민등록번호를 입력해주세요"
            {...register("registerNumber")}
          />
        </InputBox>{" "}
        <BottomBtn
          // onClick={handleSubmit(SubmitHandler)}
          onClick={() => navigate("/survey/start/assign/transfer")}
        >
          인증하기
        </BottomBtn>
      </Wrap>
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

const ContentTxt = styled.div`
  width: 90%;
  font-weight: 600;
  margin-top: 5%;
  &.top {
    margin-top: 40%;
  }
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 2% 1%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  margin-left: 3px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px 0;
  width: 86%;
  height: 8%;
  padding: 2%;
  background-color: var(--color-inputBox);
`;

const BottomBtn = styled.div`
  margin-top: 15%;
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
  &.estateButton {
    bottom: 12%;
  }
  :hover {
    cursor: pointer;
  }
`;
