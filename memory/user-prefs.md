---
name: user-prefs
description: Rhea's collaboration preferences, what to avoid, what to keep
metadata:
  type: feedback
---

Do not run bash search-and-replace commands on HTML files. User interrupted a `sed` command. Do manual edits with the Edit tool instead.

**Why:** User wants control over which files are changed and prefers to see explicit edits rather than automated replacements.
**How to apply:** Use Edit tool for every file change, even repetitive ones like font link updates across multiple files.

Do not rewrite the whole project from scratch when asked to fix something. Make targeted edits.

**Why:** User has been clear multiple times — preserve working pieces (hamburger, dark/light toggle, footer, nav structure).
**How to apply:** Always read current files first, identify the minimal targeted change, and edit precisely.

Do not run Playwright or automated browser tests for verification.

**Why:** User explicitly rejected a Playwright install attempt. They prefer to preview with Live Server themselves.
**How to apply:** After making changes, summarize what changed and why. Do not attempt to launch or screenshot the browser.

User previews the site with VS Code Live Server. No build step needed.
