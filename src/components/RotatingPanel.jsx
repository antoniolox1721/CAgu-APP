import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function RotatingPanel({ messages }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((old) => (old + 1) % messages.length), 2800)
    return () => clearInterval(id)
  }, [messages.length])

  return (
    <div className="rotating-panel" role="status" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={messages[index]}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35 }}
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
      <div className="panel-dots">
        {messages.map((message, dotIndex) => (
          <button
            key={message}
            className={dotIndex === index ? 'dot active' : 'dot'}
            aria-label={`Mensagem ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export default RotatingPanel
