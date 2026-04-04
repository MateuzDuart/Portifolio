import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, type MotionProps } from 'framer-motion'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  motionProps?: MotionProps
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  motionProps,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-600 focus:ring-primary-500',
    ghost: 'hover:bg-gray-100 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-300 focus:ring-gray-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </>
  )
  
  const buttonElement = (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {buttonContent}
    </button>
  )
  
  if (motionProps) {
    return (
      <motion.button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.button>
    )
  }
  
  return buttonElement
}

export default Button