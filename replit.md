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
- `script.js` — Shared JavaScript
- Various image assets (`.jpg`, `.png`, `.svg`)

## Running
- Served with `serve` (npm package) on port 5000
- Workflow command: `node_modules/.bin/serve . -p 5000`

## Deployment
- Configured as a static deployment with `publicDir: "."`
