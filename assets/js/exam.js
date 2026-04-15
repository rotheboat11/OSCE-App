const params = new URLSearchParams(location.search);
const key = params.get("exam");
const exam = key ? window.MSK_EXAMS[key] : null;

const el = document.getElementById("content");

const highlightInElement = (root, query) => {
  if (!query) return;

  const q = query.toLowerCase();

  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const idx = text.toLowerCase().indexOf(q);
      if (idx === -1) return;

      const span = document.createElement("span");
      span.innerHTML =
        text.slice(0, idx) +
        `<mark class="msk-hl">${text.slice(idx, idx + q.length)}</mark>` +
        text.slice(idx + q.length);

      node.replaceWith(span);
      return;
    }

    if (
      node.nodeType === Node.ELEMENT_NODE &&
      !["SCRIPT", "STYLE", "MARK"].includes(node.tagName)
    ) {
      [...node.childNodes].forEach(walk);
    }
  };

  walk(root);
};

const escapeHtml = (str) =>
  String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function makeDrops(arr, emptyNote, numberItems = false) {
  if (!arr || !arr.length) return `<p class="msk-muted mb-0">${escapeHtml(emptyNote)}</p>`;

  const asList = (items) => {
    if (!items || !items.length) return "";
    const lis = items.map((x) => `<li>${escapeHtml(x)}</li>`).join("");
    return `<ul class="mb-2">${lis}</ul>`;
  };

  return arr
    .map((raw, i) => {
      if (raw && typeof raw === "object") {
        const titleCore = raw.title || raw.name || `Item ${i + 1}`;
        const prefix = numberItems ? `${i + 1}. ` : "";
        const summaryText = `${prefix}${escapeHtml(titleCore)}`;

        const howHtml = raw.how ? `<div class="mb-2"><strong>How:</strong>${asList(raw.how)}</div>` : "";
        const positiveHtml = raw.positive
          ? `<div class="mb-2"><strong>Positive:</strong> ${escapeHtml(raw.positive)}</div>`
          : "";
        const pearlHtml = raw.pearl ? `<div class="mb-0"><strong>Pearl:</strong> ${escapeHtml(raw.pearl)}</div>` : "";
        const detailHtml = raw.detail ? `<div class="mb-2">${escapeHtml(raw.detail)}</div>` : "";
        const imgHtml = raw.image
          ? `<img class="test-img" src="${escapeHtml(raw.image)}" alt="${escapeHtml(titleCore)} illustration" loading="lazy">`
          : "";

        const bodyInner =
          `${imgHtml}${detailHtml}${howHtml}${positiveHtml}${pearlHtml}`.trim() ||
          `<div class="msk-muted">N/A.</div>`;
        return `<details class="msk-drop"><summary>${summaryText}</summary><div class="msk-drop-body">${bodyInner}</div></details>`;
      }

      const s = String(raw ?? "");
      const parts = s.split(" - ");
      const titleCore = parts[0] ?? s;
      const detail = parts.length > 1 ? parts.slice(1).join(" - ") : "";
      const prefix = numberItems ? `${i + 1}. ` : "";
      const summaryText = `${prefix}${escapeHtml(titleCore)}`;

      const bodyInner = detail
        ? `${escapeHtml(detail)}`
        : `<div class="msk-muted">N/A. (Tip: you can write items like <code>Test Name - what it assesses + how to do it</code>.)</div>`;

      return `<details class="msk-drop"><summary>${summaryText}</summary><div class="msk-drop-body">${bodyInner}</div></details>`;
    })
    .join("");
}

if (!exam) {
  el.innerHTML = `
    <div class="alert alert-danger">
      <h4 class="mb-2">Exam not found</h4>
      <p class="mb-0">Go back to <a href="msk.html">MSK Home</a>.</p>
    </div>`;
} else {
  const steps = makeDrops(exam.steps, "N/A.", true);
  const tests = makeDrops(exam.special_tests, "N/A.", false);

  el.innerHTML = `
    <div class="row">
      <div class="col-12 section-panel">
        <h1 class="mb-2">${exam.name}</h1>
        <p class="text-muted">${exam.description}</p>
        <div class="d-flex gap-2 mb-4">
          <a class="btn btn-outline-secondary" href="msk.html">MSK Home</a>
          <a class="btn btn-primary" href="quiz.html?exam=${encodeURIComponent(key)}">Take Quiz</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-lg-7 mb-4 section-panel">
        <h4>Systematic Steps</h4>
        ${steps}
      </div>
      <div class="col-12 col-lg-5 mb-4 section-panel">
        <h4>Common Special Tests</h4>
        ${tests}
      </div>
    </div>
  `;
}

const qParam = params.get("q") || "";
if (exam && qParam) {
  highlightInElement(el, qParam);

  const qLower = qParam.toLowerCase();
  const drops = el.querySelectorAll("details.msk-drop");
  drops.forEach((d) => {
    if (d.textContent.toLowerCase().includes(qLower)) d.open = true;
  });

  const first = el.querySelector("mark.msk-hl");
  if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
}
