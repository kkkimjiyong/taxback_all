import React from "react";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TaxBackRawLogo from "../Assets/Image/TaxBack_Text.png";

export const MainHeader = ({ title }: { title?: string }) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <LogoImage src={TaxBackRawLogo} alt="로고" />

      <FlexBox>
        <ShareBox>공동인증센터</ShareBox>{" "}
        <BsFillBellFill className="icon" size={24} />
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const LogoImage = styled.img`
  width: 30%;
`;

const HeaderTxt = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-thickSub);
`;

const ShareBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid var(--color-sub);
  color: var(--color-sub);
  padding: 1%;
  width: 90px;
  height: 30px;
  border-radius: 25px;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    background-color: var(--color-sub);
    color: white;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  .icon {
    color: var(--color-thickSub);
  }
`;
