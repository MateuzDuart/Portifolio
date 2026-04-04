import { motion } from 'framer-motion'
import { FileText, Download, ArrowRight } from 'lucide-react'

const ResumeCTA = () => {
  return (
    <section className="py-20 bg-dark-300 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-primary-600/5 opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto p-12 md:p-20 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full text-primary-400 text-xs font-bold uppercase tracking-widest mb-8">
              <FileText size={14} />
              Meu Currículo
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Pronto para levar seu projeto ao <span className="text-gradient">próximo nível?</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Interessado em ver minha jornada detalhada e conquistas técnicas? 
              Baixe meu currículo completo em PDF.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="/cv.html?download=true"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl shadow-primary-500/20"
              >
                Baixar CV <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/cv.html"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-lg uppercase tracking-widest transition-all border border-white/10"
              >
                Ver CV <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ResumeCTA
