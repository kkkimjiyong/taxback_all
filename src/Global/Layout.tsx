import React from "react";
import styled, { keyframes } from "styled-components";
import { isMobile } from "react-device-detect";

export const Layout = ({ children }: { children: any }) => {
  let vh = window.innerHeight * 0.01; // [1]
  let height = window.innerHeight; // [1]

  return (
    <FlexBox className="layout" vh={vh}>
      {" "}
      <Wrap className="layout" isMobile={isMobile} height={height} vh={vh}>
        {children}
      </Wrap>
    </FlexBox>
  );
};

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

const FlexBox = styled.div<{ vh: any }>`
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
`;

const Wrap = styled.div<{ isMobile: any; vh: any; height: any }>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  height: "100%";
`;
