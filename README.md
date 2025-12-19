# Harsha P — Portfolio

A fast, responsive, dark-themed static portfolio for Netlify deployment.

## Structure
- `index.html` — Content & sections
- `style.css` — Modern dark UI styles
- `script.js` — Smooth scrolling + theme toggle
- `assets/resume.pdf` — Optional resume file (add your PDF)

## Deploy to GitHub + Netlify

### 1) Push to GitHub
Initialize a repo in this folder and push:

```powershell
# From the folder containing these files
git init
git add .
git commit -m "Initial portfolio"
# Replace with your GitHub repo URL
git branch -M main
git remote add origin https://github.com/Harsha2318/harsha-portfolio.git
git push -u origin main
```

### 2) Deploy on Netlify
1. Go to https://www.netlify.com and login via GitHub
2. "Add new site" → "Import from GitHub"
3. Select `harsha-portfolio` repo → Deploy
4. Rename site to `harsha-portfolio.netlify.app` (optional)

This is a static site — no build step is required.

## Customize
- Replace `assets/resume.pdf` with your resume and keep the file name the same, or update the link in `index.html`.
- Edit project links, research items, and achievements directly in `index.html`.
- Colors and spacing are controlled via CSS variables at the top of `style.css`.

## Optional Enhancements
- Add a custom domain in Netlify (e.g., `harshap.dev`).
- Add more project cards under the Projects section.
- Create a `projects` JSON and render cards dynamically with JavaScript.

## License
This portfolio is provided for personal use by Harsha P.
