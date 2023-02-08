import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { IoIosArrowBack } from "react-icons/io";
import LoginImage from "../Assets/Image/Login.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { userApi } from "../instance";
import { AlertModal } from "../Global/AlertModal";

type TloginInfo = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();

  // 알럿 상태 관리
  const [alert, setAlert] = useState<boolean>(false);

  //? ----------------   로그인로직   -----------------------
  //! ---- API 요청함수  ----
  const PostLogin = async (loginInfo: any) => {
    try {
      const response = await userApi.postLogin(loginInfo);
      // 로그인 성공 시, 환급메인화면으로
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/survey");
      }
      console.log(response);
    } catch (error) {
      setAlert(true);
      console.log(error);
    }
  };

  const formSchema = yup.object({
    email: yup.string(),
    // .email("유효하지 않은 이메일입니다.")
    // .required("이메일을 입력해주세요."),
    password: yup.string(),
    // .required("비밀번호를 입력해주세요.")
    // .matches(
    //   /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
    //   "8~16자, 영문, 숫자, 특수문자 포함"
    // ),
  });

  // 회원가입 submit 핸들러
  const SubmitHandler = (): void => {
    console.log(getValues());
    PostLogin(getValues());
  };

  const AlertLogin = () => {
    setAlert(true);
    reset();
  };

  //useForm 설정
  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TloginInfo>({
    mode: "onChange",
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(formSchema),
  });

  return (
    <Layout>
      <IconBox>
        <IoIosArrowBack onClick={() => navigate("/")} size={30} />
      </IconBox>
      <HeadTxt>로그인</HeadTxt>
      <Img src={LoginImage} alt="로그인" />
      <InputBox>
        <Label htmlFor="email">이메일</Label>
        <Input
          type={"text"}
          {...register("email")}
          placeholder="예) abc@gmail.com"
        />{" "}
      </InputBox>
      {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}

      <InputBox>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type={"password"}
          {...register("password")}
          placeholder="영문, 숫자 조합 8~16자"
        />{" "}
      </InputBox>
      {errors.password && <ErrorTxt>{errors.password.message}</ErrorTxt>}

      <FlexBox>
        <div className="inner">
          <input type={"checkbox"} />
          <div>로그인 상태 유지</div>
        </div>
        <div onClick={() => window.confirm("개발중")} className="smallTxt">
          아이디 | 비밀번호 찾기
        </div>
      </FlexBox>
      <LoginBtn onClick={handleSubmit(SubmitHandler)}>로그인 하기</LoginBtn>
      <SignUpTxt onClick={() => navigate("/signup")}>
        아직 회원이 아니신가요?&nbsp;
        <span className="main"> 가입하기</span>
      </SignUpTxt>
      <AlertModal
        alert={alert}
        setAlert={setAlert}
        leftEvent={() => window.confirm("개발중입니다")}
        rightEvent={() => setAlert(false)}
        mainText={"비밀번호 또는 패스워드가 틀립니다"}
        rightText={"다시 해볼래요"}
        leftText={"찾아볼래요"}
      />
    </Layout>
  );
};

const IconBox = styled.div`
  margin-top: 59px;
  margin-bottom: 10px;
  width: 92%;
  display: flex;
  color: var(--color-thickSub);
`;

const HeadTxt = styled.div`
  font-size: 22px;
  font-weight: 700;
  width: 90%;
  color: var(--color-thickSub);
`;

const Img = styled.img`
  margin-top: 27px;
  width: 50%;
  @media screen and (max-height: 720px) {
    width: 30%;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 15px;
  width: 80%;
  height: 5%;
  padding: 5%;
  background-color: var(--color-inputBox);
`;

const ErrorTxt = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  font-size: 12px;
  color: var(--color-main);
`;
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  margin-right: 10px;
`;
const Input = styled.input`
  font-size: 14px;
  border: none;
  background-color: transparent;
  height: 100%;
  padding: 2% 0%;
`;

const FlexBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  .inner {
    display: flex;
    color: var(--color-thickSub);
    font-weight: 500;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
  .smallTxt {
    font-weight: 400;
    font-size: 14px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 82%;
  padding: 4%;
  margin-top: 50px;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-height: 730px) {
    margin-top: 15%;
  }
  background-color: var(--color-gray);
  color: white;
  border-radius: 40px;
  :hover {
    cursor: pointer;
    background-color: var(--color-main);
  }
`;

const SignUpTxt = styled.div`
  font-size: 13px;
  display: flex;
  text-align: center;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
