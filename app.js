/* ═══════════════════════════════════════════════════
   PORTAL — dados das 14 aulas, vitrine, busca e modal
   ═══════════════════════════════════════════════════ */

/* ── Catálogo das aulas ─────────────────────────── */
const AULAS = [
  { n: 1,  fase: "Fundamentos",            faseGold: false, titulo: "Introdução à Programação e ao Pensamento Computacional",
    desc: "O que significa programar, como a máquina processa informação e por que a lógica vem antes da linguagem.",
    tags: ["Pensamento computacional", "Hardware × Software", "Binário"],            data: "Qua · 14/10/2026", arquivo: "aula1.html" },
  { n: 2,  fase: "Fundamentos",            faseGold: false, titulo: "Lógica de Programação",
    desc: "Transformar um pedido vago em passos organizados, com decomposição e fluxogramas antes do código.",
    tags: ["Decomposição", "Algoritmo", "Fluxograma"],                               data: "Seg · 19/10/2026", arquivo: "aula2.html" },
  { n: 3,  fase: "Fundamentos",            faseGold: false, titulo: "Algoritmos e Apresentação do Python",
    desc: "Definição formal de algoritmo, decomposição extrema, literalidade da máquina e o visual do código Python.",
    tags: ["Algoritmo", "Zen of Python", "Python × C++"],                            data: "Qua · 21/10/2026", arquivo: "aula3.html" },
  { n: 4,  fase: "Dados e Operações",      faseGold: false, titulo: "Variáveis, Constantes e Tipos de Dados",
    desc: "Onde as informações ficam durante a execução: int, float, str, bool e a natureza da tipagem dinâmica.",
    tags: ["int · float · str · bool", "type()", "snake_case"],                      data: "Seg · 26/10/2026", arquivo: "aula4.html" },
  { n: 5,  fase: "Dados e Operações",      faseGold: false, titulo: "Operadores e Entrada, Processamento e Saída",
    desc: "Aritméticos, relacionais e lógicos; input(), print(), conversão de tipos e o ciclo E→P→S.",
    tags: ["+ − * / // % **", "input()", "f-string"],                                data: "Qua · 28/10/2026", arquivo: "aula5.html" },
  { n: 6,  fase: "Decisões e Depuração",   faseGold: false, titulo: "Estruturas de Decisão",
    desc: "Condicionais simples e compostas: if, else e elif — programas que escolhem caminhos.",
    tags: ["if · else · elif", "Indentação", "Ordem das condições"],                 data: "Qua · 04/11/2026*", arquivo: "aula6.html" },
  { n: 7,  fase: "Decisões e Depuração",   faseGold: false, titulo: "Depuração e Tratamento de Erros",
    desc: "Erros de sintaxe, execução e lógica; leitura de traceback; try, except e ValueError.",
    tags: ["Debugging", "try / except", "ValueError"],                               data: "Seg · 09/11/2026", arquivo: "aula7.html" },
  { n: 8,  fase: "Repetições",             faseGold: false, titulo: "Estruturas de Repetição I — while",
    desc: "Laço while, variáveis contadoras e acumuladoras e prevenção de loops infinitos.",
    tags: ["while", "Contadores", "Acumuladores"],                                   data: "Qua · 11/11/2026", arquivo: "aula8.html" },
  { n: 9,  fase: "Repetições",             faseGold: false, titulo: "Estruturas de Repetição II — for e range()",
    desc: "Laço for e a função range() para iterações de quantidade definida — e a tabuada.",
    tags: ["for", "range()", "Contagem definida"],                                   data: "Seg · 16/11/2026", arquivo: "aula9.html" },
  { n: 10, fase: "Repetições",             faseGold: false, titulo: "Combinação de Estruturas",
    desc: "Decisão + repetição: validação de entrada, menus interativos e laços aninhados.",
    tags: ["Validação", "Menus", "Laços aninhados"],                                 data: "Qua · 18/11/2026", arquivo: "aula10.html" },
  { n: 11, fase: "Listas e Integração",    faseGold: false, titulo: "Estruturas de Dados — Listas",
    desc: "Criação, acesso, manipulação e iteração de listas para armazenar múltiplos valores.",
    tags: ["Listas", "append · remove", "len()"],                                    data: "Seg · 23/11/2026", arquivo: "aula11.html" },
  { n: 12, fase: "Projeto Final",          faseGold: true,  titulo: "Oficina Integrada e Temas do Projeto Final",
    desc: "Resolução de problemas integrados e definição do tema: IMC, RPG em texto ou reservas de restaurante.",
    tags: ["IMC", "RPG texto", "Reservas"],                                          data: "Qua · 25/11/2026", arquivo: "aula12.html" },
  { n: 13, fase: "Projeto Final",          faseGold: true,  titulo: "Projeto Final — Planejamento e Desenvolvimento",
    desc: "Definição de escopo e lógica (ou aprimoramento do que já existe) e desenvolvimento assistido.",
    tags: ["Escopo", "Código incremental", "Debugging"],                             data: "Seg · 30/11/2026", arquivo: "aula13.html" },
  { n: 14, fase: "Projeto Final",          faseGold: true,  titulo: "Projeto Final — Apresentação e Encerramento",
    desc: "Apresentação das soluções, testes de funcionamento, avaliação e encerramento do curso.",
    tags: ["Demonstração", "Avaliação", "Certificação"],                             data: "Qua · 02/12/2026", arquivo: "aula14.html" }
];

