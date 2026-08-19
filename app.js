(() => {
  const $ = (selector) => document.querySelector(selector);
  const screens = [...document.querySelectorAll('.screen')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const total = TEST_DATA.questions.length;
  const scoreKeys = ["PLAN", "RULE", "PEOPLE", "DATA", "FIELD", "GROWTH", "CULTURE", "CARE"];
  const storageKey = 'gunsan-department-test-latest';
  let current = 0;
  let selectedAnswers = Array(total).fill(null);
  let scores = createEmptyScores();
  let result = TEST_DATA.buildDepartmentResult(TEST_DATA.getCandidateDepartments()[0]);
  let alternatives = [];
  let scoreSummary = [];
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

  function saveLatestState(ranked = []) {
    const state = { selectedAnswers, resultIds: ranked.slice(0, 3).map(({ department }) => department.id) };
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function restoreLatestState() {
    try {
      const state = JSON.parse(localStorage.getItem(storageKey));
      if (!Array.isArray(state?.selectedAnswers) || state.selectedAnswers.length !== total) return;
      selectedAnswers = state.selectedAnswers.map((answer, index) => Number.isInteger(answer) && TEST_DATA.questions[index].answers[answer] ? answer : null);
      recalculateScores();
      current = selectedAnswers.findIndex((answer) => answer === null);
      if (current < 0) current = total;
    } catch (error) {
      localStorage.removeItem(storageKey);
    }
  }

  function reset() {
    clearInterval(typingTimer);
    current = 0;
    selectedAnswers = Array(total).fill(null);
    scores = createEmptyScores();
    alternatives = [];
    shownCheckpoints.clear();
    localStorage.removeItem(storageKey);
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
    saveLatestState();
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
    const ranking = TEST_DATA.calculateDepartmentRanking(selectedAnswers);
    const { ranked } = ranking;
    result = TEST_DATA.buildDepartmentResult(ranked[0].department);
    alternatives = ranked.slice(1, 3).map(({ department }) => TEST_DATA.buildDepartmentResult(department));
    scoreSummary = ranking.scoreSummary;
    saveLatestState(ranked);
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
    $('#department-summary').textContent = result.personnelReason;
    $('#tendency-summary').textContent = `성향 점수 요약 · ${scoreSummary.map(({ label, score }) => `${label} ${score}점`).join(' · ')}`;
    $('#department-title').textContent = result.resultTitle;
    $('#department-scene').textContent = result.workSummary;
    $('#department-caution').textContent = result.caution;
    $('#department-bureau').textContent = result.bureau;
    $('#strength-list').innerHTML = result.strengths.slice(0, 3).map((strength) => `<li>${strength}</li>`).join('');
    $('#alternative-one').textContent = alternatives[0]?.name || '-';
    $('#alternative-two').textContent = alternatives[1]?.name || '-';
    setHeader('열람완료', '인사-2026-0001');
    showScreen('result-screen');
    if (reducedMotion.matches) {
      $('.official-title').textContent = '정기인사 알림';
      $('#department-name').textContent = `${result.emoji} ${result.name}`;
    } else {
      typeText($('.official-title'), '정기인사 알림', 55, () => typeText($('#department-name'), `${result.emoji} ${result.name}`, 75));
    }
  }

  function loadHtml2Canvas() {
    if (window.html2canvas) return Promise.resolve(window.html2canvas);
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      script.crossOrigin = 'anonymous';
      script.onload = () => resolve(window.html2canvas);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('PNG 변환 실패')), 'image/png');
    });
  }

  async function renderCardWithSvgFallback(card) {
    const css = await fetch('style.css').then((response) => response.text());
    const clone = card.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    clone.style.width = `${card.offsetWidth}px`;
    clone.style.height = `${card.offsetHeight}px`;
    const markup = `<div xmlns="http://www.w3.org/1999/xhtml"><style>${css}</style>${clone.outerHTML}</div>`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${card.offsetWidth}" height="${card.offsetHeight}"><foreignObject width="100%" height="100%">${markup}</foreignObject></svg>`;
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    try {
      const image = new Image();
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
      });
      const canvas = document.createElement('canvas');
      const scale = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
      canvas.width = card.offsetWidth * scale;
      canvas.height = card.offsetHeight * scale;
      const context = canvas.getContext('2d');
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.scale(scale, scale);
      context.drawImage(image, 0, 0);
      return canvas;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function createResultCardPng() {
    const card = $('#result-card');
    try {
      const html2canvas = await loadHtml2Canvas();
      return canvasToBlob(await html2canvas(card, {
        backgroundColor: '#ffffff',
        logging: false,
        scale: Math.min(3, Math.max(2, window.devicePixelRatio || 1)),
        useCORS: true
      }));
    } catch (error) {
      return canvasToBlob(await renderCardWithSvgFallback(card));
    }
  }

  function downloadBlob(blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'gunsan-dept-result.png';
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function saveShareImage() {
    showToast('공문 이미지를 생성하고 있습니다.');
    try {
      const blob = await createResultCardPng();
      const file = new File([blob], 'gunsan-dept-result.png', { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: '정기인사 알림', text: '군산시 추천 부서 테스트 결과입니다.' });
          showToast('공문 이미지를 공유했습니다.');
          return;
        } catch (shareError) {
          if (shareError.name === 'AbortError') {
            showToast('공유를 취소했습니다.');
            return;
          }
        }
      }
      downloadBlob(blob);
      showToast('공문 이미지를 저장했습니다.');
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

  $('#start-button').addEventListener('click', () => { setHeader('작성중'); if (current >= total) return completeTest(); showScreen('quiz-screen'); renderQuestion(); });
  $('#continue-button').addEventListener('click', () => { showScreen('quiz-screen'); renderQuestion(); });
  $('#progress-close').addEventListener('click', () => { showScreen('quiz-screen'); renderQuestion(); });
  $('#previous-button').addEventListener('click', previousQuestion);
  $('#quit-button').addEventListener('click', reset);
  $('#home-button').addEventListener('click', reset);
  $('#result-mail').addEventListener('click', openDocument);
  $('#back-inbox').addEventListener('click', () => showScreen('inbox-screen'));
  $('#restart-button').addEventListener('click', reset);
  $('#save-image').addEventListener('click', saveShareImage);

  restoreLatestState();
})();
