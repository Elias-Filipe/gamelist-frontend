import { use, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Buttons/button'
import api from '../../services/api'

import './style.css'

function Game() {
  const navigate = useNavigate()

  const { id } = useParams()

  const [game, setGame] = useState([])
  const [posts, setPosts] = useState([])

  const getGame = async () => {
    try {
      const response = await api.get('/games/1')
      setGame(response.data)
      console.log('Dados do jogo:', response.data);

    } catch (error) {
      console.error('Erro ao buscar dados do jogo:', error);
    }
  }

  const getPost = async () => {
    try {
      const response = await api.get('/posts/game/1')
      setPosts(response.data)
      console.log('Dados dos posts:', response.data);

    } catch (error) {
      console.error('Erro ao buscar dados dos posts:', error);
    }
  }

  useEffect(() => {
    getGame()
    getPost()
  }, [id])




  function goToHome() {
    navigate('/')
  }

  return (
    <>
      <div className="">

        <h1>{game.title}</h1>

        <div className='game-container'>

          <div className='game-content'>

            <img src={game.imgUrl}>{game.name}</img>

            <h3>Plataformas: {game.platforms}</h3>

            <h2>Resenha do game</h2>
            <p name="game-review" id="game-review">{game.longDescription}</p>


          </div>

          <div className='game-rating'>
            <div className='game-comments'>
              {posts.map((post) => (
                <div key={post.id}>
                  
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <Button onClick={goToHome} >Tela Inicial</Button>
      </div>
    </>
  )
}

export default Game
