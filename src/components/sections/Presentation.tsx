import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Pause, Clock, ChevronRight, RotateCcw, RotateCw, Gauge } from 'lucide-react'

const Presentation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Video State & Refs
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showControls, setShowControls] = useState(true)

  const chapters = [
    { time: '00:00', title: 'Introdução & Boas-vindas' },
    { time: '00:45', title: 'Minha trajetória autodidata' },
    { time: '02:15', title: 'Especialidade em Baixo Nível (C++/Rust)' },
    { time: '03:50', title: 'Desenvolvimento Web & Mobile' },
    { time: '05:20', title: 'Projetos de Impacto (Rmelina/Vitrely)' },
    { time: '07:00', title: 'Como podemos trabalhar juntos' },
  ]

  // Update playback rate when state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  const parseTimeToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(':').map(Number)
    return minutes * 60 + seconds
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleSkip = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount
    }
  }

  const handleChapterClick = (time: string) => {
    if (videoRef.current) {
      const seconds = parseTimeToSeconds(time)
      videoRef.current.currentTime = seconds
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const speeds = [1, 1.25, 1.5, 2]

  return (
    <section id="apresentacao" ref={ref} className="py-24 relative overflow-hidden bg-white dark:bg-dark-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Video Player Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col"
          >
            <div className="mb-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Apresentação em <span className="text-gradient">Vídeo</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
                Conheça quem eu sou e como trabalho através desta demonstração técnica.
              </p>
            </div>

            <div 
              className="aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-gray-200 dark:border-white/5 group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={videoRef}
                src="/video/criar-loja.mp4"
                className="w-full h-full object-cover cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
              />
              
              {/* Play Overlay (Big Center Button) */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-24 h-24 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary-600/40 pointer-events-auto cursor-pointer"
                      onClick={togglePlay}
                    >
                      <Play size={40} fill="currentColor" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Advanced Controls Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${(isPlaying && showControls) ? 'opacity-100' : 'opacity-0'}`}>
                
                {/* Progress Bar */}
                <div className="group/progress relative h-1.5 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary-500 z-10 rounded-full transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  {/* Left Controls */}
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="text-white hover:text-primary-500 transition-colors">
                      {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleSkip(-10)} className="text-white hover:text-primary-500 transition-colors" title="-10s">
                        <RotateCcw size={20} />
                      </button>
                      <button onClick={() => handleSkip(10)} className="text-white hover:text-primary-500 transition-colors" title="+10s">
                        <RotateCw size={20} />
                      </button>
                    </div>

                    <span className="text-white text-xs font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right Controls (Speed) */}
                  <div className="flex items-center gap-3">
                    <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/10">
                      {speeds.map((speed) => (
                        <button
                          key={speed}
                          onClick={() => setPlaybackRate(speed)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-all ${
                            playbackRate === speed 
                              ? 'bg-primary-600 text-white shadow-lg' 
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Name Tag (Hide when controls show) */}
              {!isPlaying && !showControls && (
                <div className="absolute bottom-8 left-8 pointer-events-none">
                  <p className="text-white font-black text-2xl mb-1 tracking-tight">Mateus Duarte</p>
                  <p className="text-primary-400 text-sm font-bold uppercase tracking-widest">Showcase 2026</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Timestamps / Chapters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col pt-12 xl:pt-0"
          >
            <div className="bg-gray-50/50 dark:bg-dark-100/30 backdrop-blur-3xl border border-gray-200 dark:border-white/5 rounded-[3rem] p-8 shadow-2xl flex flex-col h-full max-h-[520px]">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-white/5 shrink-0">
                <div className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Conteúdo do Vídeo</h3>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Capítulos do Guia</p>
                </div>
              </div>

              <div className="space-y-3 overflow-y-auto pr-4 custom-scrollbar flex-1">
                {chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => handleChapterClick(chapter.time)}
                    className="w-full group flex items-center gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-dark-200 transition-all duration-300 text-left border border-transparent hover:border-gray-100 dark:hover:border-white/5 hover:shadow-lg"
                  >
                    <span className="text-xs font-black text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-500/10 px-3 py-1.5 rounded-full shrink-0 min-w-[55px] text-center">
                      {chapter.time}
                    </span>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 flex-1">{chapter.title}</p>
                    <ChevronRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Presentation
