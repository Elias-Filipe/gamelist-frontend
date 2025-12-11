import './style.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'


function AllGames () {
    const navigate = useNavigate();
    const [games, setgames] = useState([]);


    const getGames = async () => {
        try {
            const response = await api.get(`/games`)
            setgames(response.data)
        } catch (error) {
            console.log("Não foi possivel carregar os jogos", error)
        }
    }

    const handleGameClick = (id) => {
        navigate(`/game/${id}`);
    }

    useEffect(() => {
        getGames();
    }, []);


    return (
        <>
            <h1>Todos os Games</h1>
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
} export default AllGames