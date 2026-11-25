# BottleMate website

The product site for **BottleMate**, the smart hydration base and its Android app. It's live at **https://bottlemate.github.io**.

It's a plain static site (HTML, CSS, a little JavaScript) and needs no build step. GitHub Pages serves it straight from the `main` branch.

| Path | What it is |
|---|---|
| `index.html` | The whole page: hero, how it works, the app, the base, download, manual, support |
| `styles.css`, `main.js` | Styling, the mobile menu, the app screenshot tabs and the contact form |
| `DESIGN.md` | Colours, type and components (taken from the printed manual) |
| `assets/img/` | Real Pixel 7 Pro screenshots, product renders, OLED screens |
| `downloads/` | The Android APK and the PDF manuals |

## Update the app or manuals

Replace the file in `downloads/` with the same name, then update the version and size text in `index.html` (search for `v1.0 · 9.1 MB`).

## Run locally

```bash
python -m http.server 5500
```

Then open http://localhost:5500.

## Contact

Customer service: bottlemate.info@gmail.com
