import './style.css';
import Button from '../../components/Buttons/button';
import CustomLink from '../CustomLinks/customLink';
import Input from '../../components/Inputs/input';
import api from '../../services/api';

import { useRef, useState } from 'react';

import { useNavigate } from "react-router-dom";

export default function Header() {
  const [game, setGame] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/games/title/${game}`)
      navigate(`/game/${response.data.id}`);
    } catch (error) {
      console.log("Erro ao buscar seu jogo", erro)
      alert("Game não encontrado!")
    }
  }

  return (
    <header className="header">
      <h1>Gamelist</h1>

      <nav className="nav-header">

        <div className="links-header">
          <CustomLink to="/home" variant="light">Home</CustomLink>
          {/* <CustomLink to="/game" variant="Light">Games</CustomLink> */}
          <CustomLink to="/login" variant="light">Login</CustomLink>
          {/* <CustomLink to="/register" variant="light">Register</CustomLink> */}
          <CustomLink to="/favorites" variant="light">Favoritos</CustomLink>
          <CustomLink to="/allgames" variant="light">Todos os games</CustomLink>

        </div>

        <form onSubmit={handleSearchClick} className="search-game">
          <Input
            id="search"
            type="text"
            placeholder="Buscar jogos..."
            value={game}
            onChange={(e) => setGame(e.target.value)}
          />
          <Button type="Submit">Buscar</Button>
        </form>

      </nav>
    </header>
  );
}