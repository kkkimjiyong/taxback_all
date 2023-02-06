import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
export const ProgressBar = ({
  process,
  totalProcess,
}: {
  process: number;
  totalProcess: number;
}) => {
  return (
    <Wrap isMobile={isMobile}>
      <CurrentTxt>
        {process}/{totalProcess}
      </CurrentTxt>
      <BackgroundBar>
        <CurrentBar style={{ width: `${(process / totalProcess) * 100}%` }} />
      </BackgroundBar>
    </Wrap>
  );
};

const Wrap = styled.div<{ isMobile: any }>`
  position: absolute;
  /* bottom: ${({ isMobile }) => (isMobile ? "12%" : "0")}; */
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 100%;
  background-color: var(--color-lightSub);
`;

const CurrentTxt = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: white;
  margin-right: 5%;
`;

const BackgroundBar = styled.div`
  background-color: white;
  width: 70%;
  height: 10px;
  border-radius: 10px;
`;

const CurrentBar = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: var(--color-midSub);
`;
