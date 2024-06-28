import React from 'react'
import "./clients.scss"
import ClientsItem from '../CompItems/ClientsItem/ClientsItem'
import { Assets } from '../Assets/Assets'
import Button from '../UX/Button/Button'

const Clients = () => {
  return (
    <div className='client'>
      <div className="container">
        <div className="client-title">
          <h1>Отзывы наших счастливых покупателей</h1>
        </div>
        <div className="client-items">
          <ClientsItem image={Assets.clients1}/>
          <ClientsItem image={Assets.clients2}/>
          <ClientsItem image={Assets.clients3}/>
          <ClientsItem image={Assets.clients4}/>
          <ClientsItem image={Assets.clients5}/>
          <ClientsItem image={Assets.clients6}/>
          <ClientsItem image={Assets.clients7}/>
          <ClientsItem image={Assets.clients8}/> 
        </div>
        <Button>Посмотреть еще больше  отзывов</Button>
      </div>
    </div>
  )
}

export default Clients