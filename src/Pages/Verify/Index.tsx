import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Global/Layout";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { AlertModal } from "../../Global/AlertModal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { getValue } from "@testing-library/user-event/dist/utils";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  registerNumber: string;
  check1: boolean;
  check2: boolean;
};

export const SurveyVerify = () => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState<string[]>([]);
  const AllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("check1", !CheckedHandler("check1"));
    setValue("check2", !CheckedHandler("check2"));
    e.target.checked ? setCheckList(["check1", "check2"]) : setCheckList([]);
  };

  const ChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  const CheckedHandler = (name: any): boolean => {
    if (checkList.includes(name)) {
      return true;
    } else {
      return false;
    }
  };

  //yup을 이용한 유효섬겅증방식
  const formSchema = yup.object({
    name: yup
      .string()
      .required("이름을 입력해주세요")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "이름을 다시 입력해주세요."
      )
      .min(2, "최소 2자 이상 가능합니다")
      .max(6, "최대 6자 까지만 가능합니다"),
    phoneNumber: yup
      .string()
      .required("전화번호를 입력해주세요")
      .min(11, "전화번호 양식에 맞게 입력해주세요")
      .max(13, "전화번호 양식에 맞게 입력해주세요")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "전화번호 정확하게 입력해주세요"
      ),
    registerNumber: yup
      .string()
      .required("빈칸을 입력해주세요")
      .max(13, "13자리를 입력해주세요")
      .min(13, "13자리를 입력해주세요")
      .matches(
        /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/g,
        "주민등록번호 정확하게 입력해주세요"
      ),
    check1: yup
      .bool()
      .required("체크박스를 채워주세요")
      .oneOf([true], "체크박스를 체크해주세요"),
    check2: yup
      .bool()
      .required("체크박스를 채워주세요")
      .oneOf([true], "체크박스를 체크해주세요"),
  });

  // const PostSurvey = async (payload: any) => {
  //   try {
  //     const response = await axios.post("https://getdata.tax-back.kr", payload);

  //     navigate("/verify/done");

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const PostSurvey2 = async (payload: any) => {
    try {
      const response = await axios.post(
        "https://gdgd.shop/user/verify",
        payload
      );
      localStorage.setItem("accessToken", response.data.accessToken);

      if ("already" in response.data) {
        setAlert(true);
      } else {
        navigate("/verify/done");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입 submit 핸들러
  const SubmitHandler = (value: any): void => {
    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("phoneNumber", value.phoneNumber);
    formData.append("registerNumber", value.registerNumber);

    console.log(value);
    PostSurvey2({ ...value });
  };

  //useForm 설정
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserInfo>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  // 개인/법인 토글버튼 (기존값: 개인)
  const [submit, setSubmit] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={`양도소득세 간편인증`} undoPage={`/`} />
        <InputBox
          collect={!errors.name && submit}
          error={!errors.name}
          className="name"
        >
          <Label htmlFor="name">이름</Label>
          <Input
            className="name"
            maxLength={6}
            type={"text"}
            placeholder="예) 홍길동"
            {...register("name")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>{" "}
        {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        <InputBox
          className="phoneNumber"
          collect={!errors.phoneNumber && submit}
          error={!errors.phoneNumber}
        >
          <Label htmlFor="phoneNumber">휴대폰번호</Label>
          <Input
            type={"text"}
            maxLength={13}
            placeholder="휴대 전화번호를 입력해주세요.  - 제외"
            {...register("phoneNumber")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>
        {errors.phoneNumber && (
          <ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>
        )}
        <InputBox
          className="registerNumber"
          collect={!errors.registerNumber && submit}
          error={!errors.registerNumber}
        >
          {" "}
          <Label htmlFor="registerNumber">주민등록번호</Label>
          <Input
            maxLength={13}
            type={"text"}
            placeholder="주민등록번호를 입력해주세요"
            {...register("registerNumber")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>
        {errors.registerNumber && (
          <ErrorTxt>{errors.registerNumber.message}</ErrorTxt>
        )}
        <SubTxt className="top">
          • &nbsp; 환급을 위한 서비스 이외에 개인정보를 수집 및 이용을 하지
          않습니다.
        </SubTxt>
        <SubTxt>• &nbsp; 환급 완료 후 개인정보는 폐기합니다.</SubTxt>
        <CheckBox>
          <div className="flex">
            <input
              className="input"
              name="allCheck"
              checked={checkList.length === 2 ? true : false}
              onChange={AllCheck}
              type={"checkbox"}
            />
            <div className="text"> 아래 약관에 모두 동의합니다</div>
          </div>
        </CheckBox>
        <CheckBox className="sub">
          <div className="flex">
            <input
              className="input"
              {...register("check1")}
              name="check1"
              checked={CheckedHandler("check1")}
              onChange={ChangeCheck}
              type={"checkbox"}
            />
            <div className="text"> [필수] 정보제공범위 동의</div>
          </div>
          <IoIosArrowForward />
        </CheckBox>
        {errors.check1 && <ErrorTxt>{errors.check1.message}</ErrorTxt>}
        <CheckBox className="sub">
          <div className="flex">
            <input
              className="input"
              {...register("check2")}
              name="check2"
              onChange={ChangeCheck}
              checked={CheckedHandler("check2")}
              type={"checkbox"}
            />
            <div className="text"> [필수] 법인세 신고 도움자료</div>
          </div>
          <IoIosArrowForward />
        </CheckBox>
        {errors.check2 && <ErrorTxt>{errors.check2.message}</ErrorTxt>}
        <BottomBtn
          onClick={handleSubmit(SubmitHandler, () => setSubmit(true))}
          // onClick={() => navigate("/verify/done")}
        >
          홈택스 간편인증 하기
        </BottomBtn>
      </Wrap>
      {/* 이미 진행한 적이 있으면, 알럿창 띄우기! */}
      <AlertModal
        close={true}
        alert={alert}
        setAlert={setAlert}
        leftEvent={() => setAlert(false)}
        rightEvent={() => navigate("/transfer/verify/done")}
        mainText={"이미 진행하신 적이 있습니다. 그래도 진행하시겠습니까?"}
        rightText={"그래도 진행할래요"}
        leftText={"괜찮아요"}
      />
    </Layout>
  );
};

const Wrap = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div<{ collect: boolean; error: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 3px;
  height: 50px;
  width: 303px;
  padding: 10px 15px;
  border: ${({ error }) => !error && "2px solid var(--color-red)"};
  background-color: ${({ collect }) =>
    collect ? " #e8e7ff" : "var(--color-inputBox)"};
  .icon {
    opacity: ${({ collect }) => (collect ? "1" : "0")};
    transition: all 400ms ease-in-out;
    right: 20px;
    position: absolute;
    color: var(--color-main);
  }
  &.name {
    margin-top: 143px;
  }
`;

const Input = styled.input`
  color: var(--color-midSub);
  font-weight: 400;
  font-size: 16px;
  ::placeholder {
    font-size: 12px;
  }
  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px #e8e7ff inset;
  }
  border: none;
  background-color: transparent;
  height: 100%;
  width: 75%;
  padding: 2% 1%;
  &.recommand {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  .labelsub {
    color: var(--color-midSub);
    margin-left: 3px;
    font-size: 10px;
  }
`;

const ErrorTxt = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 12px;
  margin-left: 30px;
  color: #d80505;
`;

const SubTxt = styled.div`
  width: 90%;
  font-size: 10px;
  margin-left: 22px;
  color: var(--color-gray);
  &.top {
    margin-top: 5px;
  }
`;

const CheckBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 20px;
  font-size: 18px;
  color: var(--color-thickSub);
  margin-bottom: 10px;
  &.sub {
    margin-top: 0%;
    color: black;
    font-size: 13px;
    margin-bottom: 1%;
  }
  .flex {
    display: flex;
  }
  .input {
    transform: scale(1.2);
  }
  .text {
    margin-bottom: 3px;
  }
`;

const BottomBtn = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;
  border: none;
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
