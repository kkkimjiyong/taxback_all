import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../../Global/Layout";
import { IoIosArrowDown } from "react-icons/io";
import { SelectModal } from "../../../Components/Counsel/SelectModal";
import { IoIosArrowForward } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

export const CounselRequest = () => {
  const [selectModal, setSelectModal] = useState<boolean>(false);

  return (
    <Layout>
      <Wrap>
        <CloseBtn>
          <GrFormClose size={30} />
        </CloseBtn>
        <HeadTitle>1:1 문의하기</HeadTitle>
        <SelectBox onClick={() => setSelectModal(true)}>
          질문 유형을 선택해주세요
          <IoIosArrowDown className="icon" size={20} />
        </SelectBox>
        <TitleInput placeholder="제목을 입력해주세요" />
        <NoticeTxtBox>
          <CloseBtn className="notice">
            <GrFormClose size={20} />
          </CloseBtn>
          <div>글 작성 시 주의해 주세요!</div>
          <NoticeContent>
            상담사에게 불쾌감을 주는 성적인 언행과 비하 발언이나 욕설, 폭언,
            협박, 모욕 등의 언어폭력 등은 통보 없이 삭제돼요
          </NoticeContent>
          <NoticeOperate>
            <div>프라이어 운영정책 보기</div>
            <IoIosArrowForward />
          </NoticeOperate>
        </NoticeTxtBox>
        <ContentInput placeholder="궁금한 내용을 적어주세요" />
        <FileCtn>
          <FileAddBtn>
            <svg
              onClick={() => alert("개발중입니다.")}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="10.5" x2="21" y2="10.5" stroke="black" />
              <line x1="10.5" y1="21" x2="10.5" stroke="black" />
            </svg>
          </FileAddBtn>
          파일첨부 (0 / 10)
        </FileCtn>
      </Wrap>
      <DoneBtn>완료</DoneBtn>
      <SelectModal selectModal={selectModal} setSelectModal={setSelectModal} />
    </Layout>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: 100%;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;
  &.notice {
    position: absolute;
    top: -40px;
    left: -10px;
  }
`;

const HeadTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 22px;
  color: var(--color-thickSub);
  margin-bottom: 30px;
`;

const SelectBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border: 1px solid #d2d2fd;
  border-radius: 10px;
  .icon {
    color: var(--color-midSub);
  }
`;

const TitleInput = styled.input`
  border: none;
  border-radius: 10px;
  margin-top: 7px;
  padding: 14px 20px;
  width: 90%;
  font-weight: 500;
  font-size: 14px;
  color: black;
  background-color: var(--color-inputBox);
  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    color: black;
  }
`;

const NoticeTxtBox = styled.div`
  width: 90%;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 303px;
  height: 89px;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--color-contentBox);
  font-weight: 700;
  font-size: 13px;
`;

const NoticeContent = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin: 5px 0px 10px 0;
`;

const NoticeOperate = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ContentInput = styled.textarea`
  margin-top: 20px;
  width: 90%;
  padding: 20px;
  width: 303px;
  height: 141px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
`;

const FileCtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 343px;
  font-weight: 500;
  font-size: 14px;
`;
const FileAddBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 4px;
  width: 43px;
  height: 43px;
  background-color: #e8e8eb;
  :hover {
    cursor: pointer;
  }
`;

const DoneBtn = styled.div`
  margin-top: 38px;
  margin-bottom: 50px;
  width: 138px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--color-main);
`;
