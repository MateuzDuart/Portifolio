import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import {
  User,
  Code2,
  Rocket,
  FileText,
  ChevronDown
} from 'lucide-react'

const sectionItems = [
  {
    title: 'Sobre',
    description: 'Quem sou eu',
    id: 'sobre',
    icon: User,
  },
  {
    title: 'Tecnologias',
    description: 'Stack e ferramentas',
    id: 'tecnologias',
    icon: Code2,
  },
  {
    title: 'Projetos',
    description: 'Meus trabalhos',
    id: 'projetos',
    icon: Rocket,
  },
  {
    title: 'Adendo',
    description: 'Informações extras',
    id: 'adendo',
    icon: FileText,
  },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSectionsOpen, setIsSectionsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Início', 'Apresentação', 'Sobre', 'Tecnologias', 'Projetos', 'Adendo', 'Contato']

  const scrollToSection = (section: string) => {
    const idMap: Record<string, string> = {
      'Início': 'início',
      'Apresentação': 'apresentacao',
      'Sobre': 'sobre',
      'Tecnologias': 'tecnologias',
      'Projetos': 'projetos',
      'Adendo': 'adendo',
      'Contato': 'contato'
    }

    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(idMap[section] || section.toLowerCase())
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
      setIsMobileMenuOpen(false)
      return
    }

    const element = document.getElementById(idMap[section] || section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-gradient">
              Mateus.dev
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('Início')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 cursor-pointer"
              >
                Início
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsSectionsOpen(!isSectionsOpen)}
                  className="
      flex items-center gap-2
      text-gray-700 dark:text-gray-300
      hover:text-primary-600
      cursor-pointer
      transition-colors
    "
                >
                  Sessões

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isSectionsOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isSectionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="
      absolute top-full left-1/2
      -translate-x-1/2 mt-4

      w-[520px]

      rounded-3xl
      border border-white/20

      bg-white/70
      dark:bg-dark-200/70

      backdrop-blur-xl
      shadow-2xl

      p-4
    "
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {sectionItems.map((item) => {
                        const Icon = item.icon

                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              scrollToSection(item.title)
                              setIsSectionsOpen(false)
                            }}
                            className="
              flex items-start gap-3
              rounded-2xl
              p-4

              text-left

              hover:bg-white/50
              dark:hover:bg-dark-100/50

              transition-all
            "
                          >
                            <div
                              className="
                flex items-center justify-center
                w-10 h-10

                rounded-xl

                bg-primary-500/10
              "
                            >
                              <Icon size={20} />
                            </div>

                            <div>
                              <h4 className="font-semibold">
                                {item.title}
                              </h4>

                              <p
                                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
                              >
                                {item.description}
                              </p>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('Blog')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 cursor-pointer"
              >
                Blog
              </button>

              <button
                onClick={() => scrollToSection('Contato')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 cursor-pointer"
              >
                Contato
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 cursor-pointer"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white dark:bg-dark-200 rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header