# Product Requirements Document
## HH Goa 2026 — Builder ID Generator

| | |
|---|---|
| **Product** | HH Goa 2026 Builder ID Generator |
| **Purpose** | Submission for Hacker House Goa 2026, Open Trials — Task #1 |
| **Owner** | You (+ up to 2 teammates — task allows teams of 1–3) |
| **Status** | Draft v1.0 |
| **Date** | 11 Aug 2026 |
| **Related docs** | `hhgoa-frame-generator-master-prompt.md` (build spec for Antigravity) · [hhgoa.com](https://hhgoa.com) · [hhgoa.com/radar](https://hhgoa.com/radar) (live leaderboard) · Task Details PDF (linked from the task card, sign-in gated) |

---

## 1. Overview

A publicly-deployed web app that lets any builder upload a selfie, get it auto-fit (no manual cropping) into an HH Goa 2026-branded frame, personalize it with their name/stack/an auto-generated "Builder Class," merge it with 1–2 teammates into a combined frame, and share it in one action — primarily to X, tagged `#FrameInGoa`.

The product **is** the deliverable. Task #1 requires participants to design and build this exact generator, then use it themselves and post the result. Judging looks at the live tool, not a mockup.

---

## 2. Background

Hacker House Goa 2026 (28–31 Oct 2026, run by 2:47 PM Studio) selects its 247 in-person builder seats through a "rolling challenge" rather than a single application: an **Open Trials** stage in August (skill-based tasks, open to anyone) followed by **Partner Trials** in September, then an RSVP & Stake confirmation in late September.

Task #1 of Open Trials is this generator itself. Confirmed live-site wording: build your own HH Goa 2026 themed frame generator, use the same generator to bring your team into one combined frame, then post it to X with a quick how-to on generating your own — tagged `#FrameInGoa`. Scoring for this task is public and already live at hhgoa.com/radar, ranked by post views/engagement (current top score: 59). Reaching the top wins an exclusive physical HH Goa ID.

---

## 3. Problem statement

Builders need a fast, zero-friction way to produce an on-brand, personalized, shareable artifact from an arbitrary selfie — and that artifact needs to drive *more* people to the same tool, because the scoring metric is reach, not just personal output. The generator has to double as its own distribution mechanism.

---

## 4. Goals & success metrics

| Goal | Metric | Target |
|---|---|---|
| Task submission accepted | Live URL + X post submitted before Open Trials deadline | Pass/fail |
| Fast, frictionless flow | Time from photo upload to shareable export | < 10 seconds |
| Zero manual work | % of uploads producing a usable auto-fit with no crop step | > 90% of typical selfies |
| Drives external reach | Views/score on the resulting X post ([hhgoa.com/radar](https://hhgoa.com/radar)) | Top 10 on the board (stretch: top 3) |
| Tool itself goes viral | Unique card generations from people *other* than the original team | Track via QR/referral param (see FR-8) |
| Brand fidelity | Visual match to hhgoa.com on first glance | Qualitative — "instantly recognizable HH Goa 2026 identity" per task brief |

---

## 5. Alignment with the actual selection criteria

The selection-framework document states judges weigh four things. Map every build decision back to these — this is as much a scoring rubric as a design brief:

| Criterion | How this product should demonstrate it |
|---|---|
| **Proof of building** | A real, deployed, working tool — not a static mockup. Public repo is a plus. |
| **Task performance** (the main signal) | Literal completeness against the task brief: auto-fit, personalization, solo *and* team mode, working share flow. |
| **Clear thinking** | Visible in how edge cases are handled — e.g. the X-share image-attachment limitation isn't ignored, it's solved properly (see FR-7). |
| **Drive to be there** | Signaled by the above-and-beyond features: QR referral tracking, multi-platform share, PWA install, polish pass. |

---

## 6. Users & personas

1. **The Builder(s)** — you and your teammates. Primary users and first testers of the flow.
2. **The Scanner** — a stranger who sees the X post or a physical QR/badge, taps through, and generates their own card. This user determines the actual score, so their path must be the lowest-friction path in the whole product.
3. **The Judge** — an HH Goa organizer reviewing the live tool and the resulting post against the task brief and the four criteria above.

---

## 7. Scope

### In scope (MVP)
- Solo card generation, fully client-side
- Team/combine mode (2–3 people)
- Auto-fit via client-side face detection, with a manual fine-tune fallback
- Name / stack / Builder Class personalization
- PNG export in 2 sizes (social + story)
- Share to X (Web Share API + desktop fallback), WhatsApp, LinkedIn, copy-link
- QR code linking back to the generator with a referral parameter
- Public deployment (Vercel)

### Explicitly out of scope for MVP
- Rebuilding the official leaderboard (hhgoa.com/radar already exists — link to it)
- User accounts / login
- Server-side photo storage or processing
- Instagram Stories native share (no public web-share intent exists for it — documented as a known platform limit, not a bug)

### Stretch (P2, time-permitting)
- Persistent shareable permalink per card (`/id/[slug]`) with dynamic OG image
- Referral counter ("N builders joined through your frame")
- Multiple frame skins/variants
- Animated/video export

---

## 8. Functional requirements

Priority key: **P0** = required to satisfy the task brief · **P1** = your own additions that meaningfully raise quality/score · **P2** = nice-to-have polish.

### FR-1 — Photo upload & auto-fit *(P0)*
- **Given** a user uploads any photo (portrait, landscape, group shot),
**when** the image loads, **then** a face is detected client-side and auto-centered/scaled into the circular frame with no manual crop required.
- **If** no face is detected, **then** fall back to smart center-crop — never block the flow.
- Optional drag/pinch fine-tune available but never required.

### FR-2 — Personalization *(P0)*
- Inputs: name (required), tech stack tags (multi-select + free text), optional role.
- All fields update the live canvas preview in real time.

### FR-3 — Builder Class generator *(P0)*
- Deterministically derive a fun title (e.g. "Terminal Shipper") from name + stack, so the same inputs always produce the same class.
- Display a rarity tier (Common/Rare/Legendary) as a corner ribbon.

### FR-4 — Solo card export *(P0)*
- Output visually matches the "BUILDER ID" card illustrated in the official task artwork: card surface, accent bar, pink label, name/stack/class, QR code.

### FR-5 — Team/combine mode *(P0)*
- 2–3 teammates' auto-fit photos render into a layout variant of the **same** frame chrome (not a separately-designed card).
- Supports either sequential single-session multi-upload or merging individually-generated cards.

### FR-6 — Export/download *(P0)*
- 1-click PNG download, no server round-trip.
- Two sizes: 1200×675 (X/social) and 1080×1920 (story format).

### FR-7 — Sharing *(P0/P1)*
- **P0:** Share to X — Web Share API (mobile, attaches image + text natively) with a desktop fallback that downloads the image and opens a prefilled compose window simultaneously, with an inline instruction since X's web intent cannot auto-attach media (documented platform constraint, not a defect).
- Auto-generated caption includes the tool's own public URL + `#FrameInGoa` + `@247pmstudio`, editable before sending.
- **P1:** WhatsApp (`wa.me` prefilled), LinkedIn share intent, copy-link.

### FR-8 — QR code + referral *(P1)*
- MVP: QR encodes the generator's URL with a per-user referral parameter — no backend required.
- Stretch (P2): persist a shareable permalink per card; QR encodes that instead; track and display how many new generations originated from each user's link.

### FR-9 — Landing & flow navigation *(P0)*
- Single-flow page: hero → upload → personalize → result/share.
- Footer links to hhgoa.com, the official Devfolio application, and hhgoa.com/radar (scoring explanation).

---

## 9. Non-functional requirements

| # | Requirement |
|---|---|
| NFR-1 | Full flow completes in under 10 seconds on a mid-range phone on 4G |
| NFR-2 | Mobile-first: primary design/test target is a phone viewport, not desktop |
| NFR-3 | All image processing (face detection, canvas render) happens client-side — no photo ever leaves the browser |
| NFR-4 | WCAG AA contrast on all text; keyboard-navigable upload and controls; real alt text on generated images |
| NFR-5 | Works on latest 2 versions of Safari, Chrome, Firefox (mobile + desktop) |
| NFR-6 | Deployed to a stable public URL with uptime through the Open Trials judging window — this is a hard requirement, not a nice-to-have |
| NFR-7 | Visual output is recognizably on-brand with hhgoa.com on first glance (color, type, motifs) |

---

## 10. Design requirements (summary)

Full detail lives in the companion master prompt. In short: deep forest green background, hot pink CTAs/labels, golden yellow headline/step accents, cream card surfaces; high-contrast display serif for headlines, monospace for labels/body/buttons; recurring motifs to reuse literally — the dashed pink circle "frame," the yellow palm-badge, sparkle (✦) bullets, numbered yellow step badges. Exact hex/font values should be pulled live from hhgoa.com's computed styles and its Brand Kit link rather than approximated.

---

## 11. Technical architecture

- **Frontend:** Next.js (App Router) + TypeScript, Tailwind CSS with brand tokens as theme variables.
- **Image pipeline:** Canvas2D compositing; MediaPipe Tasks Vision (client-side, WASM) for face detection.
- **QR:** `qrcode` npm package, generated client-side.
- **Sharing:** Web Share API primary, intent URLs (X, WhatsApp, LinkedIn) as fallback.
- **Deployment:** Vercel — required for the public-URL requirement in NFR-6.
- **Optional backend (P2 stretch only):** Supabase (Postgres + Storage) for permalinks/referral counts. No backend needed for P0/P1 scope.
- **Data model (only if building the P2 permalink stretch):**
  - `cards`: `id`, `slug`, `name`, `stack[]`, `builder_class`, `rarity`, `image_url`, `created_at`, `referral_count`

---

## 12. Analytics requirements

Minimal, privacy-respecting, no third-party trackers beyond simple counts:
- Card generations (solo vs. team)
- Download clicks
- Share-button clicks, by destination (X / WhatsApp / LinkedIn / copy-link)
- QR scans / referral-link visits (if P2 permalink feature is built)

These numbers aren't for the official score (that's views on the X post, tracked externally on hhgoa.com/radar) — they're for you to see whether the tool itself is doing its job as a distribution loop.

---

## 13. Content & copy requirements

Voice: terse, confident, a little irreverent — matches hhgoa.com's own copy, not generic SaaS tone. Needed strings: hero headline + subline, upload-step prompts, empty/error states, share-caption template (must include the tool's own URL + `#FrameInGoa` + `@247pmstudio`), footer microcopy linking to hhgoa.com/radar and the official Devfolio application.

---

## 14. Risks, constraints & mitigations

| Risk | Mitigation |
|---|---|
| X won't let a web page auto-attach an image to a tweet | Documented, not hidden — Web Share API on mobile solves it properly; desktop gets download+compose fallback with a clear instruction |
| Face detection fails on some photos (group shots, pets, non-frontal faces) | Smart center-crop fallback; optional manual fine-tune; never block export |
| Tool needs to stay up through judging window | Deploy early on Vercel; no server dependency for P0 scope means nothing to keep alive/pay for |
| Instagram has no public web-share intent | State this plainly in-product as a known limit rather than shipping a broken button |
| Exact task deadline / judging window not confirmed in this doc | See Open Questions below — verify directly on hhgoa.com or the Task Details PDF before finalizing your timeline |

---

## 15. Milestones

Not tied to a confirmed deadline (see §16) — treat as a 5-day build sequence, compress or stretch against your real date:

| Day | Focus |
|---|---|
| 1 | Extract design tokens/assets from hhgoa.com; scaffold Next.js project; deploy an empty shell to Vercel immediately so the public URL exists from day one |
| 2 | Upload flow + client-side face detection + auto-fit canvas render |
| 3 | Personalization inputs, Builder Class generator, solo card export |
| 4 | Team/combine mode, sharing flow (X/WhatsApp/LinkedIn/copy-link), QR code |
| 5 | Polish pass (empty/error/loading states, accessibility, mobile QA), then generate your own card, post to X, submit |

---

## 16. Assumptions & open questions

- **Exact Task #1 deadline is unconfirmed** — the site places it generally in "August 2026" Open Trials; the gated Task Details PDF may state an exact date. Confirm before finalizing your build timeline.
- Assuming team combine mode supports 1–3 people per the task brief's general team-size rule (confirmed elsewhere on hhgoa.com), not confirmed specifically for Task #1's combined-post mechanic.
- Assuming no cost constraint that rules out Supabase for the P2 stretch — free tier is sufficient either way.
- Judging rubric weighting across the four criteria (§5) isn't published beyond "task performance is the main signal" — treat the others as tie-breakers, not equal weights.

---

## 17. Appendix / references

- Live product: [hhgoa.com](https://hhgoa.com)
- Live scoring board: [hhgoa.com/radar](https://hhgoa.com/radar)
- Official applications: [hacker-house-goa-2026.devfolio.co](https://hacker-house-goa-2026.devfolio.co/)
- Task Details PDF (sign-in gated, linked from the Task #1 card on hhgoa.com)
- Companion build spec: `hhgoa-frame-generator-master-prompt.md`
