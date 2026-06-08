const questions = [
  {
    id: "q01",
    text: "월요일 아침, 전자문서함에 안 읽은 문서가 쌓여 있다. 당신의 첫 반응은?",
    answers: [
      { text: "일단 마감 임박, 협조 요청, 단순 알림으로 분류한다", scores: { PLAN: 2 } },
      { text: "제목만 봐도 찝찝한 문서는 먼저 열어 근거를 확인한다", scores: { RULE: 1, DATA: 1 } },
      { text: "관련 부서나 전임자 자료부터 찾아 흐름을 파악한다", scores: { DATA: 1, PLAN: 1 } },
      { text: "오늘 안에 시민 응대에 영향 갈 만한 건 없는지 먼저 본다", scores: { PEOPLE: 1, CARE: 1 } }
    ]
  },
  {
    id: "q02",
    text: "갑자기 “이거 내일 오전까지 자료 좀”이라는 요청이 왔다.",
    answers: [
      { text: "필요한 목차부터 잡고 빈칸을 채워 넣는다", scores: { PLAN: 2 } },
      { text: "기존 제출자료와 숫자가 안 맞을까 봐 먼저 대조한다", scores: { RULE: 1, DATA: 1 } },
      { text: "왜 필요한 자료인지 물어보고 포인트를 맞춘다", scores: { PEOPLE: 1, PLAN: 1 } },
      { text: "관련 현황을 직접 확인해야 마음이 놓인다", scores: { FIELD: 2 } }
    ]
  },
  {
    id: "q03",
    text: "민원인이 “전에 들은 말이랑 다르다”고 한다.",
    answers: [
      { text: "접수 경위와 이전 답변을 먼저 확인한다", scores: { DATA: 1, RULE: 1 } },
      { text: "관련 규정과 처리 기준을 다시 확인한다", scores: { RULE: 2 } },
      { text: "일단 왜 그렇게 안내받았는지 끝까지 듣는다", scores: { PEOPLE: 2 } },
      { text: "말로 설명하기보다 실제 상황을 확인해야겠다고 생각한다", scores: { FIELD: 2 } }
    ]
  },
  {
    id: "q04",
    text: "주간업무 보고를 써야 한다. 당신이 제일 신경 쓰는 부분은?",
    answers: [
      { text: "한 줄만 봐도 추진상황이 보이게 쓰기", scores: { PLAN: 2 } },
      { text: "수치, 일정, 예산액이 틀리지 않게 쓰기", scores: { DATA: 1, RULE: 1 } },
      { text: "윗분이 물어볼 만한 쟁점을 미리 넣기", scores: { PLAN: 1, RULE: 1 } },
      { text: "실제 현장에서 막힌 부분을 숨기지 않고 쓰기", scores: { FIELD: 1, PEOPLE: 1 } }
    ]
  },
  {
    id: "q05",
    text: "행정사무감사 자료를 준비한다면 가장 긴장되는 건?",
    answers: [
      { text: "“이 사업 왜 했어요?”라는 질문", scores: { PLAN: 2 } },
      { text: "“근거가 뭐예요?”라는 질문", scores: { RULE: 2 } },
      { text: "“효과가 있었나요?”라는 질문", scores: { DATA: 1, GROWTH: 1 } },
      { text: "“민원은 없었나요?”라는 질문", scores: { PEOPLE: 1, CARE: 1 } }
    ]
  },
  {
    id: "q06",
    text: "갑자기 계장님이 “이 사업 개선방안 한번 생각해봐”라고 한다.",
    answers: [
      { text: "다른 지자체 사례부터 찾아본다", scores: { DATA: 1, PLAN: 1 } },
      { text: "지금까지 민원이나 불편사항을 모아본다", scores: { PEOPLE: 1, DATA: 1 } },
      { text: "예산, 인력, 법적 가능성부터 따져본다", scores: { RULE: 1, PLAN: 1 } },
      { text: "시민들이 보기엔 뭐가 달라지는지부터 생각한다", scores: { PEOPLE: 1, CULTURE: 1 } }
    ]
  },
  {
    id: "q07",
    text: "보조금 정산 서류를 검토하는 상황. 당신에게 제일 거슬리는 것은?",
    answers: [
      { text: "증빙은 있는데 사업 목적과 살짝 안 맞는 지출", scores: { RULE: 2 } },
      { text: "금액 합계가 1원이라도 안 맞는 서류", scores: { DATA: 2 } },
      { text: "사진은 많은데 실제 성과가 잘 안 보이는 결과보고", scores: { PLAN: 1, GROWTH: 1 } },
      { text: "참여자 입장에서 이 사업이 도움이 됐는지 알 수 없는 보고서", scores: { PEOPLE: 1, CARE: 1 } }
    ]
  },
  {
    id: "q08",
    text: "현장점검을 나갔는데, 서류상 문제없던 곳이 실제로는 애매하다.",
    answers: [
      { text: "현장 사진과 확인 내용을 꼼꼼히 남긴다", scores: { FIELD: 1, DATA: 1 } },
      { text: "관련 기준을 다시 보고 판단 근거를 확보한다", scores: { RULE: 2 } },
      { text: "담당자와 이용자 이야기를 모두 들어본다", scores: { PEOPLE: 1, FIELD: 1 } },
      { text: "다음부터 이런 일이 안 생기게 점검표를 바꾸고 싶다", scores: { PLAN: 1, DATA: 1 } }
    ]
  },
  {
    id: "q09",
    text: "신규 사업 아이디어 회의에서 당신이 낸 의견에 가깝다면?",
    answers: [
      { text: "“이거 하려면 먼저 조례나 지침 검토가 필요할 것 같습니다.”", scores: { RULE: 2 } },
      { text: "“대상자가 실제로 신청하기 쉬운 구조여야 할 것 같습니다.”", scores: { CARE: 1, PEOPLE: 1 } },
      { text: "“이름이나 홍보 방식이 좀 더 와닿아야 할 것 같습니다.”", scores: { CULTURE: 2 } },
      { text: "“시범사업으로 작게 해보고 데이터 보고 확대하면 어떨까요?”", scores: { DATA: 1, PLAN: 1 } }
    ]
  },
  {
    id: "q10",
    text: "전화가 계속 울리는 날, 당신이 제일 먼저 무너지는 포인트는?",
    answers: [
      { text: "처리 흐름이 꼬여서 누가 뭘 했는지 모를 때", scores: { PLAN: 1, DATA: 1 } },
      { text: "같은 설명을 계속 반복해야 할 때", scores: { DATA: 1, PEOPLE: -1 } },
      { text: "규정상 안 되는데 감정적으로 설득해야 할 때", scores: { RULE: 1, PEOPLE: 1 } },
      { text: "현장은 난리인데 사무실에서는 자료만 달라고 할 때", scores: { FIELD: 2 } }
    ]
  },
  {
    id: "q11",
    text: "당신이 은근히 잘하는 업무는?",
    answers: [
      { text: "회의 끝나고 “그래서 누가 뭘 언제까지?” 정리하기", scores: { PLAN: 2 } },
      { text: "애매한 표현을 정확한 문장으로 고치기", scores: { RULE: 2 } },
      { text: "민원인이 진짜 원하는 게 뭔지 알아차리기", scores: { PEOPLE: 2 } },
      { text: "복잡한 내용을 보기 좋게 설명자료로 만들기", scores: { CULTURE: 1, DATA: 1 } }
    ]
  },
  {
    id: "q12",
    text: "신규 발령자가 당신에게 “이 부서에서 제일 중요한 게 뭐예요?”라고 묻는다면?",
    answers: [
      { text: "“기한 놓치면 끝이야. 캘린더부터 정리해.”", scores: { PLAN: 2 } },
      { text: "“근거 남겨. 구두로 끝내지 마.”", scores: { RULE: 2 } },
      { text: "“민원인 말은 끝까지 들어봐. 답은 그다음이야.”", scores: { PEOPLE: 2 } },
      { text: "“현장 한번 가보면 문서가 다르게 보여.”", scores: { FIELD: 2 } }
    ]
  },
  {
    id: "q13",
    text: "보도자료나 홍보 문구를 검토하게 됐다. 당신 눈에 먼저 들어오는 건?",
    answers: [
      { text: "이 사업의 핵심 메시지가 한눈에 보이는지", scores: { PLAN: 1, CULTURE: 1 } },
      { text: "과장되거나 오해될 표현은 없는지", scores: { RULE: 2 } },
      { text: "시민이 “그래서 나한테 뭐가 좋은데?”를 알 수 있는지", scores: { PEOPLE: 1, CARE: 1 } },
      { text: "군산만의 색깔이 드러나는지", scores: { CULTURE: 2 } }
    ]
  },
  {
    id: "q14",
    text: "여러 부서 협조가 필요한 일이 생겼다. 당신이 제일 싫은 상황은?",
    answers: [
      { text: "주관부서가 불명확한 상황", scores: { PLAN: 2 } },
      { text: "회신 기한은 있는데 자료 기준이 제각각인 상황", scores: { DATA: 1, RULE: 1 } },
      { text: "회의는 했는데 아무도 책임지고 움직이지 않는 상황", scores: { PEOPLE: 1, PLAN: 1 } },
      { text: "현장 상황을 모르는 상태로 결론부터 정해지는 상황", scores: { FIELD: 2 } }
    ]
  },
  {
    id: "q15",
    text: "퇴근 직전, 급한 일이 생겼다. 당신의 속마음에 가까운 것은?",
    answers: [
      { text: "일단 오늘 처리할 것과 내일 넘길 것을 나누자", scores: { PLAN: 2 } },
      { text: "급해도 절차는 틀리면 안 된다", scores: { RULE: 2 } },
      { text: "이거 기다리는 사람이 있으면 오늘 설명은 해줘야 한다", scores: { PEOPLE: 1, CARE: 1 } },
      { text: "책상에서 판단 안 되면 바로 확인하고 끝내자", scores: { FIELD: 2 } }
    ]
  }
];

