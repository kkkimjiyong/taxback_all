import React from "react";
import styled from "styled-components";
import { boolean } from "yup";

export const SelectModal = ({
  selectModal,
  setSelectModal,
}: {
  selectModal: boolean;
  setSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BackGroundModal
      onClick={() => {
        setSelectModal(false);
      }}
      selectModal={selectModal}
    >
      <Wrap onClick={(e) => e.stopPropagation()} selectModal={selectModal}>
        <CloseBtn>X</CloseBtn>
        <Title>질문 유형을 선택해주세요.</Title>
        <ListBox>사업자 환급 (법인세)</ListBox>
        <ListBox>양도세</ListBox>
        <ListBox>인증 및 연동</ListBox>
      </Wrap>
    </BackGroundModal>
  );
};

const BackGroundModal = styled.div<{ selectModal: boolean }>`
  height: ${({ selectModal }) => (selectModal ? "100%" : " 0%")};
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrap = styled.div<{ selectModal: boolean }>`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  background-color: white;
  width: 375px;
  height: ${({ selectModal }) => (selectModal ? "264px" : "0")};
  transition: all 400ms ease-in-out;
  border-radius: 14px 14px 0px 0px;
  box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.24);
`;

const CloseBtn = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 19px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: var(--color-thickSub);
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 303px;
  height: 18px;
  :hover {
    cursor: pointer;
    background-color: var(--color-inputBox);
  }
  border-radius: 8px;
`;
