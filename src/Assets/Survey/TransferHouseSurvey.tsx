type TsurveyComponent = {
  type: string;
  question: string;
  questionSub?: string;
  responses: { main: string; sub?: string }[];
};

//양도세 질문리스트
export const TransferHouse_SurveyList: TsurveyComponent[] = [
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

  //2번 공통질문
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
  //3번 공통질문
  {
    type: "common",
    question: "양도한 주택에서 거주한 사실이 있습니까?",
    responses: [
      {
        main: "예",
      },
      {
        main: "아니요",
      },
    ],
  },
  //4번 공통질문
  {
    type: "house",
    question: "보유 주택 중 다음에 해당하는 사항을 모두 체크해주세요.",
    responses: [
      { main: "2021년 1월 1일 이후 주택을 양도한 경우" },
      { main: "상속받은 주택" },
      {
        main: "주택임대사업자 등록 주택",
        sub: "- 세무서와 시군구청 모두 등록된 주택",
      },
      { main: "읍, 면지역 소재 주택" },
      { main: "조합원 입주권 주택" },
      { main: "오피스텔" },
      { main: "분양으로 취득한 주택" },
      { main: "부모세대와 자녀세대의 합가로 인하여 증가한 주택" },
      { main: "혼인으로 인하여 증가한 주택" },
      { main: "미분양 상태의 주택을 취득한 경우" },
      { main: "양도한 주택의 양도일 기준 3년 이내에 취득한 주택" },
      { main: "상가주택" },
      { main: "다가구주택" },
      { main: "등본상의 세대원과 실제 동거하는 세대원이 다른 경우" },
      { main: "형제 또는 남매, 자매로만 구성된 세대" },
    ],
  },
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
