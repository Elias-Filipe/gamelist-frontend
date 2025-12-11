import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api';

import './style.css'
import Carousel from '../../components/Carousel';
import HomeLists from '../../components/HomeLists';

function Home() {

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [games, setGames] = useState([]);


  const getCategories = async () => {
    try {
      const response = await api.get("/lists")
      setCategories(response.data)
    } catch (error) {
      console.error("Erro ao buscar por lista de categorias", error)
    }
  }

  const getGames = async () => {
    try {
      const response = await api.get(`/games`)
      setGames(response.data)
    } catch (error) {
      console.log("Erro ao buscar por lista de games", error)
    }
  }



  useEffect(() => {
    getCategories()
    getGames()
  }, []);

  return (
    <>
      <div className="home-top">
        <h1>Escolha seu Game!</h1>

        <Carousel />

      </div>

      <div className="home-down">

        <div className='container'>
          <h2>Categorias</h2>
          <div className="home-list-container">

          <HomeLists type = "categories" />

          </div>
        </div>

        <div className='container'>
          <h2>Favoritos (Em breve)</h2>
          < div className='homelist-container'>

            <HomeLists type = "games" />

          </div>
        </div>
      </div >

    </>
  )
}

export default Home
