import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, CheckCircle, Copy, MessageCircle, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { socialLinks } from '../../data'

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-white dark:bg-dark-300">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Vamos criar algo <span className="text-gradient">incrível?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Estou pronto para transformar suas ideias em produtos digitais de alta performance. 
              Entre em contato diretamente pelos canais abaixo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
              {/* Email Card */}
              <div className="group relative p-8 bg-gray-50 dark:bg-dark-100/50 rounded-3xl border border-gray-100 dark:border-white/5 transition-all hover:border-primary-500/30 shadow-sm hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 bg-white dark:bg-dark-200 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
                    title="Copiar e-mail"
                  >
                    {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">E-mail Profissional</p>
                  <p className="font-bold text-lg break-all">{socialLinks.email}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/5581986437864"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-3xl border border-emerald-500/20 hover:bg-emerald-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-xl block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/20">
                    <MessageCircle size={24} />
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} className="text-emerald-500" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Resposta Rápida</p>
                  <p className="font-bold text-lg text-emerald-700 dark:text-emerald-300">Chamar no WhatsApp</p>
                </div>
                {/* Visual pulse effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-dark-100 rounded-2xl hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all font-bold"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-dark-100 rounded-2xl hover:bg-[#0077b5] hover:text-white transition-all font-bold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
