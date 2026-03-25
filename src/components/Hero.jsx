import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
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
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
      />
    </section>
  )
}

export default Hero
