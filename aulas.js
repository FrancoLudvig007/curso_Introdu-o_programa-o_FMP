/* ═══════════════════════════════════════════════════
   MOTOR DE SLIDES — compartilhado pelas 14 aulas
   Navegação, escala, rodapés automáticos, animações
   ═══════════════════════════════════════════════════ */

/* ── Sprite de ícones (injetado uma vez por página) ── */
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-python" viewBox="0 0 24 24"><path d="M12 2.5c-2.8 0-4.4.9-4.4 2.9v2.4h4.7v.9H4.8c-2 0-3.3 1.4-3.3 3.6s1.3 3.6 3.3 3.6h1.9v-2.5c0-1.6 1.3-2.9 2.9-2.9h4c1.6 0 2.9-1.3 2.9-2.9V5.4c0-2-1.6-2.9-4.4-2.9z"/><circle cx="9.8" cy="5.3" r="1" fill="currentColor" stroke="none"/><path d="M12 21.5c2.8 0 4.4-.9 4.4-2.9v-2.4h-4.7v-.9h7.5c2 0 3.3-1.4 3.3-3.6s-1.3-3.6-3.3-3.6h-1.9v2.5c0 1.6-1.3 2.9-2.9 2.9h-4c-1.6 0-2.9 1.3-2.9 2.9v4.2c0 2 1.6 2.9 4.5 2.9z"/><circle cx="14.2" cy="18.7" r="1" fill="currentColor" stroke="none"/></symbol>
  <symbol id="i-list" viewBox="0 0 24 24"><line x1="9" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="9" y1="18" x2="21" y2="18"/><line x1="3.5" y1="6" x2="3.6" y2="6"/><line x1="3.5" y1="12" x2="3.6" y2="12"/><line x1="3.5" y1="18" x2="3.6" y2="18"/></symbol>
  <symbol id="i-cpu" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1.5" x2="9" y2="4"/><line x1="15" y1="1.5" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22.5"/><line x1="15" y1="20" x2="15" y2="22.5"/><line x1="20" y1="9" x2="22.5" y2="9"/><line x1="20" y1="15" x2="22.5" y2="15"/><line x1="1.5" y1="9" x2="4" y2="9"/><line x1="1.5" y1="15" x2="4" y2="15"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></symbol>
  <symbol id="i-hash" viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M22 11.1V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></symbol>
  <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1"/></symbol>
  <symbol id="i-eye" viewBox="0 0 24 24"><path d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-terminal" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></symbol>
  <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="2" y="3.5" width="20" height="13.5" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></symbol>
  <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="17" rx="2"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="3" y1="10" x2="21" y2="10"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7.5"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></symbol>
  <symbol id="i-table" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="10" x2="12" y2="20"/></symbol>
  <symbol id="i-sitemap" viewBox="0 0 24 24"><rect x="9" y="2.5" width="6" height="5" rx="1"/><rect x="2.5" y="16.5" width="6" height="5" rx="1"/><rect x="15.5" y="16.5" width="6" height="5" rx="1"/><path d="M12 7.5V13M5.5 16.5V13h13v3.5"/></symbol>
  <symbol id="i-repeat" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></symbol>
  <symbol id="i-edit" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M2 3.5h6a4 4 0 0 1 4 4V21a3 3 0 0 0-3-3H2z"/><path d="M22 3.5h-6a4 4 0 0 0-4 4V21a3 3 0 0 1 3-3h7z"/></symbol>
  <symbol id="i-map" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><polyline points="12 7 12 12 15.5 14"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><line x1="10.5" y1="18.5" x2="13.5" y2="18.5"/></symbol>
  <symbol id="i-card" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></symbol>
  <symbol id="i-traffic" viewBox="0 0 24 24"><rect x="8.5" y="2" width="7" height="20" rx="3.5"/><circle cx="12" cy="7" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="12" cy="17" r="1.3"/></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></symbol>
  <symbol id="i-key" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.8 12.2 21 2m-4 4 3 3m-6 0 2.5 2.5"/></symbol>
  <symbol id="i-comment" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></symbol>
  <symbol id="i-zap" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
  <symbol id="i-bulb" viewBox="0 0 24 24"><path d="M9 18h6M10 21.5h4M12 2.5a6.5 6.5 0 0 0-3.7 11.8c.7.5 1.2 1.4 1.2 2.2v.5h5v-.5c0-.8.5-1.7 1.2-2.2A6.5 6.5 0 0 0 12 2.5z"/></symbol>
  <symbol id="i-percent" viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.8" cy="6.8" r="2.6"/><circle cx="17.2" cy="17.2" r="2.6"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24"><path d="M21 8.5v8l-9 5-9-5v-8l9-5z"/><polyline points="3.3 8.7 12 13.5 20.7 8.7"/><line x1="12" y1="13.5" x2="12" y2="21.5"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/></symbol>
  <symbol id="i-forward" viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.5 5.8 21 7 14 2 9.3 9 8.5 12 2"/></symbol>
  <symbol id="i-db" viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="8.5" ry="3"/><path d="M3.5 5.5V18.5c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V5.5"/><path d="M3.5 12c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></symbol>
