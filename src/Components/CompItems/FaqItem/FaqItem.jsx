import React, { useState } from 'react'
import "./faqItem.scss"

const FaqItem = () => {
  const [itemEffect, SetItemEffect] = useState(false)
  const toggleItemEffect = () => {
    SetItemEffect(!itemEffect)
  }
  
  return (
    <div onClick={toggleItemEffect}  className={`faq-item ${itemEffect ? 'expended' : ''}`}>
      <div className="faq-info-title">
        <h1>1. Как выбрать размер? </h1>
        <span style={{'transform': itemEffect ? "rotate(45deg)" : "rotate(0deg)"}}>+</span>
      </div>
      <div className="faq-info">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex quam similique reprehenderit id minus! Fugit, vitae? Modi iusto iste id alias, reiciendis ex ad magni neque minus consequatur esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla repellendus at. Totam voluptate a animi ratione doloremque, aut illo dolorem deleniti possimus blanditiis architecto mollitia dignissimos quia iste. Temporibus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex quam similique reprehenderit id minus! Fugit, vitae? Modi iusto iste id alias, reiciendis ex ad magni neque minus consequatur esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla repellendus at. Totam voluptate a animi ratione doloremque, aut illo dolorem deleniti possimus blanditiis architecto mollitia dignissimos quia iste. Temporibus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex quam similique reprehenderit id minus! Fugit, vitae? Modi iusto iste id alias, reiciendis ex ad magni neque minus consequatur esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla repellendus at. Totam voluptate a animi ratione doloremque, aut illo dolorem deleniti possimus blanditiis architecto mollitia dignissimos quia iste. Temporibus.</h1>
      </div>
    </div>
  )
}

export default FaqItem