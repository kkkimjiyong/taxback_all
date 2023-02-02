import React from "react";
import styled from "styled-components";

// 함수 prop을 전달되기전까지 타입스크립트 보류
export const AlertModal = ({
  alert,
  setAlert,
  event,
}: {
  alert: boolean;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
  event: () => void;
}) => {
  return (
    <Wrap alert={alert}>
      <CloseBtn onClick={() => setAlert(false)}>X</CloseBtn>
      <div>알림</div>
      <TextBox>
        추가 설문을 진행할 경우
        <br />
        환급 확률과 금액이 정확해져요.
      </TextBox>
      <ButtonBox>
        <Button></Button>
        <Button onClick={event} className="next">
          추가 설문 할래요
        </Button>
      </ButtonBox>
    </Wrap>
  );
};

const Wrap = styled.div<{ alert: Boolean }>`
  position: absolute;
  z-index: 200;
  bottom: ${({ alert }) => (alert ? "0px" : "-250px")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 200px;
  transition: all 400ms ease-in-out;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5% 0%;
  font-weight: 700;
  color: var(--color-thickSub);
  box-shadow: 2px -5px 20px -5px gray;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
`;

const TextBox = styled.div`
  height: 40%;
  width: 70%;
  font-size: var(--font-small);
  text-align: center;
  font-weight: 600;
  color: var(--color-thickSub);
  margin: 5% 0%;
`;

const Button = styled.div`
  font-size: var(--font-small);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--color-gray);
  width: 23%;
  padding: 3% 2%;
  border-radius: 30px;
  &.next {
    margin-left: 5%;
    padding: 3% 7%;
    background-color: var(--color-main);
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;
