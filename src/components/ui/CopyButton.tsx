import { useState } from 'react'
import { Copy, CheckCircle } from 'lucide-react'

interface CopyButtonProps {
  text: string
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
      aria-label="Copiar texto"
    >
      {copied ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton