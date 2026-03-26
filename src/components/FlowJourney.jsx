import { useState } from 'react'
import { motion } from 'framer-motion'

function FlowJourney({ steps }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flow-journey">
      <div className="flow-hotspots" role="tablist" aria-label="Percurso da água">
        {steps.map((step, index) => (
          <button
            key={step.title}
            className={index === active ? 'flow-node active' : 'flow-node'}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={index === active}
          >
            <span>{step.icon}</span>
            <strong>{step.title}</strong>
            <small>{step.short}</small>
          </button>
        ))}
      </div>

      <motion.article
        key={steps[active].title}
        className="flow-detail"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h3>
          {steps[active].icon} {steps[active].title}
        </h3>
        <p>{steps[active].detail}</p>
        <div className="flow-progress" aria-hidden="true">
          <span style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
        </div>
      </motion.article>
    </div>
  )
}

export default FlowJourney
