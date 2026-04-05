const REGION_KEYS = [
  "general_msk",
  "cervical_spine",
  "lumbar_spine",
  "shoulder",
  "elbow",
  "wrist_hand",
  "hip",
  "knee",
  "ankle"
];

const regionButtonsEl = document.getElementById("regionButtons");
const testListEl = document.getElementById("testList");
const testDetailEl = document.getElementById("testDetail");
const animHint = document.getElementById("animHint");
const resetPoseBtn = document.getElementById("resetPoseBtn");
const viewportEl = document.getElementById("simViewport");
const cameraHintEl = document.getElementById("cameraHint");
const modelHintEl = document.getElementById("modelHint");

let currentRegion = "shoulder";
let activeTestIndex = null;
let activeVideoEl = null;

const TEST_VIDEO_CONFIG = {
  "empty can (jobe)": {
    src: "animations/Shoulder/empty-can-test.mp4",
    caption: "Empty Can simulation",
    cameraHint: "Oblique view",
    modelHint: "Blender mp4",
    playText: "Playing Empty Can animation.",
    endedText: "Empty Can animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="patientArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1ba97f"></path>
          </marker>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line patient" d="M9 47 L9 31"></path>
        <path class="sim-force-line examiner" d="M91 23 L91 39"></path>
      </svg>
      <div class="sim-force-label patient">Patient lifts</div>
      <div class="sim-force-label examiner">Examiner pushes down</div>
    `
  },
  "lift-off": {
    src: "animations/Shoulder/lift-off-test.mp4",
    caption: "Lift-off simulation",
    cameraHint: "Posterior-oblique view",
    modelHint: "Blender mp4",
    playText: "Playing Lift-off animation.",
    endedText: "Lift-off animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="liftOffPatientArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1ba97f"></path>
          </marker>
          <marker id="liftOffExaminerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line patient lift-off-patient-line" d="M65 64 L78 53"></path>
        <path class="sim-force-line examiner lift-off-examiner-line" d="M84 31 L69 43"></path>
      </svg>
      <div class="sim-force-label patient lift-off-patient-label">Patient lifts off</div>
      <div class="sim-force-label examiner lift-off-examiner-label">Examiner resists</div>
    `
  },
  "neer": {
    src: "animations/Shoulder/neer-test.mp4",
    caption: "Neer simulation",
    cameraHint: "Anterior-oblique view",
    modelHint: "Blender mp4",
    playText: "Playing Neer animation.",
    endedText: "Neer animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="neerExaminerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner neer-examiner-line" d="M88 68 L88 46"></path>
      </svg>
      <div class="sim-force-label examiner neer-examiner-label">Examiner passively moves</div>
    `
  }
};

function testDisplayName(test) {
  if (typeof test === "string") return test;
  if (test && typeof test === "object") return test.name || test.title || "Unnamed test";
  return "Unnamed test";
}

function testHowText(test) {
  if (typeof test === "string") return [];
  if (!test || typeof test !== "object") return [];
  if (Array.isArray(test.how) && test.how.length) return test.how.slice(0, 3);
  if (test.detail) return [String(test.detail)];
  return [];
}

function normalizeTestName(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function clearViewport() {
  if (activeVideoEl) {
    activeVideoEl.pause();
    activeVideoEl.removeAttribute("src");
    activeVideoEl.load();
    activeVideoEl = null;
  }
  viewportEl.innerHTML = "";
}

function createPlaceholder(title, body) {
  const wrapper = document.createElement("div");
  wrapper.className = "sim-placeholder";
  wrapper.innerHTML = `<div class="sim-placeholder-title">${title}</div><p class="sim-placeholder-copy mb-0">${body}</p>`;
  return wrapper;
}

function showNeutralViewport() {
  clearViewport();
  viewportEl.appendChild(
    createPlaceholder(
      "Simulation Ready",
      "Choose a region and then a test. Empty Can will play your Blender mp4 export; other tests stay as placeholders for now."
    )
  );
  cameraHintEl.textContent = "Front view";
  modelHintEl.textContent = "Simulation preview";
}

function showRegionViewport(regionKey) {
  clearViewport();
  const regionName = window.MSK_EXAMS?.[regionKey]?.name || "Selected region";
  viewportEl.appendChild(
    createPlaceholder(
      regionName,
      "Test assets will appear here. Right now this page is set up to preview your Empty Can mp4 export."
    )
  );
  cameraHintEl.textContent = regionKey === "ankle" ? "Ankle focus" : "Front view";
  modelHintEl.textContent = regionKey === "shoulder" ? "Shoulder preview" : "Simulation preview";
}

function showTestVideo(testName, message) {
  clearViewport();
  const config = TEST_VIDEO_CONFIG[normalizeTestName(testName)];
  if (!config) {
    showGenericTestPreview(testName);
    return;
  }

  const video = document.createElement("video");
  video.className = "sim-video";
  video.src = config.src;
  video.controls = false;
  video.playsInline = true;
  video.preload = "auto";
  video.loop = false;
  video.muted = true;
  video.setAttribute("disablepictureinpicture", "true");
  video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");

  const caption = document.createElement("div");
  caption.className = "sim-video-caption";
  caption.textContent = config.caption;

  let forceOverlay = null;
  if (config.forceOverlay) {
    forceOverlay = document.createElement("div");
    forceOverlay.className = "sim-force-overlay";
    forceOverlay.innerHTML = config.forceOverlay;
  }

  const replayBtn = document.createElement("button");
  replayBtn.type = "button";
  replayBtn.className = "sim-replay-btn";
  replayBtn.textContent = "Replay";
  replayBtn.disabled = true;

  viewportEl.appendChild(video);
  if (forceOverlay) viewportEl.appendChild(forceOverlay);
  viewportEl.appendChild(caption);
  viewportEl.appendChild(replayBtn);

  activeVideoEl = video;
  cameraHintEl.textContent = config.cameraHint || "Simulation view";
  modelHintEl.textContent = config.modelHint || "Blender mp4";
  animHint.textContent = config.playText || `Playing ${testName} animation.`;

  const playVideo = () => {
    video.currentTime = 0;
    replayBtn.disabled = true;
    replayBtn.textContent = "Playing...";
    animHint.textContent = config.playText || `Playing ${testName} animation.`;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        replayBtn.disabled = false;
        replayBtn.textContent = "Play";
        animHint.textContent = "Animation loaded. Click Play to start.";
      });
    }
  };

  video.addEventListener("ended", () => {
    replayBtn.disabled = false;
    replayBtn.textContent = "Replay";
    animHint.textContent = config.endedText || `${testName} animation complete. Click Replay to watch it again.`;
  });

  replayBtn.addEventListener("click", playVideo);

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      replayBtn.disabled = false;
      replayBtn.textContent = "Play";
      animHint.textContent = "Animation loaded. Click Play to start.";
    });
  }
}

function showGenericTestPreview(testName) {
  clearViewport();
  viewportEl.appendChild(
    createPlaceholder(
      testName,
      "This test is wired into the UI, but it does not have a dedicated animation asset yet."
    )
  );
  cameraHintEl.textContent = currentRegion === "ankle" ? "Ankle focus" : "Front view";
  modelHintEl.textContent = "Simulation preview";
  animHint.textContent = `Pose loaded: ${testName}`;
}

function updateActiveTestButton() {
  testListEl.querySelectorAll(".test-item").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.idx) === activeTestIndex);
  });
}

function updateResetButton() {
  resetPoseBtn.disabled = activeTestIndex === null;
}

function renderRegionButtons() {
  const buttons = REGION_KEYS
    .filter((key) => window.MSK_EXAMS && window.MSK_EXAMS[key])
    .map((key) => {
      const active = key === currentRegion ? "btn-primary" : "btn-outline-primary";
      return `<button type="button" class="btn ${active} btn-sm region-btn" data-region="${key}">${window.MSK_EXAMS[key].name}</button>`;
    })
    .join("");

  regionButtonsEl.innerHTML = buttons;

  regionButtonsEl.querySelectorAll(".region-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentRegion = btn.dataset.region;
      activeTestIndex = null;
      renderRegionButtons();
      renderTests();
      showRegionViewport(currentRegion);
      updateResetButton();
      animHint.textContent = `Region selected: ${window.MSK_EXAMS[currentRegion].name}`;
    });
  });
}

function renderTests() {
  const exam = window.MSK_EXAMS?.[currentRegion];
  const tests = exam?.special_tests || [];

  if (!tests.length) {
    testListEl.innerHTML = `<div class="list-group-item">No special tests available for this region.</div>`;
    testDetailEl.textContent = "No test details available yet for this region.";
    return;
  }

  testListEl.innerHTML = tests
    .map((test, index) => `<button type="button" class="list-group-item list-group-item-action test-item" data-idx="${index}">${testDisplayName(test)}</button>`)
    .join("");

  testListEl.querySelectorAll(".test-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const test = tests[idx];
      const testName = testDisplayName(test);
      activeTestIndex = idx;

      const lines = testHowText(test);
      const positive = typeof test === "object" && test.positive ? `<p class="mb-1"><strong>Positive:</strong> ${test.positive}</p>` : "";
      const steps = lines.length
        ? `<ol class="mb-2">${lines.map((line) => `<li>${line}</li>`).join("")}</ol>`
        : `<p class="mb-2">Animation preview will appear here.</p>`;

      testDetailEl.innerHTML = `<h6 class="mb-2">${testName}</h6>${steps}${positive}`;
      updateActiveTestButton();
      updateResetButton();

      const normalized = normalizeTestName(testName);
      if (TEST_VIDEO_CONFIG[normalized]) {
        showTestVideo(testName);
      } else {
        showGenericTestPreview(testName);
      }
    });
  });

  updateActiveTestButton();
}

resetPoseBtn.addEventListener("click", () => {
  activeTestIndex = null;
  updateActiveTestButton();
  updateResetButton();
  showRegionViewport(currentRegion);
  animHint.textContent = `Returned to neutral view for ${window.MSK_EXAMS[currentRegion].name}.`;
});

renderRegionButtons();
renderTests();
showNeutralViewport();
updateResetButton();
