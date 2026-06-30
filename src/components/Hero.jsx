export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1>
          A handheld mesh radio <br />
          that runs <span className="accent">on its own.</span>
        </h1>
        <p className="lede">
          Plumeria-MC is MeshCore-compatible firmware for ESP32-S3 handheld
          LoRa devices. It runs fully standalone — no phone, no companion app —
          with an on-device LVGL UI, up to 40 group channels, 128 contacts,
          direct messages, GPS, and a Wi-Fi browser config with YAML
          import/export.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#flash">Flash from your browser</a>
          <a className="btn btn-ghost" href="https://github.com/oumike/plumeria-mc"
             target="_blank" rel="noreferrer">View source on GitHub</a>
        </div>
      </div>
    </section>
  )
}
