import React, { useEffect, useState, useRef } from "react";
import { Layout } from "../Global/Layout";
import KaKaoLogo from "../Assets/Image/TaxBack_KaKao.png";
import styled from "styled-components";
import { AlertModal } from "../Global/AlertModal";
import { Navigate, useNavigate } from "react-router-dom";

export const VerifyDone = () => {
  const navigate = useNavigate();
  // const [alert, setAlert] = useState<boolean>(false);

  const [min, setMin] = useState<number>(4);
  const [sec, setSec] = useState<number>(59);
  const [time, setTime] = useState<number>(299);

  // 타이머 구현 (300초)
  useEffect(() => {
    const Timer = setInterval(() => {
      if (time >= 0) {
        setMin(Math.floor(time / 60));
        setSec(time % 60);
        setTime((prev) => prev - 1);
      }
    }, 1000);

    return (): void => clearInterval(Timer);
  });

  useEffect(() => {
    if (time == 0) {
      navigate("/result");
    }
  }, [time]);

  console.log(time);

  return (
    <Layout>
      <KaKaoImg src={KaKaoLogo} alt="카카오" />
      <TextBox>
        <span className="sub">카카오</span>로
        <br />
        간편인증 요청을 보냈어요!
      </TextBox>
      <TextBox className="bottom">
        <span className="sub">카카오톡 앱</span>
        에서
        <br />
        메세지를 확인해주세요.
      </TextBox>
      <TimeBox>
        {min} : {sec}
      </TimeBox>
      <Button onClick={() => navigate("/result")}>인증완료</Button>
      {/* <AlertModal
        alert={alert}
        setAlert={setAlert}
        event={() => navigate("/")}
      /> */}
    </Layout>
  );
};

const KaKaoImg = styled.img`
  margin-top: 80px;
  margin-right: 62%;
  width: 25%;
`;

const TextBox = styled.div`
  width: 80%;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  &.bottom {
    margin-top: 50px;
  }
`;

const Button = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  width: 319px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-main);
  color: white;
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }
`;

const TimeBox = styled.div`
  background-color: var(--color-inputBox);
  color: var(--color-sub);
  padding: 1% 5%;
  border-radius: 20px;
  margin-right: 65%;
  margin-top: 33px;
`;
