import React from "react";
import styled from "styled-components";

export const ResultBox = ({
  response,
  question,
  index,
}: {
  response: string;
  question: string;
  index: number;
}) => {
  return (
    <Wrap>
      <QuestionBox>
        Q{index + 1}. {question}
      </QuestionBox>
      <div>A. {response}</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 13px;
  font-size: 14px;
  padding: 0 10px;
`;

const QuestionBox = styled.div`
  width: 90%;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;
