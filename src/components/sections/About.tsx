import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Wrench, Rocket, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Code,
      title: 'Fullstack Completo',
      description: 'Arquitetura de sistemas robustos com React, Node.js e TypeScript, focados em performance.',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Nativo',
      description: 'Aplicações nativas de alto desempenho usando Kotlin e ecossistema React Native.',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: Wrench,
      title: 'Engenharia Reversa',
      description: 'Análise profunda de sistemas Android/Windows e desenvolvimento de ferramentas de modificação.',
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Autodidata',
      description: 'Evolução constante e adaptabilidade rápida a novos paradigmas e linguagens de baixo nível.',
      color: 'bg-orange-500/10 text-orange-500'
    },
  ]

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-dark-200">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Storytelling Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-transparent rounded-full opacity-30 hidden md:block" />
              <p>
                Sou um desenvolvedor autodidata com mais de 5 anos de experiência em tecnologias, sendo 3 anos atuando profissionalmente. Minha jornada começou explorando o "coração" das máquinas, trabalhando com 
                <span className="text-primary-600 dark:text-primary-400 font-bold"> C++ e Rust</span> em sistemas embarcados.
              </p>
              <p>
                Essa base de baixo nível me deu uma compreensão única sobre como o software interage com o hardware, o que hoje aplico na criação de 
                arquiteturas web e mobile extremamente eficientes e escaláveis.
              </p>
              <p>
                Atualmente, foco em projetos de grande impacto, como o <span className="text-gray-900 dark:text-white font-semibold italic">Rmelina</span>, 
                onde gerencio milhares de dispositivos simultâneos, equilibrando robustez técnica com uma experiência de usuário impecável.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <a 
                href="#contato" 
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:underline group"
              >
                Vamos trabalhar juntos? <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-100 rotate-2 group cursor-pointer">
              <img 
                src="/images/about/about-asset.png" 
                alt="Mateus Workspace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>
            
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
            <div className="absolute inset-4 border-2 border-primary-500/30 rounded-3xl -z-10 -rotate-3" />
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Developer Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 bg-white dark:bg-dark-100/40 backdrop-blur-xl rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Internal design elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code size={120} />
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Localização</p>
                  <p className="font-bold">Abreu e Lima - PE</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Idade</p>
                  <p className="font-bold">{new Date().getFullYear() - 2002} Anos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Role</p>
                  <p className="font-bold">Fullstack Pleno</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                "Codificando soluções resilientes, pixel por pixel."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
