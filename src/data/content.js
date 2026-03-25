export const rotatingMessages = [
  'Cada descarga parece pequena. O efeito acumulado é enorme.',
  'A água não desaparece: muda de caminho, custo e risco.',
  'Uma sanita segura protege saúde, tempo e dignidade.',
  'O saneamento é infraestrutura invisível com impacto humano visível.',
]

export const timelineSteps = [
  {
    title: 'Descarga',
    text: 'A água leva matéria orgânica, químicos e microrganismos para a rede de drenagem.',
  },
  {
    title: 'Transporte',
    text: 'Coletores encaminham o fluxo. Falhas e fugas podem contaminar solos e águas subterrâneas.',
  },
  {
    title: 'Tratamento',
    text: 'Numa ETAR eficiente, a água é tratada e devolvida ao meio com menor carga poluente.',
  },
  {
    title: 'Reentrada no ciclo',
    text: 'A água regressa a rios, aquíferos ou reutilização técnica. Nunca "desaparece".',
  },
]

export const comparisonCards = [
  {
    context: 'Com saneamento seguro',
    points: [
      'Menor exposição a doenças de origem hídrica',
      'Maior frequência escolar e produtividade laboral',
      'Privacidade e segurança para mulheres e crianças',
    ],
  },
  {
    context: 'Sem acesso adequado',
    points: [
      'Contaminação frequente de água e solo',
      'Custos médicos mais altos e perda de rendimento',
      'Risco acrescido para dignidade, segurança e saúde mental',
    ],
  },
]

export const groundwaterLayers = [
  {
    title: 'Superfície urbana',
    text: 'Resíduos mal geridos e águas residuais infiltram-se quando não há rede fiável.',
  },
  {
    title: 'Zona não saturada',
    text: 'Parte dos contaminantes é retida, mas nitratos e patogénicos podem atravessar.',
  },
  {
    title: 'Aquífero',
    text: 'Quando a contaminação chega ao aquífero, a recuperação é lenta e dispendiosa.',
  },
]

export const quizQuestions = [
  {
    question: 'Quando puxas o autoclismo, a água desaparece?',
    options: [
      'Sim, sai do sistema.',
      'Não, entra noutra fase do ciclo hídrico.',
      'Depende do tipo de sanita, mas normalmente evapora.',
    ],
    correct: 1,
    insight:
      'A água não desaparece. Pode ser tratada, reutilizada ou devolvida ao ambiente com diferentes níveis de risco.',
  },
  {
    question: 'Porque é que saneamento é também uma questão de dignidade?',
    options: [
      'Porque evita desconforto apenas estético.',
      'Porque garante privacidade, segurança e saúde no quotidiano.',
      'Porque reduz contas de água, e só isso.',
    ],
    correct: 1,
    insight:
      'O acesso seguro ao saneamento reduz violência, humilhação e exposição a doença, especialmente em populações vulneráveis.',
  },
]

export const references = [
  { label: 'OMS / WHO — Saneamento e saúde', href: 'https://www.who.int/health-topics/sanitation' },
  { label: 'UNICEF — Water, Sanitation and Hygiene', href: 'https://www.unicef.org/wash' },
  { label: 'European Environment Agency — Water and pollution', href: 'https://www.eea.europa.eu' },
]
