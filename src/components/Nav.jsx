export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src="/favicon.svg" alt="" />
          <span>Plumeria-MC</span>
        </a>
        <div className="nav-spacer" />
        <a href="#features">Features</a>
        <a href="#devices">Devices</a>
        <a href="#preview">Preview</a>
        <a href="#flash">Flash</a>
        <a href="https://github.com/oumike/plumeria-mc" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  )
}
