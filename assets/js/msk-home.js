const grid = document.getElementById("examGrid");
const searchBox = document.getElementById("globalSearch");

const norm = (s) => String(s ?? "").toLowerCase().trim();

function cardHtml(key, exam) {
  const img = window.EXAM_IMAGES?.[key];
  const q = norm(searchBox?.value);
  const studyHref = q
    ? `exam.html?exam=${encodeURIComponent(key)}&q=${encodeURIComponent(q)}`
    : `exam.html?exam=${encodeURIComponent(key)}`;
  const quizHref = `quiz.html?exam=${encodeURIComponent(key)}`;

  return `
    <div class="col-12 col-md-6 mb-3">
      <div class="card exam-card h-100" role="button" onclick="location.href='${studyHref}'">
        <div class="card-body d-flex align-items-center">
          <div class="exam-icon me-2 me-md-3">
            <img src="${img}" alt="${exam.name}" class="anatomy-image"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="fallback-icon" style="display:none; font-size: 2rem;">${window.fallbackEmojiForExam(key)}</div>
          </div>
          <div class="flex-grow-1">
            <h5 class="card-title mb-2">${exam.name}</h5>
            <p class="card-text small mb-2">${exam.description}</p>
            <div class="d-flex gap-2">
              <a href="${studyHref}" class="btn btn-primary btn-sm" onclick="event.stopPropagation();">Study</a>
              <a href="${quizHref}" class="btn btn-outline-primary btn-sm" onclick="event.stopPropagation();">Quiz</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function examTextBlob(exam) {
  const parts = [];
  parts.push(exam?.name ?? "");
  parts.push(exam?.description ?? "");

  const pushArray = (arr) => {
    if (!Array.isArray(arr)) return;

    for (const item of arr) {
      if (!item) continue;

      if (typeof item === "string") {
        parts.push(item);
        continue;
      }

      if (typeof item === "object") {
        parts.push(
          item.title ?? "",
          item.name ?? "",
          item.detail ?? "",
          item.positive ?? "",
          item.pearl ?? ""
        );

        if (Array.isArray(item.how)) {
          parts.push(item.how.join(" "));
        }
      }
    }
  };

  pushArray(exam.steps);
  pushArray(exam.special_tests);

  return norm(parts.join(" "));
}

function renderGrid() {
  const q = norm(searchBox?.value);

  const entries = Object.entries(window.MSK_EXAMS || {}).filter(([, exam]) => {
    if (!q) return true;
    const hay = examTextBlob(exam);
    return hay.includes(q);
  });

  if (!entries.length) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="alert alert-secondary mb-0">No matches found.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = entries.map(([k, v]) => cardHtml(k, v)).join("");
}

searchBox?.addEventListener("input", renderGrid);
renderGrid();
