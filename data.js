const TEST_DATA = {
  questions: [
    {
      category: "전자문서함",
      question: "출근하자마자 전자문서함에 읽지 않은 공문이 17건이다. 나의 첫 행동은?",
      answers: [
        { text: "제목과 처리기한부터 훑어보고 우선순위를 표로 정리한다.", scores: { structured: 2, data: 1 } },
        { text: "일단 가장 급해 보이는 문서부터 열고 바로 움직인다.", scores: { agile: 2, field: 1 } }
      ]
    },
    {
      category: "민원전화",
      question: "한창 집중 중인데 민원전화가 길어지기 시작했다. 나는?",
      answers: [
        { text: "충분히 듣고, 상대가 진짜 원하는 게 무엇인지 찾아 설명한다.", scores: { people: 2, agile: 1 } },
        { text: "핵심 쟁점을 정리하고 관련 규정과 처리 절차를 정확히 안내한다.", scores: { data: 2, structured: 1 } }
      ]
    },
    {
      category: "자료요구",
      question: "오후 4시 40분, '금일 중 회신' 행감자료 요구가 도착했다!",
      answers: [
        { text: "기존 자료를 빠르게 조합해 일단 회신 가능한 형태부터 만든다.", scores: { agile: 2, data: 1 } },
        { text: "요구 항목과 출처를 체크하고 빈틈없는 자료를 만든다.", scores: { structured: 2, data: 1 } }
      ]
    },
    {
      category: "현장점검",
      question: "현장점검 일정이 잡혔을 때 솔직한 내 마음은?",
      answers: [
        { text: "직접 가서 봐야 답이 나오지! 사람도 만나고 현장도 보고 싶다.", scores: { field: 2, people: 1 } },
        { text: "체크리스트와 관련 자료부터 완벽히 준비하고 싶다.", scores: { desk: 2, structured: 1 } }
      ]
    },
    {
      category: "주간업무",
      question: "주간업무 보고를 작성할 때 나와 더 가까운 방식은?",
      answers: [
        { text: "지난 보고서 양식을 기준으로 빠짐없이 차근차근 쓴다.", scores: { structured: 2, desk: 1 } },
        { text: "이번 주 핵심 성과가 한눈에 보이도록 새롭게 재구성한다.", scores: { agile: 2, people: 1 } }
      ]
    },
    {
      category: "국민신문고",
      question: "여러 부서가 얽힌 국민신문고 민원이 배정됐다. 나는?",
      answers: [
        { text: "관련 부서 담당자에게 먼저 연락해 해결 실마리를 함께 찾는다.", scores: { people: 2, agile: 1 } },
        { text: "법령과 과거 답변 사례를 먼저 찾아 논리를 세운다.", scores: { data: 2, desk: 1 } }
      ]
    },
    {
      category: "공문 작성",
      question: "계장님이 '이 내용으로 공문 하나 써봐요'라고 하셨다.",
      answers: [
        { text: "목적·근거·내용·협조사항 순서로 목차부터 잡는다.", scores: { structured: 2, data: 1 } },
        { text: "수신자가 무엇을 해야 하는지부터 명확하게 쓴다.", scores: { people: 2, agile: 1 } }
      ]
    },
    {
      category: "보조금 정산",
      question: "영수증과 증빙자료가 가득한 보조금 정산철을 받았다.",
      answers: [
        { text: "숫자와 증빙이 딱 맞아떨어질 때 은근한 쾌감을 느낀다.", scores: { data: 2, structured: 1 } },
        { text: "서류만 보기보다 사업 현황을 직접 듣고 맥락부터 파악한다.", scores: { people: 2, field: 1 } }
      ]
    },
    {
      category: "돌발상황",
      question: "계획에 없던 긴급 현안이 갑자기 생겼다. 나는?",
      answers: [
        { text: "상황은 바뀌는 법. 우선 가능한 것부터 처리하며 대응한다.", scores: { agile: 2, field: 1 } },
        { text: "잠깐 멈추고 해야 할 일, 역할, 마감부터 정리한다.", scores: { structured: 2, desk: 1 } }
      ]
    },
    {
      category: "협업",
      question: "여러 사람과 함께 신규 사업을 기획하게 됐다.",
      answers: [
        { text: "회의와 인터뷰를 통해 다양한 의견을 모으는 과정이 즐겁다.", scores: { people: 2, field: 1 } },
        { text: "현황 데이터와 유사 사례를 분석해 실행 가능한 안을 만든다.", scores: { data: 2, desk: 1 } }
      ]
    },
    {
      category: "결재선",
      question: "결재가 반려되어 수정 의견이 달렸다. 나의 반응은?",
      answers: [
        { text: "의견을 항목별로 반영하고 같은 실수가 없도록 기록해 둔다.", scores: { structured: 2, data: 1 } },
        { text: "바로 찾아가 의도를 여쭤보고 더 나은 방향을 함께 정한다.", scores: { people: 2, agile: 1 } }
      ]
    },
    {
      category: "업무 취향",
      question: "바쁜 하루를 보내고도 더 뿌듯함이 남는 순간은?",
      answers: [
        { text: "복잡했던 서류와 데이터가 깔끔하게 정리됐을 때.", scores: { desk: 2, data: 1 } },
        { text: "현장에서 만난 시민에게 '덕분에 해결됐어요'를 들었을 때.", scores: { field: 2, people: 1 } }
      ]
    }
  ],
  departments: [
    {
      name: "기획예산과",
      code: "GS-PLAN",
      icon: "기획",
      profile: { structured: 5, desk: 5, data: 5, people: 2, agile: 2, field: 1 },
      title: "큰 그림을 빈틈없이 그리는 전략 설계자",
      summary: "흩어진 자료에서 핵심을 찾고, 계획과 숫자로 시정의 방향을 또렷하게 만드는 타입입니다.",
      strengths: ["논리적인 보고자료", "일정·성과 관리", "숫자로 보는 큰 그림"],
      scene: "자료요구가 몰려와도 항목별 폴더와 표 하나로 평온을 되찾습니다.",
      partner: "문화예술과"
    },
    {
      name: "복지정책과",
      code: "GS-WELFARE",
      icon: "복지",
      profile: { structured: 3, desk: 3, data: 2, people: 5, agile: 3, field: 4 },
      title: "사람의 사정을 먼저 읽는 따뜻한 조율자",
      summary: "민원 속 숨은 필요를 알아채고, 여러 기관과 사람을 연결해 실질적인 해결책을 찾는 타입입니다.",
      strengths: ["공감형 민원 응대", "기관 간 협업", "세심한 대상자 지원"],
      scene: "긴 민원전화에서도 핵심과 마음을 모두 놓치지 않는 편입니다.",
      partner: "아동정책과"
    },
    {
      name: "안전총괄과",
      code: "GS-SAFETY",
      icon: "안전",
      profile: { structured: 5, desk: 2, data: 4, people: 2, agile: 4, field: 5 },
      title: "돌발상황에도 침착한 현장 지휘관",
      summary: "체크리스트는 꼼꼼하게, 대응은 누구보다 빠르게. 현장에서 답을 찾는 실행형 타입입니다.",
      strengths: ["긴급상황 대응", "현장 체크 능력", "빈틈없는 사전 대비"],
      scene: "현장점검 일정이 잡히면 체크리스트와 운동화를 동시에 챙깁니다.",
      partner: "건설과"
    },
    {
      name: "문화예술과",
      code: "GS-CULTURE",
      icon: "문화",
      profile: { structured: 2, desk: 3, data: 2, people: 5, agile: 5, field: 4 },
      title: "아이디어를 현실로 만드는 유연한 기획자",
      summary: "새로운 아이디어를 사람들과 나누고, 예상 밖의 변수까지 즐기며 결과를 만들어내는 타입입니다.",
      strengths: ["톡톡 튀는 사업 기획", "관계자 소통", "유연한 현장 대응"],
      scene: "행사 하루 전 변수가 생겨도 '오히려 좋아'를 외치며 대안을 찾습니다.",
      partner: "관광진흥과"
    },
    {
      name: "도시계획과",
      code: "GS-URBAN",
      icon: "도시",
      profile: { structured: 5, desk: 4, data: 5, people: 2, agile: 2, field: 3 },
      title: "근거와 기준으로 미래를 그리는 분석가",
      summary: "복잡한 기준과 자료를 차분하게 해석하고, 장기적인 관점으로 도시의 내일을 설계하는 타입입니다.",
      strengths: ["규정·도면 해석", "장기 계획 수립", "근거 중심 판단"],
      scene: "공문 한 줄에도 근거 조항을 정확히 달아야 마음이 편합니다.",
      partner: "교통행정과"
    },
    {
      name: "일자리경제과",
      code: "GS-ECONOMY",
      icon: "경제",
      profile: { structured: 3, desk: 2, data: 3, people: 5, agile: 5, field: 4 },
      title: "사람과 기회를 잇는 민첩한 해결사",
      summary: "현장의 목소리를 빠르게 포착하고, 다양한 관계자와 협업해 실용적인 성과를 만드는 타입입니다.",
      strengths: ["현장 소통", "빠른 실행력", "사업 관계자 조율"],
      scene: "전화, 현장, 공문 사이를 오가면서도 결국 필요한 답을 찾아냅니다.",
      partner: "소상공인지원과"
    },
    {
      name: "회계과",
      code: "GS-ACCOUNT",
      icon: "회계",
      profile: { structured: 5, desk: 5, data: 5, people: 1, agile: 1, field: 1 },
      title: "숫자와 증빙을 지키는 정확성의 수호자",
      summary: "작은 오차도 놓치지 않는 집중력으로 행정의 신뢰를 단단하게 받쳐주는 타입입니다.",
      strengths: ["정확한 정산", "꼼꼼한 증빙 확인", "체계적인 문서 관리"],
      scene: "보조금 정산 숫자가 한 번에 맞으면 그날의 작은 행복을 느낍니다.",
      partner: "세무과"
    },
    {
      name: "관광진흥과",
      code: "GS-TOUR",
      icon: "관광",
      profile: { structured: 2, desk: 2, data: 2, people: 5, agile: 5, field: 5 },
      title: "군산의 매력을 발견하는 현장형 스토리텔러",
      summary: "사람을 만나고 현장을 누비며 군산의 새로운 매력을 찾아 알리는 에너지 넘치는 타입입니다.",
      strengths: ["콘텐츠 아이디어", "현장 실행력", "대외 소통"],
      scene: "현장 출장에서 새로운 사업 아이디어 세 개를 들고 돌아옵니다.",
      partner: "문화예술과"
    }
  ]
};
