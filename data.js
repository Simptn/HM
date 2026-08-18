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
    text: "갑자기 처음 보는 분야의 문제를 내일까지 파악해 달라는 요청이 왔다. 손이 먼저 가는 곳은?",
    answers: [
      { text: "이전 문서와 처리 순서를 찾아 전체 흐름부터 그린다", scores: { PLAN: 1, RULE: 1 }, specialtyScores: { ADMIN: 2 } },
      { text: "숫자와 기록을 모아 반복되는 패턴이 있는지 살핀다", scores: { DATA: 2 }, specialtyScores: { DIGITAL: 2 } },
      { text: "지도나 배치도를 펼쳐 실제 위치와 동선을 확인한다", scores: { FIELD: 2 }, specialtyScores: { INFRA: 2 } },
      { text: "누가 가장 불편해지는지부터 듣고 영향 범위를 잡는다", scores: { PEOPLE: 1, CARE: 1 }, specialtyScores: { COMMUNITY: 1, HEALTH: 1 } }
    ]
  },
  {
    id: "q03",
    text: "일할 때 나도 모르게 자주 보이는 모습에 가장 가까운 것은?",
    answers: [
      { text: "해야 할 일을 순서대로 적어 두면 마음이 편하다", scores: { PLAN: 2 }, specialtyScores: { ADMIN: 1 } },
      { text: "작은 오류나 앞뒤가 맞지 않는 부분이 먼저 눈에 들어온다", scores: { RULE: 1, DATA: 1 }, specialtyScores: { DIGITAL: 1 } },
      { text: "사람마다 다르게 받아들이는 지점을 금방 알아차린다", scores: { PEOPLE: 2 }, specialtyScores: { COMMUNITY: 1 } },
      { text: "설명만 듣기보다 직접 보거나 만져 봐야 이해가 빠르다", scores: { FIELD: 2 }, specialtyScores: { INFRA: 1 } }
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
    text: "회의에서 낯선 전문용어가 계속 나온다. 당신이 이해하는 방식에 가까운 것은?",
    answers: [
      { text: "관련 기준과 업무 분장을 찾아 내 일과 연결해 본다", scores: { RULE: 1, PLAN: 1 }, specialtyScores: { ADMIN: 2 } },
      { text: "표나 그래프로 바꿔 수치 사이의 관계를 확인한다", scores: { DATA: 2 }, specialtyScores: { DIGITAL: 2 } },
      { text: "현장 사진이나 구조도를 보며 실제 모습을 떠올린다", scores: { FIELD: 2 }, specialtyScores: { INFRA: 2 } },
      { text: "그 변화가 사람의 생활이나 안전에 미칠 영향을 묻는다", scores: { CARE: 1, PEOPLE: 1 }, specialtyScores: { HEALTH: 1, COMMUNITY: 1 } }
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
    text: "업무 중 예상 밖의 빈 시간이 생겼다. 괜히 한번 들여다보고 싶은 것은?",
    answers: [
      { text: "자주 쓰는 서식과 처리 절차를 더 간단하게 만드는 법", scores: { PLAN: 1, RULE: 1 }, specialtyScores: { ADMIN: 2 } },
      { text: "쌓여 있는 자료를 자동으로 정리하거나 시각화하는 법", scores: { DATA: 2 }, specialtyScores: { DIGITAL: 2 } },
      { text: "도로·시설·장비가 실제로 움직이는 방식", scores: { FIELD: 2 }, specialtyScores: { INFRA: 2 } },
      { text: "지역의 먹거리·환경·산업이 앞으로 바뀔 가능성", scores: { GROWTH: 1, CULTURE: 1 }, specialtyScores: { ENVIRONMENT: 1, INDUSTRY: 1 } }
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
    text: "하루 동안 한 가지 일에만 집중할 수 있다면 가장 덜 지치는 일은?",
    answers: [
      { text: "여러 부서의 일정과 문서를 맞춰 하나의 안으로 정리하기", scores: { PLAN: 2 }, specialtyScores: { ADMIN: 2 } },
      { text: "오류가 나는 자료나 시스템의 원인을 차근차근 찾기", scores: { DATA: 2 }, specialtyScores: { DIGITAL: 2 } },
      { text: "밖을 돌며 시설 상태와 달라진 점을 직접 확인하기", scores: { FIELD: 2 }, specialtyScores: { INFRA: 1, ENVIRONMENT: 1 } },
      { text: "도움이 필요한 사람의 상황을 듣고 가능한 방법 찾기", scores: { PEOPLE: 1, CARE: 1 }, specialtyScores: { HEALTH: 1, COMMUNITY: 1 } }
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
    text: "새로운 일을 배울 때 가장 자연스러운 방식은?",
    answers: [
      { text: "전체 목적과 단계가 보이는 설명을 먼저 듣는다", scores: { PLAN: 2 }, specialtyScores: { ADMIN: 1 } },
      { text: "매뉴얼과 실제 사례를 비교하며 기준을 익힌다", scores: { RULE: 1, DATA: 1 }, specialtyScores: { DIGITAL: 1 } },
      { text: "잘하는 사람과 대화하며 맥락과 요령을 익힌다", scores: { PEOPLE: 2 }, specialtyScores: { COMMUNITY: 1 } },
      { text: "일단 직접 해 보고 시행착오를 통해 익힌다", scores: { FIELD: 2 }, specialtyScores: { INFRA: 1 } }
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
    text: "지역에 새로운 변화가 생긴다는 소식을 들었다. 무심코 가장 먼저 궁금해지는 것은?",
    answers: [
      { text: "어느 부서가 맡고 어떤 절차로 추진되는지", scores: { PLAN: 1, RULE: 1 }, specialtyScores: { ADMIN: 2 } },
      { text: "일자리와 지역 산업에 어떤 기회가 생기는지", scores: { GROWTH: 2 }, specialtyScores: { INDUSTRY: 2 } },
      { text: "주변 환경과 생활 기반시설에는 어떤 변화가 있는지", scores: { FIELD: 1, DATA: 1 }, specialtyScores: { ENVIRONMENT: 1, INFRA: 1 } },
      { text: "주민들이 실제로 체감하고 참여할 수 있는지", scores: { PEOPLE: 1, CULTURE: 1 }, specialtyScores: { COMMUNITY: 1, HEALTH: 1 } }
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
  },
  {
    id: "q16",
    text: "업무가 잘 풀렸을 때 가장 뿌듯하게 느껴지는 순간은?",
    answers: [
      { text: "복잡하던 일이 정리되어 모두가 다음 순서를 알게 됐을 때", scores: { PLAN: 2 }, specialtyScores: { ADMIN: 1 } },
      { text: "숨어 있던 원인이나 규칙을 찾아 정확히 해결했을 때", scores: { DATA: 1, RULE: 1 }, specialtyScores: { DIGITAL: 1 } },
      { text: "누군가 실제로 도움을 받았다고 말해 줄 때", scores: { PEOPLE: 1, CARE: 1 }, specialtyScores: { HEALTH: 1, COMMUNITY: 1 } },
      { text: "눈에 보이는 공간이나 현장이 전보다 나아졌을 때", scores: { FIELD: 1, GROWTH: 1 }, specialtyScores: { INFRA: 1, ENVIRONMENT: 1 } }
    ]
  }
];

const departments = [
  {
    "id": "saemangeum_policy",
    "name": "새만금정책담당관",
    "bureau": "담당관",
    "emoji": "🧭",
    "vector": {
      "PLAN": 5,
      "GROWTH": 4,
      "FIELD": 2,
      "RULE": 2,
      "CULTURE": 1
    },
    "sourceKeywords": [
      "새만금",
      "행정구역",
      "기본계획",
      "개발사업",
      "기관협의"
    ],
    "workSummary": "새만금 정책, 행정구역 대응, 개발사업 협의와 전략 조정"
  },
  {
    "id": "audit",
    "name": "감사담당관",
    "bureau": "담당관",
    "emoji": "⚖️",
    "vector": {
      "RULE": 5,
      "DATA": 3,
      "PLAN": 2,
      "FIELD": 2,
      "PEOPLE": 1
    },
    "sourceKeywords": [
      "감사",
      "감찰",
      "청렴",
      "공직윤리",
      "계약심사"
    ],
    "workSummary": "감사, 조사감찰, 청렴, 공직윤리와 계약심사"
  },
  {
    "id": "population_response",
    "name": "인구대응담당관",
    "bureau": "담당관",
    "emoji": "🌱",
    "vector": {
      "PLAN": 4,
      "CARE": 3,
      "PEOPLE": 3,
      "GROWTH": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "인구정책",
      "청년정책",
      "외국인정책",
      "민관협력",
      "통계"
    ],
    "workSummary": "인구·청년·외국인 정책 기획과 민관 협력 사업"
  },
  {
    "id": "digital_info",
    "name": "디지털정보담당관",
    "bureau": "담당관",
    "emoji": "💻",
    "vector": {
      "DATA": 5,
      "RULE": 3,
      "PLAN": 3,
      "FIELD": 1
    },
    "sourceKeywords": [
      "정보화",
      "공공데이터",
      "홈페이지",
      "정보보호",
      "정보통신"
    ],
    "workSummary": "정보화, 공공데이터, 시스템 운영, 정보보호와 통신 인프라"
  },
  {
    "id": "planning_budget",
    "name": "기획예산과",
    "bureau": "기획행정국",
    "emoji": "🗂️",
    "vector": {
      "PLAN": 5,
      "DATA": 4,
      "RULE": 3,
      "GROWTH": 2
    },
    "sourceKeywords": [
      "시정계획",
      "예산",
      "공약",
      "업무보고",
      "의회"
    ],
    "workSummary": "시정 기획, 예산, 공약, 주요업무와 의회 대응"
  },
  {
    "id": "admin_support",
    "name": "행정지원과",
    "bureau": "기획행정국",
    "emoji": "🏛️",
    "vector": {
      "PLAN": 4,
      "PEOPLE": 3,
      "RULE": 3,
      "DATA": 1
    },
    "sourceKeywords": [
      "조직운영",
      "인사",
      "서무",
      "행사",
      "직원지원"
    ],
    "workSummary": "조직 내부 운영, 인사·서무, 직원 지원과 행정 조정"
  },
  {
    "id": "public_relations",
    "name": "공보협력과",
    "bureau": "기획행정국",
    "emoji": "📣",
    "vector": {
      "CULTURE": 5,
      "PEOPLE": 3,
      "PLAN": 3,
      "DATA": 1
    },
    "sourceKeywords": [
      "언론",
      "보도자료",
      "홍보",
      "사진영상",
      "소통"
    ],
    "workSummary": "시정 홍보, 언론 대응, 보도자료와 사진·영상 콘텐츠"
  },
  {
    "id": "accounting",
    "name": "회계과",
    "bureau": "기획행정국",
    "emoji": "🧾",
    "vector": {
      "RULE": 5,
      "DATA": 4,
      "PLAN": 2
    },
    "sourceKeywords": [
      "회계",
      "계약",
      "지출",
      "결산",
      "재산"
    ],
    "workSummary": "회계, 계약, 지출, 결산과 공유재산 관리"
  },
  {
    "id": "tax",
    "name": "세무과",
    "bureau": "기획행정국",
    "emoji": "💰",
    "vector": {
      "RULE": 5,
      "DATA": 4,
      "PEOPLE": 1
    },
    "sourceKeywords": [
      "지방세",
      "세정",
      "부과",
      "세입",
      "조례"
    ],
    "workSummary": "지방세 부과, 세정 기획, 세입 관리와 세무 행정"
  },
  {
    "id": "citizen_tax_payment",
    "name": "시민납세과",
    "bureau": "기획행정국",
    "emoji": "🔎",
    "vector": {
      "RULE": 4,
      "PEOPLE": 3,
      "DATA": 3,
      "FIELD": 1
    },
    "sourceKeywords": [
      "체납",
      "징수",
      "납세상담",
      "압류",
      "세외수입"
    ],
    "workSummary": "체납 징수, 납세 상담, 압류·처분과 세입 관리"
  },
  {
    "id": "open_civil_service",
    "name": "열린민원과",
    "bureau": "기획행정국",
    "emoji": "📞",
    "vector": {
      "PEOPLE": 5,
      "RULE": 3,
      "CARE": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "민원",
      "제증명",
      "여권",
      "정부24",
      "무인민원"
    ],
    "workSummary": "민원 접수, 제증명, 여권, 정부24와 민원서비스 운영"
  },
  {
    "id": "safety_general",
    "name": "안전총괄과",
    "bureau": "안전건설국",
    "emoji": "🚨",
    "vector": {
      "FIELD": 5,
      "PLAN": 3,
      "RULE": 3,
      "PEOPLE": 2
    },
    "sourceKeywords": [
      "재난",
      "안전",
      "비상대응",
      "민방위",
      "상황관리"
    ],
    "workSummary": "재난안전, 비상대응, 안전정책과 상황 관리"
  },
  {
    "id": "urban_planning",
    "name": "도시계획과",
    "bureau": "안전건설국",
    "emoji": "🗺️",
    "vector": {
      "PLAN": 5,
      "FIELD": 4,
      "DATA": 3,
      "GROWTH": 2,
      "RULE": 2
    },
    "sourceKeywords": [
      "도시계획",
      "도시관리",
      "개발계획",
      "토지이용",
      "건설업"
    ],
    "workSummary": "도시계획, 도시관리계획, 개발계획과 공간 조정"
  },
  {
    "id": "construction",
    "name": "건설과",
    "bureau": "안전건설국",
    "emoji": "🚧",
    "vector": {
      "FIELD": 5,
      "RULE": 3,
      "PLAN": 2,
      "PEOPLE": 1
    },
    "sourceKeywords": [
      "도로",
      "공사",
      "보수",
      "제설",
      "기반시설"
    ],
    "workSummary": "도로와 기반시설 공사, 정비, 보수와 현장 대응"
  },
  {
    "id": "housing_admin",
    "name": "주택행정과",
    "bureau": "안전건설국",
    "emoji": "🏘️",
    "vector": {
      "RULE": 4,
      "PEOPLE": 3,
      "CARE": 3,
      "FIELD": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "공동주택",
      "임대주택",
      "주거복지",
      "사업승인",
      "관리"
    ],
    "workSummary": "공동주택, 임대주택, 주거복지와 주택 행정"
  },
  {
    "id": "architecture_landscape",
    "name": "건축경관과",
    "bureau": "안전건설국",
    "emoji": "🏙️",
    "vector": {
      "FIELD": 4,
      "CULTURE": 3,
      "RULE": 3,
      "PLAN": 3
    },
    "sourceKeywords": [
      "건축",
      "경관",
      "심의",
      "야간경관",
      "디자인"
    ],
    "workSummary": "건축 행정, 도시경관, 경관심의와 공간 디자인"
  },
  {
    "id": "land_info",
    "name": "토지정보과",
    "bureau": "안전건설국",
    "emoji": "📍",
    "vector": {
      "DATA": 5,
      "RULE": 4,
      "FIELD": 2,
      "PEOPLE": 1
    },
    "sourceKeywords": [
      "지적",
      "공시지가",
      "부동산",
      "토지정보",
      "측량"
    ],
    "workSummary": "지적, 개별공시지가, 부동산과 토지정보 관리"
  },
  {
    "id": "jobs_economy",
    "name": "일자리경제과",
    "bureau": "경제산업국",
    "emoji": "🛒",
    "vector": {
      "GROWTH": 5,
      "PEOPLE": 3,
      "PLAN": 3,
      "DATA": 2
    },
    "sourceKeywords": [
      "일자리",
      "지역경제",
      "소상공인",
      "물가",
      "사회적경제"
    ],
    "workSummary": "일자리, 지역경제, 소상공인 지원과 경제 활성화"
  },
  {
    "id": "new_growth_industry",
    "name": "신성장산업과",
    "bureau": "경제산업국",
    "emoji": "🚀",
    "vector": {
      "GROWTH": 5,
      "DATA": 4,
      "PLAN": 3,
      "FIELD": 1
    },
    "sourceKeywords": [
      "이차전지",
      "AI",
      "로봇",
      "첨단산업",
      "과학기술"
    ],
    "workSummary": "신산업, 첨단기술, 미래산업과 성장동력 사업"
  },
  {
    "id": "business_support",
    "name": "기업지원과",
    "bureau": "경제산업국",
    "emoji": "🤝",
    "vector": {
      "GROWTH": 5,
      "PEOPLE": 3,
      "PLAN": 3,
      "RULE": 2
    },
    "sourceKeywords": [
      "기업지원",
      "투자유치",
      "산업단지",
      "창업",
      "기업민원"
    ],
    "workSummary": "기업지원, 투자유치, 산업단지와 기업 애로 해소"
  },
  {
    "id": "renewable_energy",
    "name": "신재생에너지과",
    "bureau": "경제산업국",
    "emoji": "🌬️",
    "vector": {
      "GROWTH": 4,
      "FIELD": 4,
      "PLAN": 3,
      "DATA": 2,
      "RULE": 2
    },
    "sourceKeywords": [
      "해상풍력",
      "RE100",
      "태양광",
      "에너지",
      "실증사업"
    ],
    "workSummary": "신재생에너지, 해상풍력, RE100과 에너지 전환 사업"
  },
  {
    "id": "culture_arts",
    "name": "문화예술과",
    "bureau": "문화관광국",
    "emoji": "🎨",
    "vector": {
      "CULTURE": 5,
      "PEOPLE": 3,
      "PLAN": 3,
      "CARE": 1
    },
    "sourceKeywords": [
      "문화예술",
      "문화재단",
      "종무",
      "예술행사",
      "문화공간"
    ],
    "workSummary": "문화예술 정책, 문화공간, 예술행사와 문화재단 협력"
  },
  {
    "id": "tourism_promotion",
    "name": "관광진흥과",
    "bureau": "문화관광국",
    "emoji": "🏝️",
    "vector": {
      "CULTURE": 5,
      "GROWTH": 3,
      "PEOPLE": 3,
      "PLAN": 2
    },
    "sourceKeywords": [
      "관광정책",
      "관광홍보",
      "관광지",
      "해설사",
      "축제"
    ],
    "workSummary": "관광정책, 관광홍보, 관광지 조성과 방문객 서비스"
  },
  {
    "id": "urban_regeneration",
    "name": "도시재생과",
    "bureau": "문화관광국",
    "emoji": "🏚️",
    "vector": {
      "FIELD": 4,
      "PLAN": 4,
      "CULTURE": 3,
      "PEOPLE": 3,
      "GROWTH": 2
    },
    "sourceKeywords": [
      "도시재생",
      "공모사업",
      "마을",
      "지역활성화",
      "공간개선"
    ],
    "workSummary": "도시재생, 마을공동체, 공모사업과 지역 활성화"
  },
  {
    "id": "sports_promotion",
    "name": "체육진흥과",
    "bureau": "문화관광국",
    "emoji": "🏟️",
    "vector": {
      "FIELD": 3,
      "PEOPLE": 3,
      "CULTURE": 3,
      "CARE": 2,
      "PLAN": 2
    },
    "sourceKeywords": [
      "체육시설",
      "생활체육",
      "대회",
      "체육회",
      "스포츠복지"
    ],
    "workSummary": "생활체육, 체육시설, 체육대회와 스포츠 복지"
  },
  {
    "id": "arts_center",
    "name": "예술의전당관리과",
    "bureau": "문화관광국",
    "emoji": "🎭",
    "vector": {
      "CULTURE": 5,
      "FIELD": 3,
      "RULE": 2,
      "PEOPLE": 2
    },
    "sourceKeywords": [
      "공연장",
      "시립예술단",
      "시설관리",
      "공연",
      "대관"
    ],
    "workSummary": "공연장 운영, 시립예술단, 대관과 예술시설 관리"
  },
  {
    "id": "museum_management",
    "name": "박물관관리과",
    "bureau": "문화관광국",
    "emoji": "🏺",
    "vector": {
      "CULTURE": 5,
      "DATA": 3,
      "PEOPLE": 2,
      "PLAN": 2
    },
    "sourceKeywords": [
      "박물관",
      "전시",
      "학예",
      "자료",
      "교육프로그램"
    ],
    "workSummary": "박물관 운영, 전시, 학예자료와 교육 프로그램"
  },
  {
    "id": "transport_admin",
    "name": "교통행정과",
    "bureau": "교통항만수산국",
    "emoji": "🚌",
    "vector": {
      "FIELD": 4,
      "PLAN": 3,
      "PEOPLE": 3,
      "RULE": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "교통계획",
      "대중교통",
      "철도",
      "공항",
      "교통민원"
    ],
    "workSummary": "교통계획, 대중교통, 공항·철도와 교통행정"
  },
  {
    "id": "smart_city",
    "name": "스마트도시과",
    "bureau": "교통항만수산국",
    "emoji": "📡",
    "vector": {
      "DATA": 5,
      "PLAN": 4,
      "FIELD": 3,
      "GROWTH": 2
    },
    "sourceKeywords": [
      "스마트도시",
      "통합센터",
      "리빙랩",
      "CCTV",
      "첨단서비스"
    ],
    "workSummary": "스마트도시, 통합관제, 데이터 기반 도시서비스"
  },
  {
    "id": "port_marine",
    "name": "항만해양과",
    "bureau": "교통항만수산국",
    "emoji": "⚓",
    "vector": {
      "GROWTH": 5,
      "FIELD": 4,
      "PLAN": 3,
      "RULE": 2
    },
    "sourceKeywords": [
      "군산항",
      "새만금항",
      "항만재개발",
      "해양",
      "물류"
    ],
    "workSummary": "항만정책, 해양사업, 항만재개발과 물류 활성화"
  },
  {
    "id": "fishery_policy",
    "name": "어업정책과",
    "bureau": "교통항만수산국",
    "emoji": "🐟",
    "vector": {
      "FIELD": 4,
      "PEOPLE": 3,
      "PLAN": 3,
      "RULE": 2,
      "CARE": 1
    },
    "sourceKeywords": [
      "어업",
      "어선",
      "어업인",
      "어촌",
      "지원사업"
    ],
    "workSummary": "어업정책, 어업인 지원, 어선·어촌 관련 행정"
  },
  {
    "id": "fisheries_industry",
    "name": "수산산업과",
    "bureau": "교통항만수산국",
    "emoji": "🦀",
    "vector": {
      "GROWTH": 4,
      "FIELD": 4,
      "PEOPLE": 2,
      "PLAN": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "수산산업",
      "수산물",
      "가공",
      "유통",
      "어촌체험"
    ],
    "workSummary": "수산산업, 수산물 유통·가공과 어촌 활성화"
  },
  {
    "id": "welfare_policy",
    "name": "복지정책과",
    "bureau": "복지교육국",
    "emoji": "🤲",
    "vector": {
      "CARE": 5,
      "PEOPLE": 4,
      "RULE": 3,
      "PLAN": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "복지급여",
      "통합조사",
      "통합사례관리",
      "고독사",
      "보훈"
    ],
    "workSummary": "복지정책, 통합조사, 사례관리와 생활지원 연계"
  },
  {
    "id": "education_support",
    "name": "교육지원과",
    "bureau": "복지교육국",
    "emoji": "📚",
    "vector": {
      "CARE": 4,
      "PEOPLE": 3,
      "PLAN": 3,
      "CULTURE": 2
    },
    "sourceKeywords": [
      "교육지원",
      "평생교육",
      "장학",
      "청소년",
      "교육재단"
    ],
    "workSummary": "교육지원, 평생교육, 장학사업과 교육 협력"
  },
  {
    "id": "elderly_disabled",
    "name": "경로장애인과",
    "bureau": "복지교육국",
    "emoji": "🧓",
    "vector": {
      "CARE": 5,
      "PEOPLE": 4,
      "RULE": 3,
      "FIELD": 1
    },
    "sourceKeywords": [
      "노인복지",
      "장애인복지",
      "기초연금",
      "노인일자리",
      "시설"
    ],
    "workSummary": "노인복지, 장애인복지, 기초연금과 돌봄 지원"
  },
  {
    "id": "child_policy",
    "name": "아동정책과",
    "bureau": "복지교육국",
    "emoji": "🧒",
    "vector": {
      "CARE": 5,
      "PEOPLE": 4,
      "PLAN": 3,
      "RULE": 2
    },
    "sourceKeywords": [
      "아동정책",
      "아동친화",
      "돌봄",
      "보육",
      "아동복지"
    ],
    "workSummary": "아동정책, 아동친화도시, 돌봄과 보육 지원"
  },
  {
    "id": "women_family_youth",
    "name": "여성가족청소년과",
    "bureau": "복지교육국",
    "emoji": "👪",
    "vector": {
      "CARE": 5,
      "PEOPLE": 4,
      "CULTURE": 2,
      "PLAN": 2,
      "RULE": 2
    },
    "sourceKeywords": [
      "여성정책",
      "가족",
      "청소년",
      "한부모",
      "자원봉사"
    ],
    "workSummary": "여성·가족·청소년 지원, 자원봉사와 가족정책"
  },
  {
    "id": "library_management",
    "name": "도서관관리과",
    "bureau": "복지교육국",
    "emoji": "📖",
    "vector": {
      "CULTURE": 4,
      "CARE": 3,
      "DATA": 3,
      "PEOPLE": 2,
      "PLAN": 2
    },
    "sourceKeywords": [
      "도서관",
      "자료실",
      "작은도서관",
      "독서문화",
      "회원관리"
    ],
    "workSummary": "도서관 운영, 자료관리, 독서문화 프로그램과 공간 관리"
  },
  {
    "id": "climate_environment",
    "name": "기후환경과",
    "bureau": "기후환경국",
    "emoji": "🌿",
    "vector": {
      "FIELD": 4,
      "RULE": 3,
      "PLAN": 3,
      "CARE": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "기후",
      "환경보전",
      "환경정책",
      "군소음",
      "환경개선"
    ],
    "workSummary": "기후정책, 환경보전, 환경개선과 생활환경 관리"
  },
  {
    "id": "resource_circulation",
    "name": "자원순환과",
    "bureau": "기후환경국",
    "emoji": "♻️",
    "vector": {
      "FIELD": 5,
      "RULE": 4,
      "PEOPLE": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "생활폐기물",
      "자원순환",
      "불법투기",
      "청소",
      "재활용"
    ],
    "workSummary": "생활폐기물, 자원순환, 불법투기 대응과 청소행정"
  },
  {
    "id": "forest_greenery",
    "name": "산림녹지과",
    "bureau": "기후환경국",
    "emoji": "🌳",
    "vector": {
      "FIELD": 5,
      "CARE": 3,
      "PLAN": 2,
      "CULTURE": 1
    },
    "sourceKeywords": [
      "산림",
      "녹지",
      "공원",
      "나무심기",
      "도시숲"
    ],
    "workSummary": "산림, 공원녹지, 도시숲과 생활권 녹지 관리"
  },
  {
    "id": "waterworks",
    "name": "수도과",
    "bureau": "기후환경국",
    "emoji": "🚰",
    "vector": {
      "FIELD": 5,
      "RULE": 4,
      "DATA": 3,
      "PLAN": 2
    },
    "sourceKeywords": [
      "상수도",
      "수질",
      "수도시설",
      "급수",
      "공기업"
    ],
    "workSummary": "상수도, 급수, 수질관리와 수도시설 운영"
  },
  {
    "id": "sewerage",
    "name": "하수과",
    "bureau": "기후환경국",
    "emoji": "🕳️",
    "vector": {
      "FIELD": 5,
      "RULE": 4,
      "DATA": 3,
      "PLAN": 2
    },
    "sourceKeywords": [
      "하수도",
      "하수처리",
      "하수요금",
      "공중화장실",
      "시설"
    ],
    "workSummary": "하수도, 하수처리, 하수시설과 생활 위생 인프라"
  },
  {
    "id": "health_admin",
    "name": "보건행정과",
    "bureau": "보건소",
    "emoji": "🏥",
    "vector": {
      "CARE": 4,
      "RULE": 3,
      "PLAN": 3,
      "DATA": 2
    },
    "sourceKeywords": [
      "보건행정",
      "보건지소",
      "청사",
      "계약",
      "전산"
    ],
    "workSummary": "보건소 행정, 보건지소, 청사·계약·운영 관리"
  },
  {
    "id": "infectious_disease",
    "name": "감염병관리과",
    "bureau": "보건소",
    "emoji": "🦠",
    "vector": {
      "CARE": 5,
      "FIELD": 4,
      "RULE": 4,
      "DATA": 3
    },
    "sourceKeywords": [
      "감염병",
      "방역",
      "역학",
      "예방",
      "소독"
    ],
    "workSummary": "감염병 대응, 방역, 예방관리와 위기상황 대응"
  },
  {
    "id": "health_management",
    "name": "건강관리과",
    "bureau": "보건소",
    "emoji": "🏃",
    "vector": {
      "CARE": 5,
      "PEOPLE": 4,
      "FIELD": 2,
      "PLAN": 2,
      "CULTURE": 1
    },
    "sourceKeywords": [
      "건강증진",
      "금연",
      "영양",
      "신체활동",
      "모바일헬스"
    ],
    "workSummary": "건강증진, 금연·영양·운동 프로그램과 시민 건강관리"
  },
  {
    "id": "sanitation",
    "name": "위생과",
    "bureau": "보건소",
    "emoji": "🍽️",
    "vector": {
      "RULE": 5,
      "FIELD": 4,
      "PEOPLE": 2,
      "DATA": 2
    },
    "sourceKeywords": [
      "위생",
      "공중위생",
      "식품",
      "지도점검",
      "행정처분"
    ],
    "workSummary": "위생업소 인허가, 지도점검, 행정처분과 식품·공중위생"
  },
  {
    "id": "agriculture_policy",
    "name": "농업정책과",
    "bureau": "농업기술센터",
    "emoji": "🌾",
    "vector": {
      "FIELD": 4,
      "PLAN": 3,
      "PEOPLE": 3,
      "GROWTH": 2,
      "CARE": 1
    },
    "sourceKeywords": [
      "농정",
      "농업인",
      "농업지원",
      "농촌",
      "소득"
    ],
    "workSummary": "농업정책, 농업인 지원, 농촌 소득과 농정 기획"
  },
  {
    "id": "food_policy",
    "name": "먹거리정책과",
    "bureau": "농업기술센터",
    "emoji": "🥗",
    "vector": {
      "CARE": 4,
      "GROWTH": 3,
      "PLAN": 3,
      "PEOPLE": 2,
      "FIELD": 2
    },
    "sourceKeywords": [
      "먹거리",
      "푸드플랜",
      "로컬푸드",
      "급식",
      "유통"
    ],
    "workSummary": "먹거리정책, 로컬푸드, 공공급식과 먹거리 거버넌스"
  },
  {
    "id": "rural_support",
    "name": "농촌지원과",
    "bureau": "농업기술센터",
    "emoji": "👩‍🌾",
    "vector": {
      "FIELD": 5,
      "PEOPLE": 4,
      "CARE": 2,
      "PLAN": 2
    },
    "sourceKeywords": [
      "농촌지도",
      "농업인교육",
      "특화작목",
      "여성농업인",
      "지도사업"
    ],
    "workSummary": "농촌지도, 농업인 교육, 특화작목과 농촌 지원"
  },
  {
    "id": "technology_extension",
    "name": "기술보급과",
    "bureau": "농업기술센터",
    "emoji": "🔬",
    "vector": {
      "FIELD": 5,
      "DATA": 4,
      "PLAN": 2,
      "GROWTH": 2
    },
    "sourceKeywords": [
      "농업기술",
      "작물",
      "병해충",
      "시범사업",
      "기술보급"
    ],
    "workSummary": "작물기술, 병해충, 시범사업과 농업기술 보급"
  },
  {
    "id": "animal_policy",
    "name": "동물정책과",
    "bureau": "농업기술센터",
    "emoji": "🐾",
    "vector": {
      "CARE": 4,
      "FIELD": 4,
      "RULE": 3,
      "PEOPLE": 2
    },
    "sourceKeywords": [
      "동물보호",
      "가축방역",
      "축산",
      "동물복지",
      "위생"
    ],
    "workSummary": "동물보호, 축산, 가축방역과 동물복지 행정"
  },
  {
    "id": "vehicle_registration",
    "name": "차량등록사업소",
    "bureau": "사업소",
    "emoji": "🚗",
    "vector": {
      "RULE": 5,
      "PEOPLE": 3,
      "DATA": 3,
      "FIELD": 1
    },
    "sourceKeywords": [
      "차량등록",
      "의무보험",
      "과태료",
      "압류",
      "특사경"
    ],
    "workSummary": "차량등록, 의무보험, 과태료, 압류와 차량 민원"
  },
  {
    "id": "eup_myeon_dong",
    "name": "읍·면·동",
    "bureau": "읍·면·동",
    "emoji": "🏡",
    "vector": {
      "PEOPLE": 5,
      "CARE": 4,
      "FIELD": 4,
      "RULE": 3,
      "PLAN": 2
    },
    "sourceKeywords": [
      "통합민원",
      "주민등록",
      "가족관계",
      "복지상담",
      "생활민원",
      "주민자치",
      "산업업무",
      "현장대응"
    ],
    "workSummary": "주민등록, 제증명, 복지상담, 생활민원, 주민자치와 지역 현장 대응을 맡는 생활행정 최전선",
    "resultTitle": "민원과 생활 사이에서 버티는 최전방형",
    "personnelReason": "귀하는 정해진 업무만 처리하기보다, 눈앞의 사람과 상황을 보고 우선순위를 잡는 데 강점이 있습니다. 규정, 민원, 복지, 현장 상황이 한꺼번에 들어오는 환경에서도 침착하게 접점을 찾는 성향이 있어 읍·면·동 생활행정 업무와 잘 맞습니다.",
    "strengths": [
      "민원인의 말을 끝까지 듣고 핵심을 파악하는 능력",
      "규정과 현실 사이에서 설명 가능한 처리 흐름을 찾는 능력",
      "복지, 민원, 생활불편 등 여러 업무를 동시에 조율하는 능력"
    ],
    "caution": "업무 범위가 넓고 예측 불가능한 민원이 많을 수 있으므로, 혼자 안고 가기보다 기록을 남기고 계장님과 빠르게 공유하는 습관이 중요합니다."
  }
];

const featuredDepartmentIds = [
  "saemangeum_policy",
  "audit",
  "population_response",
  "digital_info",
  "planning_budget",
  "admin_support",
  "public_relations",
  "open_civil_service",
  "safety_general",
  "urban_planning",
  "jobs_economy",
  "new_growth_industry",
  "tourism_promotion",
  "urban_regeneration",
  "transport_admin",
  "smart_city",
  "port_marine",
  "welfare_policy",
  "child_policy",
  "climate_environment",
  "resource_circulation",
  "infectious_disease",
  "rural_support",
  "vehicle_registration",
  "eup_myeon_dong"
];
const USE_ALL_DEPARTMENTS = false;
const tendencyLabels = {
  "PLAN": "기획·조정·보고",
  "RULE": "기준·근거·감사·법규",
  "PEOPLE": "민원·소통·협업",
  "DATA": "수치·시스템·자료",
  "FIELD": "현장·시설·안전",
  "GROWTH": "산업·경제·미래사업",
  "CULTURE": "홍보·관광·문화콘텐츠",
  "CARE": "복지·보건·교육·돌봄"
};

function getCandidateDepartments() {
  if (USE_ALL_DEPARTMENTS) return departments;
  return departments.filter((dept) => featuredDepartmentIds.includes(dept.id));
}

function buildDepartmentResult(department) {
  const top = Object.entries(department.vector).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([key]) => tendencyLabels[key]);
  const keywords = department.sourceKeywords.slice(0, 3);
  return {
    ...department,
    resultTitle: department.resultTitle || `${top[0]}와 ${top[1]}을 잇는 실무형`,
    personnelReason: department.personnelReason || `귀하는 ${top[0]} 역량과 ${top[1]} 관점을 함께 활용하는 성향입니다. ${keywords[0]}, ${keywords[1]} 관련 업무에서 기준을 세우고 실행 흐름을 만드는 데 강점이 있어 ${department.name} 업무와 잘 맞습니다.`,
    strengths: department.strengths || [`${keywords[0]} 업무의 우선순위와 처리 흐름 정리`, `${keywords[1]} 관련 자료·의견을 확인하고 조율`, `${keywords[2]} 업무를 끝까지 점검하고 기록`],
    caution: department.caution || `${department.name}에서는 ${keywords[0]}와 ${keywords[1]} 업무가 동시에 진행될 수 있습니다. 판단 근거와 진행 상황을 기록하고 계장님 및 동료와 적시에 공유하는 습관이 중요합니다.`
  };
}

const scoreKeys = Object.keys(tendencyLabels);
const specialtyKeys = ["ADMIN", "DIGITAL", "INFRA", "HEALTH", "ENVIRONMENT", "INDUSTRY", "COMMUNITY"];
const departmentSpecialtyProfiles = {
  saemangeum_policy: { INDUSTRY: 3, INFRA: 2 }, audit: { ADMIN: 4 }, population_response: { COMMUNITY: 3, ADMIN: 1 },
  digital_info: { DIGITAL: 5 }, planning_budget: { ADMIN: 4, DIGITAL: 1 }, admin_support: { ADMIN: 5 },
  public_relations: { COMMUNITY: 3, ADMIN: 1 }, open_civil_service: { COMMUNITY: 4, ADMIN: 1 }, safety_general: { INFRA: 3, ADMIN: 1 },
  urban_planning: { INFRA: 4, ADMIN: 1 }, jobs_economy: { INDUSTRY: 4, COMMUNITY: 1 }, new_growth_industry: { INDUSTRY: 5, DIGITAL: 1 },
  tourism_promotion: { COMMUNITY: 3, INDUSTRY: 1 }, urban_regeneration: { INFRA: 3, COMMUNITY: 2 }, transport_admin: { INFRA: 4, ADMIN: 1 },
  smart_city: { DIGITAL: 4, INFRA: 2 }, port_marine: { INDUSTRY: 3, INFRA: 2 }, welfare_policy: { HEALTH: 3, COMMUNITY: 2 },
  child_policy: { HEALTH: 3, COMMUNITY: 2 }, climate_environment: { ENVIRONMENT: 5 }, resource_circulation: { ENVIRONMENT: 4, INFRA: 1 },
  infectious_disease: { HEALTH: 5 }, rural_support: { ENVIRONMENT: 3, INDUSTRY: 2 }, vehicle_registration: { ADMIN: 3, INFRA: 1 },
  eup_myeon_dong: { COMMUNITY: 4, ADMIN: 1 }
};

function getTopKeys(vector, count = 2) {
  return scoreKeys
    .map((key, index) => ({ key, value: vector[key] || 0, index }))
    .sort((a, b) => b.value - a.value || a.index - b.index)
    .slice(0, count)
    .map(({ key }) => key);
}

function calculateDepartmentRanking(selectedAnswers) {
  const scores = Object.fromEntries(scoreKeys.map((key) => [key, 0]));
  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const answer = questions[questionIndex]?.answers[answerIndex];
    if (!answer) return;
    Object.entries(answer.scores).forEach(([key, value]) => { scores[key] += value; });
  });

  const maximumScores = Object.fromEntries(scoreKeys.map((key) => [key, questions.reduce((sum, question) => {
    return sum + Math.max(0, ...question.answers.map((answer) => answer.scores[key] || 0));
  }, 0)]));
  const userVector = Object.fromEntries(scoreKeys.map((key) => [key, Math.max(0, scores[key]) / (maximumScores[key] || 1)]));
  const userMagnitude = Math.sqrt(scoreKeys.reduce((sum, key) => sum + userVector[key] ** 2, 0)) || 1;
  const userTopKeys = getTopKeys(userVector);
  const specialtyScores = Object.fromEntries(specialtyKeys.map((key) => [key, 0]));
  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const specialty = questions[questionIndex]?.answers[answerIndex]?.specialtyScores;
    if (!specialty) return;
    Object.entries(specialty).forEach(([key, value]) => { specialtyScores[key] += value; });
  });
  const specialtyMagnitude = Math.sqrt(specialtyKeys.reduce((sum, key) => sum + specialtyScores[key] ** 2, 0)) || 1;
  const specialtyTotal = specialtyKeys.reduce((sum, key) => sum + specialtyScores[key], 0) || 1;
  const specialtyConcentration = Math.max(...specialtyKeys.map((key) => specialtyScores[key])) / specialtyTotal;
  const specialtyWeight = Math.min(0.30, Math.max(0, (specialtyConcentration - 0.24) * 0.75));

  const ranked = getCandidateDepartments().map((department) => {
    const departmentVector = Object.fromEntries(scoreKeys.map((key) => [key, (department.vector[key] || 0) / 5]));
    const dotProduct = scoreKeys.reduce((sum, key) => sum + userVector[key] * departmentVector[key], 0);
    const departmentMagnitude = Math.sqrt(scoreKeys.reduce((sum, key) => sum + departmentVector[key] ** 2, 0)) || 1;
    const topOverlap = getTopKeys(departmentVector).filter((key) => userTopKeys.includes(key)).length;
    const specialtyProfile = departmentSpecialtyProfiles[department.id] || {};
    const specialtyProfileMagnitude = Math.sqrt(specialtyKeys.reduce((sum, key) => sum + (specialtyProfile[key] || 0) ** 2, 0)) || 1;
    const specialtyDotProduct = specialtyKeys.reduce((sum, key) => sum + specialtyScores[key] * (specialtyProfile[key] || 0), 0);
    const tendencySimilarity = dotProduct / (userMagnitude * departmentMagnitude);
    const specialtySimilarity = specialtyDotProduct / (specialtyMagnitude * specialtyProfileMagnitude);
    // 여러 간접 문항에서 같은 관심이 반복될 때만 보조 신호를 강화해 특수 부서의 우연한 추천을 막는다.
    const similarity = tendencySimilarity * (1 - specialtyWeight) + specialtySimilarity * specialtyWeight;
    const commonTendencyPenalty = ((department.vector.PLAN || 0) + (department.vector.PEOPLE || 0)) / 10;
    return { department, similarity, tendencySimilarity, specialtySimilarity, topOverlap, commonTendencyPenalty };
  });

  const epsilon = 1e-10;
  ranked.sort((a, b) => {
    const similarityDifference = b.similarity - a.similarity;
    if (Math.abs(similarityDifference) > epsilon) return similarityDifference;
    if (b.topOverlap !== a.topOverlap) return b.topOverlap - a.topOverlap;
    if (a.commonTendencyPenalty !== b.commonTendencyPenalty) return a.commonTendencyPenalty - b.commonTendencyPenalty;
    return a.department.id.localeCompare(b.department.id, 'en');
  });

  const scoreSummary = getTopKeys(userVector, 3).map((key) => ({
    label: tendencyLabels[key],
    score: Math.round(userVector[key] * 100)
  }));
  return { scores, userVector, scoreSummary, specialtyScores, specialtyWeight, ranked };
}

const TEST_DATA = { questions, departments, featuredDepartmentIds, useAllDepartments: USE_ALL_DEPARTMENTS, getCandidateDepartments, buildDepartmentResult, calculateDepartmentRanking };
