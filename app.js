(() => {
  const screens = [...document.querySelectorAll('.screen')];
  const startButton = document.querySelector('#start-button');
  const quitButton = document.querySelector('#quit-button');
  const resultMail = document.querySelector('#result-mail');
  const backInbox = document.querySelector('#back-inbox');
  const restartButton = document.querySelector('#restart-button');
  const questionNumber = document.querySelector('#question-number');
  const progressBar = document.querySelector('#progress-bar');
  const questionContent = document.querySelector('#question-content');
  const answerList = document.querySelector('#answer-list');
  const resultDocument = document.querySelector('#result-document');
  const toast = document.querySelector('#toast');
  const brand = document.querySelector('.brand');

  const initialScores = () => ({ structured: 0, agile: 0, desk: 0, field: 0, people: 0, data: 0 });
  let currentQuestion = 0;
  let scores = initialScores();
  let selectedDepartment = null;

  function showScreen(id) {
    screens.forEach((screen) => screen.classList.toggle('is-active', screen.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetTest() {
    currentQuestion = 0;
    scores = initialScores();
    selectedDepartment = null;
    showScreen('start-screen');
  }

  function renderQuestion() {
    const item = TEST_DATA.questions[currentQuestion];
    const count = TEST_DATA.questions.length;
    questionNumber.textContent = `${String(currentQuestion + 1).padStart(2, '0')} / ${count}`;
    progressBar.style.width = `${((currentQuestion + 1) / count) * 100}%`;
    questionContent.innerHTML = `
      <div class="question-category"><span>Q${String(currentQuestion + 1).padStart(2, '0')}</span>${item.category}</div>
      <h2>${item.question}</h2>
    `;
    answerList.innerHTML = item.answers.map((answer, index) => `
      <button class="answer-button" type="button" data-answer="${index}">
        <span class="answer-index">${String.fromCharCode(65 + index)}</span>
        <span>${answer.text}</span>
        <b>→</b>
      </button>
    `).join('');
    answerList.querySelectorAll('.answer-button').forEach((button) => {
      button.addEventListener('click', () => selectAnswer(Number(button.dataset.answer), button));
    });
  }

  function selectAnswer(index, button) {
    if (button.classList.contains('selected')) return;
    button.classList.add('selected');
    const answerScores = TEST_DATA.questions[currentQuestion].answers[index].scores;
    Object.entries(answerScores).forEach(([key, value]) => { scores[key] += value; });
    answerList.querySelectorAll('button').forEach((item) => { item.disabled = true; });

    setTimeout(() => {
      currentQuestion += 1;
      if (currentQuestion < TEST_DATA.questions.length) {
        renderQuestion();
      } else {
        selectedDepartment = calculateResult();
        showInbox();
      }
    }, 340);
  }

  function calculateResult() {
    const maxScore = Math.max(...Object.values(scores), 1);
    const normalized = Object.fromEntries(Object.entries(scores).map(([key, value]) => [key, (value / maxScore) * 5]));
    return TEST_DATA.departments
      .map((department, index) => ({
        department,
        distance: Object.keys(normalized).reduce((sum, key) => sum + Math.pow(normalized[key] - department.profile[key], 2), 0),
        index
      }))
      .sort((a, b) => a.distance - b.distance || a.index - b.index)[0].department;
  }

  function showInbox() {
    showScreen('inbox-screen');
    resultMail.classList.remove('arrived');
    void resultMail.offsetWidth;
    setTimeout(() => resultMail.classList.add('arrived'), 300);
    showToast('새 문서가 도착했습니다.');
  }

  function renderResult() {
    const department = selectedDepartment || calculateResult();
    const today = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    resultDocument.innerHTML = `
      <header class="document-heading">
        <div class="doc-symbol"><span>${department.icon}</span><p>GUNSAN<br>CITY</p></div>
        <div class="approval-grid"><span>담당</span><span>인사</span><span>확인</span><i>열람</i><i></i><i></i></div>
      </header>
      <div class="document-title"><p>정기인사 알림</p><h1>${department.name}</h1><span>${department.title}</span></div>
      <dl class="document-meta">
        <div><dt>문서번호</dt><dd>인사운영-${department.code}</dd></div>
        <div><dt>시행일자</dt><dd>${today}</dd></div>
        <div><dt>수신</dt><dd>신규주무관 귀하</dd></div>
        <div><dt>공개구분</dt><dd>공개 · 공유환영</dd></div>
      </dl>
      <section class="result-summary">
        <span class="stamp">추천<br>완료</span>
        <p>귀하의 업무성향 진단 결과, <strong>${department.name}</strong>이(가) 가장 어울리는 부서로 추천되었음을 알려드립니다.</p>
      </section>
      <section class="result-body">
        <div class="result-description"><h2>추천 사유</h2><p>${department.summary}</p></div>
        <div class="strength-panel"><h2>업무 강점</h2><div>${department.strengths.map((strength) => `<span>${strength}</span>`).join('')}</div></div>
      </section>
      <div class="result-scene"><b>당신의 공직생활 한 장면</b><p>“${department.scene}”</p></div>
      <footer class="document-footer"><p>함께 일하면 시너지 날 부서 · <strong>${department.partner}</strong></p><span>※ 실제 인사배치와 무관한 재미용 테스트입니다.</span></footer>
    `;
    showScreen('result-screen');
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  startButton.addEventListener('click', () => {
    currentQuestion = 0;
    scores = initialScores();
    showScreen('quiz-screen');
    renderQuestion();
  });
  quitButton.addEventListener('click', resetTest);
  restartButton.addEventListener('click', resetTest);
  backInbox.addEventListener('click', () => showScreen('inbox-screen'));
  resultMail.addEventListener('click', renderResult);
  brand.addEventListener('click', (event) => { event.preventDefault(); resetTest(); });
})();
