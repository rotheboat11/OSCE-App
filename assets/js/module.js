const moduleParams = new URLSearchParams(window.location.search);
const moduleKey = moduleParams.get("module");
const submoduleKey = moduleParams.get("submodule");
const RELEASED_INTERNAL_MODULES = ["cardiovascular", "respiratory", "gastrointestinal", "neurology", "psychiatry"];
const rootModuleData = moduleKey && RELEASED_INTERNAL_MODULES.includes(moduleKey)
  ? window.INTERNAL_MODULES?.[moduleKey]
  : null;

const titleEl = document.getElementById("moduleTitle");
const descriptionEl = document.getElementById("moduleDescription");
const gridEl = document.getElementById("moduleGrid");
const actionsEl = document.getElementById("moduleActions");

function renderExamCards(exams) {
  return Object.entries(exams)
    .map(([examKey, exam]) => renderExamCard(examKey, exam))
    .join("");
}

function renderExamCard(examKey, exam) {
  return `
      <div class="col-12 col-md-6 mb-3">
        <div class="card exam-card h-100" role="button" onclick="location.href='internal_exam.html?module=${encodeURIComponent(moduleKey)}${submoduleKey ? `&submodule=${encodeURIComponent(submoduleKey)}` : ""}&exam=${encodeURIComponent(examKey)}'">
          <div class="card-body">
            <h5 class="card-title mb-2">${exam.name}</h5>
            <p class="card-text small mb-3">${exam.description}</p>
            <a href="internal_exam.html?module=${encodeURIComponent(moduleKey)}${submoduleKey ? `&submodule=${encodeURIComponent(submoduleKey)}` : ""}&exam=${encodeURIComponent(examKey)}" class="btn btn-primary btn-sm" onclick="event.stopPropagation();">Study</a>
          </div>
        </div>
      </div>
    `;
}

function renderSubmoduleCards(submodules) {
  return Object.entries(submodules)
    .map(([childKey, child]) => renderSubmoduleCard(childKey, child))
    .join("");
}

function renderSubmoduleCard(childKey, child) {
  return `
      <div class="col-12 col-md-6 mb-3">
        <div class="card exam-card h-100" role="button" onclick="location.href='module.html?module=${encodeURIComponent(moduleKey)}&submodule=${encodeURIComponent(childKey)}'">
          <div class="card-body">
            <h5 class="card-title mb-2">${child.title}</h5>
            <p class="card-text small mb-3">${child.description}</p>
            <a href="module.html?module=${encodeURIComponent(moduleKey)}&submodule=${encodeURIComponent(childKey)}" class="btn btn-outline-primary btn-sm" onclick="event.stopPropagation();">Open Section</a>
          </div>
        </div>
      </div>
    `;
}

function renderRootCards(moduleData) {
  if (Array.isArray(moduleData.display_order) && moduleData.display_order.length) {
    return moduleData.display_order
      .map((entry) => {
        const [kind, key] = String(entry).split(":");
        if (kind === "exam" && moduleData.exams?.[key]) {
          return renderExamCard(key, moduleData.exams[key]);
        }
        if (kind === "submodule" && moduleData.submodules?.[key]) {
          return renderSubmoduleCard(key, moduleData.submodules[key]);
        }
        return "";
      })
      .join("");
  }

  const examCards = renderExamCards(moduleData.exams || {});
  const submoduleCards = renderSubmoduleCards(moduleData.submodules || {});
  return examCards + submoduleCards;
}

if (!rootModuleData) {
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
  if (submoduleKey) {
    const submodule = rootModuleData.submodules?.[submoduleKey];

    if (!submodule) {
      titleEl.textContent = "Section Not Found";
      descriptionEl.textContent = "This section is not available in the current release.";
      gridEl.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger mb-0">
            This section is currently unavailable. Return to <a href="module.html?module=${encodeURIComponent(moduleKey)}">${rootModuleData.title}</a>.
          </div>
        </div>
      `;
    } else {
      titleEl.textContent = submodule.title;
      descriptionEl.textContent = submodule.description;
      if (actionsEl) {
        actionsEl.innerHTML = `<a class="btn btn-outline-secondary btn-sm" href="module.html?module=${encodeURIComponent(moduleKey)}">Back to ${rootModuleData.title}</a>`;
      }
      gridEl.innerHTML = renderExamCards(submodule.exams || {});
    }
  } else {
    titleEl.textContent = rootModuleData.title;
    descriptionEl.textContent = rootModuleData.description;
    gridEl.innerHTML = renderRootCards(rootModuleData);
  }
}
