export default function Nav() {
  const faviconHref = `${import.meta.env.BASE_URL}favicon.svg`

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src={faviconHref} alt="" />
          <span>Plumeria-MC</span>
        </a>
        <div className="nav-spacer" />
        <a href="#devices">Devices</a>
        <a href="#preview">Preview</a>
        <a href="#flash">Flash</a>
        <a href="#license">License</a>
        <a href="https://github.com/oumike/plumeria-mc/releases" target="_blank" rel="noreferrer">Releases</a>
        <a href="https://github.com/oumike/plumeria-mc" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  )
}
