import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import TaxBackRawLogo from "../Assets/Image/logo_TaxBack.png";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { NavBar } from "../Global/NavBar";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";
import { useState, useEffect } from "react";

const SurveyMain = () => {
  const navigate = useNavigate();
  // 평균 환급액
  let average = 2389;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [blogTitle, setBlogTitle] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);
  const completionWord = "증빙 서류 준비없이 3분만에 환급 신청완료";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!stop) {
        if (count >= completionWord.length) {
          setStop(true);
        } else {
          setBlogTitle((prevTitleValue) => {
            let result = prevTitleValue
              ? prevTitleValue + completionWord[count]
              : completionWord[0];
            setCount(count + 1);

            return result;
          });
        }
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <Layout>
      <MainHeader />
      <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />

      <ConetentBox>
        {" "}
        <div className="title">{blogTitle}</div>
        <div className="comment">
          택스백에서는 수임 동의를 받지 않아 안심하고
          <br />
          환급받을 수 있었어요. 다른 곳에서는 조회만 해도 <br />
          세무대리인이 바뀐다고 해서 망설여지더라고요.
        </div>
        <div className="person">다주택자 A님</div>
      </ConetentBox>

      <NumberTitle>양도소득세 환급 | 양도소득세 신고자</NumberTitle>
      <NumberCtn>
        <div>
          {" "}
          <NumberBox>
            <TotlaNumber>61</TotlaNumber>
            <div className="unit1">%</div>
          </NumberBox>
          <div className="sub"> 환급 발생 비율</div>
        </div>
        <div>
          {" "}
          <NumberBox>
            <TotlaNumber>1150</TotlaNumber> <div className="unit2">만원</div>
          </NumberBox>{" "}
          <div className="sub">평균 환급금액</div>
        </div>
      </NumberCtn>
      <ButtonCtn>
        <ButtonLabel>
          <span>양도소득세 </span>환급을 원하세요?
        </ButtonLabel>
        <LookUpButton onClick={() => navigate("/survey/verify/transfer")}>
          <span></span>양도소득세 환급받기
        </LookUpButton>
      </ButtonCtn>
    </Layout>
  );
};

export default SurveyMain;

const LogoImage = styled.img`
  margin-top: 10%;
  width: 60%;
  max-width: 250px;
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const ContentCtn = styled.div`
  display: flex;
`;

const ConetentBox = styled.div`
  width: 75%;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  margin-top: 15%;
  @media screen and (min-height: 800px) {
    margin-top: 25%;
  }
  .title {
    color: var(--color-main);
    font-size: 16px;
    margin-bottom: 20px;
  }
  .comment {
    font-size: 12px;
    line-height: 160%;
  }
  .person {
    margin-top: 5%;
    font-size: 14px;
    color: #6b6b6b;
  }
`;
const NumberTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  width: 80%;
  margin-top: 10%;
  padding: 1% 0;
  color: var(--color-thickSub);
  border-bottom: 1px solid var(--color-thickSub);
`;

const NumberCtn = styled.div`
  position: relative;
  margin-right: 7%;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sub {
    bottom: -8px;
    margin-left: 3px;
    position: absolute;
    font-size: 12px;
    color: var(--color-thickSub);
  }
`;

const NumberBox = styled.div`
  position: relative;
  display: flex;
  .unit1 {
    position: absolute;
    bottom: 10px;
    right: -20px;
    font-size: 20px;
  }
  .unit2 {
    position: absolute;
    bottom: 10px;
    right: -40px;
    font-size: 20px;
  }
`;

const TotlaNumber = styled.div`
  font-size: 50px;
  color: var(--color-midSub);
  font-weight: 700;
`;

const ButtonCtn = styled.div`
  margin-top: 13%;
  width: 84%;
  display: flex;
  flex-direction: column;
  @media screen and (min-height: 730px) {
    margin-top: 20%;
  }
`;

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`;

const LookUpButton = styled.div`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 50px;
  border-radius: 25px;
  background-color: var(--color-main);
  margin-top: 10px;

  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
