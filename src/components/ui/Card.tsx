import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'glass'
  hover?: 'scale' | 'shadow' | 'none'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  motionProps?: HTMLMotionProps<"div">
}

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = 'shadow',
  padding = 'md',
  motionProps,
}: CardProps) => {
  const baseStyles = 'rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-700',
    gradient: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800',
    glass: 'bg-white/10 dark:bg-dark-100/10 backdrop-blur-lg border border-white/20'
  }
  
  const hoverStyles = {
    scale: 'hover:scale-105',
    shadow: 'hover:shadow-xl',
    none: ''
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const cardElement = (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles[hover]} ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  )
  
  if (motionProps) {
    return (
      <motion.div
        className={`${baseStyles} ${variants[variant]} ${hoverStyles[hover]} ${paddings[padding]} ${className}`}
        {...motionProps}
      >
        {children}
      </motion.div>
    )
  }
  
  return cardElement
}

export default Card