import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  function fazerLogin(event) {
    event.preventDefault()

    const usuario = JSON.parse(localStorage.getItem("usuarioCadastrado"))

    if (!usuario) {
      setMensagem("Nenhuma conta cadastrada.")
      return
    }

    if (usuario.email === email && usuario.senha === senha) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
      navigate("/cadastro")
    } else {
      setMensagem("E-mail ou senha inválidos.")
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Bem Vindo!</h1>
        <p>Para continuar, digite seu e-mail e senha</p>

        <form className="auth-form" onSubmit={fazerLogin}>
          <label>
            e-mail:
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </label>

          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>

        {mensagem && <p className="auth-message">{mensagem}</p>}

        <p className="auth-link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </section>
  )
}

export default Login