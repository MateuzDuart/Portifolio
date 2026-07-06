import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
// import Presentation from './components/sections/Presentation'
import About from './components/sections/About'
import Technologies from './components/sections/Technologies'
import Projects from './components/sections/Projects'
import Addendum from './components/sections/Addendum'
import Contact from './components/sections/Contact'
import ResumeCTA from './components/sections/ResumeCTA'

function App() {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark' || saved === null
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Layout>
      <Hero />
      {/* <Presentation /> */}
      <About />
      <Technologies />
      <Projects />
      <Addendum />
      <Contact />
      <ResumeCTA />
    </Layout>
  )
}

export default App