const hubOrder = [
  "cardiovascular",
  "respiratory",
  "gastrointestinal",
  "neurology",
  "psychiatry"
];

const hubGrid = document.getElementById("hubGrid");

hubGrid.innerHTML = hubOrder
  .filter((key) => window.INTERNAL_MODULES?.[key])
  .map((key) => {
    const module = window.INTERNAL_MODULES[key];
    return `
      <div class="col-12 col-md-6 mb-3">
        <div class="card exam-card h-100" role="button" onclick="location.href='module.html?module=${encodeURIComponent(key)}'">
          <div class="card-body">
            <h5 class="card-title mb-2">${module.title}</h5>
            <p class="card-text small mb-3">${module.description}</p>
            <a href="module.html?module=${encodeURIComponent(key)}" class="btn btn-primary btn-sm" onclick="event.stopPropagation();">Open Module</a>
          </div>
        </div>
      </div>
    `;
  })
  .join("");