/* ── Renderização da vitrine ────────────────────── */
function renderCards(filtro = "") {
  const termo = filtro.trim().toLowerCase();
  const container = document.getElementById("cards");
  container.innerHTML = "";

  AULAS
    .filter(a => !termo || `${a.titulo} ${a.desc} ${a.tags.join(" ")} ${a.fase}`.toLowerCase().includes(termo))
    .forEach((a, i) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.animation = `card-in .5s ${i * 0.045}s both`;
      card.innerHTML = `
        <div class="card-thumb"><span class="num">${String(a.n).padStart(2, "0")}</span><span class="lbl">Aula</span></div>
        <div class="card-body">
          <span class="card-phase ${a.faseGold ? "gold" : ""}">${a.fase}</span>
          <h3 class="card-title">${a.titulo}</h3>
          <p class="card-desc">${a.desc}</p>
          <div class="card-tags">${a.tags.map(t => `<span>${t}</span>`).join("")}</div>
        </div>
        <div class="card-foot">
          <div class="card-date">Presencial · 11h10–12h30<b>${a.data}</b></div>
          <a class="card-btn" href="${a.arquivo}">Abrir aula →</a>
        </div>`;
      container.appendChild(card);
    });
}

/* ── Navegação entre visões ─────────────────────── */
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("is-active"));
  document.getElementById(`view-${name}`).classList.add("is-active");
  document.querySelectorAll(".nav-btn[data-view]").forEach(b =>
    b.classList.toggle("is-active", b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach(el =>
  el.addEventListener("click", () => showView(el.dataset.view)));

/* ── Busca ──────────────────────────────────────── */
document.getElementById("search").addEventListener("input", e => renderCards(e.target.value));

/* ── Modal de informações ───────────────────────── */
const modal = document.getElementById("modal-info");

function openModal()  { modal.hidden = false; document.body.style.overflow = "hidden"; }
function closeModal() { modal.hidden = true;  document.body.style.overflow = ""; }

document.getElementById("open-info").addEventListener("click", openModal);
document.getElementById("open-info-2").addEventListener("click", openModal);
modal.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* ── Inicialização ──────────────────────────────── */
renderCards();

/* animação de entrada dos cards */
const style = document.createElement("style");
style.textContent = "@keyframes card-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}";
document.head.appendChild(style);