export const heroHighlights = [
  { label: 'Água potável por descarga', value: '4–9 L' },
  { label: 'Gestos por pessoa/dia', value: '4–6' },
  { label: 'Risco invisível', value: 'Aquíferos' },
]

export const rotatingMessages = [
  'Cada descarga parece pequena. O efeito acumulado é enorme.',
  'A água não desaparece: muda de caminho, custo e risco.',
  'Uma sanita segura protege saúde, tempo e dignidade.',
  'O saneamento é infraestrutura invisível com impacto humano visível.',
]

export const impactStats = [
  {
    title: 'Saúde pública',
    value: 'Menos surtos',
    text: 'Saneamento seguro corta vias de transmissão de doenças de origem hídrica.',
  },
  {
    title: 'Dignidade',
    value: 'Mais segurança',
    text: 'Privacidade e proteção, especialmente para mulheres, crianças e pessoas idosas.',
  },
  {
    title: 'Ambiente',
    value: 'Menos pressão',
    text: 'Tratamento adequado reduz cargas poluentes em rios, solos e zonas costeiras.',
  },
]

export const flowSteps = [
  {
    title: 'Descarga',
    icon: '🚽',
    short: 'A água inicia uma viagem invisível.',
    detail:
      'A descarga mistura água potável com resíduos e microrganismos. O que parecia “desaparecer” entra numa rede física que exige energia e manutenção.',
  },
  {
    title: 'Rede de drenagem',
    icon: '🕳️',
    short: 'Tubagens e coletores transportam o fluxo.',
    detail:
      'Quando a infraestrutura é frágil, surgem fugas e infiltrações. A contaminação pode alcançar solos e águas subterrâneas sem sinais imediatos à superfície.',
  },
  {
    title: 'Tratamento em ETAR',
    icon: '⚙️',
    short: 'Separar, tratar, reduzir risco.',
    detail:
      'No tratamento, removem-se sólidos, matéria orgânica e parte dos contaminantes. Quanto melhor o processo, menor a pressão sobre ecossistemas e saúde humana.',
  },
  {
    title: 'Regresso ao ciclo',
    icon: '🌍',
    short: 'A água reentra no ambiente.',
    detail:
      'A água regressa a rios, albufeiras, aquíferos ou reutilização técnica. Ela não desaparece: muda de estado, local e impacto.',
  },
]

export const invisibleScenarios = [
  {
    name: 'Casa',
    title: 'Dentro de casa',
    message: 'Conforto imediato, custo escondido.',
    bullets: [
      'A descarga é instantânea; o impacto é prolongado.',
      'Usar a sanita como lixo aumenta entupimentos e tratamento.',
      'Autoclismos eficientes reduzem água sem perder eficácia.',
    ],
  },
  {
    name: 'Cidade',
    title: 'Infraestrutura urbana',
    message: 'Sem rede robusta, o risco multiplica-se.',
    bullets: [
      'Tempestades e falhas de rede podem causar descargas indevidas.',
      'ETAR subdimensionadas libertam efluentes com maior carga poluente.',
      'Manutenção preventiva evita danos ambientais e custos futuros.',
    ],
  },
  {
    name: 'Aquífero',
    title: 'Debaixo do solo',
    message: 'O invisível pode ficar anos a circular.',
    bullets: [
      'Nitratos e patogénicos podem infiltrar-se lentamente.',
      'A recuperação de aquíferos contaminados é lenta e cara.',
      'Prevenir contaminação é muito mais eficaz do que remediar.',
    ],
  },
]

export const dignityCards = [
  {
    title: 'Saúde e prevenção',
    teaser: 'Uma sanita segura pode prevenir a propagação de doenças.',
    detail:
      'Reduz contacto com agentes patogénicos, protege água de consumo e alivia pressão sobre serviços de saúde. Prevenção começa em infraestruturas básicas bem geridas.',
  },
  {
    title: 'Segurança e privacidade',
    teaser: 'Dignidade também é poder usar um WC sem medo.',
    detail:
      'Quando não há instalações seguras, aumentam riscos de assédio, violência e exposição. Acesso seguro significa autonomia e respeito no quotidiano.',
  },
  {
    title: 'Educação e futuro',
    teaser: 'Saneamento influencia presença na escola e produtividade.',
    detail:
      'Instalações adequadas em casa e nas escolas reduzem faltas e melhoram condições de aprendizagem. O impacto é social, económico e intergeracional.',
  },
]

export const comparisonCards = [
  {
    context: 'Com saneamento seguro',
    points: [
      'Menor exposição a doenças de origem hídrica',
      'Mais tempo para estudar e trabalhar',
      'Maior proteção de ecossistemas locais',
    ],
  },
  {
    context: 'Sem acesso adequado',
    points: [
      'Contaminação recorrente de solo e água',
      'Custos médicos e perda de rendimento',
      'Vulnerabilidade social e maior insegurança',
    ],
  },
]

export const groundwaterLayers = [
  {
    title: 'Superfície urbana',
    text: 'Resíduos e efluentes mal geridos infiltram-se quando não há rede fiável ou manutenção consistente.',
  },
  {
    title: 'Zona não saturada',
    text: 'Parte dos contaminantes é retida no solo, mas nitratos e microrganismos podem continuar a migrar.',
  },
  {
    title: 'Aquífero',
    text: 'Ao atingir o aquífero, a contaminação espalha-se e pode comprometer captações de água por longos períodos.',
  },
]

export const timelineSteps = [
  { year: 'Hoje', title: 'Escolha individual', text: 'Cada descarga é uma decisão de consumo de água potável.' },
  {
    year: 'Curto prazo',
    title: 'Efeito acumulado',
    text: 'Hábitos diários transformam-se em milhares de litros e custos de tratamento.',
  },
  {
    year: 'Médio prazo',
    title: 'Pressão territorial',
    text: 'Sistemas frágeis elevam risco de contaminação e desigualdades no acesso a saneamento.',
  },
  {
    year: 'Longo prazo',
    title: 'Futuro coletivo',
    text: 'Investir em saneamento sustentável protege saúde pública, recursos hídricos e dignidade humana.',
  },
]

export const quizQuestions = [
  {
    question: 'A água da descarga desaparece?',
    options: ['Não, continua no ciclo hídrico.', 'Só desaparece se for pouca quantidade.', 'Sim, sai do sistema.'],
    correct: 0,
    insight:
      'A água muda de percurso: passa por redes, tratamento e reentrada no ambiente. O impacto continua para além do que vemos.',
  },
  {
    question: 'Porque é que saneamento é também tema de dignidade?',
    options: [
      'Porque melhora apenas o conforto estético.',
      'Porque serve apenas para poupar dinheiro.',
      'Porque garante privacidade, segurança e saúde.',
    ],
    correct: 2,
    insight: 'Acesso seguro ao saneamento reduz exposição a violência, doença e exclusão social.',
  },
  {
    question: 'O que é mais eficaz para proteger aquíferos?',
    options: ['Remediar depois de contaminar.', 'Ignorar, porque está no subsolo.', 'Prevenir infiltrações e tratar bem os efluentes.'],
    correct: 2,
    insight: 'A prevenção é mais rápida, barata e eficaz do que recuperar águas subterrâneas já contaminadas.',
  },
  {
    question: 'Uma ETAR eficiente serve para…',
    options: [
      'Reduzir contaminantes antes da água voltar ao meio natural.',
      'Esconder o problema longe da cidade.',
      'Aumentar o consumo doméstico de água.',
    ],
    correct: 0,
    insight: 'Tratamento adequado reduz risco sanitário e pressão ambiental em rios e zonas costeiras.',
  },
  {
    question: 'Qual é a melhor leitura sobre o autoclismo?',
    options: [
      'Quanto mais litros por descarga, melhor para o ambiente.',
      'Ajustar volume e eficiência pode poupar milhares de litros por ano.',
      'Não há diferença real entre sistemas eficientes e antigos.',
    ],
    correct: 1,
    insight: 'Pequenas escolhas técnicas, repetidas diariamente, mudam de forma significativa o consumo anual.',
  },
  {
    question: 'Sem saneamento seguro, o impacto social tende a…',
    options: [
      'Diminuir faltas escolares e riscos de saúde.',
      'Aumentar vulnerabilidade, doença e desigualdade.',
      'Ficar apenas na esfera ambiental, sem efeito humano.',
    ],
    correct: 1,
    insight: 'Saneamento é infraestrutura de justiça social: influencia saúde, educação, segurança e rendimento.',
  },
]

export const references = [
  { label: 'OMS / WHO — Sanitation', href: 'https://www.who.int/health-topics/sanitation' },
  { label: 'UNICEF — Water, Sanitation and Hygiene (WASH)', href: 'https://www.unicef.org/wash' },
  {
    label: 'UN-Water — SDG 6 Saneamento e Água',
    href: 'https://www.unwater.org/water-facts/water-and-sanitation',
  },
  {
    label: 'European Environment Agency — Water pollution pressures',
    href: 'https://www.eea.europa.eu/en/topics/in-depth/water-pollution',
  },
]
