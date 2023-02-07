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
        <Button onClick={leftEvent}>{rightText}</Button>
        <Button onClick={rightEvent} className="next">
          {leftText}
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
  width: 70%;
  margin-bottom: 30px;
  font-size: var(--font-small);
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 27%;
  padding: 4% 4%;
  border-radius: 30px;
  &.next {
    margin-left: 5%;
    padding: 3% 5%;
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
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
