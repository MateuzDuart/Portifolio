import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Megaphone, Share2, Camera, PenTool, BarChart3, Clock } from 'lucide-react'

const Addendum = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const otherSkills = [
    {
      icon: Megaphone,
      name: 'Marketing Digital',
      description: 'Estratégias de aquisição e crescimento para produtos SaaS.',
      status: 'Em Desenvolvimento',
      color: 'blue'
    },
    {
      icon: Share2,
      name: 'Gestão de Redes Sociais',
      description: 'Criação de presença digital e engajamento de comunidade.',
      status: 'Em Desenvolvimento',
      color: 'purple'
    },
    {
      icon: Camera,
      name: 'Edição de Foto & Design',
      description: 'Tratamento de imagens e criação de assets visuais para interfaces.',
      status: 'Prática Constante',
      color: 'emerald'
    },
    {
      icon: PenTool,
      name: 'Criação de Copy',
      description: 'Escrita persuasiva focada em conversão e experiência do usuário.',
      status: 'Em Desenvolvimento',
      color: 'orange'
    },
    {
      icon: BarChart3,
      name: 'Análise de Dados',
      description: 'Interpretação de métricas para tomada de decisão baseada em dados.',
      status: 'Em Desenvolvimento',
      color: 'cyan'
    },
  ]

  return (
    <section id="adendo" className="py-24 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="text-gradient">Habilidades Complementares</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Além do código, busco dominar áreas que potencializam a entrega de produtos completos e funcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-100 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-${skill.color}-500/10 text-${skill.color}-500 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <skill.icon size={28} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10">
                  <Clock size={12} className="text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                    {skill.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Addendum
