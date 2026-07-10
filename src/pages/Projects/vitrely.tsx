import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const ProjectPage = () => {
  const [activeImage, setActiveImage] = useState(0)

  const project = {
    name: 'Vitrely',

    category: 'SaaS',

    tagline:
      'Plataforma para lojistas criarem vitrines digitais, gerenciarem pedidos e acompanharem métricas.',

    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1600',

    demoUrl: 'https://vitrely.com',

    githubUrl: '',

    period: '2025 - Atual',

    technologies: [
      {
        name: 'React',
        description: 'Frontend SPA',
      },
      {
        name: 'Flask',
        description: 'API principal',
      },
      {
        name: 'PostgreSQL',
        description: 'Banco de dados',
      },
      {
        name: 'Docker',
        description: 'Deploy',
      },
      {
        name: 'Redis',
        description: 'Cache',
      },
    ],

    stats: [
      {
        label: 'Usuários',
        value: '300+',
      },
      {
        label: 'Pedidos',
        value: '5k+',
      },
      {
        label: 'Lojas',
        value: '20+',
      },
      {
        label: 'Uptime',
        value: '99.9%',
      },
    ],

    about:
      'O Vitrely nasceu com o objetivo de permitir que pequenos lojistas tenham uma presença digital profissional sem depender exclusivamente de marketplaces ou redes sociais.',

    problem:
      'Pequenos empreendedores normalmente dependem de Instagram e WhatsApp para vender. Isso dificulta o gerenciamento de pedidos, clientes e métricas.',

    solution:
      'Foi criada uma plataforma centralizada onde cada lojista possui sua própria vitrine digital, painel administrativo e sistema de gestão.',

    challenges: [
      'Arquitetura multi-tenant',
      'Controle de permissões',
      'Deploy sem downtime',
      'Upload distribuído de imagens',
      'Escalabilidade da API',
    ],

    results: [
      'Redução do tempo de atendimento',
      'Maior organização dos pedidos',
      'Melhor experiência para clientes',
      'Plataforma preparada para crescimento',
    ],

    roadmap: [
      'Aplicativo mobile',
      'Integração PIX',
      'Sistema de afiliados',
      'Multi-idioma',
    ],

    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200',
    ],
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise" />

      <div className="container mx-auto px-6 py-24 relative z-10">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <span
            className="
              inline-block
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
            {project.category}
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            {project.name}
          </h1>

          <p
            className="
              text-xl
              text-gray-600
              dark:text-gray-400

              max-w-3xl

              leading-relaxed
              mb-10
            "
          >
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && <a
              href={project.demoUrl}
              className="
                px-6
                py-3

                rounded-2xl

                bg-primary-600
                text-white

                font-bold

                flex
                items-center
                gap-2
              "
            >
              Ver Projeto
              <ExternalLink size={18} />
            </a>}

            {
              project.githubUrl && <a
                href={project.githubUrl}
                className="
                px-6
                py-3

                rounded-2xl

                border
                border-gray-200
                dark:border-white/10

                flex
                items-center
                gap-2

                font-bold
              "
              >
                Github
                <Github size={18} />
              </a>
            }
          </div>
        </motion.section>

        {/* Stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-20">
          {project.stats.map(stat => (
            <div
              key={stat.label}
              className="
                rounded-[2rem]

                bg-gray-50/50
                dark:bg-dark-100/40

                border
                border-gray-200
                dark:border-white/5

                p-8
              "
            >
              <div className="text-4xl font-black mb-2">
                {stat.value}
              </div>

              <div className="text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Cover */}
        <section className="mb-24">
          <img
            src={project.image}
            alt={project.name}
            className="
              w-full
              rounded-[2.5rem]
              object-cover
              h-[600px]
            "
          />
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto">

          <section className="mb-20">
            <h2 className="text-4xl font-black mb-6">
              Sobre o Projeto
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">
              {project.about}
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-black mb-6">
              Problema
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">
              {project.problem}
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-black mb-6">
              Solução
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">
              {project.solution}
            </p>
          </section>

          {/* Technologies */}
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-10">
              Tecnologias Utilizadas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.technologies.map(tech => (
                <div
                  key={tech.name}
                  className="
                    rounded-3xl

                    bg-gray-50/50
                    dark:bg-dark-100/40

                    border
                    border-gray-200
                    dark:border-white/5

                    p-6
                  "
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Layers size={18} />
                    <h3 className="font-black">
                      {tech.name}
                    </h3>
                  </div>

                  <p className="text-gray-500">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-10">
              Galeria
            </h2>

            <div className="rounded-[2rem] border border-gray-200 bg-gray-50/50 p-4 dark:border-white/10 dark:bg-dark-100/40">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={project.gallery[activeImage]}
                  alt={`${project.name} - imagem ${activeImage + 1}`}
                  className="h-[420px] w-full object-cover md:h-[560px]"
                />

                {project.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveImage((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-lg backdrop-blur transition hover:bg-white"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveImage((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-lg backdrop-blur transition hover:bg-white"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {project.gallery.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`h-2.5 rounded-full transition-all ${index === activeImage ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300 dark:bg-gray-600'}`}
                      aria-label={`Selecionar imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-10">
              Desafios Técnicos
            </h2>

            <div className="space-y-4">
              {project.challenges.map(item => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    p-5

                    rounded-2xl

                    bg-gray-50/50
                    dark:bg-dark-100/40

                    border
                    border-gray-200
                    dark:border-white/5
                  "
                >
                  <TrendingUp size={18} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-10">
              Resultados
            </h2>

            <div className="space-y-4">
              {project.results.map(item => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    p-5

                    rounded-2xl

                    bg-emerald-500/5

                    border
                    border-emerald-500/10
                  "
                >
                  <CheckCircle2 size={18} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-10">
              Próximos Passos
            </h2>

            <div className="space-y-4">
              {project.roadmap.map(item => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    p-5

                    rounded-2xl

                    bg-primary-500/5

                    border
                    border-primary-500/10
                  "
                >
                  <ArrowUpRight size={18} />
                  {item}
                </div>
              ))}
            </div>
          </section>

        </article>

      </div>
    </main>
  )
}

export default ProjectPage