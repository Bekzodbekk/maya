import React from 'react'
import "./social.scss"
import { Assets } from '../Assets/Assets'
import Button from '../UX/Button/Button'

const Social = () => {
  return (
    <div className='social'>
      <div className="container">
        <div className="social-title">
          <h1>Следите за нашими новинками</h1>
        </div>
        <ul className="social-menu">
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Оплата</a></li>
        </ul>
        <div className="social-icons">
          <img src={Assets.instagram} alt="instagram" />
          <img src={Assets.youtube} alt="youtube" />
          <img src={Assets.telegram} alt="telegram" />
        </div>
        <div className="email-btns">
          <p className="title">Оставьте адрес своей электронной почты</p>
          <div className="btns">
            <Button>Ivanovivan@mail.ru</Button>
            <Button>Получать новости на email</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social