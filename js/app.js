/* ================================================================
   app.js — StudyTab × AKTU
   Handles: mobile nav, semester tabs, subject grid, unit modal
   ================================================================ */

// ─── Shared nav toggle ───────────────────────────────────────────
const navToggle = document.querySelector(".nav-toggle");
const navLinks  = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
}

// ─── HOMEPAGE — semester tabs + subject cards ────────────────────
function initHomePage() {
  const semTabsEl = document.getElementById("sem-tabs");
  const gridEl    = document.getElementById("subject-grid");
  const searchEl  = document.getElementById("subject-search");

  if (!semTabsEl || !gridEl || typeof AKTU_SUBJECTS === "undefined") return;

  const semKeys  = Object.keys(AKTU_SUBJECTS);
  let activeSem  = semKeys[0];
  let searchText = "";

  // Build semester tabs
  semTabsEl.innerHTML = semKeys.map((key) => {
    const sem = AKTU_SUBJECTS[key];
    return `<button class="sem-tab${key === activeSem ? " active" : ""}" data-key="${key}">
      ${sem.label}
    </button>`;
  }).join("");

  semTabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".sem-tab");
    if (!btn) return;
    activeSem = btn.dataset.key;
    semTabsEl.querySelectorAll(".sem-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid();
    // Smooth scroll the tab into view
    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });

  function renderGrid() {
    const subjects = AKTU_SUBJECTS[activeSem]?.subjects || [];
    const q = searchText.toLowerCase();

    const filtered = q
      ? subjects.filter((s) =>
          s.name.toLowerCase().includes(q) ||
          s.code.toLowerCase().includes(q) ||
          s.short.toLowerCase().includes(q)
        )
      : subjects;

    if (!filtered.length) {
      gridEl.innerHTML = `<p style="color:var(--ink-light);padding:24px 0;">
        No subjects match "${searchText}".
      </p>`;
      return;
    }

    gridEl.innerHTML = filtered.map((s) => `
      <div class="subject-card" data-code="${s.code}" tabindex="0" role="button"
           aria-label="Open ${s.name}">
        <div class="subject-icon">${s.icon}</div>
        <div class="subject-code">${s.code}</div>
        <div class="subject-name">${s.name}</div>
        <div class="subject-meta">
          <span>${s.units.length} Units</span>
          <span class="dot">·</span>
          <span>${s.pyqs.length} PYQ${s.pyqs.length !== 1 ? "s" : ""}</span>
        </div>
        <span class="view-btn">View notes →</span>
      </div>
    `).join("");

    // Attach click listeners
    gridEl.querySelectorAll(".subject-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.code));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(card.dataset.code);
      });
    });
  }

  if (searchEl) {
    searchEl.addEventListener("input", () => {
      searchText = searchEl.value;
      renderGrid();
    });
  }

  renderGrid();
}

// ─── UNIT MODAL ──────────────────────────────────────────────────
const overlay = document.getElementById("modal-overlay");
const sheet   = document.getElementById("modal-sheet");

function findSubject(code) {
  for (const semKey of Object.keys(AKTU_SUBJECTS)) {
    const found = AKTU_SUBJECTS[semKey].subjects.find((s) => s.code === code);
    if (found) return found;
  }
  return null;
}

function dlBtnHtml(link, label) {
  if (link) {
    return `<a href="${link}" target="_blank" rel="noopener" class="dl-btn available">
      ⬇ ${label || "Download PDF"}
    </a>`;
  }
  return `<span class="dl-btn unavailable">Coming soon</span>`;
}

function openModal(code) {
  const s = findSubject(code);
  if (!s || !sheet) return;

  const unitsHtml = s.units.map((u) => `
    <div class="unit-item">
      <div class="unit-num">U${u.no}</div>
      <div class="unit-info">
        <div class="unit-title">${u.title}</div>
        <div class="unit-sub">Unit ${u.no} · ${s.code}</div>
      </div>
      ${dlBtnHtml(u.link)}
    </div>
  `).join("");

  const pyqsHtml = s.pyqs.length
    ? `<div class="unit-section-label">Previous Year Papers (PYQs)</div>
       <div class="pyq-grid">
         ${s.pyqs.map((p) => `
           <div class="pyq-card">
             <div class="pyq-label">📄 ${p.label}</div>
             ${p.link
               ? `<a href="${p.link}" target="_blank" rel="noopener" class="pyq-dl-btn available">⬇ Download</a>`
               : `<span class="pyq-dl-btn unavailable">Coming soon</span>`}
           </div>
         `).join("")}
       </div>`
    : "";

  sheet.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-group">
        <div class="modal-code">${s.code} · AKTU B.Tech CSE</div>
        <div class="modal-title">${s.icon} ${s.name}</div>
      </div>
      <button class="modal-close" aria-label="Close" id="modal-close-btn">✕</button>
    </div>
    <div class="modal-body">
      <div class="unit-section-label">Unit-wise Notes</div>
      <div class="units-list">${unitsHtml}</div>
      ${pyqsHtml}
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
}

function closeModal() {
  overlay?.classList.remove("open");
  document.body.style.overflow = "";
}

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ─── Init ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
});
