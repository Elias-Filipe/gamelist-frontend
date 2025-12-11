import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'
import CustomLink from '../../components/CustomLinks/customLink'
import Input from '../../components/Inputs/input'
import api from '../../services/api'

import './style.css'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await api.post('/auth/login', {
        name: username,
        password: password
      })

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userNameLogado', username)

      navigate('/home')
    } catch (error) {
      alert('Falha no login. Por favor, verifique suas credenciais.')
      console.error('Erro ao fazer login:', error);
    }
  }

  return (
    <>
      <div className="container">
        <h2>Seja muito bem vindo(a) ao Gamelist!</h2>
        <form onSubmit={handleLogin} className="form-login">
          <Input
            label="Nome"
            id="username"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <CustomLink to="/register" variant="muted">Não tem uma conta? Cadastre-se</CustomLink>
      </div>
    </>
  )
}

export default Login
