const params = new URLSearchParams(window.location.search);
const moduleKey = params.get("module");
const examKey = params.get("exam");
const moduleData = moduleKey ? window.INTERNAL_MODULES?.[moduleKey] : null;
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

function renderDrops(items, emptyNote, numberItems = false) {
  if (!Array.isArray(items) || !items.length) {
    return `<p class="msk-muted mb-0">${escapeHtml(emptyNote)}</p>`;
  }

  return items
    .map((item, index) => {
      const title = item?.title || `Item ${index + 1}`;
      const prefix = numberItems ? `${index + 1}. ` : "";
      const howHtml = Array.isArray(item?.how)
        ? `<ul class="mb-2">${item.how.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`
        : "";
      const pearlHtml = item?.pearl ? `<div class="mb-0"><strong>Pearl:</strong> ${escapeHtml(item.pearl)}</div>` : "";
      return `
        <details class="msk-drop">
          <summary>${prefix}${escapeHtml(title)}</summary>
          <div class="msk-drop-body">${howHtml}${pearlHtml}</div>
        </details>
      `;
    })
    .join("");
}

if (!moduleData || !exam) {
  contentEl.innerHTML = `
    <div class="alert alert-danger">
      <h4 class="mb-2">Exam not found</h4>
      <p class="mb-0">Go back to <a href="title.html">Title Screen</a> and select a valid module.</p>
    </div>
  `;
} else {
  const stepsHtml = renderDrops(exam.steps, "No steps available yet.", true);
  const focusHtml = Array.isArray(exam.focus_points) && exam.focus_points.length
    ? `<ul class="mb-0">${exam.focus_points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>`
    : `<p class="msk-muted mb-0">No focus points listed yet.</p>`;

  contentEl.innerHTML = `
    <div class="row">
      <div class="col-12 section-panel">
        <h1 class="mb-2">${escapeHtml(exam.name)}</h1>
        <p class="text-muted">${escapeHtml(exam.description)}</p>
        <div class="d-flex gap-2 mb-4">
          <a class="btn btn-outline-secondary" href="module.html?module=${encodeURIComponent(moduleKey)}">Module Home</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-7 mb-4 section-panel">
        <h4>Systematic Steps</h4>
        ${stepsHtml}
      </div>
      <div class="col-12 col-lg-5 mb-4 section-panel">
        <h4>Exam Focus Points</h4>
        ${focusHtml}
      </div>
    </div>
  `;
}
