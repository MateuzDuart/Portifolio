import Hero from '../components/sections/Hero'
// import Presentation from '../components/sections/Presentation'
import About from '../components/sections/About'
import Technologies from '../components/sections/Technologies'
import Projects from '../components/sections/Projects'
import Addendum from '../components/sections/Addendum'
import Contact from '../components/sections/Contact'
import ResumeCTA from '../components/sections/ResumeCTA'
import Blog from '../components/sections/Blog'

function Home() {


  return (
    <>
      <Hero />
      {/* <Presentation /> */}
      <About />
      <Technologies />
      <Projects />
      <Addendum />
      <Contact />
      <Blog />
      <ResumeCTA />
    </>

  )
}

export default Home