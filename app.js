/* ---------------------------------------------------------------
   IB Basics — Flashcards
   Simple client-side flashcard study app with Deltarune stickers.
----------------------------------------------------------------*/

// Deltarune images live in assets/deltarune/.
const DELTARUNE_IMAGES = [
  "04gce5l61d5f1.gif",
  "0joaqysf3iaf1.gif",
  "1ac15091b832d1838cd540f6c65c19e6.gif",
  "4-rFiV.gif",
  "7wpinj235akb1.gif",
  "8hj3yzgf3iaf1.gif",
  "958bfl5vz8lf1.gif",
  "SjTKq_.gif",
  "burghley-deltarune.gif",
  "c1002481538379a8e7dbe4548458317e.gif",
  "c176990445309e96996f0653a9865c34.gif",
  "chapter-4-deltarune-chapter-4.gif",
  "deltarune-delta-rune.gif",
  "deltarune-krusie.gif",
  "deltarune-noelle-holiday-1.gif",
  "deltarune-noelle-holiday.gif",
  "deltarune-sneaking.gif",
  "eb8fd4743bd0f66208ca4ca914354fa4.gif",
  "got-any-susie-gifs-v0-zscypejf3iaf1.gif",
  "images-1.png",
  "images-2.png",
  "images.png",
  "lancer-deltarune.gif",
  "lps468-tenna.gif",
  "noelle-gifs-for-your-noelle-needs-v0-0kvu4p5vz8lf1.gif",
  "noelle-noelle-holiday.gif",
  "ralsei-upscaled-hd-gifs-v0-gwhvdvdsnjbf1.gif",
  "rt5vaeaaubcb1.jpg",
  "smug-face-smirk.gif",
  "susie-deltarune-1.gif",
  "susie-deltarune.gif",
  "the-funniest-faces-of-deltarune-v0-gbng83d0bst71.jpg",
  "the-funniest-faces-of-deltarune-v0-yjgo4jk0bst71.jpg",
  "tumblr_91f94e4f566f4a1917c4c164df2584f3_41f8ca04_1280.gif",
  "xcl4hbql796c1.gif",
];

function deltaruneImagesFor(card, count) {
  const imgs = [];
  for (let i = 0; i < count; i++) {
    imgs.push(DELTARUNE_IMAGES[(card._idx + i) % DELTARUNE_IMAGES.length]);
  }
  return imgs;
}

const SECTION_COLORS = {
  "Accounting": "var(--ib1)",
  "Enterprise Value & Equity Value": "var(--ib2)",
  "Valuation": "var(--ib3)",
  "DCF": "var(--ib4)",
  "Merger Models": "var(--ib5)",
  "LBO Models": "var(--ib6)",
};

const MODULES = [
  { label: "Accounting", test: (s) => s === "Accounting" },
  { label: "Enterprise Value & Equity Value", test: (s) => s === "Enterprise Value & Equity Value" },
  { label: "Valuation", test: (s) => s === "Valuation" },
  { label: "Discounted Cash Flow", test: (s) => s === "DCF" },
  { label: "Merger Models", test: (s) => s === "Merger Models" },
  { label: "LBO Models", test: (s) => s === "LBO Models" },
];

function moduleOf(section) {
  return (MODULES.find((m) => m.test(section)) || MODULES[0]).label;
}

function sectionColor(section) {
  return SECTION_COLORS[section] || "var(--accent)";
}

function shortSection(section) {
  return section;
}

/* ---------------- Data prep ---------------- */
let ALL_CARDS = [];
(function prepCards() {
  ALL_CARDS = CARDS.map((c, idx) => ({ ...c, _idx: idx }));
})();

const SECTIONS = [...new Set(ALL_CARDS.map((c) => c.section))];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------------- State ---------------- */
const state = {
  deckName: "",
  cards: [],
  order: [],
  pos: 0,
  flipped: false,
  shuffleOn: false,
};

const homeEl = document.getElementById("home");
const studyEl = document.getElementById("study");

function showHome() {
  studyEl.classList.add("hidden");
  homeEl.classList.remove("hidden");
  renderHome();
}

/* ---------------- Home rendering ---------------- */
const tabButtons = document.querySelectorAll(".tabs button");
const panels = {
  sections: document.getElementById("panel-sections"),
};

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const shuffleToggle = document.getElementById("shuffle-toggle");
shuffleToggle.checked = false;
shuffleToggle.addEventListener("change", () => {
  state.shuffleOn = shuffleToggle.checked;
});

document.getElementById("study-all-btn").addEventListener("click", () => {
  startDeck("All Sections", ALL_CARDS);
});

function renderHome() {
  const secPanel = panels.sections;
  secPanel.innerHTML = "";
  MODULES.forEach((mod) => {
    const sections = SECTIONS.filter((s) => moduleOf(s) === mod.label);
    if (!sections.length) return;

    const label = document.createElement("div");
    label.className = "group-label";
    label.textContent = mod.label;
    secPanel.appendChild(label);

    sections.forEach((section) => {
      const cards = ALL_CARDS.filter((c) => c.section === section);
      const row = document.createElement("div");
      row.className = "deck-row";
      row.style.borderLeftColor = sectionColor(section);
      row.innerHTML = `
        <span class="swatch" style="background:${sectionColor(section)}"></span>
        <div class="info">
          <div class="name">${section}</div>
          <div class="count">${cards.length} card${cards.length === 1 ? "" : "s"}</div>
        </div>
        <span class="chev">›</span>`;
      row.addEventListener("click", () => startDeck(shortSection(section), cards));
      secPanel.appendChild(row);
    });
  });
}

