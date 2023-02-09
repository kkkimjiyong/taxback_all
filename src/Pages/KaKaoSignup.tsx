import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { KaKaoCallback } from "./KaKaoCallback";
import { useSelector } from "react-redux";
import { userSlice } from "../Redux/Modules/SingupSlice";
import { userApi } from "../instance";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm: string;
  recommand?: string;
  // check1: boolean;
  // check2: boolean;
  // check3: boolean;
  // check4?: boolean;
  // check5: boolean;
};

export const KaKaoSignUp = () => {
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
      .min(11, "전화번호 양식에 맞게 입력해주세요")
      .max(11, "전화번호 양식에 맞게 입력해주세요")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "전화번호 양식에 맞게 입력해주세요"
      ),
    email: yup
      .string()
      .email("유효하지 않은 이메일입니다.")
      .required("이메일을 입력해주세요."),
    // check1: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
    // check2: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
    // check3: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
    // check4: yup.bool(),
    // check5: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
  });

  const [submit, setSubmit] = useState<boolean>(false);

  // 회원가입 submit 핸들러
  const SubmitHandler = (): void => {
    console.log(getValues());
    userApi.postKaKaoSignUp(getValues()).then(() => {
      navigate("/survey");
    });
  };

  //useForm 설정
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TuserInfo>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  //? ------------------------  체크박스 로직   ----------------------------

  const [checkList, setCheckList] = useState<string[]>([]);

  const AllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList(["check1", "check2", "check3", "check4", "check5"])
      : setCheckList([]);
  };

  const ChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  const CheckedHandler = (name: string): boolean => {
    if (checkList.includes(name)) return true;
    return false;
  };

  //? -------------------------- 비밀번호 보이기/숨기기  ----------------------------
  const [visible1, setVisible1] = useState<string>("password");
  const [visible2, setVisible2] = useState<string>("password");
  console.log(errors.name);

  //! ------------------ 카카오 callBack으로부터 유저정보  -----------------------

  const userInfo = useSelector((state: any) => state.user.userInfo);
  console.log(userInfo);

  useEffect(() => {
    userApi.getUser().then((res) => {
      reset(res.data);
    });
  }, []);

  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={"카카오 회원가입"} undoPage={"/"} />
        <InputBox error={!errors.name && submit}>
          <Label htmlFor="name">이름 *</Label>
          <Input type={"text"} placeholder="예) 홍길동" {...register("name")} />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>{" "}
        {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        <InputBox error={!errors.phoneNumber && submit}>
          <Label htmlFor="phoneNumber">휴대 전화번호 *</Label>
          <Input
            maxLength={11}
            placeholder="휴대 전화번호를 입력해주세요"
            {...register("phoneNumber")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>{" "}
        {errors.phoneNumber && (
          <ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>
        )}
        <InputBox error={!errors.email && submit}>
          <Label htmlFor="email">이메일 *</Label>
          <Input
            type={"text"}
            placeholder="예) abc@gmail.com"
            {...register("email")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>{" "}
        {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}
        <InputBox>
          <InputTitleBox>
            <Label htmlFor="recommand">추천인 아이디</Label>
          </InputTitleBox>
          <Input
            className="recommand"
            type={"text"}
            placeholder="추천인 아이디를 입력해주세요. (선택)"
            {...register("recommand")}
          />
        </InputBox>
        <CheckCtn className="allCheck">
          <input
            id="allCheck"
            type={"checkbox"}
            checked={checkList.length == 5 ? true : false}
            onChange={AllCheck}
          />{" "}
          <label htmlFor="allCheck">아래 약관에 모두 동의합니다</label>
        </CheckCtn>
        <CheckCtn>
          <input
            // {...register("check1")}
            id="check1"
            name="check1"
            onChange={ChangeCheck}
            type={"checkbox"}
            checked={CheckedHandler("check1")}
          />{" "}
          <label htmlFor="check1">[필수] 이용약관 동의</label>
        </CheckCtn>
        {/* {errors.check1 && <ErrorTxt>{errors.check1.message}</ErrorTxt>} */}
        <CheckCtn>
          <input
            // {...register("check2")}
            id="check2"
            name="check2"
            onChange={ChangeCheck}
            type={"checkbox"}
            checked={CheckedHandler("check2")}
          />{" "}
          <label htmlFor="check2">[필수] 개인정보 취급 방침</label>
        </CheckCtn>
        {/* {errors.check2 && <ErrorTxt>{errors.check2.message}</ErrorTxt>} */}
        <CheckCtn>
          <input
            // {...register("check3")}
            id="check3"
            name="check3"
            onChange={ChangeCheck}
            type={"checkbox"}
            checked={CheckedHandler("check3")}
          />{" "}
          <label htmlFor="check3">[필수] 개인정보 제3자 제공 동의</label>
        </CheckCtn>{" "}
        {/* {errors.check3 && <ErrorTxt>{errors.check3.message}</ErrorTxt>} */}
        <CheckCtn>
          <input
            // {...register("check4")}
            onChange={ChangeCheck}
            id="check4"
            name="check4"
            type={"checkbox"}
            checked={CheckedHandler("check4")}
          />{" "}
          <label htmlFor="check4">[선택] 마케팅 정보 수신 동의</label>
        </CheckCtn>
        <CheckCtn>
          <input
            // {...register("check5")}
            onChange={ChangeCheck}
            id="check5"
            name="check5"
            type={"checkbox"}
            checked={CheckedHandler("check5")}
          />{" "}
          <label htmlFor="check5">[필수] 만 14세 이상 동의</label>
        </CheckCtn>
        {/* {errors.check5 && <ErrorTxt>{errors.check5.message}</ErrorTxt>} */}
      </Wrap>
      <DoneBtn
        // onClick={() => navigate("/signup/done")}
        onClick={handleSubmit(SubmitHandler, () => setSubmit(true))}
      >
        회원가입 완료
      </DoneBtn>
    </Layout>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
  margin-top: 143px;
  width: 92%;
  height: 63vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 6px;

    /* 가로 스크롤 높이 */
    height: 4px;

    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const InputBox = styled.div<{ error?: any }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 8px 0;
  width: 88%;
  height: 69px;
  padding: 13px 18px;
  background-color: #d4d2f9 var(--color-inputBox);
  transition: all 400ms ease-in-out;
  background-color: ${({ error }) =>
    error ? " #e8e7ff" : "var(--color-inputBox)"};
  /* border: ${({ error }) =>
    error ? "2px solid var(--color-main)" : "none"}; */
  .showPassword {
    position: absolute;
    right: 15%;
    transition: all 400ms ease-in-out;
    color: var(--color-thickSub);
    font-weight: 400;
    font-size: 10px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .icon {
    opacity: ${({ error }) => (error ? "1" : "0")};
    transition: all 400ms ease-in-out;
    right: 20px;
    position: absolute;
    color: var(--color-main);
  }
  @media screen and (max-height: 700px) {
    padding: 10px 20px;
  }
`;

const InputTitleBox = styled.div`
  display: flex;
`;
const Input = styled.input`
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
  width: 65%;
  padding: 2% 1%;
  &.recommand {
    width: 100%;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const ErrorTxt = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 12px;
  color: var(--color-main);
`;

const CheckCtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 13px;
  margin-top: 5px;
  &.allCheck {
    font-size: 18px;
    color: var(--color-thickSub);
    margin-bottom: 2%;
  }
`;

const DoneBtn = styled.button`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 375px;
  height: 50px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: var(--color-main);
  cursor: pointer;
  :disabled {
    background-color: var(--color-gray);
  }
`;
