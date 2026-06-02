# Rhea Patel — Personal Portfolio Website

> Live site: **[rhea21204.github.io/rhea-patel-portfolio](https://rhea21204.github.io/rhea-patel-portfolio)**

A personal portfolio website for Rhea Patel — CS graduate, builder, and all-around curious person. Built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Just open `index.html` and it works.

---

## 📁 Folder Structure

```
rhea-patel-portfolio/
│
├── index.html            ← Home page (GitHub Pages serves this first)
├── about.html            ← About page
├── projects.html         ← Projects page with filter
├── experience.html       ← Experience + certifications
├── resume.html           ← Resume download + links
├── contact.html          ← Contact page
│
├── css/
│   ├── global.css        ← Design system: colors, fonts, nav, footer, buttons
│   ├── home.css          ← Home page styles
│   ├── about.css         ← About page styles
│   ├── projects.css      ← Projects page + filter styles
│   ├── experience.css    ← Experience page styles
│   ├── resume.css        ← Resume page styles
│   └── contact.css       ← Contact page styles
│
├── js/
│   ├── main.js           ← Shared: nav toggle, scroll effects, reveal animations
│   ├── home.js           ← Home-only: hero parallax
│   └── projects.js       ← Projects filter logic
│
├── images/               ← Add project screenshots here
│   └── placeholder.txt
│
├── assets/               ← Add resume PDF here
│   └── placeholder.txt
│
└── README.md             ← You are here
```

---

## 🚀 Running Locally

**Option 1 — Just open the file:**
1. Clone or download this repo
2. Open `index.html` in any browser
3. Done — no install needed

**Option 2 — VS Code Live Server (recommended):**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

**Option 3 — Python local server:**
```bash
# In the project folder:
python -m http.server 8000
# Then open: http://localhost:8000
```

---

## 🌐 Deploying to GitHub Pages

### First-time setup:
1. Push all files to the `main` branch of this repo
2. Go to **Settings → Pages** in your GitHub repo
3. Under **Source**, select `Deploy from a branch`
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**
6. Wait 1–2 minutes, then visit: `https://rhea21204.github.io/rhea-patel-portfolio`

### Every update after that:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
GitHub Pages will automatically redeploy within ~60 seconds.

---

## 🔗 Personalization Checklist

Before going live, search for `TODO:` across all files — every placeholder is marked with one.

| What | File(s) | How |
|------|---------|-----|
| GitHub URL | `index.html`, `resume.html`, `contact.html` | Replace `href="#"` on GitHub buttons |
| LinkedIn URL | `index.html`, `resume.html`, `contact.html` | Replace `href="#"` on LinkedIn buttons |
| Resume PDF | `index.html`, `resume.html`, `contact.html` | Add PDF to `assets/`, update `href="assets/RheaPatel_Resume.pdf"` |
| Email | `contact.html` | Already set to `rhea21204@gmail.com` — confirm correct |
| Project screenshots | `projects.html` | Add images to `images/`, replace placeholder divs with `<img>` tags |
| Project GitHub links | `projects.html` | Replace `href="#"` on each GitHub button |
| Project live demos | `projects.html` | Replace `href="#"` on each Live Demo button |
| "Currently" status | `index.html` | Update the 3 currently-cards with current info |

---

## 🎨 Changing Colors

All colors are defined as CSS variables at the top of `css/global.css`. Change these 4 lines to completely restyle the site:

```css
:root {
  --terra:       #C0613A;   /* Main accent color */
  --cream-light: #FAF7F2;   /* Page background */
  --ink:         #1C1814;   /* Dark sections */
  --cream:       #F5F0E8;   /* Card backgrounds */
}
```

---

## ➕ Adding a New Project

1. Open `projects.html`
2. Copy one of the `<article class="project-card">` blocks
3. Paste it inside `<div class="projects-grid">`
4. Update: title, description, tech tags, GitHub link, `data-categories` for filtering

Available filter tags: `featured` · `python` · `web-app` · `group` · `community` · `wip`

---

## ➕ Adding a New Experience

1. Open `experience.html`
2. Copy one of the `<article class="exp-card">` blocks
3. Paste it below the existing cards
4. Update: role, company, dates, responsibilities, skills tags

---

## 🛠 Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML | Plain HTML5 | Zero dependencies, GitHub Pages compatible |
| CSS | Custom CSS with variables | Full control, easy to theme |
| JS | Vanilla JavaScript | No frameworks needed for this scope |
| Fonts | Google Fonts (CDN) | Playfair Display + DM Sans + DM Mono |
| Hosting | GitHub Pages | Free, fast, deploys automatically from main |

---

## 📬 Contact

Built by **Rhea Patel** — [rhea21204@gmail.com](mailto:rhea21204@gmail.com)
