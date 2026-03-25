function ComparisonSection({ cards }) {
  return (
    <div className="comparison-grid">
      {cards.map((card) => (
        <article className="comparison-card" key={card.context}>
          <h3>{card.context}</h3>
          <ul>
            {card.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default ComparisonSection
