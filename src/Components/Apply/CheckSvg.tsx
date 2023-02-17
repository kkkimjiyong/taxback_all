import React, { useState } from "react";
import styled from "styled-components";
import { boolean } from "yup";

export const CurrentCheck = ({ current }: { current: boolean }) => {
  return (
    <Wrap>
      {current && (
        <>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="23" r="23" fill="#D3D3FE" />{" "}
          </svg>
          <Check
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.883789 6.92426L8.8699 14.1118L22.1801 1.33398"
              stroke="black"
              stroke-width="2"
            />
          </Check>
        </>
      )}
      {!current && (
        <>
          {" "}
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.825" cy="14.5742" r="14.375" fill="#D9D9D9" />
          </svg>
          <Check
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.685791 4.00825L5.07815 7.96137L12.3988 0.933594"
              stroke="white"
              stroke-width="2"
            />
          </Check>
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Check = styled.svg`
  position: absolute;
`;