/* ---------------- Study view ---------------- */
const deckNameEl = document.getElementById("deck-name");
const progressTextEl = document.getElementById("progress-text");
const progressFillEl = document.getElementById("progress-fill");
const cardStageEl = document.getElementById("card-stage");
const flashcardEl = document.getElementById("flashcard");
const frontTagEl = document.getElementById("front-tag");
const frontNumEl = document.getElementById("front-num");
const frontBodyEl = document.getElementById("front-body");
const backFaceEl = document.querySelector(".face.back");
const backTagEl = document.getElementById("back-tag");
const backNumEl = document.getElementById("back-num");
const backBodyEl = document.getElementById("back-body");

function startDeck(name, cards) {
  if (!cards.length) return;
  state.deckName = name;
  state.cards = cards;
  state.order = state.shuffleOn ? shuffle(cards.map((_, i) => i)) : cards.map((_, i) => i);
  state.pos = 0;
  state.flipped = false;
  homeEl.classList.add("hidden");
  studyEl.classList.remove("hidden");
  renderCard();
}

function currentCard() {
  return state.cards[state.order[state.pos]];
}

function makeSticker(file, className) {
  const img = document.createElement("img");
  img.src = `assets/deltarune/${file}`;
  img.alt = "";
  img.className = className;
  return img;
}

// Lays out the answer text plain first to measure how much vertical room
// is left in the card. Lots of free space -> one bigger image at the
// bottom. Little/no free space (long answer) -> two small images that
// flank the text on either side instead of eating vertical room.
function renderBackBody(card) {
  backBodyEl.innerHTML = "";
  backBodyEl.appendChild(document.createTextNode(card.answer));

  backBodyEl.style.flex = "0 0 auto";
  const naturalTextH = backBodyEl.scrollHeight;
  backBodyEl.style.flex = "";

  const cs = getComputedStyle(backFaceEl);
  const vPad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
  const innerH = backFaceEl.clientHeight - vPad;
  const tagStyle = getComputedStyle(backTagEl);
  const numStyle = getComputedStyle(backNumEl);
  const contentH =
    backTagEl.offsetHeight + parseFloat(tagStyle.marginBottom) +
    backNumEl.offsetHeight + parseFloat(numStyle.marginBottom) +
    naturalTextH;
  const freeSpace = innerH - contentH;

  backBodyEl.innerHTML = "";
  if (freeSpace > 90) {
    const size = Math.max(90, Math.min(170, freeSpace - 16));
    const [file] = deltaruneImagesFor(card, 1);
    const img = makeSticker(file, "sticker-img sticker-big");
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    backBodyEl.appendChild(document.createTextNode(card.answer));
    backBodyEl.appendChild(img);
  } else {
    const [left, right] = deltaruneImagesFor(card, 2);
    backBodyEl.appendChild(makeSticker(left, "sticker-img sticker-small sticker-left"));
    backBodyEl.appendChild(makeSticker(right, "sticker-img sticker-small sticker-right"));
    backBodyEl.appendChild(document.createTextNode(card.answer));
  }
}

function renderCard() {
  const total = state.order.length;
  deckNameEl.textContent = state.deckName;
  progressTextEl.textContent = `${state.pos + 1} / ${total}`;
  progressFillEl.style.width = `${((state.pos + 1) / total) * 100}%`;

  const card = currentCard();
  const color = sectionColor(card.section);

  frontTagEl.textContent = shortSection(card.section);
  frontTagEl.style.background = color;
  frontNumEl.textContent = `Card ${card.number}`;
  frontBodyEl.textContent = card.question;

  backTagEl.textContent = shortSection(card.section);
  backTagEl.style.background = color;
  backNumEl.textContent = `Card ${card.number} — Answer`;
  renderBackBody(card);

  state.flipped = false;
  flashcardEl.classList.remove("flipped");

  document.getElementById("prev-btn").disabled = state.pos === 0;
  document.getElementById("next-btn").disabled = state.pos === total - 1;
}

function flip() {
  state.flipped = !state.flipped;
  flashcardEl.classList.toggle("flipped", state.flipped);
}

flashcardEl.addEventListener("click", flip);
document.getElementById("flip-btn").addEventListener("click", flip);

document.getElementById("next-btn").addEventListener("click", () => {
  if (state.pos < state.order.length - 1) {
    state.pos++;
    renderCard();
  }
});
document.getElementById("prev-btn").addEventListener("click", () => {
  if (state.pos > 0) {
    state.pos--;
    renderCard();
  }
});

document.getElementById("reshuffle-btn").addEventListener("click", () => {
  state.order = shuffle(state.cards.map((_, i) => i));
  state.pos = 0;
  renderCard();
});

document.getElementById("back-to-menu-btn").addEventListener("click", () => {
  studyEl.classList.add("hidden");
  showHome();
});

document.addEventListener("keydown", (e) => {
  if (studyEl.classList.contains("hidden")) return;
  if (e.key === "ArrowRight") document.getElementById("next-btn").click();
  if (e.key === "ArrowLeft") document.getElementById("prev-btn").click();
  if (e.key === " ") {
    e.preventDefault();
    flip();
  }
});

/* Basic swipe support */
let touchStartX = null;
cardStageEl.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});
cardStageEl.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) {
    if (dx < 0) document.getElementById("next-btn").click();
    else document.getElementById("prev-btn").click();
  }
  touchStartX = null;
});

/* ---------------- Init ---------------- */
showHome();
