import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout