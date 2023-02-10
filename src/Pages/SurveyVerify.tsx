import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { userApi } from "../instance";
import { AlertModal } from "../Global/AlertModal";
import { BsFillCheckCircleFill } from "react-icons/bs";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  registerNumber: string;
  check1: boolean;
  check2: boolean;
};

type TpostUserInfo = {
  주: string;
  이: string;
  휴: string;
  특: string;
  selectdb: string;
};

type Tuser = {
  name: string;
  phoneNumber: string;
};

export const SurveyVerify = () => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState<string[]>([]);
  const [user, setUser] = useState<Tuser>({ name: "", phoneNumber: "" });

  const AllCheck = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCheckList(["check1", "check2"]) : setCheckList([]);
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
    registerNumber: yup.string().required("주민등록번호를 입력해주세요"),
    // .max(13, "13자리를 입력해주세요"),
    check1: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
    check2: yup.bool().oneOf([true], "체크박스를 체크해주세요"),
  });
  // 현재 로그인기능이 없어서 데이터를 불러올 수 없음
  // const GetUser = async () => {
  //   try {
  //     const response = await userApi.getUser();
  //     console.log(response.data);
  //     // setUser(response.data);
  //     reset(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   GetUser();
  // }, []);

  const PostSurvey = async (payload: TuserInfo) => {
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
    console.log(value);
    PostSurvey({ ...value, corporation: !toggle });
  };

  //useForm 설정
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TuserInfo>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  // 개인/법인 토글버튼 (기존값: 개인)
  const [toggle, setToggle] = useState<boolean>(true);
  const [submit, setSubmit] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  return (
    <Layout>
      <Wrap>
        <SurveyHeader title={`양도소득세 간편인증`} undoPage={`/survey`} />
        <ToggleBox clicked={toggle}>
          <ToggleBtn
            clicked={toggle}
            onClick={() => {
              reset();
              setToggle(!toggle);
              setSubmit(false);
            }}
          />{" "}
          <ToggleTxt clicked={toggle}>{!toggle ? "법인" : "개인"}</ToggleTxt>
        </ToggleBox>
        <InputBox error={!errors.name && submit} className="name">
          {" "}
          <Label htmlFor="name">이름</Label>
          <Input
            className="name"
            type={"text"}
            placeholder="예) 홍길동"
            {...register("name")}
          />
          <BsFillCheckCircleFill className="icon" size={24} />
        </InputBox>{" "}
        {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
        <InputBox className="phoneNumber" error={!errors.phoneNumber && submit}>
          {" "}
          <Label htmlFor="phoneNumber">휴대폰번호</Label>
          <Input
            type={"text"}
            maxLength={11}
            placeholder="휴대 전화번호를 입력해주세요."
            {...register("phoneNumber")}
          />
        </InputBox>
        {errors.phoneNumber && (
          <ErrorTxt>{errors.phoneNumber.message}</ErrorTxt>
        )}{" "}
        <InputBox
          className="registerNumber"
          error={!errors.registerNumber && submit}
        >
          {!toggle ? (
            <>
              <Label htmlFor="registerNumber">사업자등록번호</Label>
              <Input
                maxLength={10}
                type={"text"}
                placeholder="사업자등록번호를 입력해주세요"
                {...register("registerNumber")}
              />
            </>
          ) : (
            <>
              {" "}
              <Label htmlFor="registerNumber">
                주민등록번호
                <span className="labelsub">
                  * 법인사업자는 오른쪽 위 버튼을 눌러주세요.
                </span>
              </Label>
              <Input
                maxLength={13}
                type={"text"}
                placeholder="주민등록번호를 입력해주세요"
                {...register("registerNumber")}
              />
            </>
          )}
        </InputBox>
        {errors.registerNumber && (
          <ErrorTxt>{errors.registerNumber.message}</ErrorTxt>
        )}
        <SubTxt>
          * 환급을 위한 서비스 이외에 개인정보를 수집 및 이용을 하지 않습니다.
        </SubTxt>
        <SubTxt>* 환급 완료 후 개인정보는 폐기합니다.</SubTxt>
        <CheckBox>
          <input
            name="allCheck"
            checked={checkList.length === 2 ? true : false}
            onChange={AllCheck}
            type={"checkbox"}
          />
          아래 약관에 모두 동의합니다
        </CheckBox>
        <CheckBox className="sub">
          <input
            // {...register("check1")}
            name="check1"
            checked={CheckedHandler("check1")}
            onChange={ChangeCheck}
            type={"checkbox"}
          />
          [필수] 정보제공범위 동의
        </CheckBox>
        {errors.check1 && <ErrorTxt>{errors.check1.message}</ErrorTxt>}
        <CheckBox className="sub">
          <input
            // {...register("check2")}
            name="check2"
            onChange={ChangeCheck}
            checked={CheckedHandler("check2")}
            type={"checkbox"}
          />
          [필수] 법인세 신고 도움자료
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
        alert={alert}
        setAlert={setAlert}
        leftEvent={() => setAlert(false)}
        rightEvent={() => navigate("/verify/done")}
        mainText={"이미 진행하신 적이 있습니다. 그래도 진행하시겠습니까?"}
        rightText={"그래도 진행할래요"}
        leftText={"괜찮아요"}
      />
    </Layout>
  );
};

const Wrap = styled.form`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div<{ error: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 3px;
  width: 86%;
  height: 8%;
  padding: 2%;
  background-color: ${({ error }) =>
    error ? " #e8e7ff" : "var(--color-inputBox)"};
  .icon {
    opacity: ${({ error }) => (error ? "1" : "0")};
    transition: all 400ms ease-in-out;
    right: 20px;
    position: absolute;
    color: var(--color-main);
  }
  &.name {
    margin-top: 143px;
  }
`;

const ToggleBox = styled.div<{ clicked: boolean }>`
  position: absolute;
  left: 75%;
  top: 16%;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ clicked }) =>
    clicked ? "var(--color-lightSub)" : "var(--color-midSub)"};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: "flex-end";
  align-items: center;
  padding: 0 5px;
  box-shadow: inset 0px 3px 5px 0px rgb(100, 99, 99);
`;

const ToggleTxt = styled.div<{ clicked: boolean }>`
  color: var(--color-main);
  left: -30px;
  position: absolute;
`;
const ToggleBtn = styled.div<{ clicked: boolean }>`
  position: absolute;
  transition: all 200ms ease-in-out;
  left: ${({ clicked }) => (clicked ? "3px" : "33px")};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--color-inputBox);
  box-shadow: 0px 1px 5px 0px #747474;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
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
  font-size: 14px;
  margin-bottom: 5px;
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
  margin-left: 7px;
  color: #d80505;
`;

const SubTxt = styled.div`
  width: 90%;
  font-size: 10px;
  color: var(--color-gray);
`;

const CheckBox = styled.div`
  margin-top: 7%;
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 18px;
  color: var(--color-thickSub);
  margin-bottom: 2%;
  &.sub {
    margin-top: 0%;
    color: black;
    font-size: 13px;
    margin-bottom: 1%;
  }
`;

const BottomBtn = styled.div`
  margin-top: 50px;
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
