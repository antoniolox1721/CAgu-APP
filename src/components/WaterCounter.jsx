import { useEffect, useState } from 'react'

function WaterCounter() {
  const [liters, setLiters] = useState(0)

  useEffect(() => {
    const endValue = 54
    let current = 0
    const id = setInterval(() => {
      current += 1
      setLiters(current)
      if (current >= endValue) clearInterval(id)
    }, 35)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="counter-box">
      <p className="counter-label">Consumo diário estimado (3 pessoas, autoclismo clássico)</p>
      <p className="counter-value">{liters} L</p>
      <p className="counter-caption">
        Num só dia, uma família pode gastar dezenas de litros apenas para transporte de resíduos.
      </p>
    </div>
  )
}

export default WaterCounter
