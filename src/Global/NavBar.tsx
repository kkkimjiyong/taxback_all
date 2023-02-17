import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <FlexBox>
        <div>
          <svg
            onClick={() => navigate("/")}
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.629883 15.3999L12.9999 2.37988L25.3699 15.3999"
              stroke="#2F1E7C"
              stroke-width="2"
            />
            <path
              d="M4.38989 11.6396V23.6196"
              stroke="#2F1E7C"
              stroke-width="2"
            />
            <path
              d="M21.6099 11.6396V23.6196"
              stroke="#2F1E7C"
              stroke-width="2"
            />
            <path
              d="M16.03 14.3496H9.97998V22.8696H16.03V14.3496Z"
              stroke="#2F1E7C"
              stroke-width="2"
            />
          </svg>
        </div>
        홈
      </FlexBox>
      <FlexBox>
        <div>
          <svg
            onClick={() => navigate("/")}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1042_392)">
              <circle cx="13" cy="13" r="11" fill="#7548FF" />
              <path
                d="M13 2.5C18.79 2.5 23.5 7.21 23.5 13C23.5 18.79 18.79 23.5 13 23.5C7.21 23.5 2.5 18.79 2.5 13C2.5 7.21 7.21 2.5 13 2.5ZM13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5Z"
                fill="#2F1E7C"
              />
              <path
                d="M19.1099 13.3095V11.9795H6.88986V13.3095H19.1099Z"
                fill="white"
              />
              <path
                d="M9.76992 17.4996L7.91992 9.05957H9.51992L10.6899 14.8596L12.1099 9.05957H13.9699L15.3299 14.9596L16.5199 9.05957H18.0899L16.2099 17.4996H14.5499L13.0099 11.1896L11.4699 17.4996H9.76992V17.4996Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1042_392">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        환급하기
      </FlexBox>
      <FlexBox onClick={() => navigate("/about")}>
        <div>
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.46997 4C3.57454 4 4.46997 3.10457 4.46997 2C4.46997 0.89543 3.57454 0 2.46997 0C1.3654 0 0.469971 0.89543 0.469971 2C0.469971 3.10457 1.3654 4 2.46997 4Z"
              fill="#2F1E7C"
            />
            <path
              d="M11 4C12.1046 4 13 3.10457 13 2C13 0.89543 12.1046 0 11 0C9.89543 0 9 0.89543 9 2C9 3.10457 9.89543 4 11 4Z"
              fill="#2F1E7C"
            />
            <path
              d="M19.53 4C20.6346 4 21.53 3.10457 21.53 2C21.53 0.89543 20.6346 0 19.53 0C18.4255 0 17.53 0.89543 17.53 2C17.53 3.10457 18.4255 4 19.53 4Z"
              fill="#2F1E7C"
            />
          </svg>
        </div>
        더보기
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: none; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  font-weight: 600;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 5px;
  height: 86px;
  @media screen and (min-height: 780px) {
    display: flex;
  }
  font-weight: 500;
  font-size: 13px;
  box-shadow: 0px -12px 20px -15px gray;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

const FlexBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon1 {
    color: var(--color-thickSub);
  }
  .icon2 {
    margin-top: 2px;

    color: var(--color-thickSub);
  }
  .icon3 {
    color: var(--color-thickSub);
  }
  :hover {
    cursor: pointer;
  }
`;
