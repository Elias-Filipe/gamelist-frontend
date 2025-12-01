import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'
import Form from '../../components/Forms/form'
import CustomLink from '../../components/CustomLinks/customLink'

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

        <div>
          <Form
            label="Nome"
            id="username"
            type="text"
          />
          <Form
            label="Senha"
            id="password"
            type="password"
          />
          <Button onClick={handleLogin}>Entrar</Button>
        </div>

        <CustomLink to="/register" variant="muted">Não tem uma conta? Cadastre-se</CustomLink>

        <a href="/register">Não tem uma conta? Cadastre-se</a>


      </div>

    </>
  )
}

export default Login
