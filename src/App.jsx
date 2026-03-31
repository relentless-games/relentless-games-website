import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Links from './components/Links'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Links />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}
