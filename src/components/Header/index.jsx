import { Link } from "react-router-dom";
import './style.css';
import Button from '../../components/Buttons/button'
import CustomLink from '../CustomLinks/customLink'
import Form from "../Forms/form";

export default function Header() {


  return (
    <header className="header">
      <h1>Gamelist</h1>

      <nav className="nav-header">

        <div className="links-header">
          <CustomLink to="/" variant="light">Home</CustomLink>
          <CustomLink to="/game" variant="Light">Games</CustomLink>
          <CustomLink to="/login" variant="light">Login</CustomLink>
          <CustomLink to="/register" variant="light">Register</CustomLink>
          <CustomLink to="/" variant="light">Favoritos</CustomLink>
        </div>

        <div className="search-game">
          <Form
            id="search"
            type="text"
            placeholder="Buscar jogos..."
          />
          <Button>Buscar</Button>
        </div>

      </nav>
    </header>
  );
}