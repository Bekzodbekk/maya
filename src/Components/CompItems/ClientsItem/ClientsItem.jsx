import React from 'react'
import "./clientsItem.scss"
import { Assets } from '../../Assets/Assets'

const ClientsItem = ({image}) => {
  return (
    <div className='client-item'>
      <img src={image} alt="client-image" />
    </div>
  )
}

export default ClientsItem