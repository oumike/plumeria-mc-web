export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <span>Plumeria-MC · GPLv3</span>
        <span style={{ flex: 1 }} />
        <a href="https://github.com/oumike/plumeria-mc" target="_blank" rel="noreferrer">Source</a>
        <a href="https://github.com/oumike/plumeria-mc/releases" target="_blank" rel="noreferrer">Releases</a>
      </div>
    </footer>
  )
}
