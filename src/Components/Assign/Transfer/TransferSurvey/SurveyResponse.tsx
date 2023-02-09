import React from "react";
import styled from "styled-components";

type Tresponses = { question: string; response: string };

type Tprops = {
  response: { main: string; sub?: string };
  clicked: number;
  setClicked: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  setCheckClick: React.Dispatch<React.SetStateAction<boolean>>;
  responses: Tresponses[];
};

export const SurveyResponse = ({
  response,
  clicked,
  setClicked,
  index,
  setCheckClick,
  responses,
}: Tprops) => {
  //응답체크햇는 지, 안했는 지 판별함수
  const responseClickHandler = () => {
    setClicked(index);
    setCheckClick(true);
    console.log(responses);
    console.log(index);
  };
  return (
    <Wrap clicked={clicked} index={index} onClick={responseClickHandler}>
      <div>{response.main}</div>
      {response.sub && <SubTxt>{response.sub}</SubTxt>}
    </Wrap>
  );
};

const Wrap = styled.div<{ clicked: number; index: number }>`
  padding: 18px 20px;
  margin-top: 10px;
  border: 1.5px solid var(--color-main);
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${({ clicked, index }) => (clicked === index ? "700" : "400")};
  border: ${({ clicked, index }) =>
    clicked === index
      ? "2px  solid var(--color-midSub)"
      : "1px solid #BFB9D9 "};
  :hover {
    cursor: pointer;
  }
`;

const SubTxt = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-midSub);
`;
