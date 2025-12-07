import './style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Buttons/button'
import Input from '../../components/Inputs/input'

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (event) => {
        event.preventDefault()

        try {
            await api.post('/auth/register', {
                name: username,
                email: email,
                password: password
            })
            navigate('/login')
        } catch (error) {
            alert('Falha no cadastro. Por favor, tente novamente.')
            console.error('Erro ao fazer cadastro:', error);
        }

    }

    return (
        <>
            <div className="container">

                <h2>Cadastre-se</h2>

                <form onSubmit={handleRegister} className="form-register">
                    <Input
                        label="Nome"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Senha"
                        id="password"
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Cadastrar</Button>
                </form>

            </div>
        </>
    )

}

export default Register


