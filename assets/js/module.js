const moduleParams = new URLSearchParams(window.location.search);
const moduleKey = moduleParams.get("module");
const RELEASED_INTERNAL_MODULES = ["cardiovascular", "respiratory"];
const moduleData = moduleKey && RELEASED_INTERNAL_MODULES.includes(moduleKey)
  ? window.INTERNAL_MODULES?.[moduleKey]
  : null;

const titleEl = document.getElementById("moduleTitle");
const descriptionEl = document.getElementById("moduleDescription");
const gridEl = document.getElementById("moduleGrid");

if (!moduleData) {
  titleEl.textContent = "Module Not Found";
  descriptionEl.textContent = "This module is not available in the current release.";
  gridEl.innerHTML = `
    <div class="col-12">
      <div class="alert alert-danger mb-0">
        This module is currently hidden. Return to <a href="title.html">Title Screen</a>.
      </div>
    </div>
  `;
} else {
  titleEl.textContent = moduleData.title;
  descriptionEl.textContent = moduleData.description;

  gridEl.innerHTML = Object.entries(moduleData.exams)
    .map(([examKey, exam]) => `
      <div class="col-12 col-md-6 mb-3">
        <div class="card exam-card h-100" role="button" onclick="location.href='internal_exam.html?module=${encodeURIComponent(moduleKey)}&exam=${encodeURIComponent(examKey)}'">
          <div class="card-body">
            <h5 class="card-title mb-2">${exam.name}</h5>
            <p class="card-text small mb-3">${exam.description}</p>
            <a href="internal_exam.html?module=${encodeURIComponent(moduleKey)}&exam=${encodeURIComponent(examKey)}" class="btn btn-primary btn-sm" onclick="event.stopPropagation();">Study</a>
          </div>
        </div>
      </div>
    `)
    .join("");
}
