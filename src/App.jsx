import Home from './pages/Home'
import Game from './pages/Game'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from './pages/Favorites';
import AdminPage from './pages/AdminPage';
import Category from './pages/Category';
import AllGames from './pages/AllGames';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/allgames" element={<AllGames />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;