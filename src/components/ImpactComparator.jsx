import { useMemo, useState } from 'react'

function ImpactComparator() {
  const [flushes, setFlushes] = useState(5)
  const [people, setPeople] = useState(3)

  const result = useMemo(() => {
    const efficient = flushes * people * 4
    const classic = flushes * people * 9
    const saved = classic - efficient

    return { efficient, classic, saved, yearlySaved: saved * 365 }
  }, [flushes, people])

  return (
    <div className="impact-compare">
      <div className="control-card">
        <label>
          Descargas por pessoa/dia: <strong>{flushes}</strong>
          <input
            type="range"
            min="1"
            max="12"
            value={flushes}
            onChange={(event) => setFlushes(Number(event.target.value))}
          />
        </label>
        <label>
          Pessoas na casa: <strong>{people}</strong>
          <input
            type="range"
            min="1"
            max="8"
            value={people}
            onChange={(event) => setPeople(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="compare-bars" aria-live="polite">
        <div>
          <p>Autoclismo eficiente</p>
          <div className="bar">
            <span className="bar-efficient" style={{ width: `${(result.efficient / result.classic) * 100}%` }} />
          </div>
          <strong>{result.efficient} L/dia</strong>
        </div>

        <div>
          <p>Autoclismo clássico</p>
          <div className="bar">
            <span className="bar-classic" style={{ width: '100%' }} />
          </div>
          <strong>{result.classic} L/dia</strong>
        </div>

        <p className="compare-summary">
          Poupança potencial: <strong>{result.saved} L/dia</strong> ·{' '}
          <strong>{result.yearlySaved.toLocaleString('pt-PT')} L/ano</strong>
        </p>
      </div>
    </div>
  )
}

export default ImpactComparator
