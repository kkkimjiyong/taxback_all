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
          <HiHome className="icon1" onClick={() => navigate("/")} size={26} />
        </div>
        홈
      </FlexBox>
      <FlexBox>
        <div>
          <RiMoneyDollarCircleFill
            onClick={() => navigate("/")}
            className="icon2"
            size={26}
          />
        </div>
        환급하기
      </FlexBox>
      <FlexBox onClick={() => navigate("/about")}>
        <div>
          <BsThreeDots className="icon3" />
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
  position: absolute;
  bottom: 0;
  font-weight: 600;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 5px;
  height: 80px;
  @media screen and (min-height: 780px) {
    display: flex;
  }

  font-size: 14px;

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
    margin-top: 13px;
    color: var(--color-thickSub);
  }
  :hover {
    cursor: pointer;
  }
`;
