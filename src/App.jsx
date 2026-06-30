import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Devices from './components/Devices.jsx'
import Preview from './components/Preview.jsx'
import Flasher from './components/Flasher.jsx'
import Docs from './components/Docs.jsx'
import AI from './components/AI.jsx'
import Footer from './components/Footer.jsx'

// Plumeria-MC has a single fixed on-device aesthetic (the violet/cream plumeria
// splash), so unlike camillia-mt-web there is no runtime theme switcher — the
// palette lives in styles.css :root and is ported from the firmware splash.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Devices />
        <Preview />
        <Flasher />
        <Docs />
        <AI />
      </main>
      <Footer />
    </>
  )
}
