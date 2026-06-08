(() => {
  const $ = (selector) => document.querySelector(selector);
  const screens = [...document.querySelectorAll('.screen')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const total = TEST_DATA.questions.length;
  const scoreKeys = ["PLAN", "RULE", "PEOPLE", "DATA", "FIELD", "GROWTH", "CULTURE", "CARE"];
  const maximumScores = Object.fromEntries(scoreKeys.map((key) => [key, TEST_DATA.questions.reduce((totalScore, question) => totalScore + Math.max(0, ...question.answers.map((answer) => answer.scores[key] || 0)), 0)]));
  let current = 0;
  let selectedAnswers = Array(total).fill(null);
  let scores = createEmptyScores();
  let result = TEST_DATA.departments[0];
  let typingTimer;
  const shownCheckpoints = new Set();

  const dateText = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  $('#draft-date').textContent = dateText;
  $('#result-date').textContent = dateText;

  function createEmptyScores() {
    return Object.fromEntries(scoreKeys.map((key) => [key, 0]));
  }

  function showScreen(id) {
    screens.forEach((screen) => screen.classList.toggle('is-active', screen.id === id));
  }

  function setHeader(status, number = '총무-2026-0608') {
    $('#header-status').textContent = status;
    $('#header-doc-number').textContent = number;
  }

  function reset() {
    clearInterval(typingTimer);
    current = 0;
    selectedAnswers = Array(total).fill(null);
    scores = createEmptyScores();
    shownCheckpoints.clear();
    setHeader('기안대기');
    showScreen('start-screen');
  }

  function typeText(element, text, speed = 22, done) {
    clearInterval(typingTimer);
    element.textContent = '';
    if (reducedMotion.matches) {
      element.textContent = text;
      done?.();
      return;
    }
    element.classList.add('typing');
    let index = 0;
    typingTimer = setInterval(() => {
      element.textContent += text[index];
      index += 1;
      if (index >= text.length) {
        clearInterval(typingTimer);
        element.classList.remove('typing');
        done?.();
      }
    }, speed);
  }

  function recalculateScores() {
    scores = createEmptyScores();
    selectedAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === null) return;
      Object.entries(TEST_DATA.questions[questionIndex].answers[answerIndex].scores).forEach(([key, value]) => {
        scores[key] += value;
      });
    });
  }

  function renderIndex() {
    $('#question-index').innerHTML = Array.from({ length: total }, (_, index) => `<li class="${selectedAnswers[index] !== null ? 'done' : index === current ? 'current' : ''}">${String(index + 1).padStart(2, '0')}</li>`).join('');
  }

  function renderQuestion() {
    const item = TEST_DATA.questions[current];
    const answeredCount = selectedAnswers.filter((answer) => answer !== null).length;
    const percent = Math.round((answeredCount / total) * 100);
    $('#question-category').textContent = `업무상황 검토 · ${item.id.toUpperCase()}`;
    $('#question-count').textContent = `문항 ${String(current + 1).padStart(2, '0')}/${total}`;
    $('#progress-label').textContent = `검토 진행률 ${percent}%`;
    $('#progress-bar').style.width = `${percent}%`;
    $('#previous-button').disabled = current === 0;
    renderIndex();
    typeText($('#question-text'), item.text);
    $('#answer-list').innerHTML = item.answers.map((answer, index) => `
      <button class="answer-button ${selectedAnswers[current] === index ? 'selected' : ''}" type="button" data-index="${index}">
        <span>${index + 1}</span><span>${answer.text}</span><i class="reviewed-stamp">검토<br>완료</i>
      </button>`).join('');
    document.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', () => selectAnswer(Number(button.dataset.index), button)));
  }

  function selectAnswer(answerIndex, button) {
    selectedAnswers[current] = answerIndex;
    recalculateScores();
    document.querySelectorAll('.answer-button').forEach((item) => {
      item.classList.toggle('selected', item === button);
      item.disabled = true;
    });
    setTimeout(() => {
      current += 1;
      if (current >= total) return completeTest();
      if ((current === 5 || current === 10) && !shownCheckpoints.has(current)) {
        shownCheckpoints.add(current);
        return showProgress();
      }
      renderQuestion();
    }, reducedMotion.matches ? 0 : 430);
  }

  function previousQuestion() {
    if (current === 0) return;
    current -= 1;
    showScreen('quiz-screen');
    renderQuestion();
  }

  function showProgress() {
    const answeredCount = selectedAnswers.filter((answer) => answer !== null).length;
    const percent = Math.round((answeredCount / total) * 100);
    $('#review-percent').textContent = `검토 진행률 ${percent}%`;
    $('#review-meter-bar').style.width = `${percent}%`;
    $('#review-complete').textContent = `${String(answeredCount).padStart(2, '0')}문항`;
    $('#review-remain').textContent = `${String(total - answeredCount).padStart(2, '0')}문항`;
    showScreen('progress-screen');
  }

  function completeTest() {
    recalculateScores();
    const normalizedScore = (key) => scores[key] / maximumScores[key];
    const winner = scoreKeys.reduce((best, key) => normalizedScore(key) > normalizedScore(best) ? key : best, scoreKeys[0]);
    result = TEST_DATA.departments.find((department) => department.key === winner) || TEST_DATA.departments[0];
    setHeader('수신완료', '인사-2026-0001');
    showScreen('inbox-screen');
    const mail = $('#result-mail');
    mail.classList.remove('selected');
    showToast('새 문서 1건이 수신되었습니다.');
  }

  function openDocument() {
    $('#result-mail').classList.add('selected');
    setTimeout(() => {
      showScreen('opening-screen');
      $('#opening-copy').textContent = '열람 처리 중...';
      setTimeout(renderResult, reducedMotion.matches ? 0 : 1550);
    }, reducedMotion.matches ? 0 : 350);
  }

  function renderResult() {
    $('#department-summary').textContent = result.summary;
    $('#department-title').textContent = result.title;
    $('#department-scene').textContent = `“${result.scene}”`;
    $('#strength-list').innerHTML = result.strengths.map((strength) => `<li>${strength}</li>`).join('');
    setHeader('열람완료', '인사-2026-0001');
    showScreen('result-screen');
    if (reducedMotion.matches) {
      $('.official-title').textContent = '정기인사 알림';
      $('#department-name').textContent = result.name;
    } else {
      typeText($('.official-title'), '정기인사 알림', 55, () => typeText($('#department-name'), result.name, 75));
    }
  }

  async function saveShareImage() {
    const card = $('#share-card');
    showToast('공문 이미지를 생성하고 있습니다.');
    try {
      const css = await fetch('style.css').then((response) => response.text());
      const clone = card.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
      clone.style.width = `${card.offsetWidth}px`;
      clone.style.height = `${card.offsetHeight}px`;
      const markup = `<div xmlns="http://www.w3.org/1999/xhtml"><style>${css}</style>${clone.outerHTML}</div>`;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${card.offsetWidth}" height="${card.offsetHeight}"><foreignObject width="100%" height="100%">${markup}</foreignObject></svg>`;
      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = 2;
        canvas.width = card.offsetWidth * scale;
        canvas.height = card.offsetHeight * scale;
        const context = canvas.getContext('2d');
        context.scale(scale, scale);
        context.drawImage(image, 0, 0);
        URL.revokeObjectURL(url);
        const link = document.createElement('a');
        link.download = `정기인사-알림-${result.name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('공문 이미지를 저장했습니다.');
      };
      image.onerror = () => { URL.revokeObjectURL(url); showToast('이미지 저장에 실패했습니다. 브라우저 캡처를 이용해 주세요.'); };
      image.src = url;
    } catch (error) {
      showToast('이미지 저장에 실패했습니다. 브라우저 캡처를 이용해 주세요.');
    }
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  $('#start-button').addEventListener('click', () => { setHeader('작성중'); showScreen('quiz-screen'); renderQuestion(); });
  $('#continue-button').addEventListener('click', () => { showScreen('quiz-screen'); renderQuestion(); });
  $('#progress-close').addEventListener('click', () => { showScreen('quiz-screen'); renderQuestion(); });
  $('#previous-button').addEventListener('click', previousQuestion);
  $('#quit-button').addEventListener('click', reset);
  $('#home-button').addEventListener('click', reset);
  $('#result-mail').addEventListener('click', openDocument);
  $('#back-inbox').addEventListener('click', () => showScreen('inbox-screen'));
  $('#restart-button').addEventListener('click', reset);
  $('#save-image').addEventListener('click', saveShareImage);
})();
