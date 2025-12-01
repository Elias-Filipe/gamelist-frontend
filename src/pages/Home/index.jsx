import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'

import './style.css'

function Home() {
  const navigate = useNavigate()


  return (
    <>
      <div className="home-top">
        <h1>Welcome to the Home Page</h1>

      </div>

      <div className="home-down">

        <div className='container'>
          <div className="home-categories">
            <h2>aqui estarão as categorias</h2>

          </div>
        </div>

        <div className='container'>
          <div className='home-favorites'>
            <h2>aqui estarão os favoritos</h2>

          </div>
        </div>
      </div>

    </>
  )
}

export default Home
