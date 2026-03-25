function References({ links }) {
  return (
    <div className="references">
      <h3>Referências para aprofundar</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default References
