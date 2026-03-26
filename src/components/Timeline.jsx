function Timeline({ steps }) {
  return (
    <ol className="timeline">
      {steps.map((step, index) => (
        <li key={step.title} className="timeline-item">
          <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline
