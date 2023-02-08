import React from "react";
import styled from "styled-components";

// 함수 prop을 전달되기전까지 타입스크립트 보류
export const AlertModal = ({
  alert,
  setAlert,
  rightEvent,
  leftEvent,
  mainText,
  rightText,
  leftText,
}: {
  alert: boolean;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
  rightEvent?: () => void;
  leftEvent?: () => void;
  mainText: string;
  rightText: string;
  leftText: string;
}) => {
  return (
    <Wrap alert={alert}>
      <CloseBtn onClick={() => setAlert(false)}>X</CloseBtn>
      <HeadTxt>알림</HeadTxt>
      <TextBox>{mainText}</TextBox>
      <ButtonBox>
        <Button onClick={leftEvent}>{leftText}</Button>
        <Button onClick={rightEvent} className="next">
          {rightText}
        </Button>
      </ButtonBox>
    </Wrap>
  );
};

const Wrap = styled.div<{ alert: Boolean }>`
  position: fixed;
  z-index: 200;
  bottom: ${({ alert }) => (alert ? "0px" : "-260px")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  background-color: white;
  height: 250px;
  transition: all 400ms ease-in-out;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: 700;
  color: var(--color-thickSub);
  box-shadow: 2px -5px 20px -5px gray;
`;
const HeadTxt = styled.div`
  position: absolute;
  top: 50px;
  font-weight: 700;
  font-size: 19px;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
`;

const TextBox = styled.div`
  height: 40%;
  width: 55%;
  margin-bottom: 30px;
  font-size: var(--font-small);
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  color: var(--color-thickSub);
`;

const Button = styled.div`
  font-size: var(--font-small);
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--color-gray);
  width: 130px;
  border-radius: 30px;
  &.next {
    width: 160px;

    margin-left: 5%;
    background-color: var(--color-main);
  }
  :hover {
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
