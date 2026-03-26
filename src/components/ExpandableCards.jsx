import { useState } from 'react'

function ExpandableCards({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="expandable-grid">
      {items.map((item, index) => {
        const open = openIndex === index

        return (
          <article key={item.title} className={open ? 'expand-card open' : 'expand-card'}>
            <button className="expand-trigger" onClick={() => setOpenIndex(open ? -1 : index)}>
              <h3>{item.title}</h3>
              <span>{open ? '−' : '+'}</span>
            </button>
            <p className="expand-teaser">{item.teaser}</p>
            {open && <p className="expand-detail">{item.detail}</p>}
          </article>
        )
      })}
    </div>
  )
}

export default ExpandableCards
