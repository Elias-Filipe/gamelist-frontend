import './style.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api'


function Category() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [categories, setCategories] = useState("");
    const [games, setgames] = useState([]);

    const getCategories = async () => {
        try {
            const response = await api.get(`/lists/${id}`)
            setCategories(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("Não foi possivel carregar as categorias", error)
        }
    }

    const getGames = async () => {
        try {
            const response = await api.get(`/lists/${id}/games`)
            setgames(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("Não foi possivel carregar os jogos", error)
        }
    }

    const handleGameClick = (id) => {
        navigate(`/game/${id}`);
    }

    useEffect(() => {
        getCategories();
        getGames();
    }, []);


    return (
        <>
            <h1>Games da categoria: {categories.name}</h1>
            <div className='games-grid'>
                {games.map((game) => (
                    <div className='game-bylist-container' key={game.id} onClick={() => handleGameClick(game.id)} >
                        <img className='game-image' src={game.imgUrl} alt={game.name} />
                        <div className='game-content'>
                            <h2 className='game-title'>{game.title}</h2>
                            <p className='game-description'>{game.shortDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
} export default Category