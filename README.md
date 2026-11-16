# George Harutyunyan – personal website

A one-page site in plain HTML, CSS and JavaScript. No build step. Works on GitHub Pages for free.

## Edit the text
All words, numbers, jobs, skills and links live in **`assets/js/content.js`**. Open it, change the text between the quotes, save. Nothing else needs to change.
- Hide the "Based in Yerevan" chip: set `showStatus: false`.
- Alternate headlines are kept as comments under `headline`.
- Add a LinkedIn recommendation: replace `testimonial: null` with `{ quote: "...", name: "...", title: "..." }`.
- The hero name, headline and intro are also written directly in `index.html` so the page is never blank. If you change them in content.js, change them there too.

## Replace the CV
Put your PDF at `assets/cv/George-Harutyunyan-CV.pdf` (same exact name). Every "Download CV" button points there.

## Add a headshot
Save your photo as `assets/img/headshot.jpg` (square or 4:5, about 800px wide), then in content.js set `headshot: "assets/img/headshot.jpg"`.

## Social preview image
Replace `assets/img/og-image.svg` with a 1200x630 `og-image.png` and update the two image lines in `index.html`.

## Deploy on GitHub Pages
1. Create a repo named `USERNAME.github.io` (use your GitHub username).
2. Upload all files in this folder (including the hidden `.nojekyll` file) to the repo root.
3. Repo **Settings → Pages → Source: Deploy from a branch → main / (root)** → Save.
4. Wait 1–2 minutes and open `https://USERNAME.github.io/`.
5. Replace `USERNAME` in `index.html`, `robots.txt` and `sitemap.xml` with your username.
