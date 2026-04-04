import type { ReactNode, ElementType } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: ElementType
  animate?: boolean
  from?: string
  to?: string
  motionProps?: HTMLMotionProps<"div">
}

const GradientText = ({
  children,
  className = '',
  as: Component = 'span',
  animate = false,
  from = 'from-primary-600',
  to = 'to-primary-400',
  motionProps,
}: GradientTextProps) => {
  const baseStyles = `bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`
  const animatedStyles = animate ? 'animate-gradient bg-[length:200%_200%]' : ''
  
  const content = (
    <Component className={`${baseStyles} ${animatedStyles} ${className}`}>
      {children}
    </Component>
  )
  
  if (motionProps) {
    return (
      <motion.div {...motionProps}>
        {content}
      </motion.div>
    )
  }
  
  return content
}

export default GradientText