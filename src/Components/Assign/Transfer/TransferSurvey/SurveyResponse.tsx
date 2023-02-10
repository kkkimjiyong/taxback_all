import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import styled from "styled-components";
import { boolean } from "yup";

type Tresponses = { question: string; response: string };

type Tprops = {
  response: { main: string; sub?: string };
  clicked: any[];
  setClicked: React.Dispatch<React.SetStateAction<any[]>>;
  index: number;
  setCheckClick: React.Dispatch<React.SetStateAction<boolean>>;
  responseLength: number;
  checkClick: boolean;
  process: number;
};

export const SurveyResponse = ({
  response,
  clicked,
  setClicked,
  setCheckClick,
  process,
}: Tprops) => {
  //응답체크햇는 지, 안했는 지 판별함수

  const responseClickHandler = () => {
    if (process === 4) {
      if (!clicked.includes(response.main)) {
        setClicked((prev) => prev.concat(response.main));
      } else {
        setClicked((prev) => prev.filter((cur) => cur !== response.main));
      }
    } else {
      if (clicked.length === 1) {
        setClicked([response.main]);
      } else {
        setClicked((prev) => prev.concat(response.main));
      }
    }
    console.log(clicked);
    setCheckClick(true);
  };
  return (
    <Wrap
      clicked={clicked.includes(response.main)}
      onClick={responseClickHandler}
    >
      <div>{response.main}</div>
      {response.sub && <SubTxt>{response.sub}</SubTxt>}
    </Wrap>
  );
};

const Wrap = styled.div<{ clicked: boolean }>`
  padding: 18px 20px;
  margin-top: 10px;
  border: 1.5px solid var(--color-main);
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${({ clicked }) => (clicked ? "700" : "400")};
  border: ${({ clicked }) =>
    clicked ? "2px  solid var(--color-midSub)" : "1px solid #BFB9D9 "};
  :hover {
    cursor: pointer;
  }
`;

const SubTxt = styled.div`
  margin-top: 3px;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-midSub);
`;
