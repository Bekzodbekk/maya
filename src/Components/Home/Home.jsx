import React from 'react'
import "./home.scss"
import Navbar from '../navbar/Navbar'
import { Assets } from '../Assets/Assets'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Navbar />
            <div className="home-title">
                <img src={Assets.icon_home} alt="icon" />
                <h1>Бельё для беременных и кормящих</h1>
            </div>
        </div>
    </div>
  )
}

export default Home