import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { technologies } from '../../data'

const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [...new Set(technologies.map(t => t.category))]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="tecnologias" className="py-24 relative bg-white dark:bg-dark-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ecosistema <span className="text-gradient">Técnico</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Uma seleção das tecnologias que domino para construir soluções escaláveis, 
            performáticas e seguras em múltiplos domínios.
          </p>
        </motion.div>

        {categories.map((category) => (
          <motion.div 
            key={category} 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold whitespace-nowrap">{category}</h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies
                .filter(t => t.category === category)
                .map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group flex flex-col items-center"
                  >
                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                      style={{ backgroundColor: tech.color }}
                    />
                    
                    <div className="w-full bg-white dark:bg-dark-100/40 backdrop-blur-sm border border-gray-100 dark:border-white/5 p-6 rounded-[2rem] shadow-sm group-hover:shadow-xl group-hover:border-primary-500/20 transition-all duration-300 flex flex-col items-center text-center">
                      <div className="h-16 w-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                        <img 
                          src={tech.image} 
                          alt={tech.name} 
                          className="max-h-full max-w-full object-contain filter drop-shadow-md" 
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-tight">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Technologies