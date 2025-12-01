import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'

import './style.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por enquanto, vamos apenas navegar para a página Home
    navigate('/')
  }

  return (
    <>

      <div className="container">

        <h2>Seja muito bem vindo(a) ao Gamelist!</h2>

        <form className="form">
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />

          <Button onClick={handleLogin}>Entrar</Button>
        </form>

        <a href="/register">Não tem uma conta? Cadastre-se</a>


      </div>

    </>
  )
}

export default Login
