import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

function Game() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <>
      <div className="game-container">
        <h1>Welcome to the Game Page</h1>

        <button onClick={goToHome} >Tela Inicial</button>
      </div>
    </>
  )
}

export default Game
