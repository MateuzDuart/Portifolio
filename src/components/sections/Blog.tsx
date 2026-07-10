import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Clock,
  Calendar,
  BookOpen
} from 'lucide-react'

const posts = [
  {
    title: 'Deploy sem Downtime usando Docker e GitHub Actions',
    description:
      'Estratégias para atualizar aplicações em produção sem interromper usuários, utilizando containers, health checks e pipelines automatizadas.',
    date: '09 Jul 2026',
    readTime: '8 min',
    featured: true,
    slug: '#',
    category: 'DevOps',
  },
  {
    title: 'Construindo um SaaS escalável com React e Flask',
    description:
      'Arquitetura moderna para aplicações SaaS, incluindo autenticação, multi-tenancy e monitoramento.',
    date: '01 Jul 2026',
    readTime: '12 min',
    slug: '#',
    category: 'Arquitetura',
  },
  {
    title: 'Protegendo APIs REST em ambientes reais',
    description:
      'Boas práticas de autenticação, autorização, rate limiting e proteção contra ataques comuns.',
    date: '23 Jun 2026',
    readTime: '6 min',
    slug: '#',
    category: 'Backend',
  },
  {
    title: 'O que aprendi criando meu próprio produto SaaS',
    description:
      'Erros, acertos e decisões que impactaram diretamente o crescimento da plataforma.',
    date: '10 Jun 2026',
    readTime: '10 min',
    slug: '#',
    category: 'Empreendedorismo',
  },
]

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredPost = posts.find(post => post.featured)
  const otherPosts = posts.filter(post => !post.featured)

  return (
    <section
      id="blog"
      className="
        py-24
        bg-gray-50
        dark:bg-dark-200
        relative
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            <BookOpen size={14} />
            Blog Técnico
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Últimos <span className="text-gradient">Artigos</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compartilhando experiências sobre desenvolvimento de software,
            arquitetura, DevOps, segurança e construção de produtos digitais.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/blog"
              className="
              group
              block
              mb-10

              rounded-[2.5rem]
              overflow-hidden

              border
              border-primary-500/20

              bg-gradient-to-br
              from-primary-500/10
              via-primary-500/5
              to-transparent

              backdrop-blur-sm

              p-10

              hover:border-primary-500/40
              transition-all
            "
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-primary-500/10
                  text-primary-500
                  text-[10px]
                  font-black
                  uppercase
                  tracking-widest
                "
                >
                  Destaque
                </span>

                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-white
                  dark:bg-white/5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-widest
                "
                >
                  {featuredPost.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black max-w-4xl mb-6">
                {featuredPost.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mb-8">
                {featuredPost.description}
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={14} />
                  {featuredPost.date}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock size={14} />
                  {featuredPost.readTime}
                </div>

                <div className="ml-auto">
                  <ArrowUpRight
                    size={26}
                    className="
                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Link
                to="/blog"
                className="
                group

                flex
                flex-col

                rounded-[2rem]

                bg-white/50
                dark:bg-dark-100/40

                border
                border-gray-200
                dark:border-white/5

                backdrop-blur-sm

                p-8

                hover:border-primary-500/30
                hover:shadow-xl
                hover:shadow-primary-500/5

                transition-all
              "
              >
                <div className="mb-4">
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full

                    bg-white
                    dark:bg-white/5

                    text-[10px]
                    font-black
                    uppercase
                    tracking-widest
                  "
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {post.description}
                </p>

                <div
                  className="
                  flex
                  items-center
                  justify-between

                  pt-6
                  mt-6

                  border-t
                  border-gray-200
                  dark:border-white/5
                "
                >
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {post.date}
                    </div>

                    <div className="text-xs font-bold">
                      {post.readTime}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="
                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                  />
                </div>
              </Link>
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
            to="/blog"
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
            Ver todos os artigos
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Blog

