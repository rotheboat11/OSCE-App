const params = new URLSearchParams(location.search);
const key = params.get("exam");
const exam = key ? window.MSK_EXAMS[key] : null;

const el = document.getElementById("content");

function formatTestName(test) {
  if (typeof test === "string") return test;
  if (test && typeof test === "object") return test.name || test.title || "Special test";
  return "Special test";
}

function makeQuestions(examObj) {
  const testOptions = (examObj.special_tests || []).map(formatTestName).filter(Boolean);
  const normalizedTestOptions = testOptions.length ? testOptions : ["No special tests listed yet"];

  return [
    {
      question: `What is the first step in ${examObj.name}?`,
      options: ["Palpation", "Inspection", "Special Tests", "Range of Motion"],
      correct: 1
    },
    {
      question: `Which special test is commonly used in ${examObj.name}?`,
      options: normalizedTestOptions,
      correct: 0
    }
  ];
}

function render() {
  if (!exam) {
    el.innerHTML = `
      <div class="alert alert-danger">
        <h4 class="mb-2">Exam not found</h4>
        <p class="mb-0">Go back to <a href="msk.html">MSK Home</a>.</p>
      </div>`;
    return;
  }

  const qs = makeQuestions(exam);
  el.innerHTML = `
    <div class="row">
      <div class="col-12 section-panel">
        <h1 class="mb-2">Quiz: ${exam.name}</h1>
        <p class="text-muted">${exam.description}</p>
        <div class="d-flex gap-2 mb-4">
          <a class="btn btn-outline-secondary" href="exam.html?exam=${encodeURIComponent(key)}">Back to Study</a>
          <a class="btn btn-outline-secondary" href="msk.html">MSK Home</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card quiz-shell">
          <div class="card-body">
            <div id="qBox"></div>
            <div class="d-flex gap-2 mt-3">
              <button id="checkBtn" class="btn btn-primary">Check Answer</button>
              <button id="nextBtn" class="btn btn-outline-primary" disabled>Next</button>
            </div>
            <div id="feedback" class="mt-3"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  let i = 0;
  let selected = null;

  const qBox = document.getElementById("qBox");
  const feedback = document.getElementById("feedback");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");

  function showQuestion() {
    selected = null;
    feedback.innerHTML = "";
    nextBtn.disabled = true;

    const q = qs[i];
    qBox.innerHTML = `
      <h5 class="mb-3">Q${i + 1}. ${q.question}</h5>
      ${q.options
        .map(
          (opt, idx) => `
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="opt" id="opt${idx}" value="${idx}">
          <label class="form-check-label" for="opt${idx}">${opt}</label>
        </div>
      `
        )
        .join("")}
    `;

    qBox.querySelectorAll('input[name="opt"]').forEach((r) => {
      r.addEventListener("change", () => {
        selected = Number(r.value);
      });
    });
  }

  checkBtn.addEventListener("click", () => {
    if (selected === null) {
      feedback.innerHTML = `<div class="alert alert-warning mb-0">Pick an answer first.</div>`;
      return;
    }
    const q = qs[i];
    const ok = selected === q.correct;
    feedback.innerHTML = ok
      ? `<div class="alert alert-success mb-0">Correct ✅</div>`
      : `<div class="alert alert-danger mb-0">Not quite. Correct answer: <strong>${q.options[q.correct]}</strong></div>`;
    nextBtn.disabled = false;
  });

  nextBtn.addEventListener("click", () => {
    i++;
    if (i >= qs.length) {
      qBox.innerHTML = `
        <h5 class="mb-2">Done 🎉</h5>
        <p class="mb-0">Nice. Want to review again or switch exams?</p>
      `;
      checkBtn.disabled = true;
      nextBtn.disabled = true;
      feedback.innerHTML = `
        <div class="d-flex gap-2 mt-3">
          <a class="btn btn-primary" href="quiz.html?exam=${encodeURIComponent(key)}">Restart Quiz</a>
          <a class="btn btn-outline-primary" href="msk.html">MSK Home</a>
        </div>`;
      return;
    }
    showQuestion();
  });

  showQuestion();
}

render();
