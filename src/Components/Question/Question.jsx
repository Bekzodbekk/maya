import React from 'react'
import "./question.scss"
import Button from '../UX/Button/Button'

const Question = () => {
  return (
    <div className='question'>
      <div className="container">
        <div className="question-title">
          <h1>Не нашли ответ на свой вопрос?</h1>
          <p>Задайте его нам в WhatsApp </p>
        </div>
        <div className="question-btn">
          <Button>Спросить в WhatsApp</Button>
        </div>
      </div>
    </div>
  )
}

export default Question