import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

function Home() {
  const navigate = useNavigate()

  function goToGame() {
    navigate('/game')
  }

  function goTologin() {
    navigate('/login')
  }

  return (
    <>
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>

        <button onClick={goTologin} >Tela de Login</button>
        <button onClick={goToGame} >Tela de Games</button>
      </div>
    </>
  )
}

export default Home
