const params = new URLSearchParams(window.location.search);
const moduleKey = params.get("module");
const examKey = params.get("exam");
const RELEASED_INTERNAL_MODULES = ["cardiovascular", "respiratory"];
const moduleData = moduleKey && RELEASED_INTERNAL_MODULES.includes(moduleKey)
  ? window.INTERNAL_MODULES?.[moduleKey]
  : null;
const exam = examKey ? moduleData?.exams?.[examKey] : null;

const contentEl = document.getElementById("content");
const moduleHomeLink = document.getElementById("moduleHomeLink");

if (moduleHomeLink && moduleKey) {
  moduleHomeLink.href = `module.html?module=${encodeURIComponent(moduleKey)}`;
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
      if (!moduleKey) return label;
      const href = `internal_exam.html?module=${encodeURIComponent(moduleKey)}&exam=${encodeURIComponent(targetExam)}`;
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

if (!moduleData || !exam) {
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
  const anatomySectionHtml = renderSection("Background", exam.anatomy_landmarks, "No anatomy notes listed yet.", false, "col-12 mb-4");
  const specialTestsSectionHtml = renderSection("Special Tests", exam.special_tests, "No special tests listed yet.", false, "col-12 mb-4");
  const casePatternsSectionHtml = renderSection("Special Respiratory OSCE Cases", exam.case_patterns, "No case patterns listed yet.", false, "col-12 mb-4");
  const mainRowHtml = hasSteps || hasFocus
    ? `
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
    `
    : "";
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
          <a class="btn btn-outline-secondary" href="module.html?module=${encodeURIComponent(moduleKey)}">Module Home</a>
        </div>
      </div>
    </div>
    ${mainRowHtml}
    ${extraRowHtml}
  `;
}
