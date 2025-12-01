import './style.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/button'
import Form from '../../components/Forms/form'

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

                <div>
                    <Form
                        label="Nome"
                        id="username"
                        type="text"
                    />
                    <Form
                        label="Email"
                        id="email"
                        type="email"
                    />
                    <Form
                        label="Senha"
                        id="password"
                        type="password"
                    />

                </div>

                <Button onClick={handleRegister}>Cadastrar</Button>

            </div>
        </>
    )

}

export default Register


