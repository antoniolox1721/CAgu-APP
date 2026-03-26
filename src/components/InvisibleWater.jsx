import { useState } from 'react'

function InvisibleWater({ scenarios }) {
  const [active, setActive] = useState(0)

  return (
    <div className="invisible-water">
      <div className="scenario-toggle" role="tablist" aria-label="Cenários de água invisível">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.name}
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={index === active ? 'scenario-btn active' : 'scenario-btn'}
          >
            {scenario.name}
          </button>
        ))}
      </div>

      <article className="scenario-panel">
        <h3>{scenarios[active].title}</h3>
        <p className="scenario-message">{scenarios[active].message}</p>
        <ul>
          {scenarios[active].bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default InvisibleWater
