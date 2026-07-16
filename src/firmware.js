// Configuration for the in-browser flasher. FIRMWARE_VERSION is the fallback
// used if the GitHub API call fails (rate limit, offline, etc.) - the live
// version is fetched at page load via latestVersion().
export const FIRMWARE_VERSION = 'v1.3.0'
export const REPO = 'oumike/plumeria-mc'

// Same-origin proxy path. Vite (dev) and nginx (prod) forward /firmware/<tag>/<file>
// to https://github.com/<repo>/releases/download/<tag>/<file>, adding CORS
// headers so esp-web-tools' fetch() can read the .bin. GitHub release-assets
// CDN itself does not send Access-Control-Allow-Origin.
const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
export const PROXY_BASE = `${basePath}/firmware`

// platformio env name -> release asset slug. The build workflow names assets
// plumeria-mc-<env>-<tag>.bin (suffix == env for every released target), so the
// mapping is identity, but keeping it explicit documents the contract.
const ASSET_SLUG = {
  'cardputer-cap': 'cardputer-cap',
  'tlora-pager-tft': 'tlora-pager-tft',
  'tdeck': 'tdeck',
}

export function firmwareUrl(env, version) {
  const slug = ASSET_SLUG[env]
  if (!slug) throw new Error(`No release asset mapping for env "${env}"`)
  return `${PROXY_BASE}/${version}/plumeria-mc-${slug}-${version}.bin`
}

// esp-web-tools manifest. The build writes one bin at offset 0x0 for esp32s3,
// so the manifest mirrors that: one part, offset 0, chipFamily ESP32-S3. The
// part URL must be absolute - esp-web-tools calls `new URL(path)` without a
// base - so we resolve against window.location.origin (same-origin proxy).
export function manifestFor(device, version) {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  return {
    name: `Plumeria-MC (${device.name})`,
    version,
    new_install_prompt_erase: true,
    builds: [
      {
        chipFamily: 'ESP32-S3',
        parts: [
          { path: `${origin}${firmwareUrl(device.env, version)}`, offset: 0 },
        ],
      },
    ],
  }
}

// Encode the manifest as a data: URL so esp-web-install-button can fetch it
// without any lifecycle (blob URLs can be revoked before the button reads them).
export function manifestDataUrl(device, version) {
  const json = JSON.stringify(manifestFor(device, version))
  return `data:application/json;charset=utf-8,${encodeURIComponent(json)}`
}

// Ask GitHub for the latest release tag. Returns the tag string (e.g. "v1.3.1").
// api.github.com serves CORS headers, so this works from the browser. Throws
// on network errors / rate limit - callers should fall back to FIRMWARE_VERSION.
export async function latestVersion() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const data = await res.json()
  if (!data.tag_name) throw new Error('No tag_name in release response')
  return data.tag_name
}
