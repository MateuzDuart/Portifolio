import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { socialLinks } from '../../data'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white dark:bg-dark-300 pt-20 pb-10 overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Visual Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Brand/Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl font-black text-gradient mb-3">Mateus Duarte</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto font-medium leading-relaxed">
              Desenvolvedor Fullstack Pleno focado em construir experiências digitais de alto impacto.
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4 mb-12">
            {[
              { icon: Github, href: socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'E-mail' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 dark:bg-dark-100/50 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-dark-100 transition-all border border-transparent hover:border-primary-500/20 shadow-sm hover:shadow-xl"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>

          {/* "Back to Top" Action */}
          <button 
            onClick={scrollToTop}
            className="group mb-12 flex flex-col items-center gap-2 text-xs font-bold text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
          >
            <div className="p-2 rounded-full border border-gray-100 dark:border-white/5 group-hover:border-primary-500/50 transition-all">
              <ArrowUp size={16} />
            </div>
            VOLTAR AO TOPO
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500 dark:text-gray-500 font-medium">
            © {currentYear} Mateus Victor Duarte. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-500 font-medium">
            Design & Codificação por Mateus Duarte
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
