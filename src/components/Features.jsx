const FEATURES = [
  {
    tag: 'Standalone',
    title: 'No companion app required',
    body: 'Built on MeshCore and run entirely on-device. Identity, contacts, and channels persist in NVS — power it on and it joins the mesh by itself.',
  },
  {
    tag: 'Channels',
    title: 'Up to 40 group channels',
    body: 'Independently named and keyed group channels plus a 128-contact address book, switchable from the on-device UI without losing context.',
  },
  {
    tag: 'Web config',
    title: 'Wi-Fi AP browser UI',
    body: 'The device hosts a plumeria-mc Wi-Fi access point and config UI at http://192.168.4.1 — set node identity, region, and channel keys, and import/export the full config as YAML.',
  },
  {
    tag: 'GPS + DMs',
    title: 'Position and direct messages',
    body: 'Hardware GPS support and end-to-end direct messages over MeshCore, with a live traffic feed for channel, direct, and info events.',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2>Features</h2>
        <p>Everything below works today on shipping hardware.</p>
        <div className="grid" style={{ marginTop: 28 }}>
          {FEATURES.map(f => (
            <div className="card" key={f.title}>
              <span className="tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
