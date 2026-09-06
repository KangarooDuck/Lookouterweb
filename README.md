# Lookouter

Company website for [lookouter.com](https://lookouter.com) — a small mobile app studio.
Our first app is **FriedRich AC Remote**, an Android app that turns your phone into a
Friedrich air-conditioner remote.

## Structure

```
index.html                  Landing page
assets/
  css/styles.css            Styles (dark theme)
  js/main.js                 Particle init + footer year
  img/friedrich-ac-remote.png App icon
  vendor/tsparticles.bundle.min.js  tsParticles (MIT, by Matteo Bruni)
favicon-32.png              Favicon
apple-touch-icon.png        iOS home-screen icon
icon-192.png / icon-512.png PWA icons
```

## Background

The page uses a dark theme with animated floating/connected particles powered by
[tsParticles](https://particles.js.org) (MIT, bundled locally in `assets/vendor/`).
Tweak the look in `assets/js/main.js` (count, speed, link distance) and the colors
in `assets/css/styles.css` (`--accent`, `--accent-2`, etc.).

## Deploy free on GitHub Pages

1. Create a new repository on GitHub (e.g. `lookouter`).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lookouter.git
   git push -u origin main
   ```

3. On GitHub, open the repo → **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch** and
   choose branch `main` with folder `/ (root)`.
5. Click **Save**. Your site will be live at
   `https://<your-username>.github.io/lookouter`.

### Custom domain (lookouter.com)

In the same **Pages** settings, under **Custom domain**, enter `lookouter.com` and
save. Then create a `CNAME` record at your DNS provider pointing
`lookouter.com` to `<your-username>.github.io`. Add a `CNAME` file at the repo root
containing `lookouter.com` so GitHub doesn't reset the setting on each push.
