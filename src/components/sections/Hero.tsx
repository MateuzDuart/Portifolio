import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '../../data'
import GradientText from '../ui/GradientText'

const Hero = () => {
  const scrollToPresentation = () => {
    document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="início" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-300">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-noise pointer-events-none" />

      {/* Modern Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/20 border border-primary-200/50 dark:border-primary-800/30 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wider">
                Fullstack Pleno
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              Mateus <br />
              <GradientText animate from="from-primary-600" to="to-purple-500">Victor Duarte</GradientText>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
              Transformando lógica em experiências excepcionais. 
              Do baixo nível com <span className="text-primary-600 dark:text-primary-400 font-bold italic">Rust e C++ </span>
              até sistemas web escaláveis com arquiteturas modernas com <span className="text-primary-600 dark:text-primary-400 font-bold italic">Express e Nest.js </span> e interface de usuário intuitiva com <span className="text-primary-600 dark:text-primary-400 font-bold italic">React e React Native</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToPresentation}
                className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                  Me Conheça
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
              
              <a
                href="#projetos"
                className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-dark-200"
              >
                Ver Projetos
              </a>
            </div>

            <div className="flex items-center gap-8 border-t border-gray-100 dark:border-gray-800 pt-10">
              <div className="flex gap-4">
                {[
                  { icon: Github, href: socialLinks.github },
                  { icon: Linkedin, href: socialLinks.linkedin },
                  { icon: Mail, href: `mailto:${socialLinks.email}` }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-50 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm"
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </div>
              <div className="h-10 w-[1px] bg-gray-200 dark:bg-gray-800 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">Localização</p>
                <p className="text-sm font-bold">Pernambuco, Brasil</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Abstract Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-white/10 group">
              <motion.img
                src="/images/hero/hero-asset.png"
                alt="Mateus Abstract Tech"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-6 bg-white/10 dark:bg-dark-100/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-2xl font-bold">
                  3+
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter">Anos de</p>
                  <p className="text-sm font-black">Experiência</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 p-6 bg-white/10 dark:bg-dark-100/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-20"
            >
              <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter mb-1">Especialidade</p>
              <p className="text-sm font-black">Sistemas Críticos</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Descer</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero