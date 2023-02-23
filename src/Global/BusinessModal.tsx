import React from "react";
import styled from "styled-components";

// 함수 prop을 전달되기전까지 타입스크립트 보류
export const BusinessModal = ({
  alert,
  setAlert,
}: {
  alert: boolean;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BackGroundModal active={alert}>
      {" "}
      <Wrap alert={alert}>
        <CloseBtn
          onClick={() => setAlert(false)}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_515_2155)">
            <path
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="#EBEBEB"
            />
            <path
              d="M6 6L14 14"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 6L6 14"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_515_2155">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </CloseBtn>
      </Wrap>
    </BackGroundModal>
  );
};

const BackGroundModal = styled.div<{ active: Boolean }>`
  height: ${({ active }) => (active ? "100%" : " 0%")};
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
`;

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

const CloseBtn = styled.svg`
  position: absolute;
  right: 5%;
  top: 4%;
  :hover {
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  height: 40%;
  width: 55%;
  margin-bottom: 30px;
  font-size: var(--font-small);
  text-align: center;
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
  bottom: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
