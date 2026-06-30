# plumeria-mc-web

Information site and browser-based firmware flasher for
[Plumeria-MC](https://github.com/oumike/plumeria-mc) — MeshCore-compatible mesh
radio firmware for ESP32-S3 handheld LoRa devices.

The firmware runs fully standalone (no companion app) with an on-device LVGL
UI. This site describes it, previews the on-device look, and ships an
[esp-web-tools](https://esphome.github.io/esp-web-tools/)-backed flasher that
writes firmware directly from the browser over USB.

## Develop

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Build

```bash
npm run build       # outputs static files to dist/
npm run preview     # serves the built site on :4173
```

## Run as a container

A multi-stage `Dockerfile` builds the SPA with Node 20 and serves the result
with nginx.

```bash
docker build -t plumeria-mc-web .
docker run --rm -p 8080:80 plumeria-mc-web
```

Or with compose:

```bash
docker compose up --build
```

Open <http://localhost:8080>.

### A note on Web Serial

The in-browser flasher uses the Web Serial API, which only runs in secure
contexts. That means:

- `http://localhost` works (browsers treat localhost as secure).
- Any other host requires HTTPS — terminate TLS at a reverse proxy in front
  of the container.
- Web Serial is only implemented in Chromium-based browsers (Chrome, Edge,
  Opera, Brave) on desktop. Firefox and Safari are not supported. The page
  detects this and offers a `.bin` download fallback.

## Updating the firmware version

Bump the fallback constant in [`src/firmware.js`](src/firmware.js):

```js
export const FIRMWARE_VERSION = 'vX.Y.Z'
```

This is only a fallback — the live version is fetched from the GitHub releases
API at page load. The manifest for every device is generated at runtime,
pointing at the matching `oumike/plumeria-mc` release assets
(`plumeria-mc-<env>-<tag>.bin`).

## Firmware proxy

GitHub release assets do not send CORS headers, so esp-web-tools can't fetch
the `.bin` directly from the browser. Both Vite (dev, see
[`vite.config.js`](vite.config.js)) and nginx (prod, see
[`nginx.conf`](nginx.conf)) proxy `/firmware/<tag>/<file>` to
`https://github.com/oumike/plumeria-mc/releases/download/...` server-side and
re-emit it with permissive CORS.

## Layout

```
src/
  App.jsx            top-level shell (single fixed plumeria theme)
  devices.js         hardware target metadata (shared by Devices + Flasher)
  firmware.js        version fallback + manifest generator
  styles.css         plumeria palette (ported from firmware splash) + layout
  components/        Nav, Hero, Features, Devices, Preview, Flasher, Docs, AI, Footer
public/
  favicon.svg        plumeria mark, ported from drawPlumeriaFlower()
  devices/           hardware photos
Dockerfile           node build → nginx serve
nginx.conf           SPA fallback + asset caching + firmware proxy
docker-compose.yml   convenience target
```

## License

GPLv3, matching the upstream firmware.
