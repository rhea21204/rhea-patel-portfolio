---
name: project-portfolio
description: Rhea Patel portfolio site — structure, design direction, file layout, and key decisions
metadata:
  type: project
---

Static HTML/CSS/JS portfolio. No build system. Served via Live Server in VS Code.

**File structure:**
- `index.html` — homepage
- `about.html`, `projects.html`, `experience.html`, `values.html` — inner pages
- `css/global.css` — design tokens (CSS vars), nav, footer, buttons, reset
- `css/home.css` — homepage-only layout (hero, what-i-do, currently-panel, location-row)
- `css/about.css`, `css/projects.css`, `css/experience.css`, `css/values.css`
- `js/main.js` — theme toggle, custom cursor, hamburger menu, scroll reveal, filter tabs

**Design direction:** Cute, chic, warm, polished. Recruiter-friendly but with personality.
- Background: warm ivory `#FFFAF7`
- Text: espresso `#16110F`
- Accent: blush/dusty rose `#D8849D`, `#F3B6C8`
- Borders: soft beige `#EADED8`
- Font: Manrope (main), Playfair Display italic (accent words like "world", "useful"), DM Mono (labels)

**Homepage layout (2-column hero + sections):**
1. Hero: left=copy (headline, bio, availability, 4 buttons), right=photo card with organic border-radius
2. What I Do: 4-card grid with blush circular icons
3. Currently panel: full-width blush card, 3 columns
4. Mini location row
5. Dark footer with marquee

**Dark mode:** CSS variables on `body.dark` class, toggled via localStorage key `rp-dark-mode`. Toggle button in nav.

**Projects page:** 4 cards — Mystery Mansion, KeepPhillySafe (🏆 Best Beginner Hack), gMatch, Temple Crawler (WIP). Filter tabs use `data-filter` / `data-cats` attribute matching.

**Work page:** TPNI/Building Agents internship + OWLHacks hackathon + Certifications. Education and Currently sections intentionally removed (those live on About page only).

**Why:** Kept education/currently off the Work page because user wanted Work to be focused on experience only.
**How to apply:** Don't add education or currently blocks back to experience.html.
