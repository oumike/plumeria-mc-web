// Pure-CSS mock of the on-device standalone UI. It mirrors the firmware's
// channel screen — status bar, channel header, IRC-style message log, compose
// line, and the (C)FG / C(O)NTACTS / (L)IVE / (H)ELP shortcut row — using the
// site's plumeria palette (CSS variables in styles.css :root).
function DeviceMock() {
  return (
    <div className="preview preview-fw">
      <div className="fw-statusbar">
        <span className="fw-pill fw-pill-active">Public</span>
        <span className="fw-stat">RF</span>
        <span className="fw-stat">GPS 7</span>
        <span className="fw-time">11:05</span>
        <span className="fw-batt">
          <span className="fw-batt-fill" />
        </span>
        <span className="fw-stat">100%</span>
      </div>
      <div className="fw-channel">Plumeria</div>
      <div className="fw-log">
        <div className="fw-row fw-rx"><span className="fw-ts">10:59</span> [i] mesh online — 4 nodes heard</div>
        <div className="fw-row fw-rx"><span className="fw-ts">11:00</span> [Kai] morning all, testing 869.6</div>
        <div className="fw-row fw-rx"><span className="fw-ts">11:02</span> [Rio] copy, 2 hops, SNR -7</div>
        <div className="fw-row fw-tx"><span className="fw-ts">11:03</span> rolling out, will advert from the ridge</div>
        <div className="fw-row fw-rx"><span className="fw-ts">11:04</span> [Kai] 73</div>
      </div>
      <div className="fw-compose">Type message...</div>
      <div className="fw-tabs">
        <span className="fw-tab fw-tab-active">(C)FG</span>
        <span className="fw-tab">C(O)NTACTS</span>
        <span className="fw-tab">(L)IVE</span>
        <span className="fw-tab">(H)ELP</span>
      </div>
    </div>
  )
}

export default function Preview() {
  return (
    <section id="preview">
      <div className="container">
        <h2>On the device</h2>
        <p>
          A keyboard-first standalone interface drawn with LVGL. The mock below
          mirrors the channel screen layout — the same primitives render across
          every build profile, whether the device is driven by keyboard,
          trackball, roller wheel, or touch.
        </p>
        <div className="preview-grid">
          <div>
            <h3 style={{ color: 'var(--text-main)' }}>Standalone channel view</h3>
            <p>
              IRC-style timeline with per-message timestamps, a channel header,
              compose line, and shortcut row for config, contacts, the live
              traffic feed, and on-device help. Colors are ported from the
              firmware's plumeria splash palette.
            </p>
          </div>
          <DeviceMock />
        </div>
      </div>
    </section>
  )
}