</svg>`;

document.body.insertAdjacentHTML("afterbegin", SPRITE);

/* ── Configuração ───────────────────────────────── */
const aulaNum = document.body.dataset.aula || "";
const slides  = Array.from(document.querySelectorAll(".slide"));
const stage   = document.getElementById("stage");
const bar     = document.getElementById("pbar");
const cnt     = document.getElementById("cnt");
let current   = 0;

const pad = n => String(n).padStart(2, "0");

/* ── Rodapés automáticos (exceto capa e encerramento) ── */
slides.forEach(slide => {
  if (!slide.classList.contains("cover") && !slide.classList.contains("bye")) {
    slide.insertAdjacentHTML("beforeend",
      `<footer class="foot"><span>Programação para Iniciantes · FMP · Aula ${pad(aulaNum)}</span><span class="pg"></span></footer>`);
  }
});

/* ── Animações: marca os filhos de cada slide ───── */
slides.forEach(slide => {
  Array.from(slide.children)
    .filter(el => !el.classList.contains("orb") && !el.classList.contains("foot"))
    .forEach(el => el.classList.add("fx"));
});

/* ── Navegação ──────────────────────────────────── */
function goTo(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));

  slides.forEach((s, i) => s.classList.toggle("is-active", i === current));

  const total = slides.length;
  bar.style.width = ((current + 1) / total * 100) + "%";
  cnt.textContent = `${pad(current + 1)} / ${pad(total)}`;

  const slide = slides[current];
  slide.querySelectorAll(".pg").forEach(el => el.textContent = `${pad(current + 1)} / ${pad(total)}`);

  /* reinicia as animações do slide ativo, em cascata */
  slide.querySelectorAll(".fx").forEach((el, i) => {
    el.style.animation = "none";
    el.style.animationDelay = (i * 0.06) + "s";
    void el.offsetWidth;           /* força reflow para reanimar */
    el.style.animation = "";
  });
}

/* ── Escala responsiva do palco 1280×720 ────────── */
function fit() {
  const scale = Math.min(innerWidth / 1330, innerHeight / 800);
  stage.style.transform = `scale(${scale})`;
}

/* ── Eventos ────────────────────────────────────── */
document.getElementById("next").addEventListener("click", () => goTo(current + 1));
document.getElementById("prev").addEventListener("click", () => goTo(current - 1));

document.addEventListener("keydown", e => {
  if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); goTo(current + 1); }
  else if (["ArrowLeft", "PageUp"].includes(e.key))    { e.preventDefault(); goTo(current - 1); }
  else if (e.key === "Home") goTo(0);
  else if (e.key === "End")  goTo(slides.length - 1);
  else if (e.key.toLowerCase() === "f") {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  }
  else if (e.key === "Escape") location.href = "index.html";
});

/* suporte a toque (swipe) */
let touchX = 0;
document.addEventListener("touchstart", e => touchX = e.touches[0].clientX, { passive: true });
document.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
});

addEventListener("resize", fit);

/* ── Inicialização ──────────────────────────────── */
fit();
goTo(0);