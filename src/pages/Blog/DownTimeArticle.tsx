import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
} from 'lucide-react'
import { useState } from 'react'

const post = {
  slug: 'deploy-sem-downtime-docker-github-actions',

  title: 'Deploy sem Downtime usando Docker e GitHub Actions',

  description:
    'Como atualizar aplicações em produção sem interromper usuários utilizando containers, health checks e pipelines automatizadas.',

  category: 'DevOps',

  publishedAt: '09 Jul 2026',

  readTime: '8 min',

  author: {
    name: 'Mateus Duarte',
    role: 'Fullstack Developer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43b?w=400',
  },

  featuredImage:
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600',

  tags: [
    'Docker',
    'GitHub Actions',
    'CI/CD',
    'DevOps',
    'Nginx',
  ],

  content: [
    {
      type: 'paragraph',
      content:
        'Uma das maiores preocupações em aplicações que possuem usuários ativos é realizar atualizações sem gerar indisponibilidade. Em sistemas SaaS, mesmo alguns segundos de downtime podem resultar em perda de vendas, falhas em integrações e uma experiência ruim para os clientes.',
    },

    {
      type: 'heading',
      content: 'O problema do downtime',
    },

    {
      type: 'paragraph',
      content:
        'A abordagem mais comum consiste em parar a aplicação atual, subir a nova versão e então validar se tudo está funcionando corretamente. O problema é que durante esse processo existe uma janela de tempo em que nenhum serviço está respondendo às requisições.',
    },

    {
      type: 'quote',
      content:
        'Todo deploy é uma mudança em produção. Trate-o como um processo crítico.',
    },

    {
      type: 'paragraph',
      content:
        'Quando a quantidade de usuários cresce, essa estratégia deixa de ser aceitável. É necessário garantir que uma nova versão só receba tráfego depois de ser validada.',
    },

    {
      type: 'heading',
      content: 'Estratégia utilizada',
    },

    {
      type: 'paragraph',
      content:
        'A solução adotada consiste em manter duas versões da aplicação disponíveis simultaneamente atrás de um proxy reverso. Enquanto a versão atual continua atendendo os usuários, a nova versão é iniciada em paralelo.',
    },

    {
      type: 'code',
      language: 'yaml',
      content: `services:
app:
  image: my-app:latest
  restart: always

nginx:
  image: nginx:latest
  restart: always`,
    },

    {
      type: 'paragraph',
      content:
        'Após a inicialização da nova versão, health checks são executados automaticamente. Somente quando todos os testes são aprovados o balanceador passa a direcionar tráfego para a nova instância.',
    },

    {
      type: 'heading',
      content: 'Pipeline de Deploy',
    },

    {
      type: 'paragraph',
      content:
        'Utilizando GitHub Actions é possível automatizar todo o fluxo, desde a criação da imagem Docker até a publicação em produção.',
    },

    {
      type: 'code',
      language: 'yaml',
      content: `- name: Build image
run: docker build -t my-app .

- name: Push image
run: docker push my-app

- name: Deploy
run: ./deploy.sh`,
    },

    {
      type: 'heading',
      content: 'Benefícios obtidos',
    },

    {
      type: 'paragraph',
      content:
        'Com essa arquitetura os deploys se tornaram praticamente transparentes para os usuários. Além disso, rollback passou a ser uma operação extremamente rápida, reduzindo significativamente os riscos de atualização.',
    },
  ],
}

const BlogPost = () => {
  const [isShared, setIsShared] = useState(false)

  const onShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsShared(true)
    setTimeout(() => setIsShared(false), 4000)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark-300 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Back */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="
            inline-flex
            items-center
            gap-2
            mb-12

            text-primary-600
            dark:text-primary-400

            font-bold
            hover:gap-3
            transition-all
          "
        >
          <ArrowLeft size={16} />
          Voltar para o blog
        </motion.a>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-14"
        >
          <span
            className="
              inline-flex
              items-center
              px-4
              py-2

              rounded-full

              bg-primary-500/10
              text-primary-500

              text-xs
              font-black
              uppercase
              tracking-widest

              mb-8
            "
          >
            {post.category}
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl

              font-black
              leading-tight

              mb-8
            "
          >
            {post.title}
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
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="
                  w-12
                  h-12
                  rounded-full
                  object-cover
                "
              />

              <div>
                <div className="font-black">
                  {post.author.name}
                </div>

                <div className="text-sm text-gray-500">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-gray-200 dark:bg-white/10" />

            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={16} />
              {post.publishedAt}
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} />
              {post.readTime}
            </div>

            <button
              className="
                ml-auto

                flex
                items-center
                gap-2

                px-4
                py-2

                rounded-xl

                bg-gray-100
                dark:bg-dark-100

                hover:scale-105

                transition-transform
                cursor-pointer

                disabled:cursor-default
                disabled:opacity-50
              "
              onClick={onShare}
              disabled={isShared}
            >
              <Share2 size={16} />
              {isShared ? 'Copiado' : 'Compartilhar'}
            </button>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="
            max-w-6xl
            mx-auto

            mb-20

            overflow-hidden
            rounded-[2.5rem]

            border
            border-white/10
          "
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            className="
              w-full
              h-[550px]
              object-cover
            "
          />
        </motion.div>

        {/* Content */}
        <article
          className="
            max-w-3xl
            mx-auto
          "
        >
          {post.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2
                    key={index}
                    className="
                      text-3xl
                      md:text-4xl

                      font-black

                      mt-16
                      mb-6
                    "
                  >
                    {block.content}
                  </h2>
                )

              case 'paragraph':
                return (
                  <p
                    key={index}
                    className="
                      text-lg
                      leading-9

                      text-gray-700
                      dark:text-gray-300

                      mb-8
                    "
                  >
                    {block.content}
                  </p>
                )

              case 'quote':
                return (
                  <blockquote
                    key={index}
                    className="
                      my-12

                      border-l-4
                      border-primary-500

                      pl-8

                      text-2xl
                      italic
                      font-semibold

                      text-gray-800
                      dark:text-gray-200
                    "
                  >
                    {block.content}
                  </blockquote>
                )

              case 'code':
                return (
                  <div
                    key={index}
                    className="
                      my-10

                      rounded-[2rem]
                      overflow-hidden

                      border
                      border-white/10

                      bg-dark-300
                    "
                  >
                    <div
                      className="
                        px-5
                        py-3

                        border-b
                        border-white/10

                        text-xs
                        uppercase
                        tracking-widest

                        text-gray-400
                      "
                    >
                      {block.language}
                    </div>

                    <pre
                      className="
                        p-6
                        overflow-x-auto
                        text-sm
                        text-gray-200
                      "
                    >
                      <code>{block.content}</code>
                    </pre>
                  </div>
                )

              default:
                return null
            }
          })}
        </article>

        {/* Tags */}
        <section
          className="
            max-w-3xl
            mx-auto

            mt-20
          "
        >
          <div
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
            <div className="flex items-center gap-2 mb-5">
              <Tag size={16} />
              <span className="font-black">
                Tags
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="
                    px-4
                    py-2

                    rounded-full

                    bg-white
                    dark:bg-white/5

                    border
                    border-gray-200
                    dark:border-white/5

                    text-sm
                    font-semibold
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BlogPost

