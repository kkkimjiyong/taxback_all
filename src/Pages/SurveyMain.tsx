import React from "react";
import styled, { keyframes } from "styled-components";
import { Layout } from "../Global/Layout";
import BackGroundLogo from "../Assets/Image/BackGround_Logo.png";
import { useNavigate } from "react-router-dom";
import { MainHeader } from "../Global/MainHeader";
import { useState, useEffect } from "react";
import { boolean } from "yup";

const SurveyMain = () => {
  const navigate = useNavigate();
  // 평균 환급액
  let average = 2389;
  let averageNumber = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // --------   글자 타이핑효과  ---------
  const [title, setTitle] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);
  const completionWord = "증빙 서류 준비없이 3분만에 환급 신청완료";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!stop) {
        if (count >= completionWord.length) {
          setStop(true);
        } else {
          setTitle((prevTitleValue) => {
            let result = prevTitleValue
              ? prevTitleValue + completionWord[count]
              : completionWord[0];
            setCount(count + 1);

            return result;
          });
        }
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
    };
  });

  // // --------------------------   환급금액   --------------------------
  // const [number, setNumber] = useState<number>(0);
  // const [numberStop, setNumberStop] = useState<boolean>(false);

  // const [time, setTime] = useState<number>(3000 / 1150);
  // const completionNumber = 1150;

  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     if (!numberStop) {
  //       if (number >= completionNumber) {
  //         setNumberStop(true);
  //       } else {
  //         setNumber((prev) => prev + 1);
  //       }
  //       if (number >= completionNumber - 3) {
  //         setTime((prev) => prev + 50);
  //       }
  //     }

  //     //3초안에 끝숫자에 도달하도록 + 애니메이션도 3초동안 주면됨.
  //   }, time);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // });
  // --------   일정시간 진행하지 않으면, 버튼 강조 애니메이션   ----------------------
  const [btnAnimation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
  }, []);

  return (
    <Layout>
      <Wrap>
        <MainHeader />
        <BackGroundImg src={BackGroundLogo} alt={"바탕로고"} />
        <ConetentBox>
          <div className="title">{title}</div>
          <div className="comment">
            택스백에서는 수임 동의를 받지 않아 안심하고 환급받을 수 있었어요.
            다른 곳에서는 조회만 해도 세무대리인이 바뀐다고 해서
            망설여지더라고요.
          </div>
          <div className="person">다주택자 A님</div>
        </ConetentBox>
        <NumberTitle>양도소득세 환급 | 양도소득세 신고자</NumberTitle>
        <NumberCtn>
          <div>
            <NumberBox>
              <TotlaNumber>61</TotlaNumber>
              <div className="unit1">%</div>
            </NumberBox>
            <div className="sub"> 환급 발생 비율</div>
          </div>
          <div>
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
          <LookUpButton
            btnAnimation={btnAnimation}
            onClick={() => navigate("/survey/verify/transfer")}
          >
            <span></span>양도소득세 환급받기
          </LookUpButton>
        </ButtonCtn>
      </Wrap>
    </Layout>
  );
};

export default SurveyMain;

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

const numberEmpasis = keyframes`
    from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrap = styled.div`
  animation: ${smoothAppear} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const BackGroundImg = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`;

// const ContentCtn = styled.div`
//   background-color: aliceblue;
//   width: 330px;
//   margin: auto 0;
//   display: flex;
//   overflow: hidden;
// `;

const ConetentBox = styled.div`
  width: 75%;
  padding: 10% 5%;
  background-color: white;
  box-shadow: 0px 3px 20px -5px gray;
  border-radius: 10px;
  margin-top: 20%;
  @media screen and (min-height: 800px) {
    margin-top: 35%;
  }
  .title {
    color: var(--color-main);
    font-size: 16px;
    margin-bottom: 20px;
  }
  .comment {
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
const NumberTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  width: 80%;
  margin-top: 10%;
  padding: 1% 0;
  color: var(--color-thickSub);
  border-bottom: 1px solid var(--color-thickSub);
  @media screen and (max-height: 660px) {
    font-size: 12px;
    margin-top: 5%;
  }
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
    @media screen and (max-height: 660px) {
      font-size: 10px;
    }
  }
`;

const NumberBox = styled.div`
  position: relative;
  display: flex;
  font-size: 20px;
  @media screen and (max-height: 660px) {
    font-size: 16px;
  }
  .unit1 {
    position: absolute;
    bottom: 10px;
    right: -20px;
  }
  .unit2 {
    position: absolute;
    bottom: 10px;
    right: -40px;
  }
`;

const TotlaNumber = styled.div`
  /* animation: ${numberEmpasis} 5s; */
  font-size: 50px;
  color: var(--color-midSub);
  font-weight: 700;
  @media screen and (max-height: 660px) {
    font-size: 30px;
  }
`;

const ButtonCtn = styled.div`
  margin-top: 50px;
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

const LookUpButton = styled.div<{ btnAnimation: boolean }>`
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
