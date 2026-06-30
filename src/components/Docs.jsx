export default function Docs() {
  return (
    <section id="docs">
      <div className="container">
        <h2>First-time setup</h2>
        <p>
          On first boot, connect to the <span className="kbd">plumeria-mc</span> Wi-Fi
          access point and open <a href="http://192.168.4.1">http://192.168.4.1</a>{' '}
          in a browser. Set your node name, region, and channel keys — or paste a
          full <span className="kbd">plumeria-config.yaml</span> to import everything
          at once. Settings persist in NVS across reboots, and the same config can
          be loaded from microSD at <span className="kbd">/plumeria/plumeria-config.yaml</span>.
        </p>
      </div>
    </section>
  )
}
