import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="left-menu">
          <p>ИНН 458475835656</p>
          <p>ОГРН 34894589345</p>
        </div>
        <div className="center">
          <p>Maya store (C) 2021 Все права защищены</p>
        </div>
        <div className="right-menu">
          <p>8 (800) 233-44-55</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  )
}

export default Footer