const departments = [
  { key: "PLAN", name: "기획예산과", title: "큰 그림을 정리하는 조정형 주무관", summary: "복잡한 업무의 우선순위를 잡고, 여러 의견을 한 방향으로 정리하는 데 강점이 있습니다.", strengths: ["업무 구조화", "일정 조정", "핵심 보고"], scene: "회의가 끝난 뒤 해야 할 일과 기한을 가장 먼저 정리합니다." },
  { key: "RULE", name: "감사담당관", title: "기준과 근거를 놓치지 않는 원칙형 주무관", summary: "애매한 상황에서도 기준과 근거를 찾아 안정적인 판단을 만드는 데 강점이 있습니다.", strengths: ["근거 확인", "위험 예방", "정확한 문장"], scene: "공문을 보내기 전 근거 조항과 표현을 한 번 더 확인합니다." },
  { key: "PEOPLE", name: "열린민원과", title: "말 속의 진짜 요청을 찾는 소통형 주무관", summary: "서로 다른 입장을 차분히 듣고, 필요한 설명과 협업 지점을 찾는 데 강점이 있습니다.", strengths: ["민원 소통", "의견 조율", "협업 연결"], scene: "긴 통화가 끝난 뒤에도 상대가 궁금했던 핵심을 정확히 남깁니다." },
  { key: "DATA", name: "정보통신과", title: "흐트러진 자료를 연결하는 분석형 주무관", summary: "자료의 차이와 흐름을 빠르게 발견하고, 확인 가능한 정보로 업무를 정리하는 데 강점이 있습니다.", strengths: ["자료 대조", "시스템 활용", "수치 점검"], scene: "제출 전 과거 자료와 현재 숫자가 맞는지 자연스럽게 대조합니다." },
  { key: "FIELD", name: "안전총괄과", title: "현장에서 답을 확인하는 실행형 주무관", summary: "문서만으로 판단하기 어려운 상황에서 직접 확인하고 실행 가능한 답을 찾는 데 강점이 있습니다.", strengths: ["현장 판단", "시설 점검", "신속 대응"], scene: "서류상 문제가 없어도 현장을 한 번 더 확인해야 마음이 놓입니다." },
  { key: "GROWTH", name: "일자리경제과", title: "효과와 가능성을 살피는 성장형 주무관", summary: "사업의 실제 효과와 확장 가능성을 살피며 미래의 기회를 찾는 데 강점이 있습니다.", strengths: ["성과 관점", "사업 발굴", "확장 가능성"], scene: "새 사업을 들으면 시민과 지역에 어떤 변화가 생길지 먼저 떠올립니다." },
  { key: "CULTURE", name: "문화예술과", title: "정책을 시민의 언어로 바꾸는 콘텐츠형 주무관", summary: "행정의 핵심 메시지를 시민에게 와닿는 표현과 경험으로 전달하는 데 강점이 있습니다.", strengths: ["메시지 구성", "홍보 감각", "콘텐츠 기획"], scene: "좋은 사업도 이름과 설명이 어려우면 다시 다듬고 싶어집니다." },
  { key: "CARE", name: "복지정책과", title: "정책이 닿는 사람을 먼저 보는 돌봄형 주무관", summary: "제도와 사업이 실제 이용자에게 어떤 도움이 되는지 세심하게 살피는 데 강점이 있습니다.", strengths: ["이용자 관점", "세심한 지원", "복지 연계"], scene: "결과보고를 읽을 때 참여자에게 실제 도움이 됐는지 궁금해집니다." }
];

const TEST_DATA = { questions, departments };
