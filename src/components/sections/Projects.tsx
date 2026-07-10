import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Lock, Sparkles, Globe, Eye, ArrowUpRight } from 'lucide-react'
import { projects, technologies } from '../../data'
import { Link } from 'react-router-dom'

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projetos" className="py-24 bg-white dark:bg-dark-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Uma vitrine das soluções que construí, desde sistemas B2B complexos até plataformas SaaS escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-gray-50/50 dark:bg-dark-100/40 backdrop-blur-sm rounded-[2.5rem] border border-gray-200 dark:border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-500 shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 via-dark-300/20 to-transparent" />

                {/* Project Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border ${project.isPrivate
                    ? 'bg-red-500/10 border-red-500/20 text-red-400'
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    }`}>
                    {project.isPrivate ? <Lock size={12} /> : <Globe size={12} />}
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {project.isPrivate ? 'Privado' : 'Online'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black">{project.name}</h3>
                  <Sparkles size={20} className="text-yellow-500 opacity-50" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(techName => {
                    const techData = technologies.find(t => t.name === techName);
                    return (
                      <span
                        key={techName}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-full text-[10px] font-bold text-gray-700 dark:text-gray-300 shadow-sm"
                      >
                        {techData && <img src={techData.image} alt="" className="w-3 h-3 object-contain opacity-70" />}
                        {techName}
                      </span>
                    )
                  })}
                </div>

                {/* Highlight Box */}
                <div className="mb-8 p-5 bg-primary-600/5 dark:bg-primary-500/10 rounded-2xl border border-primary-500/20">
                  <div className="flex gap-3">
                    <Sparkles size={16} className="text-primary-500 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-primary-900 dark:text-primary-200 leading-normal">
                      {project.highlight}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-white/5 mt-auto">
                  {!project.isPrivate ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-black text-sm uppercase tracking-wider hover:translate-x-1 transition-transform"
                    >
                      Ver Projeto <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-[10px] uppercase tracking-widest">
                      <Eye size={14} /> Reservado para NDA
                    </div>
                  )}
                  {/* Subtle index number */}
                  <span className="text-4xl font-black text-gray-200 dark:text-white/5 select-none">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/projetos"
              className="
              inline-flex
              items-center
              gap-3

              px-8
              py-4

              rounded-2xl

              bg-primary-600
              hover:bg-primary-700

              text-white
              font-black

              transition-colors
            "
            >
              Ver todos os Projetos
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
      </div>
    </section>
  )
}

export default Projects
