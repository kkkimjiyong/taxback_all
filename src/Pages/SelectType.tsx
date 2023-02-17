import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackColumnLogo from "../Assets/Image/logo_Column_TaxBack.png";
import TaxBackRowLogo from "../Assets/Image/logo_Column_TaxBack2.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";
import Zoom from "react-reveal/Zoom";

const SelectType = () => {
  const navigate = useNavigate();

  // 기존 택스백 url로 연결
  const TaxBack = () => {
    window.location.href = "https://apply.tax-back.kr/";
  };
  return (
    <Layout>
      <MainHeader title={"환급받기"} />
      <Wrap>
        <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
        <LogoImage src={TaxBackColumnLogo} alt="로고" />
        <LogoImage className="rowLogo" src={TaxBackRowLogo} alt="로고" />
        {/* <ConetentBox>
          <Zoom right cascade>
            <div className="title">
              증빙 서류 준비없이 3분만에 환급 신청완료
            </div>
          </Zoom>

          <div className="comment">
            택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요.
            다른 곳에서는 조회만 해도 세무대리인이 바뀐다고 해서
            망설여지더라고요.
          </div>
          <div className="person">다주택자 A님</div>
        </ConetentBox>
        <ConetentBox className="second">
          <Zoom right cascade>
            <div className="title">이월세액공제 오류</div>
          </Zoom>
          <div className="comment">
            *이월세액공제를 적용하면 앞으로 납부할 세액에서 과거에 받지 못한
            세제혜택을 받을 수 있었습니다.
          </div>
        </ConetentBox> */}
        <ButtonCtn className="top">
          <ButtonLabel>
            <span className="midsub">법인세, 소득세</span> &nbsp;환급을
            원하세요?
          </ButtonLabel>
          <HrefBtn href="https://apply.tax-back.kr/">
            사업자 세금 환급받기
          </HrefBtn>
        </ButtonCtn>
        <ButtonCtn>
          <ButtonLabel>
            <span className="midsub">양도소득세</span>&nbsp; 환급을 원하세요?
          </ButtonLabel>
          <LookUpButton onClick={() => navigate("/transfer")}>
            양도소득세 환급받기
          </LookUpButton>
        </ButtonCtn>
      </Wrap>
      {/* <NavBar /> */}
    </Layout>
  );
};

export default SelectType;

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const LogoImage = styled.img`
  @media screen and (min-height: 850px) {
    margin-top: 200px;
  }
  margin-top: 50px;
  transform: scale(1);
  &.rowLogo {
    display: none;
  }
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;
const ConetentBox = styled.div`
  animation: ${smoothAppear} 1s;
  width: 300px;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  display: none;
  @media screen and (min-height: 880px) {
    margin-top: 40px;
  }
  &.second {
    @media screen and (max-height: 950px) {
      display: none;
    }
    margin-top: 20px;
    width: 300px;
    height: 90px;
    padding: 20px;
  }
  @media screen and (min-height: 800px) {
    display: block;
  }
  .title {
    color: var(--color-main);
    font-size: 16px;
    margin-bottom: 20px;
  }
  .comment {
    color: black;
    width: 100%;
    font-size: 12px;
    line-height: 160%;
  }
  .person {
    margin-top: 5%;
    font-size: 14px;
    color: #6b6b6b;
  }
`;

const ButtonCtn = styled.div`
  position: fixed;
  bottom: 50px;
  animation: ${smoothAppear} 800ms linear;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  &.top {
    bottom: 170px;
  }
  .midsub {
    color: var(--color-midSub);
  }
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;

const HrefBtn = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 319px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 14px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 319px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 14px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
