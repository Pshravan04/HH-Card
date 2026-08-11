<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# HH Card Project Context

If you are an AI assistant working on this repository, please read these critical architectural rules before modifying code:

1. **State Management**: Do NOT try to introduce global state managers (Zustand, Redux, Context API) for moving data between `/upload`, `/personalize`, and `/result`. Data is currently passed via `URLSearchParams`. This keeps the app stateless and URL-shareable.
2. **CORS & html-to-image**: In `src/app/layout.tsx`, the `<link>` tags for Google Fonts and Material Symbols intentionally have the `crossOrigin="anonymous"` attribute. If you remove this, the `html-to-image` package in `/result` will throw a severe `CSSStyleSheet` SecurityError and downloading the ID card will break. DO NOT REMOVE `crossOrigin`.
3. **Buttons**: The project uses a pill-shaped button aesthetic. All newly created buttons should use `rounded-full` with thin borders (e.g. `border border-hot-pink`). Do not use brutalist box shadows.
4. **GSAP**: The 3D flip animation in `/result` relies on specific GSAP imports and `backface-visibility: hidden` utility classes. Do not replace GSAP with Framer Motion without explicit user permission.
