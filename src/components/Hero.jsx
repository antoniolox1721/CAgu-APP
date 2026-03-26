import { motion } from 'framer-motion'

const particles = [
  { id: 1, x: '6%', y: '14%', delay: 0 },
  { id: 2, x: '18%', y: '76%', delay: 0.7 },
  { id: 3, x: '39%', y: '24%', delay: 1.1 },
  { id: 4, x: '64%', y: '10%', delay: 1.6 },
  { id: 5, x: '77%', y: '66%', delay: 0.4 },
  { id: 6, x: '93%', y: '34%', delay: 1.3 },
]

function Hero({ highlights }) {
  return (
    <section className="hero" id="topo">
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="particle"
            style={{ left: particle.x, top: particle.y }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.95, 0.2] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="eyebrow">Experiência interativa e reflexiva</p>
        <h1>
          Uma sanita pode...
          <span>proteger vidas ou esconder riscos.</span>
        </h1>
        <p>
          O que parece um gesto banal é, na verdade, uma decisão sobre água potável, saúde pública,
          dignidade humana e sustentabilidade. Desce e explora o impacto real de cada descarga.
        </p>

        <div className="hero-cta-group">
          <a className="cta-btn" href="#destino">
            Ver o percurso da água
          </a>
          <a className="cta-btn ghost" href="#simulador">
            Simular consumo
          </a>
        </div>

        <div className="hero-highlights">
          {highlights.map((item) => (
            <article key={item.label} className="highlight-chip">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-orb"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <motion.div
          className="orb-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="orb-toilet"
          animate={{ y: [0, -10, 0], rotate: [0, -1.4, 1.4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          🚽
        </motion.div>
        <div className="orb-caption">Uma escolha diária com impacto sistémico.</div>
      </motion.div>
    </section>
  )
}

export default Hero
