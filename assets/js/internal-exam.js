const params = new URLSearchParams(window.location.search);
const moduleKey = params.get("module");
const submoduleKey = params.get("submodule");
const examKey = params.get("exam");
const RELEASED_INTERNAL_MODULES = ["cardiovascular", "respiratory", "gastrointestinal", "neurology", "psychiatry"];
const rootModuleData = moduleKey && RELEASED_INTERNAL_MODULES.includes(moduleKey)
  ? window.INTERNAL_MODULES?.[moduleKey]
  : null;

const contentEl = document.getElementById("content");
const moduleHomeLink = document.getElementById("moduleHomeLink");

function findExamRecord(moduleData, targetExamKey) {
  if (!moduleData || !targetExamKey) return null;

  if (moduleData.exams?.[targetExamKey]) {
    return {
      exam: moduleData.exams[targetExamKey],
      submoduleKey: null
    };
  }

  for (const [childKey, child] of Object.entries(moduleData.submodules || {})) {
    if (child?.exams?.[targetExamKey]) {
      return {
        exam: child.exams[targetExamKey],
        submoduleKey: childKey
      };
    }
  }

  return null;
}

const resolvedExamRecord = findExamRecord(rootModuleData, examKey);
const exam = resolvedExamRecord?.exam || null;
const resolvedSubmoduleKey = submoduleKey || resolvedExamRecord?.submoduleKey || null;

if (moduleHomeLink && moduleKey) {
  moduleHomeLink.href = `module.html?module=${encodeURIComponent(moduleKey)}${resolvedSubmoduleKey ? `&submodule=${encodeURIComponent(resolvedSubmoduleKey)}` : ""}`;
}

const escapeHtml = (str) =>
  String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function formatInline(str) {
  return escapeHtml(str)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[\[(.+?)\|(.+?)\]\]/g, (_, label, targetExam) => {
      if (!moduleKey || !rootModuleData) return label;
      const targetRecord = findExamRecord(rootModuleData, targetExam);
      const href = `internal_exam.html?module=${encodeURIComponent(moduleKey)}${targetRecord?.submoduleKey ? `&submodule=${encodeURIComponent(targetRecord.submoduleKey)}` : ""}&exam=${encodeURIComponent(targetExam)}`;
      return `<a href="${href}" class="msk-inline-link">${label}</a>`;
    });
}

function renderGroupedContent(groups) {
  if (!Array.isArray(groups) || !groups.length) return "";

  return groups
    .map((group) => {
      const headingHtml = group?.heading ? `<div class="msk-subheading">${formatInline(group.heading)}</div>` : "";
      const linesHtml = Array.isArray(group?.how) && group.how.length
        ? `<ul class="mb-2">${group.how.map((line) => `<li>${formatInline(line)}</li>`).join("")}</ul>`
        : "";
      return `<div class="msk-subgroup">${headingHtml}${linesHtml}</div>`;
    })
    .join("");
}

function renderDrops(items, emptyNote, numberItems = false) {
  if (!Array.isArray(items) || !items.length) {
    return `<p class="msk-muted mb-0">${formatInline(emptyNote)}</p>`;
  }

  return items
    .map((item, index) => {
      const title = item?.title || `Item ${index + 1}`;
      const prefix = numberItems ? `${index + 1}. ` : "";
      const howHtml = Array.isArray(item?.groups) && item.groups.length
        ? renderGroupedContent(item.groups)
        : Array.isArray(item?.how)
          ? `<ul class="mb-2">${item.how.map((line) => `<li>${formatInline(line)}</li>`).join("")}</ul>`
          : "";
      const pearlHtml = item?.pearl ? `<div class="mb-0"><strong>Pearl:</strong> ${formatInline(item.pearl)}</div>` : "";
      return `
        <details class="msk-drop">
          <summary>${prefix}${formatInline(title)}</summary>
          <div class="msk-drop-body">${howHtml}${pearlHtml}</div>
        </details>
      `;
    })
    .join("");
}

function renderSection(title, items, emptyNote, numberItems = false, colClass = "col-12 col-lg-7 mb-4") {
  if (!Array.isArray(items) || !items.length) return "";
  return `
    <div class="${colClass} section-panel">
      <h4>${formatInline(title)}</h4>
      ${renderDrops(items, emptyNote, numberItems)}
    </div>
  `;
}

if (!rootModuleData || !exam) {
  contentEl.innerHTML = `
    <div class="alert alert-danger">
      <h4 class="mb-2">Exam not found</h4>
      <p class="mb-0">This exam is not available in the current release. Go back to <a href="title.html">Title Screen</a> and select an available module.</p>
    </div>
  `;
} else {
  const hasSteps = Array.isArray(exam.steps) && exam.steps.length;
  const hasFocus = Array.isArray(exam.focus_points) && exam.focus_points.length;
  const stepsHtml = hasSteps ? renderDrops(exam.steps, "No steps available yet.", true) : "";
  const focusHtml = hasFocus
    ? `<ul class="mb-0">${exam.focus_points.map((point) => `<li>${formatInline(point)}</li>`).join("")}</ul>`
    : "";
  const anatomySectionHtml = renderSection(exam.anatomy_landmarks_title || "Background", exam.anatomy_landmarks, "No anatomy notes listed yet.", false, "col-12 mb-4");
  const specialTestsSectionHtml = renderSection(exam.special_tests_title || "Special Tests", exam.special_tests, "No special tests listed yet.", false, "col-12 mb-4");
  const casePatternsSectionHtml = renderSection(exam.case_patterns_title || "Case Patterns", exam.case_patterns, "No case patterns listed yet.", false, "col-12 mb-4");
  const mainRowHtml = (() => {
    if (!hasSteps && !hasFocus) return "";

    if (exam.full_width_steps) {
      return `
        <div class="row">
          ${hasSteps ? `
          <div class="col-12 mb-4 section-panel">
            <h4>Systematic Steps</h4>
            ${stepsHtml}
          </div>` : ""}
          ${hasFocus ? `
          <div class="col-12 mb-4 section-panel">
            <h4>Exam Focus Points</h4>
            ${focusHtml}
          </div>` : ""}
        </div>
      `;
    }

    return `
      <div class="row">
        ${hasSteps ? `
        <div class="col-12 col-lg-7 mb-4 section-panel">
          <h4>Systematic Steps</h4>
          ${stepsHtml}
        </div>` : ""}
        ${hasFocus ? `
        <div class="col-12 col-lg-5 mb-4 section-panel">
          <h4>Exam Focus Points</h4>
          ${focusHtml}
        </div>` : ""}
      </div>
    `;
  })();
  const extraRowHtml = anatomySectionHtml || specialTestsSectionHtml || casePatternsSectionHtml
    ? `
      <div class="row">
        ${anatomySectionHtml}
        ${specialTestsSectionHtml}
        ${casePatternsSectionHtml}
      </div>
    `
    : "";

  contentEl.innerHTML = `
    <div class="row">
      <div class="col-12 section-panel">
        <h1 class="mb-2">${formatInline(exam.name)}</h1>
        <p class="text-muted">${formatInline(exam.description)}</p>
        <div class="d-flex gap-2 mb-4">
          <a class="btn btn-outline-secondary" href="module.html?module=${encodeURIComponent(moduleKey)}${resolvedSubmoduleKey ? `&submodule=${encodeURIComponent(resolvedSubmoduleKey)}` : ""}">Module Home</a>
        </div>
      </div>
    </div>
    ${mainRowHtml}
    ${extraRowHtml}
  `;
}
