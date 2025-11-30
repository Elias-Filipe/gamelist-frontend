import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Entrar</button>
    </>
  )
}

export default Login
