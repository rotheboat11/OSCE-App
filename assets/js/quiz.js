const params = new URLSearchParams(location.search);
const key = params.get("exam");
const exam = key ? window.MSK_EXAMS[key] : null;

const el = document.getElementById("content");

const QUESTION_BANK = {
  general_msk: [
    {
      question: "What are the three core components of a standard MSK exam?",
      options: [
        "Look, Feel, Move",
        "Inspect, Percuss, Auscultate",
        "Observe, Palpate, Reassure",
        "Palpate, Mobilize, Image"
      ],
      correct: 0
    },
    {
      question: "What does warmth over a joint suggest?",
      options: [
        "Inflammatory or infectious process",
        "Chronic osteoarthritis only",
        "Ligament laxity without inflammation",
        "Remote healed injury"
      ],
      correct: 0
    },
    {
      question: "What is the most important observation during initial inspection?",
      options: [
        "Gait",
        "Scars around the joint",
        "Muscle bulk alone",
        "Nail changes"
      ],
      correct: 0
    }
  ],
  cervical_spine: [
    {
      question: "What does a positive Spurling test indicate?",
      options: [
        "Cervical radiculopathy",
        "Thoracic outlet syndrome",
        "Rotator cuff impingement",
        "Tension headache"
      ],
      correct: 0
    },
    {
      question: "How is Spurling’s test performed?",
      options: [
        "Neck extension + rotation + axial compression",
        "Neck flexion with distraction",
        "Shoulder abduction with resisted external rotation",
        "Cervical flexion with percussion over the spine"
      ],
      correct: 0
    },
    {
      question: "What symptom reproduction is considered positive in Spurling’s test?",
      options: [
        "Radicular arm pain",
        "Localized neck tightness only",
        "Occipital headache alone",
        "Shoulder clicking without pain"
      ],
      correct: 0
    }
  ],
  lumbar_spine: [
    {
      question: "What does a positive straight leg raise suggest?",
      options: [
        "Lumbar nerve root irritation (e.g., disc herniation)",
        "Isolated hamstring tightness",
        "Primary sacroiliac arthritis",
        "Hip flexor contracture"
      ],
      correct: 0
    },
    {
      question: "At what angle is a straight leg raise typically considered positive?",
      options: [
        "0-20°",
        "30-70°",
        "70-90°",
        "Only at 90°"
      ],
      correct: 1
    },
    {
      question: "What does pain relieved by knee flexion during straight leg raise indicate?",
      options: [
        "Neural tension rather than hamstring tightness",
        "Facet joint irritation",
        "Primary calf muscle strain",
        "Pure intra-articular hip pathology"
      ],
      correct: 0
    }
  ],
  shoulder: [
    {
      question: "What does the Neer test assess?",
      options: [
        "Subacromial impingement",
        "AC joint instability",
        "Posterior shoulder instability",
        "Biceps tendon rupture"
      ],
      correct: 0
    },
    {
      question: "What does the Empty Can test assess?",
      options: [
        "Subscapularis",
        "Infraspinatus",
        "Supraspinatus",
        "Deltoid"
      ],
      correct: 2
    },
    {
      question: "What does a positive Lift-Off test indicate?",
      options: [
        "Subscapularis tear",
        "Supraspinatus impingement",
        "AC joint pathology",
        "Axillary nerve palsy"
      ],
      correct: 0
    },
    {
      question: "What does a positive Drop Arm test suggest?",
      options: [
        "Rotator cuff tear",
        "Frozen shoulder",
        "Bicipital tendinopathy",
        "Cervical radiculopathy"
      ],
      correct: 0
    }
  ],
  elbow: [
    {
      question: "What does Cozen’s test assess?",
      options: [
        "Lateral epicondylitis",
        "Medial epicondylitis",
        "Cubital tunnel syndrome",
        "Radial collateral ligament instability"
      ],
      correct: 0
    },
    {
      question: "What does Tinel’s at the elbow assess?",
      options: [
        "Median nerve compression",
        "Radial nerve irritation",
        "Ulnar nerve irritation",
        "Biceps tendon pathology"
      ],
      correct: 2
    },
    {
      question: "Pain over the lateral epicondyle is most associated with which condition?",
      options: [
        "Tennis elbow",
        "Golfer’s elbow",
        "Olecranon bursitis",
        "Cubital tunnel syndrome"
      ],
      correct: 0
    }
  ],
  wrist_hand: [
    {
      question: "What does Phalen’s test assess?",
      options: [
        "De Quervain’s tenosynovitis",
        "Carpal tunnel syndrome",
        "Scaphoid fracture",
        "Ulnar collateral ligament injury"
      ],
      correct: 1
    },
    {
      question: "What does Tinel’s at the wrist assess?",
      options: [
        "Median nerve compression",
        "Radial tunnel syndrome",
        "Ulnar nerve entrapment at the elbow",
        "Thumb extensor rupture"
      ],
      correct: 0
    },
    {
      question: "What does Finkelstein’s test assess?",
      options: [
        "Thumb CMC osteoarthritis",
        "Carpal tunnel syndrome",
        "De Quervain’s tenosynovitis",
        "Flexor tenosynovitis"
      ],
      correct: 2
    }
  ],
  hip: [
    {
      question: "What does a positive Trendelenburg test indicate?",
      options: [
        "Gluteus medius weakness",
        "Hip adductor tear",
        "SI joint instability",
        "Hamstring contracture"
      ],
      correct: 0
    },
    {
      question: "What does FABER test assess?",
      options: [
        "Hip or SI joint pathology",
        "Lumbar disc herniation only",
        "ACL insufficiency",
        "Achilles tendon tightness"
      ],
      correct: 0
    },
    {
      question: "What does a positive Thomas test indicate?",
      options: [
        "Hip flexion contracture",
        "Trochanteric bursitis",
        "Piriformis syndrome",
        "Gluteus medius tear"
      ],
      correct: 0
    }
  ],
  knee: [
    {
      question: "What does Lachman test assess?",
      options: [
        "ACL integrity",
        "PCL integrity",
        "MCL integrity",
        "Meniscal stability"
      ],
      correct: 0
    },
    {
      question: "What does posterior drawer test assess?",
      options: [
        "ACL",
        "PCL",
        "MCL",
        "LCL"
      ],
      correct: 1
    },
    {
      question: "What does McMurray test assess?",
      options: [
        "Patellar instability",
        "Meniscal tear",
        "Quadriceps weakness",
        "Collateral ligament laxity"
      ],
      correct: 1
    },
    {
      question: "Varus stress tests which structure?",
      options: [
        "ACL",
        "MCL",
        "LCL",
        "PCL"
      ],
      correct: 2
    },
    {
      question: "Valgus stress tests which structure?",
      options: [
        "LCL",
        "MCL",
        "Meniscus",
        "ACL"
      ],
      correct: 1
    }
  ],
  ankle: [
    {
      question: "What does anterior drawer test assess?",
      options: [
        "ATFL",
        "Deltoid ligament",
        "Achilles tendon",
        "Posterior tibial tendon"
      ],
      correct: 0
    },
    {
      question: "What does inversion stress test assess?",
      options: [
        "Lateral ligaments",
        "Deltoid ligament only",
        "Syndesmosis only",
        "Plantar fascia"
      ],
      correct: 0
    },
    {
      question: "Most commonly injured ankle ligament?",
      options: [
        "ATFL",
        "Calcaneofibular ligament",
        "PTFL",
        "Deltoid ligament"
      ],
      correct: 0
    }
  ],
  neurological_asia: [
    {
      question: "What does decreased reflex suggest?",
      options: [
        "Upper motor neuron lesion",
        "Lower motor neuron lesion",
        "Cerebellar lesion",
        "Basal ganglia disorder"
      ],
      correct: 1
    },
    {
      question: "What does hyperreflexia suggest?",
      options: [
        "Upper motor neuron lesion",
        "Lower motor neuron lesion",
        "Neuromuscular junction disorder",
        "Peripheral vascular disease"
      ],
      correct: 0
    },
    {
      question: "What is tested in dermatomes?",
      options: [
        "Sensory nerve root function",
        "Motor end-plate function",
        "Cerebellar coordination",
        "Peripheral pulse quality"
      ],
      correct: 0
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function normalizeQuestions(questions) {
  return questions.map((q) => {
    const indexedOptions = q.options.map((option, idx) => ({
      option,
      isCorrect: idx === q.correct
    }));
    const shuffledOptions = shuffle(indexedOptions);
    return {
      question: q.question,
      options: shuffledOptions.map((item) => item.option),
      correct: shuffledOptions.findIndex((item) => item.isCorrect)
    };
  });
}

function fallbackQuestions(examObj) {
  const firstTest = examObj?.special_tests?.[0];
  const testName = typeof firstTest === "string" ? firstTest : firstTest?.name || "special test";

  return [
    {
      question: `What is the first step in ${examObj.name}?`,
      options: ["Inspection", "Palpation", "Special Tests", "Range of Motion"],
      correct: 0
    },
    {
      question: `Which of the following is a special test used in ${examObj.name}?`,
      options: [testName, "Romberg test", "Weber test", "Snellen test"],
      correct: 0
    }
  ];
}

function makeQuestions(examKey, examObj) {
  return normalizeQuestions(QUESTION_BANK[examKey] || fallbackQuestions(examObj));
}

function renderNotFound() {
  el.innerHTML = `
    <div class="alert alert-danger">
      <h4 class="mb-2">Exam not found</h4>
      <p class="mb-0">Go back to <a href="msk.html">MSK Home</a>.</p>
    </div>`;
}

function render() {
  if (!exam) {
    renderNotFound();
    return;
  }

  const qs = makeQuestions(key, exam);
  let index = 0;
  let selected = null;
  let checked = false;
  let score = 0;

  el.innerHTML = `
    <div class="row">
      <div class="col-12 section-panel">
        <h1 class="mb-2">Quiz: ${escapeHtml(exam.name)}</h1>
        <p class="text-muted">${escapeHtml(exam.description)}</p>
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
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div id="progressText" class="text-muted small"></div>
              <div id="scoreText" class="text-muted small">Score: 0</div>
            </div>
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

  const qBox = document.getElementById("qBox");
  const feedback = document.getElementById("feedback");
  const checkBtn = document.getElementById("checkBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressText = document.getElementById("progressText");
  const scoreText = document.getElementById("scoreText");

  function renderQuestion() {
    selected = null;
    checked = false;
    feedback.innerHTML = "";
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    progressText.textContent = `Question ${index + 1} of ${qs.length}`;

    const q = qs[index];
    qBox.innerHTML = `
      <h5 class="mb-3">Q${index + 1}. ${escapeHtml(q.question)}</h5>
      ${q.options
        .map(
          (opt, idx) => `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="opt" id="opt${idx}" value="${idx}">
              <label class="form-check-label" for="opt${idx}">${escapeHtml(opt)}</label>
            </div>
          `
        )
        .join("")}
    `;

    qBox.querySelectorAll('input[name="opt"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        selected = Number(radio.value);
      });
    });
  }

  checkBtn.addEventListener("click", () => {
    if (selected === null) {
      feedback.innerHTML = `<div class="alert alert-warning mb-0">Pick an answer first.</div>`;
      return;
    }
    if (checked) {
      return;
    }

    checked = true;
    const q = qs[index];
    const isCorrect = selected === q.correct;

    if (isCorrect) {
      score += 1;
      scoreText.textContent = `Score: ${score}`;
      feedback.innerHTML = `<div class="alert alert-success mb-0">Correct ✅</div>`;
    } else {
      feedback.innerHTML = `<div class="alert alert-danger mb-0">Not quite. Correct answer: <strong>${escapeHtml(q.options[q.correct])}</strong></div>`;
    }

    checkBtn.disabled = true;
    nextBtn.disabled = false;
  });

  nextBtn.addEventListener("click", () => {
    index += 1;

    if (index >= qs.length) {
      progressText.textContent = "Complete";
      scoreText.textContent = `Score: ${score}`;
      qBox.innerHTML = `
        <h5 class="mb-2">Done 🎉</h5>
        <p class="mb-2">Final score: <strong>${score} / ${qs.length}</strong></p>
        <p class="mb-0">Want to review again or switch exams?</p>
      `;
      checkBtn.disabled = true;
      nextBtn.disabled = true;
      feedback.innerHTML = `
        <div class="d-flex gap-2 mt-3">
          <a class="btn btn-primary" href="quiz.html?exam=${encodeURIComponent(key)}">Restart Quiz</a>
          <a class="btn btn-outline-primary" href="msk.html">MSK Home</a>
        </div>
      `;
      return;
    }

    renderQuestion();
  });

  renderQuestion();
}

render();
