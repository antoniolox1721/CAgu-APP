function ActionCall() {
  const habits = [
    'Ajustar o volume de descarga quando possível.',
    'Não usar a sanita como caixote do lixo.',
    'Escolher equipamentos mais eficientes em água.',
    'Apoiar políticas e projetos de saneamento inclusivo.',
  ]

  return (
    <div className="action-call">
      <p>
        Uma sanita pode ser rotina. Mas também pode ser escolha política, ecológica e humana. O impacto
        vem da repetição dos pequenos gestos.
      </p>
      <ul>
        {habits.map((habit) => (
          <li key={habit}>{habit}</li>
        ))}
      </ul>
    </div>
  )
}

export default ActionCall
