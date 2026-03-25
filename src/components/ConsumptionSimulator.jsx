import { useMemo, useState } from 'react'

function ConsumptionSimulator() {
  const [flushes, setFlushes] = useState(5)
  const [litersPerFlush, setLitersPerFlush] = useState(6)

  const stats = useMemo(() => {
    const daily = flushes * litersPerFlush
    return {
      daily,
      weekly: daily * 7,
      yearly: daily * 365,
    }
  }, [flushes, litersPerFlush])

  return (
    <div className="simulator-grid" id="simulador">
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
          Litros por descarga: <strong>{litersPerFlush} L</strong>
          <input
            type="range"
            min="2"
            max="12"
            value={litersPerFlush}
            onChange={(event) => setLitersPerFlush(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="stat-card">
        <h3>Impacto de consumo</h3>
        <ul>
          <li>
            <span>Por dia</span>
            <strong>{stats.daily} L</strong>
          </li>
          <li>
            <span>Por semana</span>
            <strong>{stats.weekly} L</strong>
          </li>
          <li>
            <span>Por ano</span>
            <strong>{stats.yearly.toLocaleString('pt-PT')} L</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ConsumptionSimulator
