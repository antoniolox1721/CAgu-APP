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
import {
  comparisonCards,
  groundwaterLayers,
  quizQuestions,
  references,
  rotatingMessages,
  timelineSteps,
} from './data/content'

function App() {
  return (
    <>
      <Hero />

      <main className="container">
        <Section
          id="impacto"
          title="Quando puxas o autoclismo, o mundo mexe."
          subtitle="Não é só água a correr. É energia, infraestruturas, saúde pública e justiça social em movimento."
        >
          <WaterCounter />
          <RotatingPanel messages={rotatingMessages} />
        </Section>

        <Section
          id="simulacao"
          title="Quanto custa um gesto repetido?"
          subtitle="Experimenta diferentes cenários e vê como pequenas mudanças se ampliam no tempo."
        >
          <ConsumptionSimulator />
        </Section>

        <Section
          id="destino"
          title="Para onde vai a água?"
          subtitle="A água da descarga entra numa jornada: transporte, tratamento e regresso ao ciclo hídrico — ou risco de contaminação quando o sistema falha."
        >
          <Timeline steps={timelineSteps} />
        </Section>

        <Section
          id="dignidade"
          title="Saneamento é saúde, segurança e dignidade humana"
          subtitle="Ter uma sanita segura reduz doenças, protege privacidade e evita que milhões de pessoas vivam em permanente vulnerabilidade."
        >
          <p className="narrative-text">
            Em muitos contextos, a ausência de saneamento obriga famílias a escolhas impossíveis: arriscar
            contaminação, percorrer longas distâncias, ou expor-se à violência. Uma casa de banho segura pode
            ser a diferença entre frequentar a escola ou faltar por medo, entre prevenir doença ou tratá-la
            tarde demais.
          </p>
        </Section>

        <Section
          id="comparacao"
          title="Dois cenários, duas realidades"
          subtitle="Comparar acesso seguro com ausência de condições mostra como o saneamento estrutura oportunidades de vida."
        >
          <ComparisonSection cards={comparisonCards} />
        </Section>

        <Section
          id="subterraneas"
          title="Contaminação subterrânea: o impacto que não se vê"
          subtitle="Quando águas residuais infiltram solos sem proteção, os aquíferos podem tornar-se reservatórios de risco durante anos."
        >
          <GroundwaterVisualizer layers={groundwaterLayers} />
        </Section>

        <Section
          id="invisivel"
          title="Água invisível"
          subtitle="A água pode sair do teu campo de visão, mas não sai do sistema. O impacto continua no ambiente, na economia e na saúde coletiva."
        >
          <p className="narrative-text">
            Chamar-lhe “invisível” é reconhecer uma ilusão confortável: aquilo que não vemos parece não existir.
            Mas cada descarga ativa uma cadeia de custos e decisões — de tratamento, energia, monitorização e
            prevenção de poluição. O invisível não é inexistente: é apenas distante do olhar.
          </p>
        </Section>

        <Section
          id="quiz"
          title="Perguntas para abanar certezas"
          subtitle="Responde e testa a tua leitura sobre água, saneamento e responsabilidade partilhada."
        >
          <ReflectionQuiz questions={quizQuestions} />
        </Section>

        <Section
          id="acao"
          title="E agora?"
          subtitle="Responsabilidade sem dramatismo: escolhas simples, repetidas, com impacto real."
        >
          <ActionCall />
          <References links={references} />
        </Section>
      </main>

      <footer className="footer">
        <p>
          “O que pode uma sanita?” — Uma narrativa interativa sobre água, dignidade e futuro partilhado.
        </p>
      </footer>
    </>
  )
}

export default App
