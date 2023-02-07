import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Layout } from "../Global/Layout";
import { SurveyHeader } from "../Global/SurveyHeader";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TransferImage1 from "../Assets/Image/Transfer_Done.png";
import { useNavigate } from "react-router-dom";

export const TransferDone = () => {
  const navigate = useNavigate();

  const name: any = localStorage.getItem("user");

  //상담 요청일 상태값 (현재 로직 => 오늘날짜 + 3일)
  const todayTime = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate() + 3;
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    setRequestDate(
      todayMonth + "월 " + todayDate + "일 " + dayOfWeek + "요일 " + 13 + "시 "
    );
  };
  const [requestDate, setRequestDate] = useState<string>();
  // 현재 설문조사 진행고객님 정보
  const [user, setUser] = useState<any>({ name: "", phoneNumber: "" });
  //연락 가능한 번호 상태값
  const [requestPhoneNumber, setRequestPhoneNumber] = useState<string>(
    JSON.parse(name)
      .phoneNumber.replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "")
  );

  const GetUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    todayTime();
    // userApi.getUser();
    GetUser();
  }, []);

  return (
    <Layout>
      <SurveyHeader
        undoPage={"/survey/transfer/result"}
        title={"양도소득세 상담 신청 완료"}
      />
      <Wrap>
        <CheckBox>
          <BsFillCheckCircleFill className="icon" size={24} />
        </CheckBox>
        <ClientName>{user.name}님</ClientName>
        <DoneText>양도소득세 무료 상담 요청을 완료하였습니다.</DoneText>
        <InfoBox>
          <InfoTitle>상담 요청일</InfoTitle>
          {/* <InfoDetail>{requestDate}</InfoDetail> */}
          <InfoDetail value={requestDate} />
        </InfoBox>
        <InfoBox>
          <FlexBox>
            <div className="content">
              {" "}
              <InfoTitle>연락 가능한 번호</InfoTitle>{" "}
              {/* <InfoDetail>{requestPhoneNumber}</InfoDetail> */}
              <InfoDetail
                maxLength={13}
                value={user.phoneNumber}
                onChange={(e) =>
                  setRequestPhoneNumber(
                    e.target.value
                      .replace(/[^0-9]/g, "")
                      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                      .replace(/(\-{1,2})$/g, "")
                  )
                }
              />
            </div>
            {requestPhoneNumber.length === 13 ? (
              <ConfirmBtn onClick={() => alert("번호 수정 완료")}>
                저장
              </ConfirmBtn>
            ) : (
              <InfoButton>저장</InfoButton>
            )}
          </FlexBox>
        </InfoBox>{" "}
        <InfoSub>
          해당번호로 연락이 가요. 만약 다른 번호로 연락을 원하신다면 <br />
          수정을 해주세요.
        </InfoSub>
        <InfoBox className="recommendId">
          <FlexBox>
            <div className="content">
              <InfoTitle> 추천인 아이디</InfoTitle>
              <input
                className="recommendInput"
                placeholder="추천인 아이디를 입력하세요"
              />
            </div>

            <InfoButton className="recommendId">확인</InfoButton>
          </FlexBox>
        </InfoBox>
        <FlexBox className="ImageBottomBox">
          <Img className="img" src={TransferImage1} alt="이미지" />
          <div className="ImageBottomTxt">
            세금 환급 담당자가 <br />
            빠른 시일 내에 연락드릴게요
          </div>
        </FlexBox>
        <ButtonBox>
          <HomeButton onClick={() => navigate("/survey")}>홈으로</HomeButton>
          <NextBtn onClick={() => window.confirm("개발중입니다.")}>
            상담 신청 내역 보기
          </NextBtn>
        </ButtonBox>
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  width: 90%;
  margin-top: 143px;
`;

const CheckBox = styled.div`
  width: 90%;
  .icon {
    color: var(--color-midSub);
  }
`;

const ClientName = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 1%;
`;

const DoneText = styled.div`
  width: 90%;
  margin-top: 1%;
  margin-bottom: 5%;
  font-weight: 500;
  font-size: 14px;
`;

const InfoBox = styled.div`
  margin: 0 auto;
  width: 88%;
  height: 40px;
  padding: 15px 22px;
  border-radius: 10px;
  margin-top: 2%;
  background-color: var(--color-inputBox);
  &.recommendId {
    height: 8%;
    .recommendInput {
      margin-top: 2%;
      width: 80%;
      border: none;
      background-color: transparent;
    }
  }
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
  }
  .img {
    width: 25%;
  }
  &.ImageBottomBox {
    margin-top: 5%;
    width: 90%;
    border: 1px solid var(--color-sub);
    border-radius: 15px;
    padding: 5%;
    @media screen and (min-height: 790px) {
      height: 118px;
    }
    @media screen and (max-height: 690px) {
      display: none;
    }
    .ImageBottomTxt {
      font-size: 14px;
      margin-left: 35%;
      @media screen and (min-height: 790px) {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
`;

const Img = styled.img`
  position: absolute;
  transform: scale(0.7);
  left: 5%;
  @media screen and (min-height: 790px) {
    transform: scale(1);
  }
`;

const InfoTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

const InfoSub = styled.div`
  margin: 5px 0px 5px 15px;
  font-weight: 500;
  font-size: 12px;
  color: var(--color-thickSub);
`;

const InfoDetail = styled.input`
  border: none;
  background-color: transparent;
  width: 70%;
  font-size: 16px;
  font-weight: 400;
  margin-top: 2%;
  color: var(--color-main);
`;

const InfoButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
  width: 20%;
  height: 100%;
  padding: 2% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: var(--color-gray);
  /* &.recommendId {
    margin-top: 0%;
  } */
`;

const ConfirmBtn = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
  width: 20%;
  height: 100%;
  padding: 2% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: var(--color-midSub);
  /* &.recommendId {
    margin-top: 0%;
  } */
`;

const HomeButton = styled.div`
  width: 30%;
  font-weight: 700;
  font-size: 14px;
  color: var(--color-thickSub);
  border: 1px solid var(--color-thickSub);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: var(--color-lightSub);
    color: var(--color-main);
    border: 1px solid var(--color-lightSub);
    cursor: pointer;
  }
`;

const NextBtn = styled.div`
  width: 60%;
  padding: 3% 0;
  font-weight: 700;
  font-size: 14px;
  color: white;
  border-radius: 30px;
  background-color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    margin-left: 10px;
  }
  &.clicked {
    background-color: var(--color-main);
    :hover {
      cursor: pointer;
    }
  }
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  bottom: 50px;
`;
