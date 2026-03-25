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
let activeThreeState = null;
let threeModulesPromise = null;

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
  if (activeThreeState) {
    if (activeThreeState.rafId) {
      window.cancelAnimationFrame(activeThreeState.rafId);
    }
    if (activeThreeState.resizeHandler) {
      window.removeEventListener("resize", activeThreeState.resizeHandler);
    }
    if (activeThreeState.mixer) {
      activeThreeState.mixer.stopAllAction();
    }
    if (activeThreeState.root) {
      activeThreeState.root.traverse((node) => {
        if (node.geometry) {
          node.geometry.dispose?.();
        }
        const material = node.material;
        if (Array.isArray(material)) {
          material.forEach((entry) => entry?.dispose?.());
        } else if (material) {
          material.dispose?.();
        }
      });
    }
    if (activeThreeState.renderer) {
      activeThreeState.renderer.dispose();
    }
    activeThreeState = null;
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

  const stage = document.createElement("div");
  stage.className = "sim-three-stage";

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
  replayBtn.textContent = "Play animation";
  replayBtn.disabled = true;

  viewportEl.appendChild(stage);
  viewportEl.appendChild(overlay);
  viewportEl.appendChild(caption);
  viewportEl.appendChild(replayBtn);

  activeVideoEl = null;
  cameraHintEl.textContent = "Oblique view";
  modelHintEl.textContent = "Blender GLB";
  animHint.textContent = "Loading Empty Can model...";

  const loadThreeModules = async () => {
    if (!threeModulesPromise) {
      threeModulesPromise = Promise.all([
        import("https://cdn.jsdelivr.net/npm/three@0.174.0/build/three.module.js"),
        import("https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/loaders/GLTFLoader.js")
      ]);
    }
    return threeModulesPromise;
  };

  loadThreeModules()
    .then(async ([THREE, { GLTFLoader }]) => {
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(stage.clientWidth || viewportEl.clientWidth || 760, stage.clientHeight || viewportEl.clientHeight || 520, false);
      stage.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x141926);

      const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
      const hemi = new THREE.HemisphereLight(0xe7f0ff, 0x24324a, 1.65);
      const key = new THREE.DirectionalLight(0xffffff, 1.25);
      key.position.set(3.2, 4.5, 2.8);
      scene.add(hemi, key);

      const loader = new GLTFLoader();
      const gltf = await new Promise((resolve, reject) => {
        loader.load("animations/empty-can.glb", resolve, undefined, reject);
      });

      const root = gltf.scene;
      scene.add(root);

      const box = new THREE.Box3().setFromObject(root);
      const center = box.getCenter(new THREE.Vector3());
      root.position.x -= center.x;
      root.position.z -= center.z;
      root.position.y -= box.min.y;

      const fittedBox = new THREE.Box3().setFromObject(root);
      const size = fittedBox.getSize(new THREE.Vector3());
      const target = new THREE.Vector3(0, size.y * 0.58, 0);
      const distance = Math.max(size.y * 1.02, size.x * 1.9, 2.2);
      camera.position.set(distance * 0.78, size.y * 0.62, distance * 0.78);
      camera.lookAt(target);

      const mixer = new THREE.AnimationMixer(root);
      const clip = gltf.animations?.[0];
      const action = clip ? mixer.clipAction(clip) : null;
      if (action) {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.enabled = true;
      }

      const clock = new THREE.Clock();
      let isPlaying = false;

      const renderFrame = () => {
        activeThreeState.rafId = window.requestAnimationFrame(renderFrame);
        const delta = clock.getDelta();
        if (isPlaying && mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };

      const resizeHandler = () => {
        const width = stage.clientWidth || viewportEl.clientWidth || 760;
        const height = stage.clientHeight || viewportEl.clientHeight || 520;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      activeThreeState = { renderer, resizeHandler, rafId: null, mixer, root };
      window.addEventListener("resize", resizeHandler);
      resizeHandler();
      renderFrame();

      const stopAnimation = () => {
        isPlaying = false;
        replayBtn.disabled = false;
        replayBtn.textContent = "Replay";
        animHint.textContent = "Empty Can pose loaded. Click Replay to run the animation again.";
      };

      mixer.addEventListener("finished", stopAnimation);

      const playAnimation = () => {
        if (!action) return;
        action.reset();
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        clock.getDelta();
        isPlaying = true;
        replayBtn.disabled = true;
        replayBtn.textContent = "Playing...";
        animHint.textContent = "Playing Blender GLB: Empty Can (Jobe)";
        action.play();
      };

      replayBtn.disabled = !action;
      replayBtn.textContent = action ? "Play animation" : "No animation";
      replayBtn.addEventListener("click", playAnimation);

      renderer.render(scene, camera);
      animHint.textContent = action
        ? "Empty Can model loaded. Click Play animation when you're ready."
        : "The GLB loaded, but no animation clip was found.";
    })
    .catch(() => {
      showEmptyCanVideo("The GLB did not render in this browser session, so this is using the fallback preview.");
    });
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
