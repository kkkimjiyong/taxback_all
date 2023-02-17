import React from "react";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { SurveyHeader } from "../../../Global/SurveyHeader";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Counsel = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <SurveyHeader title={"1:1 문의"} undoPage={"/about"} />
      <TopTitleBox>
        도움이 필요하신가요?
        <PostBtn onClick={() => navigate("/about/counsel/request")}>
          질문하기
        </PostBtn>
      </TopTitleBox>
      <BoardCtn>
        <BoardBox>
          <div>
            <BoardTitle>담당자 배정은 언제되나요?</BoardTitle>
            <TimeTxt>3시간 전</TimeTxt>
          </div>
          <DetailBtn>
            <div>댓글 2</div>
            <IoIosArrowForward className="icon" size={20} />
          </DetailBtn>
        </BoardBox>
        <BoardBox>
          <div>
            <BoardTitle>담당자 배정은 언제되나요?</BoardTitle>
            <TimeTxt>3시간 전</TimeTxt>
          </div>
          <DetailBtn>
            <div>댓글 2</div>
            <IoIosArrowForward className="icon" size={20} />
          </DetailBtn>
        </BoardBox>
        <BoardBox>
          <div>
            <BoardTitle>담당자 배정은 언제되나요?</BoardTitle>
            <TimeTxt>3시간 전</TimeTxt>
          </div>
          <DetailBtn>
            <div>댓글 2</div>
            <IoIosArrowForward className="icon" size={20} />
          </DetailBtn>
        </BoardBox>
      </BoardCtn>
    </Layout>
  );
};

const TopTitleBox = styled.div`
  margin-top: 153px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
`;

const PostBtn = styled.div`
  font-weight: 700;
  font-size: 12px;
  background-color: var(--color-midSub);
  color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77px;
  height: 32px;
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;
const BoardCtn = styled.div`
  margin-top: 23px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoardBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 16px 20px;
  border: 1px solid var(--color-lightSub);
  border-radius: 10px;
  margin-top: 7px;
`;

const BoardTitle = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 16px;
`;

const TimeTxt = styled.div`
  color: var(--color-midSub);
  font-weight: 400;
  font-size: 12px;
`;

const DetailBtn = styled.div`
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-midSub);
  .icon {
    margin-left: 12px;
    color: var(--color-gray);
    :hover {
      color: var(--color-darkGray);
    }
  }
`;
