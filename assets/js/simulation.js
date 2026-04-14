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
    playbackRate: 0.75,
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
    playbackRate: 0.75,
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
    playbackRate: 0.75,
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
  },
  "drop arm test": {
    src: "animations/Shoulder/drop-test.mp4",
    playbackRate: 0.75,
    caption: "Drop Arm simulation",
    cameraHint: "Anterior-oblique view",
    modelHint: "Blender mp4",
    playText: "Playing Drop Arm animation.",
    endedText: "Drop Arm animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
          <marker id="patientArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1ba97f"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M15 45 L15 28"></path>
        <path class="sim-force-line patient" d="M90 25 L90 43"></path>
      </svg>
      <div class="sim-force-label examiner drop-arm-examiner-label">Examiner passively abducts arm</div>
      <div class="sim-force-label patient drop-arm-patient-label">Patient lowers arm (slowly)</div>
    `
  },
  "cups test": {
    src: "animations/Shoulder/cups-test.mp4",
    playbackRate: 0.75,
    caption: "Cups Test simulation",
    cameraHint: "Anterior-oblique view",
    modelHint: "Blender mp4",
    playText: "Playing Cups Test animation.",
    endedText: "Cups Test animation complete. Click Replay to watch it again.",
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
        <path class="sim-force-line patient" d="M28 58 L13 58"></path>
        <path class="sim-force-line examiner" d="M13 48 L28 48"></path>
      </svg>
      <div class="sim-force-label patient cups-patient-label">Patient externally rotates</div>
      <div class="sim-force-label examiner cups-examiner-label">Examiner resists inward</div>
    `
  },
  "ac joint adduction": {
    src: "animations/Shoulder/ac-joint-test.mp4",
    playbackRate: 0.75,
    caption: "AC Joint Adduction simulation",
    cameraHint: "Anterior-oblique view",
    modelHint: "Blender mp4",
    playText: "Playing AC Joint Adduction animation.",
    endedText: "AC Joint Adduction animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M70 40 L88 40"></path>
      </svg>
      <div class="sim-force-label examiner ac-joint-examiner-label">Examiner moves arm across chest</div>
    `
  },
  "spurling": {
    src: "animations/Cervical Spine/spurling-test.mp4",
    playbackRate: 0.75,
    caption: "Spurling simulation",
    cameraHint: "Cervical focus",
    modelHint: "Blender mp4",
    playText: "Playing Spurling animation.",
    endedText: "Spurling animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M50 10 L50 30"></path>
      </svg>
      <div class="sim-force-label examiner spurling-examiner-label">Examiner compresses (axial)</div>
    `
  },
  "straight leg raise": {
    src: "animations/Lumbar Spine/straight-leg-raise-test.mp4",
    playbackRate: 0.75,
    caption: "Straight Leg Raise simulation",
    cameraHint: "Lumbar view",
    modelHint: "Blender mp4",
    playText: "Playing Straight Leg Raise animation.",
    endedText: "Straight Leg Raise animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M95 60 L80 40"></path>
        <path class="sim-force-line examiner" d="M75 10 L60 22"></path>
      </svg>
      <div class="sim-force-label examiner slr-examiner-label">Examiner raises leg</div>
      <div class="sim-force-label examiner slr-df-label">Then dorsiflexes foot (after pain)</div>
    `
  },
  "faber (si/hip screen)": {
    src: "animations/Lumbar Spine/faber-test.mp4",
    playbackRate: 0.75,
    caption: "FABER simulation",
    cameraHint: "Pelvic view",
    modelHint: "Blender mp4",
    playText: "Playing FABER animation.",
    endedText: "FABER animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M45 18 L38 33"></path>
      </svg>
      <div class="sim-force-label examiner faber-examiner-label">Examiner pushes knee</div>
    `
  },
  "femoral nerve stretch": {
    src: "animations/Lumbar Spine/femoral-nerve-stretch.mp4",
    playbackRate: 0.75,
    caption: "Femoral Nerve Stretch simulation",
    cameraHint: "Lumbar view",
    modelHint: "Blender mp4",
    playText: "Playing Femoral Nerve Stretch animation.",
    endedText: "Femoral Nerve Stretch animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M100 30 L80 30"></path>
        <path class="sim-force-line examiner" d="M20 48 L20 31"></path>
      </svg>
      <div class="sim-force-label examiner femoral-examiner-label">Examiner flexes knee</div>
      <div class="sim-force-label examiner femoral-hip-label">Examiner then extends hip</div>
    `
  },
  "tinel at cubital tunnel": {
    src: "animations/Elbow/tinel-elbow.mp4",
    playbackRate: 0.75,
    caption: "Tinel at Elbow simulation",
    cameraHint: "Elbow focus",
    modelHint: "Blender mp4",
    playText: "Playing Tinel at elbow animation.",
    endedText: "Tinel at elbow animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M65 47 L65 67"></path>
      </svg>
      <div class="sim-force-label examiner tinel-elbow-label">Examiner taps ulnar nerve</div>
    `
  },
  "phalen": {
    src: "animations/Wrist/phalen-test.mp4",
    playbackRate: 0.75,
    caption: "Phalen simulation",
    cameraHint: "Wrist focus",
    modelHint: "Blender mp4",
    playText: "Playing Phalen animation.",
    endedText: "Phalen animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="patientArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1ba97f"></path>
          </marker>
        </defs>
        <path class="sim-force-line patient" d="M26 41 L38 41"></path>
        <path class="sim-force-line patient" d="M74 41 L62 41"></path>
      </svg>
      <div class="sim-force-label patient phalen-patient-label">Patient holds wrists flexed</div>
    `
  },
  "tinel (carpal tunnel)": {
    src: "animations/Wrist/tinel-wrist.mp4",
    playbackRate: 0.75,
    caption: "Tinel at Wrist simulation",
    cameraHint: "Wrist focus",
    modelHint: "Blender mp4",
    playText: "Playing Tinel at wrist animation.",
    endedText: "Tinel at wrist animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M67 66 L52 66"></path>
      </svg>
      <div class="sim-force-label examiner tinel-wrist-label">Examiner taps median nerve</div>
    `
  },
  "finkelstein": {
    src: "animations/Wrist/finkelstein.mp4",
    playbackRate: 0.75,
    caption: "Finkelstein simulation",
    cameraHint: "Wrist focus",
    modelHint: "Blender mp4",
    playText: "Playing Finkelstein animation.",
    endedText: "Finkelstein animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M80 39 L67 50"></path>
      </svg>
      <div class="sim-force-label examiner finkelstein-examiner-label">Examiner ulnar deviates</div>
    `
  },
  "trendelenburg test": {
    src: "animations/Hip/trendelenburg-test.mp4",
    playbackRate: 0.75,
    caption: "Trendelenburg simulation",
    cameraHint: "Standing hip view",
    modelHint: "Blender mp4",
    playText: "Playing Trendelenburg animation.",
    endedText: "Trendelenburg animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="trendelenburgFindingArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#7a57d1"></path>
          </marker>
        </defs>
        <path class="sim-force-line finding trendelenburg-finding-line" d="M10 30 L30 30"></path>
      </svg>
      <div class="sim-force-label finding trendelenburg-patient-label">Positive: contralateral hip drops</div>
    `
  },
  "ober’s test": {
    src: "animations/Hip/ober-test.mp4",
    playbackRate: 0.75,
    caption: "Ober Test simulation",
    cameraHint: "Lateral hip view",
    modelHint: "Blender mp4",
    playText: "Playing Ober Test animation.",
    endedText: "Ober Test animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M78 34 L78 50"></path>
      </svg>
      <div class="sim-force-label examiner ober-examiner-label">Examiner extends then slowly lowers leg</div>
    `
  },
  "thomas test": {
    src: "animations/Hip/thomas-test.mp4",
    playbackRate: 0.75,
    caption: "Thomas Test simulation",
    cameraHint: "Supine hip view",
    modelHint: "Blender mp4",
    playText: "Playing Thomas Test animation.",
    endedText: "Thomas Test animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="patientArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1ba97f"></path>
          </marker>
          <marker id="thomasFindingArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#7a57d1"></path>
          </marker>
        </defs>
        <path class="sim-force-line patient" d="M78 32 L64 40"></path>
        <path class="sim-force-line finding thomas-finding-line" d="M65 80 L65 67"></path>
      </svg>
      <div class="sim-force-label patient thomas-patient-label">Patient flexes hip</div>
      <div class="sim-force-label finding thomas-finding-label">Positive: contralateral thigh flexion</div>
    `
  },
  "lachman": {
    src: "animations/Knee/lachman-test.mp4",
    playbackRate: 0.75,
    caption: "Lachman simulation",
    cameraHint: "Knee focus",
    modelHint: "Blender mp4",
    playText: "Playing Lachman animation.",
    endedText: "Lachman animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M60 32 L75 25"></path>
      </svg>
      <div class="sim-force-label examiner lachman-examiner-label">Examiner pulls tibia forward</div>
    `
  },
  "anterior drawer": {
    src: "animations/Knee/anterior-drawer-test.mp4",
    playbackRate: 0.75,
    caption: "Anterior Drawer simulation",
    cameraHint: "Knee focus",
    modelHint: "Blender mp4",
    playText: "Playing Anterior Drawer animation.",
    endedText: "Anterior Drawer animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M50 32 L65 25"></path>
      </svg>
      <div class="sim-force-label examiner ant-drawer-knee-label">Examiner pulls tibia forward</div>
    `
  },
  "posterior drawer": {
    src: "animations/Knee/posterior-drawer-test.mp4",
    playbackRate: 0.75,
    caption: "Posterior Drawer simulation",
    cameraHint: "Knee focus",
    modelHint: "Blender mp4",
    playText: "Playing Posterior Drawer animation.",
    endedText: "Posterior Drawer animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M65 25 L50 32"></path>
      </svg>
      <div class="sim-force-label examiner post-drawer-knee-label">Examiner pushes tibia back</div>
    `
  },
  "mcmurray (medial)": {
    src: "animations/Knee/mcmurray-medial.mp4",
    playbackRate: 0.60,
    caption: "McMurray Medial simulation",
    cameraHint: "Knee focus",
    modelHint: "Blender mp4",
    playText: "Playing medial McMurray animation.",
    endedText: "Medial McMurray animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M67 48 L79 55"></path>
      </svg>
      <div class="sim-force-label examiner mcmurray-medial-label">Examiner extends with ER + valgus</div>
    `
  },
  "mcmurray (lateral)": {
    src: "animations/Knee/mcmurray-lateral.mp4",
    playbackRate: 0.60,
    caption: "McMurray Lateral simulation",
    cameraHint: "Knee focus",
    modelHint: "Blender mp4",
    playText: "Playing lateral McMurray animation.",
    endedText: "Lateral McMurray animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M67 70 L79 62"></path>
      </svg>
      <div class="sim-force-label examiner mcmurray-lateral-label">Examiner extends with IR + varus</div>
    `
  },
  "anterior drawer (ankle)": {
    src: "animations/Ankle/anterior-drawer-ankle.mp4",
    playbackRate: 0.75,
    caption: "Anterior Drawer Ankle simulation",
    cameraHint: "Ankle focus",
    modelHint: "Blender mp4",
    playText: "Playing anterior drawer ankle animation.",
    endedText: "Anterior drawer ankle animation complete. Click Replay to watch it again.",
    forceOverlay: `
      <svg class="sim-force-svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <marker id="examinerArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#d94b52"></path>
          </marker>
        </defs>
        <path class="sim-force-line examiner" d="M50 72 L65 60"></path>
      </svg>
      <div class="sim-force-label examiner ankle-drawer-label">Examiner pulls heel forward</div>
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
      "Choose a region and then a test. The simulation lab only shows tests that already have finished animation assets wired in."
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
      "Select an animated test from the list to preview the mapped simulation clip and arrow overlay."
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
  video.playbackRate = config.playbackRate || 1;
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
  const tests = (exam?.special_tests || []).filter((test) => TEST_VIDEO_CONFIG[normalizeTestName(testDisplayName(test))]);

  if (!tests.length) {
    testListEl.innerHTML = `<div class="list-group-item">No animated tests available for this region yet.</div>`;
    testDetailEl.textContent = "Only tests with finished animation assets appear in the simulation lab.";
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

      showTestVideo(testName);
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
