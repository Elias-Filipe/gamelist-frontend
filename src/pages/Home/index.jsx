import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';

import './style.css'
import Carousel from '../../components/Carousel';

function Home() {

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);


  const getCategories = async () => {
    try {
      const response = await api.get("/lists")
      setCategories(response.data)
      console.log("listas de categorias: ", response.data)
    } catch (error) {
      console.error("Erro ao buscar por lista de categorias", error)
    }
  }

  const getGames = async () => {
    try {
      const response = await api.get(`/games`)
      setGames(response.data)
      console.log("Lista de games: ", response.data)
    } catch (error) {
      console.log("Erro ao buscar por lista de games", error)
    }
  }

  const handleCategoryClick = (id) => {
    console.log("Categoria clicada:", id);
    navigate(`/list/${id}`);
  }

  const handleGameClick = (id) => {
    console.log("Game clicado:", id);
    navigate(`/game/${id}`);
  }

  useEffect(() => {
    getCategories()
    getGames()
  }, []);

  return (
    <>
      <div className="home-top">
        <h1>Welcome to the Home Page</h1>

        <Carousel />

      </div>

      <div className="home-down">

        <div className='container'>
          <h2>Categorias</h2>
          <div className="home-categories">

            {categories.map((category) =>
              <div key={category.id} className='category-item' onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </div>
            )}

          </div>
        </div>

        <div className='container'>
          <h2>Favoritos (Em breve)</h2>
          < div className='home-favorites'>

            {games.map((game) =>
              <div key={game.id} className='favorite-item' onClick={() => handleGameClick(game.id)}>
                {game.title}
              </div>
            )}

          </div>
        </div>
      </div >

    </>
  )
}

export default Home
