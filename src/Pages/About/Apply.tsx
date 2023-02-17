import React from "react";
import { Layout } from "../../Global/Layout";
import { SurveyHeader } from "../../Global/SurveyHeader";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

export const Apply = () => {
  return (
    <Layout>
      <SurveyHeader undoPage={"/about"} title={"내 환급 신청 내역"} />
      <ListCtn>
        <ListBox className="top">
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </ListBox>
        <ListBox>
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </ListBox>
        <ListBox>
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </ListBox>
        <ListBox>
          <div>
            <ListType>경정청구</ListType>
            <ListTitle>회사이름(법인)</ListTitle>
            <ListType className="date">신청일 | 2022-02-22</ListType>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </ListBox>
      </ListCtn>
    </Layout>
  );
};

const ListCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  width: 303px;
  border: 1px solid var(--color-lightSub);
  border-radius: 15px;
  margin-top: 10px;
`;

const ListType = styled.div`
  font-size: 14px;
  color: var(--color-midSub);
  &.date {
    font-weight: 500;
    font-size: 12px;
    color: black;
  }
`;

const ListTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 2px 0;
`;
