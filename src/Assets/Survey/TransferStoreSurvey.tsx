type TsurveyComponent = {
  type: string;
  question: string;
  questionSub?: string;
  responses: { main: string; sub?: string }[];
};

//양도세 질문리스트
export const TransferStore_SurveyList: TsurveyComponent[] = [
  //1번 공통질문
  {
    type: "common",
    question: "양도 물건이 무엇인가요?",
    responses: [
      { main: "주택", sub: "아파트,단독주택,상가주택,분양권,입주권" },
      { main: "토지" },
      { main: "상가", sub: "상가 및 오피스텔 분양권 포함" },
    ],
  },
  //2번 주택,토지,질문
  {
    type: "common",
    question: "취득당시 실제 계약서가 있었나요?",
    responses: [{ main: "예" }, { main: "아니요" }],
  },

  //3번 공통질문
  {
    type: "common",
    question: "양도 원인이 무엇인가요?",
    responses: [
      {
        main: "일반매매",
      },
      {
        main: "공공사업에 의한 수용 및 협의양도",
        sub: "- 재건축, 재개발 조합에 양도하거나 환급금(청산금)을 지급받아 신고한 경우 포함",
      },
      { main: "기타", sub: "- 경매, 부담부증여, 교환 등" },
    ],
  },
  //4번 공통질문

  {
    type: "common",
    question: "신고주체는 누구인가요?",
    responses: [
      {
        main: "본인",
      },
      {
        main: "세무사 or 회계사",
      },
      {
        main: "공인중개사",
      },
      {
        main: "기타",
      },
    ],
  },
];
