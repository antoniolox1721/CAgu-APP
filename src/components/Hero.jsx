import { motion } from 'framer-motion'

const particles = [
  { id: 1, x: '8%', y: '18%', delay: 0 },
  { id: 2, x: '24%', y: '70%', delay: 0.7 },
  { id: 3, x: '44%', y: '30%', delay: 1.1 },
  { id: 4, x: '63%', y: '14%', delay: 1.6 },
  { id: 5, x: '78%', y: '62%', delay: 0.4 },
  { id: 6, x: '92%', y: '38%', delay: 1.3 },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="particle"
            style={{ left: particle.x, top: particle.y }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="eyebrow">Experiência interativa</p>
        <h1>Uma sanita pode...</h1>
        <p>
          ...salvar vidas, desperdiçar recursos, esconder injustiças ou abrir caminhos para um futuro mais
          digno. Este gesto diário é também uma decisão sobre saúde pública, igualdade e água invisível.
        </p>
        <a className="cta-btn" href="#simulador">
          Explorar o impacto
        </a>
      </motion.div>

      <motion.div
        className="hero-orb"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -16, 0] }}
        transition={{ duration: 6, delay: 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <motion.div
          className="orb-toilet"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          🚽
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
