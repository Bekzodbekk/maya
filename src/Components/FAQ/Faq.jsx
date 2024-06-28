import React from 'react'
import "./faq.scss"
import FaqItem from '../CompItems/FaqItem/FaqItem'

const Faq = () => {
  return (
    <div className='faq'>
      <div className="container">
        <div className="faq-title">
          <h1>нас часто спрашивают</h1>
        </div>
        <div className="faq-items">
          <FaqItem />
          <FaqItem />
          <FaqItem />
          <FaqItem />
        </div>
      </div>
    </div>
  )
}

export default Faq