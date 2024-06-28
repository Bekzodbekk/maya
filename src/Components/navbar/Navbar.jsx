import React from 'react'
import "./navbar.scss"
import { Assets } from '../Assets/Assets'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-icon">
            <img src={Assets.icon_navbar} alt="icon" />
        </div>
        <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Доставка</a></li>
        </ul>
        <div className="nav-callcenter">
            <img src={Assets.call_icon} alt="call-icon" />
            <h1>8 (800) 233-44-55</h1>
        </div>
    </nav>
  )
}

export default Navbar