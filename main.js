(function () {
  "use strict";

  let currentLang = "en";

  // ── Language toggle ──────────────────────────
  const toggle = document.getElementById("langToggle");

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "cz" ? "cs" : "en";

    document.querySelectorAll("[data-en][data-cz]").forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang);
    });

    toggle.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });
  }

  toggle.addEventListener("click", function (e) {
    var target = e.target.closest(".lang-option");
    if (target) {
      setLang(target.getAttribute("data-lang"));
    } else {
      setLang(currentLang === "en" ? "cz" : "en");
    }
  });

  // ── PDF download ─────────────────────────────
  document.getElementById("downloadPdf").addEventListener("click", function () {
    window.print();
  });

  // ── Unfold / collapse job details ────────
  document.querySelectorAll(".unfold-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var taskList = btn.nextElementSibling;
      var isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isExpanded));
      taskList.classList.toggle("collapsed");
      btn.firstChild.textContent = isExpanded ? "▸ " : "▾ ";
    });
  });

  // ── QR code modal ────────────────────────────
  var qrOverlay = document.getElementById("qrOverlay");

  document.getElementById("showQr").addEventListener("click", function () {
    qrOverlay.hidden = false;
  });

  document.getElementById("qrClose").addEventListener("click", function () {
    qrOverlay.hidden = true;
  });

  qrOverlay.addEventListener("click", function (e) {
    if (e.target === qrOverlay) qrOverlay.hidden = true;
  });
})();
