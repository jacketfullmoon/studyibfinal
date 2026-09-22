# IB Basics — Flashcards

A mobile-friendly flashcard app covering the "Basic" Technical Questions & Answers sections from the 400 IB Interview Questions Guide (BreakingIntoWallStreet / Mergers & Inquisitions):

1. **Accounting** — 33 cards
2. **Enterprise Value & Equity Value** — 15 cards
3. **Valuation** — 34 cards
4. **Discounted Cash Flow (DCF)** — 32 cards
5. **Merger Models** — 24 cards
6. **LBO Models** — 22 cards

**160 flashcards total.**

Each Q&A is its own flashcard — tap to flip and see the answer, with a Deltarune sticker on every answer to help the material stick.

## Features
- 160 flashcards, grouped by the 6 Basic technical sections
- Study by **section**, or **Study Everything** to run through all 6 in one deck
- **Randomize** toggle to shuffle any deck
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

All flashcard content lives in [`cards.js`](cards.js) as a plain JS array (`CARDS`). Each entry looks like:

```js
{ number: 1, section: "Accounting", question: "...", answer: "..." }
```

Each of the 6 section names maps 1:1 to a module on the home screen (see `MODULES` in [`app.js`](app.js)) — unlike some of the other flashcard apps in this family, there's no sub-grouping within a section. To add a 7th section, add a new entry to `MODULES` with a matching `test` function, add a color variable to `style.css`, and add cards with that `section` value to `cards.js`.

Edit `cards.js` directly to fix a typo or add/remove cards — no build step required. Content is paraphrased/condensed study material from the guide's "Basic" Q&A sections, not a verbatim reproduction.

To swap in different Deltarune images, drop files into `assets/deltarune/` and add their filenames to the `DELTARUNE_IMAGES` array near the top of [`app.js`](app.js).
