# 1215 Studio Website

## Overview
A pure static HTML/CSS/JS website for 1215 Studio — a design/strategy consultancy. No build system or backend.

## Project Structure
- `index.html` — Homepage
- `1215-about.html` — About page
- `1215-work.html` — Work/portfolio page
- `1215-services.html` — Services overview
- `1215-service-profiling.html`, `1215-service-strategy.html`, `1215-service-usability.html` — Individual service pages
- `1215-case-01.html`, `1215-case-02.html`, `1215-case-03.html` — Case study pages
- `nav.css` — Single source of truth for all navigation styles (desktop + mobile overlay, burger animation, light/scrolled modifiers, active link)
- `nav.js` — Single source of truth for all navigation JS (burger toggle, mobile menu open/close, scroll handler, reveal animation). Loaded with `defer` on all pages.
- `script.js` — Legacy shared JavaScript (minimal use)
- `serve.json` — Serve config: `/Website/:file` rewrite + `Cache-Control: no-store` headers for `.html`, `.js`, `.css`
- Various image assets (`.jpg`, `.png`, `.svg`)

## Navigation Architecture
- All 10 pages load `nav.css` and `nav.js` via `<link>`/`<script defer>` in `<head>`
- Homepage (`index.html`): `<nav id="nav">` — starts dark, gains `.scrolled` class (cream bg) after 40px scroll
- Inner pages: `<nav class="light">` — always cream background
- Mobile menu: `#mobileMenu` full-screen dark overlay, toggled via `.open` class; burger `#burger` animates to X when open
- Active page link in mobile menu marked with `class="active"` (amber highlight)
- No inline nav scripts anywhere — all behaviour lives in `nav.js`

## Running
- Served with `serve` (npm package) on port 5000
- Workflow command: `node_modules/.bin/serve . -p 5000`

## Deployment
- Configured as a static deployment with `publicDir: "."`
