import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import BlogPage from './pages/Blog'
import ProjectsPage from './pages/Projects'
import ProjectPage from './pages/Projects/vitrely'

const App = () => {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark' || saved === null
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/vitrely" element={<ProjectPage />} />
      </Routes>
    </Layout>
  )
}

export default App