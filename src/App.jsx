import { useEffect, useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
// import TeamPage from './pages/TeamPage'
import WorkPage from './pages/WorkPage'

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking 
  const mouse = useRef({x: 0, y: 0})
  const position = useRef({x: 0, y: 0})

  useEffect(() => {
    const handelMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handelMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3D(${position.current.x -20}px, ${position.current.y -20}px, 0)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return() => {
      document.removeEventListener('mousemove', handelMouseMove)
    }
  },[])

  return (
    <div className="relative  bg-white dark:bg-black transition-colors">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        {/* <Route path="/team" element={<TeamPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer theme={theme} />

      {/* Custom Cursor Ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999" 
      style={{transition: 'transform 0.1s ease-out'}}>
      </div>
      {/* Custom Cursor Dot */}
      <div ref={dotRef}  className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"></div>
    </div>
  )
}

export default App
