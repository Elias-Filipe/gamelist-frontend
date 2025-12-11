import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import './style.css'
import Comments from '../../components/Comments'

function Game() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [game, setGame] = useState({})

  const getGame = async () => {
    try {
      const response = await api.get(`/games/${id}`)
      setGame(response.data)

    } catch (error) {
      console.error('Erro ao buscar dados do jogo:', error);
    }
  }

  const handlePosting = () => {

  }

  useEffect(() => {
    getGame()
  }, [id])

  function goToHome() {
    navigate('/')
  }

  return (
    <>
      <div className="game-container">

        <h1>{game.title}</h1>

        <div className='content-container'>

          <div className='game-content'>

            <img className='img-container' src={game.imgUrl} alt={game.title}></img>
            <h3>Plataformas: {game.platforms}</h3>

            <div className='game-review'>
              <h2>Resenha do game</h2>
              <p name="game-review" id="game-review">{game.longDescription}</p>
            </div>

          </div>

          <div className='game-rating'>
            {/* <form onSubmit={handlePosting} className=''>
              <Input
                label="Título"
                id="title"
                type="text"
                value={title}
                onChange={(e) => (e.target.value)}
              />
              <Input
                label="Conteúdo"
                id="content"
                type="text"
                value={content}
                onChange={(e) => (e.target.value)}
              />
              <button type="Submit">Postar</button>
            </form> */}

            <Comments  gameId={id}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Game
