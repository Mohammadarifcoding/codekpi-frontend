
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';


const ErrorMessage = ({ message }) => {

  if (!message) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-red-600 text-sm mt-1"
    >
      <AlertCircle className="w-4 h-4" />
      <span>{message}</span>
    </motion.div>
  )
}

export default ErrorMessage