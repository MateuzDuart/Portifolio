export const technologies = [
  // 🧠 Languages
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'Languages' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', category: 'Languages' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'Languages' },
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396', category: 'Languages' },
  { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: '#7F52FF', category: 'Languages' },
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C', category: 'Languages' },
  { name: 'Rust', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', color: '#000000', category: 'Languages' },

  // 🎨 Frontend
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'Frontend' },
  { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38B2AC', category: 'Frontend' },
  { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', category: 'Frontend' },

  // 📱 Mobile
  { name: 'React Native', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'Mobile' },
  { name: 'Expo', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', color: '#000000', category: 'Mobile' },

  // ⚙️ Backend
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'Backend' },
  { name: 'NestJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E', category: 'Backend' },
  { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000', category: 'Backend' },
  { name: 'REST API', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688', category: 'Backend' },

  // 🗄️ Database
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', category: 'Database' },
  { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1', category: 'Database' },
  { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'Database' },

  // ☁️ DevOps & Cloud
  { name: "Nginx", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "#009639", category: "DevOps & Cloud" },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'DevOps & Cloud' },
  { name: 'GitHub Actions', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', color: '#2088FF', category: 'DevOps & Cloud' },
  { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900', category: 'DevOps & Cloud' },
  { name: 'Cloudflare', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', color: '#F38020', category: 'DevOps & Cloud' },

  // 🛠️ Tools
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'Tools' },
]

export const projects = [
  {
    name: 'Rmelina',
    image: '/images/projects/rmelina-mockup.png',
    description: 'Sistema de gerenciamento de dispositivos Android com funcionalidades de monitoramento, controle remoto e gerenciamento de aplicativos. Sistema B2B com mais de 2000 dispositivos cadastrados.',
    technologies: ['React', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'Docker'],
    link: '#',
    isPrivate: true,
    highlight: 'Meu primeiro projeto completo desde a arquitetura até o frontend, atualmente com 2000+ dispositivos cadastrados',
  },
  {
    name: 'Pelamarca',
    image: '/images/projects/pelamarca-mockup.png',
    description: 'Plataforma para administrar peladas de futebol com gerenciamento de membros, pagamentos e lista de presença. Projeto pessoal que chegou a ter 100+ usuários.',
    technologies: ['React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Docker'],
    link: '#',
    isPrivate: true,
    highlight: 'Projeto para testar novas tecnologias e arquiteturas',
  },
  {
    name: 'Vitrely',
    image: '/images/projects/vitrely-mockup.png',
    description: 'Plataforma SaaS para criar lojas online gratuitas. Projeto em desenvolvimento com 20+ lojas criadas, focado em aprendizado de marketing e vendas.',
    technologies: ['React', 'Node.js', 'NestJS', 'TypeScript', 'MongoDB', 'Docker', 'Cloudflare Workers', 'Redis'],
    link: 'https://vitrely.com',
    isPrivate: false,
    highlight: 'Projeto pessoal que combina desenvolvimento com marketing digital',
  },
]

export const socialLinks = {
  github: 'https://github.com/MateuzDuart/',
  linkedin: 'https://www.linkedin.com/in/mateusduart/',
  email: 'contato@mateusduarte.site',
  resume: '/resume.pdf',
}
