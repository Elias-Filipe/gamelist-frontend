import { Link } from "react-router-dom";
import './style.css';
import Button from '../../components/Buttons/button'

export default function Header() {


  return (
    <header className="header">
      <h1>Gamelist</h1>

      <nav className="nav-header">
        <Link to="/">Home</Link>
        <Link to="/game">Games</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Favoritos</Link>

        <input type="text" id="campoBusca" placeholder="Buscar jogos..." aria-label="Busca de jogos" />
        <Button >Buscar</Button>

      </nav>
    </header>
  );
}