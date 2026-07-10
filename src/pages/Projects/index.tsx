import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Search,
  ExternalLink,
  Lock,
  Globe,
  Sparkles,
  Filter,
} from 'lucide-react'

const ProjectsPage = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      name: 'Vitrely',
      category: 'SaaS',
      status: 'Online',
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200',
      description:
        'Plataforma para lojistas criarem vitrines digitais, gerenciarem pedidos e clientes.',

      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Docker',
      ],

      link: '/projetos/vitrely',

      highlight:
        'Sistema multi-tenant com painel administrativo e métricas.'
    },

    {
      name: 'Beca System',
      category: 'Backend',
      status: 'Privado',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
      description:
        'Sistema corporativo para gestão interna e automação de processos.',

      technologies: [
        'Flask',
        'MySQL',
        'Docker',
      ],

      link: '#',

      highlight:
        'Arquitetura escalável focada em processos empresariais.'
    },

    {
      name: 'Fitness Mobile',
      category: 'Mobile',
      status: 'Online',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200',
      description:
        'Aplicativo para acompanhamento de treinos e progresso físico.',

      technologies: [
        'React Native',
        'Expo',
        'Firebase',
      ],

      link: '#',

      highlight:
        'Experiência mobile focada em retenção e engajamento.'
    },

    {
      name: 'Deploy Manager',
      category: 'DevOps',
      status: 'Online',
      image:
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200',
      description:
        'Ferramenta para gerenciamento de deploys automatizados.',

      technologies: [
        'Docker',
        'GitHub Actions',
        'Nginx',
      ],

      link: '#',

      highlight:
        'Redução significativa de downtime em atualizações.'
    },

    {
      name: 'Desktop Analytics',
      category: 'Desktop',
      status: 'Privado',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
      description:
        'Aplicação desktop para análise de dados em tempo real.',

      technologies: [
        'Rust',
        'Tauri',
        'SQLite',
      ],

      link: '#',

      highlight:
        'Performance nativa com footprint extremamente reduzido.'
    },
  ]

  const categories = [
    'Todos',
    ...new Set(projects.map(project => project.category)),
  ]

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchCategory =
        category === 'Todos' ||
        project.category === category

      const matchSearch =
        [
          project.name,
          project.description,
          project.category,
          ...project.technologies,
        ]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())

      return matchCategory && matchSearch
    })
  }, [search, category])

  return (
    <main className="min-h-screen bg-white dark:bg-dark-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise" />

      <div className="container mx-auto px-6 py-24 relative z-10">

        {/* Hero */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-primary-500/10
              text-primary-500

              text-xs
              font-black
              uppercase
              tracking-widest

              mb-6
            "
          >
            <Sparkles size={14} />
            Portfólio
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Todos os <span className="text-gradient">Projetos</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Uma coleção completa dos produtos, sistemas e aplicações
            que desenvolvi ao longo da minha trajetória.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-col gap-5">

          <div
            className="
              flex
              items-center
              gap-3

              px-5
              py-4

              rounded-2xl

              bg-gray-50
              dark:bg-dark-100/50

              border
              border-gray-200
              dark:border-white/5
            "
          >
            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Pesquisar projeto..."
              className="
                w-full
                bg-transparent
                outline-none
              "
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  px-5
                  py-3

                  rounded-xl

                  text-sm
                  font-bold

                  transition-all

                  ${
                    category === item
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-dark-100'
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Filter size={14} />
          {filteredProjects.length} projetos encontrados
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="
                group

                flex
                flex-col

                rounded-[2rem]

                overflow-hidden

                bg-gray-50/50
                dark:bg-dark-100/40

                border
                border-gray-200
                dark:border-white/5

                hover:border-primary-500/20

                transition-all
              "
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full
                    h-full

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-4 right-4">
                  {project.status === 'Online' ? (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 backdrop-blur">
                      <Globe size={12} />
                      <span className="text-[10px] font-black uppercase">
                        Online
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 backdrop-blur">
                      <Lock size={12} />
                      <span className="text-[10px] font-black uppercase">
                        Privado
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black">
                    {project.name}
                  </h3>

                  <span className="text-xs font-bold text-primary-500">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1

                        rounded-full

                        bg-white
                        dark:bg-white/5

                        text-xs
                        font-semibold
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    p-4
                    rounded-xl

                    bg-primary-500/5

                    border
                    border-primary-500/10

                    mb-6
                  "
                >
                  <p className="text-xs font-semibold">
                    {project.highlight}
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    mt-auto

                    pt-5

                    border-t
                    border-gray-200
                    dark:border-white/5
                  "
                >
                  {project.status === 'Online' ? (
                    <a
                      href={project.link}
                      className="
                        flex
                        items-center
                        gap-2

                        font-bold
                        text-primary-500
                      "
                    >
                      Ver Projeto
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-gray-500">
                      NDA
                    </span>
                  )}

                  <span className="text-4xl font-black text-gray-200 dark:text-white/5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default ProjectsPage
