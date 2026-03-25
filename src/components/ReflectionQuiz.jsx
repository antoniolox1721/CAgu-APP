import { useState } from 'react'

function ReflectionQuiz({ questions }) {
  const [answers, setAnswers] = useState({})

  return (
    <div className="quiz-wrap">
      {questions.map((item, qIndex) => {
        const selected = answers[qIndex]
        const hasAnswer = selected !== undefined
        const isCorrect = selected === item.correct

        return (
          <article key={item.question} className="quiz-card">
            <h3>{item.question}</h3>
            <div className="quiz-options">
              {item.options.map((option, optIndex) => (
                <button
                  key={option}
                  className={selected === optIndex ? 'quiz-option selected' : 'quiz-option'}
                  onClick={() => setAnswers((old) => ({ ...old, [qIndex]: optIndex }))}
                >
                  {option}
                </button>
              ))}
            </div>
            {hasAnswer && (
              <p className={isCorrect ? 'quiz-feedback ok' : 'quiz-feedback warn'}>
                {isCorrect ? 'Boa leitura da realidade.' : 'Vale rever esta ideia.'} {item.insight}
              </p>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default ReflectionQuiz
