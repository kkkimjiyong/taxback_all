import React from "react";
import styled from "styled-components";
import { Layout } from "../Global/Layout";

export const CarouselPrac = () => {
  return (
    <Layout>
      <SlideCtn>
        <SlideContent className="first">안녕하세요</SlideContent>
        <SlideContent>안녕하세요1</SlideContent>
        <SlideContent>안녕하세요2</SlideContent>
      </SlideCtn>
    </Layout>
  );
};

const SlideCtn = styled.div`
  width: 350px;
  height: 300px;
  background-color: aliceblue;
  margin: auto 0;
  display: flex;
  overflow: hidden;
`;

const SlideContent = styled.div`
  width: 350px;
  height: 150px;
  background-color: antiquewhite;
  flex: none;
  &.first {
    margin-left: -100%;
  }
`;
