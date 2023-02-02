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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrap = styled.div<{ isMobile: any }>`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ isMobile }) => (isMobile ? "100%" : "30%")};
  /* min-width: 450px; */
  height: ${({ isMobile }) => (isMobile ? "100%" : "100%")};
`;
