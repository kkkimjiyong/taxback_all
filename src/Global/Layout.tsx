import React from "react";
import styled, { keyframes } from "styled-components";
import { isMobile } from "react-device-detect";

export const Layout = ({ children }: { children: any }) => {
  let vh = window.innerHeight * 0.01; // [1]
  let height = window.innerHeight; // [1]

  return (
    <FlexBox vh={vh}>
      {" "}
      <Wrap isMobile={isMobile} height={height} vh={vh}>
        {children}
      </Wrap>
    </FlexBox>
  );
};

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3%);
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
  height: ${({ vh }) => vh && "100vh"};
`;

const Wrap = styled.div<{ isMobile: any; vh: any; height: any }>`
  animation: ${smoothAppear} 1s;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  /* height: ${({ vh }) => vh && "100vh"}; */
  height: ${({ height }) => height && `${height}px`};
  /* height: 732px; */
  /* width: ${({ isMobile }) => (isMobile ? "100%" : "30%")}; */
  /* min-width: ${({ isMobile }) => (isMobile ? null : "450px")}; */
  /* height: ${({ isMobile }) => (isMobile ? "100%" : "100%")}; */
`;
