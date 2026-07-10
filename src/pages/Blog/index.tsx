import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Search,
  Clock,
  Calendar,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react'
import { useMemo, useState } from 'react'

const BlogPage = () => {
  const [search, setSearch] = useState('')

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const posts = [
    {
      slug: 'deploy-sem-downtime-docker-github-actions',
      title: 'Deploy sem Downtime usando Docker e GitHub Actions',
      description:
        'Como atualizar aplicações em produção sem interromper usuários utilizando containers, health checks e pipelines automatizadas.',
      category: 'DevOps',
      publishedAt: '09 Jul 2026',
      readTime: '8 min',
      featured: true,
      image:
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200',
    },

    {
      slug: 'criando-um-saas-escalavel',
      title: 'Criando um SaaS Escalável do Zero',
      description:
        'Arquitetura, banco de dados, autenticação e decisões importantes para construir um produto sustentável.',
      category: 'Arquitetura',
      publishedAt: '01 Jul 2026',
      readTime: '12 min',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    },

    {
      slug: 'seguranca-em-apis-rest',
      title: 'Segurança em APIs REST na Prática',
      description:
        'Boas práticas para autenticação, autorização, rate limiting e proteção contra ataques comuns.',
      category: 'Backend',
      publishedAt: '24 Jun 2026',
      readTime: '10 min',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',
    },

    {
      slug: 'docker-para-desenvolvedores',
      title: 'Docker para Desenvolvedores Modernos',
      description:
        'Tudo que você precisa para criar ambientes reproduzíveis e simplificar deploys.',
      category: 'DevOps',
      publishedAt: '15 Jun 2026',
      readTime: '15 min',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200',
    },

    {
      slug: 'github-actions-completo',
      title: 'GitHub Actions do Básico ao Avançado',
      description:
        'Automatize builds, testes, releases e deploys utilizando pipelines modernas.',
      category: 'CI/CD',
      publishedAt: '03 Jun 2026',
      readTime: '11 min',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200',
    },

    {
      slug: 'monolito-vs-microservicos',
      title: 'Monólito vs Microsserviços',
      description:
        'Quando vale a pena dividir aplicações e quando isso apenas aumenta a complexidade.',
      category: 'Arquitetura',
      publishedAt: '28 Mai 2026',
      readTime: '9 min',
      featured: false,
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    },
  ]

  const featuredPost = posts.find(post => post.featured)

  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      [
        post.title,
        post.description,
        post.category,
      ]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [search])

  return (
    <main className="min-h-screen bg-white dark:bg-dark-300 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Hero */}
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
            Blog
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Artigos & <span className="text-gradient">Insights</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Compartilhando experiências sobre desenvolvimento de software,
            arquitetura, DevOps, segurança, SaaS e construção de produtos.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-16">
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
              type="text"
              placeholder="Pesquisar artigos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="
                w-full
                bg-transparent
                outline-none
              "
            />
          </div>
        </div>

        {/* Featured */}
        {featuredPost && (
          <motion.a
            href={`/blog/${featuredPost.slug}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="
              group

              block

              mb-16

              overflow-hidden

              rounded-[2.5rem]

              bg-gray-50/50
              dark:bg-dark-100/40

              border
              border-gray-200
              dark:border-white/5

              hover:border-primary-500/20

              transition-all
            "
          >
            <div className="grid lg:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="
                    w-full
                    h-full
                    min-h-[320px]

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-10 flex flex-col">
                <span
                  className="
                    w-fit

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
                  Artigo em destaque
                </span>

                <h2 className="text-4xl font-black mt-6 mb-5">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 flex-1">
                  {featuredPost.description}
                </p>

                <div className="flex items-center gap-5 mt-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {featuredPost.publishedAt}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="
                      ml-auto

                      transition-transform

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter(post => !post.featured)
            .map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group

                  overflow-hidden

                  rounded-[2rem]

                  bg-gray-50/50
                  dark:bg-dark-100/40

                  border
                  border-gray-200
                  dark:border-white/5

                  hover:border-primary-500/20

                  transition-all
                "
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-7 flex flex-col h-full">
                  <span
                    className="
                      w-fit

                      mb-4

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

                  <h3 className="text-2xl font-black mb-4">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                    {post.description}
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      mt-8
                      pt-5

                      border-t
                      border-gray-200
                      dark:border-white/5
                    "
                  >
                    <div>
                      <div className="text-xs text-gray-500">
                        {post.publishedAt}
                      </div>

                      <div className="text-xs font-semibold mt-1">
                        {post.readTime}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>
              </motion.a>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black mb-3">
              Nenhum artigo encontrado
            </h3>

            <p className="text-gray-500">
              Tente pesquisar por outro termo.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default BlogPage

