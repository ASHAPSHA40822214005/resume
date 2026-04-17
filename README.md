# resume

A small, single-page static personal resume/portfolio site built with plain HTML, CSS and JavaScript.

This repository contains a responsive profile site for Ashapsha J. It is intentionally simple: no build tools, no dependencies beyond two CDNs (Google Fonts and Font Awesome), and the site runs by opening `Index.html` in a browser.

## Features
- Clean, responsive single-page layout (hero, about, skills, projects, education, contact).
- Dark/light theme toggle driven by the `data-theme` attribute on `<html>` and JS in `script.js`.
- Smooth scrolling navigation with active-link highlighting and IntersectionObserver-based entrance animations.
- CSS variables for easy theming (`styles.css` top-level variables).

## Files
- `Index.html` — page markup and CDN links for fonts/icons.
- `styles.css` — all styling, color tokens, and responsive layout rules.
- `script.js` — UI behavior: theme toggle, smooth scroll, nav highlighting, intersection observer animations.

## Run locally
Open `Index.html` in your browser. For a simple local server (recommended) run from the repository root:

```powershell
python -m http.server 8000
# then open http://localhost:8000/Index.html
```

Or, use the VS Code Live Server extension for live reload while editing.

## Editing guidance
- Change site copy and contact info in `Index.html`.
- Update colors by editing CSS variables at the top of `styles.css` rather than changing many selectors.
- If you add new sections, give them an `id` that matches a nav link (for example `#projects`) and keep the `.fade-in` or related animation classes if you want the same reveal behavior.

## Contributing
This repo is lightweight — open a PR with small, focused changes (content fixes, accessibility improvements, or UI tweaks). Keep JS selectors (`#themeToggle`, `#navbar`, `.nav-links`, `.fade-in`) consistent or update `script.js` accordingly.

## License
The content is provided by the repository owner. Include a license file if you want to allow reuse.