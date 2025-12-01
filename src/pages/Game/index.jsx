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
      <div className="">

        <h1>Game Page</h1>

        <div className='game-container'>

          <div className='game-content'>
          <img src="um video ou talvez outra coisa"></img>

            <h2>Resenha do game</h2>
            <textarea name="game-review" id="game-review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
            <audio src="">Musica do joguinho</audio>

          </div>

          <div className='game-rating'>
            <div>
              <textarea name="" id="" cols="30"></textarea>
            </div>
          </div>

        </div>
        <button onClick={goToHome} >Tela Inicial</button>
      </div>
    </>
  )
}

export default Game
