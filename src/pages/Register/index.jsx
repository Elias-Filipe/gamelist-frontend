import './style.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'

function Register() {

  const navigate = useNavigate()

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por enquanto, vamos apenas navegar para a página Home
    navigate('/')
  }

    return (
        <>
            <div className="container">

                <h2>Cadastre-se</h2>

                <form className="form">
                    <label htmlFor="username">Usuário:</label>
                    <input type="text" placeholder='Seu nome' id="username" name="username" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='Seu e-mail' id="email" name="email" />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder='Sua nova senha' id="password" name="password" /> 
                </form>

                <Button onClick={handleRegister}>Cadastrar</Button>

            </div>
        </>
    )

}

export default Register


