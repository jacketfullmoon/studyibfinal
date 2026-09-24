# IB Flashcards

A mobile-friendly flashcard app covering the Technical Questions & Answers sections from the 400 IB Interview Questions Guide (BreakingIntoWallStreet / Mergers & Inquisitions), split into **Basic** and **Advanced** tabs across the same 6 sections:

| Section | Basic | Advanced |
| --- | --- | --- |
| Accounting | 33 | 15 |
| Enterprise Value & Equity Value | 15 | 3 |
| Valuation | 34 | 14 |
| Discounted Cash Flow (DCF) | 32 | 7 |
| Merger Models | 24 | 22 |
| LBO Models | 22 | 12 |
| **Total** | **160** | **73** |

**233 flashcards total.**

Each Q&A is its own flashcard — tap to flip and see the answer, with a Deltarune sticker on every answer to help the material stick.

## Features
- 233 flashcards across 6 sections, split into **Basic** and **Advanced** tabs
- Study by **section**, or **Study Everything** to run through every card at the selected level
- **Randomize** toggle to shuffle any deck
- **Highlight key terms** toggle to mark IB jargon (EBITDA, Working Capital, WACC…) on both card faces
- Swipe / tap / keyboard (←/→/space) navigation — works great added to an iPhone home screen
- Every answer gets a Deltarune sprite/gif (from [`assets/deltarune/`](assets/deltarune))

## Deploy

### 1. Push to GitHub
```bash
cd ib-basics-flashcards
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Deploy to Vercel
- Go to [vercel.com/new](https://vercel.com/new), import the repo
- Framework preset: **Other** (no build step needed — it's static HTML/CSS/JS)
- Deploy

### 3. Add to your iPhone home screen
Open the Vercel URL in Safari → Share → **Add to Home Screen**. It'll behave like a standalone app.

## Editing the flashcard content

Flashcard content lives in two plain JS arrays — [`cards.js`](cards.js) (`CARDS`, the 160 Basic cards, numbered 1–160) and [`cards-advanced.js`](cards-advanced.js) (`CARDS_ADVANCED`, the 73 Advanced cards, numbered 161–233). Each entry looks like:

```js
{ number: 1, section: "Accounting", question: "...", answer: "..." }
```

The `level` (`basic` / `advanced`) isn't stored per card — it comes from which file the card is in, via the `LEVELS` map in [`app.js`](app.js), which is also what the home screen tabs switch between.

Each of the 6 section names maps 1:1 to a module on the home screen (see `MODULES` in [`app.js`](app.js)) — unlike some of the other flashcard apps in this family, there's no sub-grouping within a section. To add a 7th section, add a new entry to `MODULES` with a matching `test` function, add a color variable to `style.css`, and add cards with that `section` value.

Edit either cards file directly to fix a typo or add/remove cards — no build step required. Content is paraphrased/condensed study material from the guide's Q&A sections, not a verbatim reproduction.

To swap in different Deltarune images, drop files into `assets/deltarune/` and add their filenames to the `DELTARUNE_IMAGES` array near the top of [`app.js`](app.js).
