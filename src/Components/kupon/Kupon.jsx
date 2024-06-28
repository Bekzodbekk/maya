import React from 'react'
import "./kupon.scss"
import Button from '../UX/Button/Button'

const Kupon = () => {
  return (
    <div className='kupon'>
      <div className="kupon-title">
        <h1><span>Получи купон</span> со скидкой <span>500 рублей</span> на первый заказ</h1>
        <Button>получить купон</Button>
      </div>
    </div>
  )
}

export default Kupon