import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const Layout = ({ children }: { children: any }) => {
  return (
    <FlexBox>
      {" "}
      <Wrap isMobile={isMobile}>{children}</Wrap>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

const Wrap = styled.div<{ isMobile: any }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  /* width: ${({ isMobile }) => (isMobile ? "100%" : "30%")}; */
  /* min-width: ${({ isMobile }) => (isMobile ? null : "450px")}; */
  height: ${({ isMobile }) => (isMobile ? "100%" : "100%")};
`;
