import Hero from './components/Hero'
import Section from './components/Section'
import WaterCounter from './components/WaterCounter'
import RotatingPanel from './components/RotatingPanel'
import ConsumptionSimulator from './components/ConsumptionSimulator'
import Timeline from './components/Timeline'
import ComparisonSection from './components/ComparisonSection'
import GroundwaterVisualizer from './components/GroundwaterVisualizer'
import ReflectionQuiz from './components/ReflectionQuiz'
import ActionCall from './components/ActionCall'
import References from './components/References'
import FlowJourney from './components/FlowJourney'
import InvisibleWater from './components/InvisibleWater'
import ExpandableCards from './components/ExpandableCards'
import ImpactComparator from './components/ImpactComparator'
import {
  comparisonCards,
  dignityCards,
  flowSteps,
  groundwaterLayers,
  heroHighlights,
  impactStats,
  invisibleScenarios,
  quizQuestions,
  references,
  rotatingMessages,
  timelineSteps,
} from './data/content'

function App() {
  return (
    <>
      <Hero highlights={heroHighlights} />

      <main className="container">
        <Section
          id="impacto"
          title="Quando puxas o autoclismo, o mundo mexe."
          subtitle="Não é só água a correr: é infraestrutura, saúde pública, energia e escolhas sociais em movimento."
        >
          <WaterCounter />
          <RotatingPanel messages={rotatingMessages} />
          <div className="impact-grid">
            {impactStats.map((stat) => (
              <article key={stat.title} className="impact-card">
                <p>{stat.title}</p>
                <strong>{stat.value}</strong>
                <span>{stat.text}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="destino"
          title="Para onde vai a água?"
          subtitle="A água da descarga não evapora da realidade: percorre sistemas técnicos, ecológicos e humanos."
        >
          <FlowJourney steps={flowSteps} />
        </Section>

        <Section
          id="invisivel"
          title="Água invisível, impacto real"
          subtitle="O que não se vê pode custar caro: em dinheiro, em ecossistemas e em saúde."
        >
          <InvisibleWater scenarios={invisibleScenarios} />
        </Section>

        <Section
          id="simulacao"
          title="Descarga a descarga: compara cenários"
          subtitle="Usa os controlos para perceber como uma decisão técnica altera consumo diário e anual."
        >
          <ConsumptionSimulator />
          <ImpactComparator />
        </Section>

        <Section
          id="dignidade"
          title="Saneamento é dignidade, segurança e futuro"
          subtitle="Uma sanita pode ser proteção concreta para saúde, escola, trabalho e autonomia."
        >
          <ExpandableCards items={dignityCards} />
        </Section>

        <Section
          id="comparacao"
          title="Nem toda a gente tem esta sanita"
          subtitle="Desigualdade no acesso a saneamento seguro continua a definir oportunidades de vida."
        >
          <ComparisonSection cards={comparisonCards} />
        </Section>

        <Section
          id="subterraneas"
          title="Aquíferos: a contaminação que demora a desaparecer"
          subtitle="Quando a proteção falha à superfície, o problema desce para o subsolo e pode durar anos."
        >
          <GroundwaterVisualizer layers={groundwaterLayers} />
        </Section>

        <Section
          id="timeline"
          title="Da rotina ao desenvolvimento sustentável"
          subtitle="Saneamento, água e saúde estão ligados no tempo: do gesto individual ao impacto coletivo."
        >
          <Timeline steps={timelineSteps} />
        </Section>

        <Section
          id="quiz"
          title="Mini quiz reflexivo"
          subtitle="Responde, testa ideias e transforma perceção em responsabilidade informada."
        >
          <ReflectionQuiz questions={quizQuestions} />
        </Section>

        <Section
          id="acao"
          title="Uma sanita pode obrigar-nos a escolher melhor"
          subtitle="Mudanças simples, repetidas com intenção, constroem sistemas mais justos e sustentáveis."
        >
          <ActionCall />
          <References links={references} />
        </Section>
      </main>

      <footer className="footer">
        <p>“O que pode uma sanita?” — Uma experiência sobre água invisível, dignidade e responsabilidade partilhada.</p>
      </footer>
    </>
  )
}

export default App
