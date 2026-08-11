# 🏗 HH Card Architecture & Documentation

Welcome to the internal documentation for the HH Goa 2026 ID Generator. This guide is designed to help teammates (and AI IDE tools) quickly understand how the app is structured, styled, and managed without having to read every single line of code.

## 📂 1. Directory Structure (App Router)

We are using Next.js 15 with the App Router architecture. The main flow relies on these specific routes:

- **`/src/app/page.tsx`**: The landing page (Currently a placeholder redirect to `/upload` or basic welcome screen).
- **`/src/app/upload/page.tsx`**: Step 1. The user uploads their photo here. We process it on the client side to create a local `dataUrl`. 
- **`/src/app/personalize/page.tsx`**: Step 2. The user selects their Builder Class, Tech Stack, and inputs their Name and Team.
- **`/src/app/result/page.tsx`**: Step 3. The final generated card is rendered here. This is where GSAP and `html-to-image` execute their core logic.

## 💾 2. State Management (URL Search Params)

To keep the application entirely client-side and avoid massive global state providers (like Redux or complex Context APIs), we utilize **URL Search Parameters** to pass data between routes.

When a user finishes the `/personalize` step, all their inputs are appended to the URL query string:
`?img=[dataUrl]&role=DEVELOPER&tech=REACT,RUST&name=Alex&team=Syntax-Squad`

**Why?**
1. It allows users to refresh the `/result` page without losing their generated card.
2. It makes the architecture stateless and extremely fast.

## 🎨 3. Design System & Styling

The app uses TailwindCSS exclusively for styling, avoiding messy custom CSS files where possible. 

### Color Palette (`tailwind.config.ts`)
- **Deep Forest** (`#0f1f1a`): Primary dark background color.
- **Hot Pink** (`#FF3366`): Primary accent, borders, active states.
- **Golden Yellow** (`#FFD700`): Secondary accent, high-contrast text.

### Component Styling
All buttons strictly follow a **Pill-shaped aesthetic** (`rounded-full`) with standard, thin borders (`border border-hot-pink`). We have removed heavy brutalist box-shadows to keep the UI sleek and elegant.

## ⚙️ 4. Key Libraries & Hacks

- **GSAP (`gsap`)**: Used in `/result/page.tsx` for the 3D rotating card. The front and back of the ID card are absolutely positioned with `backface-visibility: hidden`.
- **HTML to Image (`html-to-image`)**: Used for the "DOWNLOAD PNG" feature.
  - **IMPORTANT HACK**: In `src/app/layout.tsx`, the `<link>` tags pointing to Google Fonts and Google Material Symbols *MUST* include `crossOrigin="anonymous"`. Without this, `html-to-image` fails with a CORS `CSSStyleSheet` security error when trying to parse the fonts. Do not remove this attribute!
