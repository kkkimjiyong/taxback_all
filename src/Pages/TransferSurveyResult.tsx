import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import TransferImage from "../Assets/Image/Transfer_Result.png";
import { TextModal } from "../Global/TextModal";
import { useNavigate } from "react-router-dom";
import { userApi } from "../instance";
import { Loading } from "./Loading";

export const TransferSurveyResult = () => {
  const navigate = useNavigate();

  //? ---------------------- 법적 근거 텍스트 모달 ------------------------------
  // 모달 상태값 관리
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const RefundBasisButtonHandler = (): void => {
    setActiveModal(true);
  };

  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const GetUser = async () => {
    try {
      const response = await userApi.getUser();
      console.log(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
      setUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    GetUser();
  }, []);

  // ------------------   숫자 타이핑 효과   -------------------------
  let result = 112345321;

  // --------   글자 타이핑효과  ---------
  const [number, setNumber] = useState<number>(112345321 - 80);
  const [stop, setStop] = useState<boolean>(false);
  let resultNum = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    if (!loading) {
      const typingInterval = setInterval(() => {
        if (!stop) {
          if (number === result) {
            setStop(true);
          } else {
            setNumber((prev: any) => prev + 1);
          }
        }
      }, 20);
      return () => {
        clearInterval(typingInterval);
      };
    }
  });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Layout>
        <SurveyHeader undoPage={"/survey/start/assign/transfer"} />
        <TextBox>
          <span className="dark">{user.name}</span>님은
        </TextBox>
        <TextBox className="subText">
          <span className="mid"> 2주택자 조정지역 매매</span>에 속하므로
          <br />
          <span className="dark">환급 가능성이 있어요.</span>
        </TextBox>
        <LookUpBtn onClick={RefundBasisButtonHandler}>
          환급근거 살펴보기
        </LookUpBtn>
        <ImageBox>
          <img className="img" src={TransferImage} alt="이미지" />
          <ImageTextBox>
            지금까지 같은 Case의 고객님 중 88%가 <br />
            <span className="sub">양도소득세 환급신청</span>으로
            <br />
            평균 <span className="number"> {resultNum}원</span>을 환급 받았어요.
          </ImageTextBox>
        </ImageBox>
        <BottomBtn onClick={() => navigate("/survey/transfer/done")}>
          양도소득세 무료 상담하기
        </BottomBtn>
        <TextModal active={activeModal} setActive={setActiveModal} />
      </Layout>
    );
  }
};

const TextBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 90%;
  margin-top: 153px;
  &.subText {
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
  }
`;

const LookUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 62%;
  font-weight: 700;
  font-size: 12px;
  color: white;
  margin-top: 20px;
  padding: 2.2% 2.5%;
  border-radius: 30px;
  background-color: var(--color-midSub);
  :hover {
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35%;
  padding: 10px 0;
  border-radius: 15px;
  background-color: #fcf4f0;
  margin-top: 8%;
  @media screen and (max-height: 650px) {
    padding: 30px 0;
  }
  .img {
    @media screen and (max-height: 650px) {
      display: none;
    }
    width: 40%;
  }
`;

const ImageTextBox = styled.div`
  text-align: center;
  margin-top: 2%;
  width: 90%;
  line-height: 150%;
  .bold {
  }
  .sub {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-sub);
  }
  .number {
    font-size: 15px;
    font-weight: 500;
  }
`;

const BottomBtn = styled.div`
  position: fixed;
  bottom: 50px;
  width: 319px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  border-radius: 25px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
