import { useState } from 'react'

function GroundwaterVisualizer({ layers }) {
  const [active, setActive] = useState(0)

  return (
    <div className="groundwater">
      <div className="layer-buttons">
        {layers.map((layer, index) => (
          <button
            key={layer.title}
            className={active === index ? 'layer-btn active' : 'layer-btn'}
            onClick={() => setActive(index)}
          >
            {layer.title}
          </button>
        ))}
      </div>
      <div className="groundwater-panel">
        <h3>{layers[active].title}</h3>
        <p>{layers[active].text}</p>
      </div>
    </div>
  )
}

export default GroundwaterVisualizer
