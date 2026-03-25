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
let activeModelEl = null;

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
  if (activeModelEl) {
    if (typeof activeModelEl.pause === "function") {
      activeModelEl.pause();
    }
    activeModelEl = null;
  }
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
      "Choose a region and then a test. Empty Can will load your Blender GLB export; other tests stay as placeholders for now."
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
      "Test assets will appear here. Right now this page is set up to preview your Empty Can GLB export."
    )
  );
  cameraHintEl.textContent = regionKey === "ankle" ? "Ankle focus" : "Front view";
  modelHintEl.textContent = regionKey === "shoulder" ? "Shoulder preview" : "Simulation preview";
}

function showEmptyCanVideo(message) {
  clearViewport();

  const video = document.createElement("video");
  video.className = "sim-video";
  video.src = "animations/empty-can.mp4";
  video.controls = false;
  video.playsInline = true;
  video.preload = "auto";
  video.loop = false;
  video.muted = true;
  video.setAttribute("disablepictureinpicture", "true");
  video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");

  const caption = document.createElement("div");
  caption.className = "sim-video-caption";
  caption.textContent = "Empty Can simulation";

  const overlay = document.createElement("div");
  overlay.className = "sim-video-overlay";
  overlay.innerHTML = `
    <div class="sim-video-overlay-label">Simulation Preview</div>
    <div class="sim-video-overlay-subtitle">${message || "Fallback preview from your Blender export"}</div>
  `;

  viewportEl.appendChild(video);
  viewportEl.appendChild(overlay);
  viewportEl.appendChild(caption);

  activeVideoEl = video;
  cameraHintEl.textContent = "Simulation preview";
  modelHintEl.textContent = "Blender export";
  animHint.textContent = "Playing Empty Can preview. The GLB version needs an HTTP-served page.";

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      animHint.textContent = "Preview loaded. Click the viewport if autoplay was blocked.";
    });
  }

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
    }
  });
}

function showEmptyCanModel() {
  clearViewport();

  if (window.location.protocol === "file:") {
    showEmptyCanVideo("Local browser pages usually block GLB fetching. This is using your clean fallback preview instead.");
    return;
  }

  if (!window.customElements || !window.customElements.get("model-viewer")) {
    showEmptyCanVideo("The 3D viewer component did not load, so this is using the fallback preview.");
    return;
  }

  const model = document.createElement("model-viewer");
  model.className = "sim-model-viewer";
  model.setAttribute("src", "animations/empty-can.glb");
  model.setAttribute("alt", "Empty Can 3D animation");
  model.setAttribute("camera-orbit", "92deg 82deg 2.9m");
  model.setAttribute("camera-target", "0m 1.1m 0m");
  model.setAttribute("field-of-view", "24deg");
  model.setAttribute("interaction-prompt", "none");
  model.setAttribute("shadow-intensity", "1");
  model.setAttribute("environment-image", "neutral");
  model.setAttribute("exposure", "1.05");
  model.setAttribute("min-camera-orbit", "80deg auto auto");
  model.setAttribute("max-camera-orbit", "104deg auto auto");
  model.setAttribute("disable-zoom", "");
  model.autoplay = true;
  model.loop = false;

  const caption = document.createElement("div");
  caption.className = "sim-video-caption";
  caption.textContent = "Empty Can simulation";

  const overlay = document.createElement("div");
  overlay.className = "sim-video-overlay";
  overlay.innerHTML = `
    <div class="sim-video-overlay-label">3D Simulation</div>
    <div class="sim-video-overlay-subtitle">Loaded from your Blender GLB export</div>
  `;

  const replayBtn = document.createElement("button");
  replayBtn.type = "button";
  replayBtn.className = "sim-replay-btn";
  replayBtn.textContent = "Replay";
  replayBtn.disabled = true;

  const restartModelAnimation = () => {
    if (typeof model.pause === "function") {
      model.pause();
    }
    if ("currentTime" in model) {
      model.currentTime = 0;
    }
    if (typeof model.play === "function") {
      model.play();
    }
    replayBtn.disabled = true;
    animHint.textContent = "Playing Blender GLB: Empty Can (Jobe)";
  };

  model.addEventListener("error", () => {
    showEmptyCanVideo("The GLB did not render in this browser session, so this is using the fallback preview.");
  }, { once: true });

  model.addEventListener("load", () => {
    activeModelEl = model;
    replayBtn.disabled = false;
    restartModelAnimation();
  }, { once: true });

  model.addEventListener("finished-iteration", () => {
    if (typeof model.pause === "function") {
      model.pause();
    }
    replayBtn.disabled = false;
    animHint.textContent = "Empty Can pose loaded. Click Replay to run the animation again.";
  });

  replayBtn.addEventListener("click", restartModelAnimation);

  viewportEl.appendChild(model);
  viewportEl.appendChild(overlay);
  viewportEl.appendChild(caption);
  viewportEl.appendChild(replayBtn);

  activeVideoEl = null;
  activeModelEl = model;
  cameraHintEl.textContent = "Imported model";
  modelHintEl.textContent = "Side view";
  animHint.textContent = "Playing Blender GLB: Empty Can (Jobe)";
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

      if (normalizeTestName(testName) === "empty can (jobe)") {
        showEmptyCanModel();
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
